import React, { Component } from 'react';
import axiosInstance from '../../axios/axiosProducts';
import ProductGrid from '../../components/Products/ProductGrid'

class Products extends Component {

    state = {
        products: null,
        isLoading: true,
        error: null
    }

    componentDidMount() {
        axiosInstance.get('/Products.json')
        .then(response => {
                let productData = [];
                for(let key in response.data) {
                    productData.push({
                        id: key,
                        ...response.data[key]
                    });
                }
                this.setState({ products: productData});
                this.setState({ isLoading: false});
            }
        )
        .catch(errorResponse => { 
            this.setState({error: errorResponse});
            this.setState({isLoading: false});
        });
    }

    // Events
    editProductHandler = (e, id) => {
        console.log("Product Id", id);
    }

    deleteProductHandler = (e, id) => {
        let products = [...this.state.products];
        let index = products.findIndex((ele, index) => ele.id === id);
        products.splice(index, 1);

        console.log(products);
    }

    render() {
        let grid = null;

        if (this.state.isLoading) {
            grid = <span>Products Loading...</span>;
        } else if (this.state.products) {
            grid = <ProductGrid 
                        products={this.state.products} 
                        editEvent={this.editProductHandler} 
                        deleteEvent={this.deleteProductHandler}/>
        } else {
            grid = <span>Error loading products. Please try again</span>
        }

        return (
            <div>
                {grid}
            </div>
        );
    }

}

export default Products;