import React from 'react';
import Tab from './Tab';

const tabs = ['Home', 'Text', 'Images', 'Videos', 'Table', 'Email'];

const TabList = ({ changeTab, activeTab }) => {

    return (
        <div className='nav' onClick={changeTab}>
            {tabs.map(tab =>
                <Tab key={tab} text={tab} activeTab={activeTab} />
            )}
        </div>
    );
}

export default TabList;