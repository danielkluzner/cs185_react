import React from 'react';

const Tab = ({ text, activeTab }) => {

    return (
        <>
            <div className={`tab ${activeTab === text ? 'active' : ''}`}>{text}</div>
        </>
    );
}

export default Tab;