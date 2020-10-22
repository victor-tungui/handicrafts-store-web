import React, { Component } from 'react';
import axiosInstance from '../../axios/axiosProducts';

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

    render() {
        let productsGrid = null;

        if (this.state.isLoading) {
            productsGrid = <span>Products Loading...</span>;
        } else {
            productsGrid = 
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Code</th>
                            <th scope="col">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map((product, index) => ( 
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.code}</td>
                            </tr>
                          ))
                        }
                    </tbody>
                </table>;
        }

        return (
            <div>
                {productsGrid}
            </div>
        );
    }

}

export default Products;