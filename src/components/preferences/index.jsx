import React, { useEffect, useState } from 'react';
import ListPreferences from './list'
const Index = (props) => {
    const {onGetPreference} = props
    const [preference, setPreference] = useState('');

    const getPreference = pref => {
        setPreference(pref)
    }

    useEffect(() => {
        onGetPreference(preference)
    }, [preference]);

    return (
        <div>
            <ListPreferences onGetPreference={getPreference}/>
        </div>
    );
}

export default Index;
