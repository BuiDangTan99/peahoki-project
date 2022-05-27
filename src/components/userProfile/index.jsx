import React from 'react';

const Index = (props) => {
    const {userAuth} = props
    return (
        <div>
            <p>UserName: {userAuth.userName}</p>
            <p>Preference: {userAuth.preference}</p>
        </div>
    );
}

export default Index;
