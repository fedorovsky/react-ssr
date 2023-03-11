import * as React from 'react';

const LazyComponent = () => {
    console.log('Render')
    return <h1>Lazy</h1>;
};

export default LazyComponent;
