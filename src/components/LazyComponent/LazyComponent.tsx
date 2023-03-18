import * as React from 'react';
import * as Styled from './LazyComponent.styled';

const LazyComponent = () => {
    console.log('Render')
    return <Styled.Wrapper><h1>Lazy</h1></Styled.Wrapper>;
};

export default LazyComponent;
