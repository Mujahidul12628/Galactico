import React, { useEffect } from 'react';

const DynamicTittle = (title) => {
    useEffect(() => {
        document.title = `${title} - Toys-Galactico`
    }, [title])
};

export default DynamicTittle;