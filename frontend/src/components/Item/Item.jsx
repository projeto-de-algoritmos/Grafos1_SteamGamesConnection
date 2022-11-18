import React from 'react';
import './index.css';

const Item = () => {

    return (
        <div className="item-container centraliza-vertical">
            <div className="row">
                <div className="col-8 centraliza">
                    Nome do Jogo
                </div>
                <div className="col-4 centraliza">
                    Imagem do jogo
                </div>
            </div>
        </div>
    )

}

export default Item;