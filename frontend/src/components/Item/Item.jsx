import React from 'react';
import './index.css';

const Item = ({ id, name }) => {

    return (
        <div className="item-container mt-2">
            <div className="row">
                <div className="col-8 centraliza">
                    {name}
                </div>
                <div className="col-4 centraliza">
                    {id}
                </div>
            </div>
        </div>
    )

}

export default Item;