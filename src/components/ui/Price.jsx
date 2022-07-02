import React from 'react';

const Price = ({ originalPrice, salePrice }) => {
    return (
        <span className="price">Price: {salePrice ? (<span className="yellow">${(salePrice).toLocaleString('en-US')}/-</span>) : (<span className="yellow">${(originalPrice).toLocaleString('en-US')}/-</span>)} </span>
    );
}

export default Price;
