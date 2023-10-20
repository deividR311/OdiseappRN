import { useEffect, useRef, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { LocationInterface } from '../../interfaces';

export const useLocation = () => {
    const [hasLocation, setHasLocation] = useState(false);
    const [initialPosition, setInitialPosition] = useState<LocationInterface>({ latitude: 0, longitude: 0 });
    const [userLocation, setUserLocation] = useState<LocationInterface>({ latitude: 0, longitude: 0 });
    const [routeLines, setRouteLines] = useState<LocationInterface[]>([]);

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

    const getCurrentLocation = (): Promise<LocationInterface> => {
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

                const location: LocationInterface = {
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
