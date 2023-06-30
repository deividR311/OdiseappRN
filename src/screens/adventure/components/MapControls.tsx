import React from 'react';
import { CustomFab } from '../../../shared/components/sharedComponents';

interface Props {
    following       : boolean;
    setFollowing    : React.Dispatch<React.SetStateAction<boolean>>;
    showPolyline    : boolean;
    setShowPolyline : React.Dispatch<React.SetStateAction<boolean>>;
    centerPosition  : () => Promise<void>; 
}

export const MapControls = ({ following, setFollowing, showPolyline, setShowPolyline, centerPosition } : Props) => {
    return (
        <>
            <CustomFab
                iconName={(following) ? 'stop-outline' : 'play-outline'}
                onPress={() => console.log('this is to stop the route recording')}
                style={{ position: 'absolute', bottom: 200, right: 20 }}
            />
            <CustomFab
                iconName={(following) ? 'radio-button-off' : 'radio-button-on'}
                onPress={() => setFollowing( !following )}
                style={{ position: 'absolute', bottom: 140, right: 20 }}
            />
            <CustomFab
                iconName={(showPolyline) ? 'eye-off-outline' : 'eye-outline'}
                onPress={() => setShowPolyline( !showPolyline )}
                style={{ position: 'absolute', bottom: 80, right: 20 }}
            />
            <CustomFab
                iconName='locate-outline'
                onPress={ centerPosition }
                style={{ position: 'absolute', bottom: 20, right: 20 }}
            />
        </>
    )
};