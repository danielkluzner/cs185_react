import React from 'react';
import Home from './Home';
import Text from './Text';
import Images from './Images';
import Videos from './Videos';
import Table from './Table';
import Email from './Email';

const Body = ({ activeTab }) => {
    return (
        <>
            {
                activeTab === 'Text' ? (<Text />) :
                activeTab === 'Images' ? (<Images />) :
                activeTab === 'Videos' ? (<Videos />) :
                activeTab === 'Table' ? (<Table />) :
                activeTab === 'Email' ? (<Email />) :
                (<Home />)
            }
        </>
    );
}

export default Body;