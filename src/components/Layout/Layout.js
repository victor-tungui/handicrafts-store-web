import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import NavigationBar from '../NavigationBar/NavigationBar';
import MainBody from '../MainBody/MainBody'

const layout = (props) => (
    <Auxiliary>
        <NavigationBar />
        <MainBody />
    </Auxiliary>
);

export default layout;