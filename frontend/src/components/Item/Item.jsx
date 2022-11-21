import React from 'react';
import './index.css';

const Item = ({ id, name, img }) => {

    return (
        <div className="item-container mt-2">
            <div className="row">
                <div className="col-8 centraliza">
                    {name}
                </div>
                <div className="col-4 centraliza">
                    <img src={img} alt="Imagem do jogo" />
                </div>
            </div>
        </div>
    )

}

export default Item;