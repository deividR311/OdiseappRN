import React, { useContext, useEffect, useRef, useState } from 'react';
import MapView from 'react-native-maps';

import AdventureContext from '../../contexts/Adventure/AdventureContext';
import { Map, MapControls } from './components/Components';
import { CustomLoading } from '../../shared/components/CustomLoading';
import { useForm, useI18n, useLocation, useToast } from '../../shared/hooks';
import { Adventure } from '../../models';


export const AdventureScreen = () => {
    const { adventureState, createAdventure, getAdventures } = useContext(AdventureContext);
    const { adventureCreated } = adventureState;

    const { t } = useI18n();

    const { hasLocation,
        initialPosition,
        userLocation,
        routeLines,
        getCurrentLocation,
        followUserLocation,
        stopFollowUserLocation } = useLocation();

    const { showToast } = useToast();
    const { form, setForm } = useForm<Adventure>({
        'iduser': 1,
        'nameAdventure': 'SDFSD',
        'transports': null,
        'generalInfo': null,
        'citySource': '',
        'countrySource': '',
        'cityDestination': null,
        'countryDestination': null,
        'adventureSource': null,
        'adventureDestination': null,
        'distance': null,
        'totalCost': null,
        'price': null,
        'bestPhoto': null,
        'typeTravel': null,
        'durationDays': null,
        'isVisible': true,
        'baggage': null,
        'weather': null
    });

    const [venturing, setVenturing] = useState<boolean>(false);
    const [showPolyline, setShowPolyline] = useState<boolean>(true);
    const [following, setFollowing] = useState<boolean>(false);

    const mapViewRef = useRef<MapView>();

    useEffect(() => {
        if (venturing) {
            fillForm();
            followUserLocation();
        }


        return () => { stopFollowUserLocation() }
    }, [venturing])

    useEffect(() => {
        getAdventures();
        if (venturing)
            createAdventure(form); // or update at the adventure final
    }, [form])

    console.log(adventureState);

    useEffect(() => {
        if (!following) return;

        const { latitude, longitude } = userLocation;
        animateMapCamera(latitude, longitude);
    }, [userLocation])

    const getCurrentPosition = async () => {
        const { latitude, longitude } = await getCurrentLocation();
        return { latitude, longitude };
    }

    const fillForm = async () => {
        const { latitude, longitude } = await getCurrentPosition();
        console.log(latitude, longitude);
        setForm({
            ...form,
            generalInfo: 'sddhaksd',
            citySource: `${latitude},${longitude}`,
            countrySource: `${latitude},${longitude}`,
            adventureSource: `${latitude},${longitude}`
        })
    }

    const centerPosition = async () => {
        const { latitude, longitude } = await getCurrentPosition();
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