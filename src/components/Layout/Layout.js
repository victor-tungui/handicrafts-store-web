import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import NavigationBar from '../NavigationBar/NavigationBar';

const layout = (props) => (
    <Auxiliary>
        <NavigationBar />
        <main>
            {props.children}
        </main>
    </Auxiliary>
);

export default layout;