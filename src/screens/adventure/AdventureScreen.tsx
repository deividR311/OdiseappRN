import React, { useEffect, useRef, useState } from 'react';
import MapView from 'react-native-maps';
import { useLocation } from '../../hooks/useLocation';
import { CustomLoading } from '../../shared/components/CustomLoading';
import { Map, MapControls } from './components/Components';


export const AdventureScreen = () => {

    const { hasLocation,
            initialPosition,
            userLocation,
            routeLines,
            getCurrentLocation,
            followUserLocation,
            stopFollowUserLocation } = useLocation();

    const [showPolyline, setShowPolyline] = useState<boolean>(true);
    const [following, setFollowing] = useState<boolean>(false);

    const mapViewRef = useRef<MapView>();

    useEffect(() => {
        followUserLocation();

        return () => { stopFollowUserLocation() }
    },[])

    useEffect(() => {
        if ( !following ) return;

        const { latitude, longitude } = userLocation;
        animateMapCamera( latitude, longitude );
    }, [ userLocation ])    

    const centerPosition = async () => {
        const { latitude, longitude } = await getCurrentLocation();

        animateMapCamera( latitude, longitude );
    }

    const animateMapCamera = ( latitude : number, longitude : number ) => {
        mapViewRef.current?.animateCamera({
            center: { latitude, longitude }
        });
    }
    
    if ( !hasLocation ) {
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
            />
        </>
    )
};