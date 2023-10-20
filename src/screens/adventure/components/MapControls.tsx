import React from 'react';
import { CustomFab, CustomButton, CustomIcon } from '../../../shared/components';

interface Props {
    following: boolean;
    setFollowing: React.Dispatch<React.SetStateAction<boolean>>;
    showPolyline: boolean;
    setShowPolyline: React.Dispatch<React.SetStateAction<boolean>>;
    centerPosition: () => Promise<void>;
    venturing: boolean;
    setVenturing: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MapControls = ({ following, setFollowing, showPolyline, setShowPolyline, centerPosition, venturing, setVenturing }: Props) => {
    return (
        <>
            {!venturing
                ?
                <CustomButton
                    title='Venture'
                    onPress={() => setVenturing(!venturing)}
                    style={{ position: 'absolute', right: 80, top: 300 }}
                />
                :
                <>
                    <CustomIcon
                        iconName="close-outline"
                        onPress={() => console.log('delete adventure')}
                        style={{ position: 'absolute', top: 20, right: 20 }}
                    />
                    <CustomFab
                        iconName="flag-outline"
                        onPress={() => console.log('this is to stop')}
                        style={{ position: 'absolute', bottom: 200, right: 20 }}
                    />
                    <CustomFab
                        iconName={(following) ? 'radio-button-off' : 'radio-button-on'}
                        onPress={() => setFollowing(!following)}
                        style={{ position: 'absolute', bottom: 140, right: 20 }}
                    />
                    <CustomFab
                        iconName={(showPolyline) ? 'eye-off-outline' : 'eye-outline'}
                        onPress={() => setShowPolyline(!showPolyline)}
                        style={{ position: 'absolute', bottom: 80, right: 20 }}
                    />
                    <CustomFab
                        iconName='locate-outline'
                        onPress={centerPosition}
                        style={{ position: 'absolute', bottom: 20, right: 20 }}
                    />
                </>
            }
        </>
    )
};