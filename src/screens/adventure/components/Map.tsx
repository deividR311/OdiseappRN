import React, { MutableRefObject, Dispatch, SetStateAction } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { LocationInterface } from '../../../interfaces';

interface Props {
    mapViewRef: MutableRefObject<MapView | undefined>;
    setFollowing: Dispatch<SetStateAction<boolean>>;
    initialPosition: LocationInterface;
    showPolyline: boolean;
    routeLines: LocationInterface[];
}

export const Map = ({ mapViewRef, setFollowing, initialPosition, showPolyline, routeLines }: Props) => {
    return (
        <>
            <MapView
                ref={(el) => mapViewRef.current = el!}
                style={styles.map}
                showsUserLocation
                showsMyLocationButton={false}
                region={{
                    latitude: initialPosition.latitude,
                    longitude: initialPosition.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
                onTouchStart={() => setFollowing(false)}
            >
                {showPolyline &&
                    <Polyline
                        coordinates={routeLines}
                        strokeColor='black'
                        strokeWidth={3}
                    />
                }

                {/* <Marker
                    title='pin'
                    description='Im a pin'
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324
                    }}
                >
                </Marker> */}
            </MapView>
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        flex: 1
    },
});