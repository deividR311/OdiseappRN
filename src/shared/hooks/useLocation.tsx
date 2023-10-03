import { useEffect, useRef, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';

export interface Location {
    latitude: number;
    longitude: number;
}

export const useLocation = () => {
    const [hasLocation, setHasLocation] = useState(false);
    const [initialPosition, setInitialPosition] = useState<Location>({ latitude: 0, longitude: 0 });
    const [userLocation, setUserLocation] = useState<Location>({ latitude: 0, longitude: 0 });
    const [routeLines, setRouteLines] = useState<Location[]>([]);

    const watchId = useRef<number>();
    const isComponentMounted = useRef<boolean>(true);

    useEffect(() => {
        isComponentMounted.current = true;

        return () => {
            isComponentMounted.current = false;
        }
    }, [])


    useEffect(() => {
        getCurrentLocation().then(
            location => {
                if (!isComponentMounted.current) return;

                setInitialPosition(location);
                setRouteLines(routes => [...routes, location]);
                setHasLocation(true);
            }
        ).catch(err => {
            console.log(err);
        })
    }, [])

    const getCurrentLocation = (): Promise<Location> => {
        return new Promise((resolve, reject) => {
            Geolocation.getCurrentPosition(
                ({ coords }) => {
                    resolve({
                        latitude: coords.latitude,
                        longitude: coords.longitude
                    });
                },
                (err) => reject(console.log({ err })), { enableHighAccuracy: true, timeout: 10000, maximumAge: 2000 }
            );
        })
    }

    const followUserLocation = () => {
        watchId.current = Geolocation.watchPosition(
            ({ coords }) => {
                if (!isComponentMounted.current) return;

                const location: Location = {
                    latitude: coords.latitude,
                    longitude: coords.longitude
                }

                setUserLocation(location);
                setRouteLines(routes => [...routes, location]);
            },
            (err) => console.log(err), { enableHighAccuracy: true, distanceFilter: 10 }
        );
    }

    const stopFollowUserLocation = () => {
        if (!watchId.current) return;
        Geolocation.clearWatch(watchId.current);
    }

    return { hasLocation, initialPosition, userLocation, routeLines, getCurrentLocation, followUserLocation, stopFollowUserLocation }
}
