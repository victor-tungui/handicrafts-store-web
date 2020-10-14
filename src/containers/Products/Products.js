import React, { Component } from 'react';
import axiosInstance from '../../axios/axiosProducts';

class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: null
        };
    }

    componentDidMount() {
        axiosInstance.get('/Products.json')
        .then(data => console.log(data.data))
        .catch(error => console.log(error));
    }

    render() {
        return (
            <h1>Products Components</h1>
        );
    }

}

export default Products;