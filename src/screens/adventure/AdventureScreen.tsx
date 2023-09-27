import React, { useContext, useEffect, useRef, useState } from 'react';
import MapView from 'react-native-maps';

import AdventureContext from '../../contexts/Adventure/AdventureContext';
import { Map, MapControls } from './components/Components';
import { CustomLoading } from '../../shared/components/CustomLoading';
import { useI18n, useLocation, useToast } from '../../shared/hooks';


export const AdventureScreen = () => {
    const { t } = useI18n();
    // const { adventureState, getAdventures } = useContext(AdventureContext);
    // const { adventures } = adventureState;

    const { hasLocation,
        initialPosition,
        userLocation,
        routeLines,
        getCurrentLocation,
        followUserLocation,
        stopFollowUserLocation } = useLocation();

    const { showToast } = useToast();

    const [venturing, setVenturing] = useState<boolean>(false);
    const [showPolyline, setShowPolyline] = useState<boolean>(true);
    const [following, setFollowing] = useState<boolean>(false);

    const mapViewRef = useRef<MapView>();

    useEffect(() => {
        if (venturing)
            followUserLocation();

        return () => { stopFollowUserLocation() }
    }, [venturing])

    useEffect(() => {
        if (!following) return;

        const { latitude, longitude } = userLocation;
        animateMapCamera(latitude, longitude);
    }, [userLocation])

    const centerPosition = async () => {
        const { latitude, longitude } = await getCurrentLocation();
        showToast(t('stopCreated'));
        animateMapCamera(latitude, longitude);
    }

    const animateMapCamera = (latitude: number, longitude: number) => {
        mapViewRef.current?.animateCamera({
            center: { latitude, longitude }
        });
    }

    if (!hasLocation) {
        return <CustomLoading />
    }

    return (
        <>
            <Map
                mapViewRef={mapViewRef}
                setFollowing={setFollowing}
                initialPosition={initialPosition}
                showPolyline={showPolyline}
                routeLines={routeLines}
            />
            <MapControls
                following={following}
                setFollowing={setFollowing}
                showPolyline={showPolyline}
                setShowPolyline={setShowPolyline}
                centerPosition={centerPosition}
                venturing={venturing}
                setVenturing={setVenturing}
            />
        </>
    )
};