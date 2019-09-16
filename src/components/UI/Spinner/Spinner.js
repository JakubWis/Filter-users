import React, { memo } from 'react';
import './Spinner.scss';

const Spinner = () => {
    return (
        <div className="loader">Loading...</div>
    ) 
}

export default memo(Spinner);