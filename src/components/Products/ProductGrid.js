import React from 'react';

const productGrid = (props) => {
    let products = props.products;
    return ( <table className="table">
                <thead className="thead-light">
                <tr>
                    <th scope="col">Code</th>
                    <th scope="col">Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) => ( 
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.code}</td>
                        <td>{product.status}</td>
                        <td>
                            <button type="button" 
                                className="btn btn-outline-primary btn-sm"
                                onClick={(e) => props.editEvent(e, product.id) }>Edit</button> 
                            <button type="button" className="btn btn-outline-primary btn-sm">Publish</button>
                            <button type="button" 
                                className="btn btn-outline-warning btn-sm"
                                onClick={(e) => props.deleteEvent(e, product.id)}>Delete</button>
                        </td>
                    </tr>
                    ))
                }
            </tbody>
        </table>
    );
};

export default productGrid;