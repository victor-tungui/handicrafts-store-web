import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import NavigationBar from '../NavigationBar/NavigationBar';
import Header from '../Header/Header';
import MainBody from '../MainBody/MainBody'

const layout = (props) => (
    <Auxiliary>
        <Header>
            <NavigationBar />    
        </Header>
        <MainBody />
    </Auxiliary>
);

export default layout;