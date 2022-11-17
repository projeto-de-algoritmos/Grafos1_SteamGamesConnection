import React from 'react';
import './index.css';

const HomePage = () => {
    return (
        <div className="container pt-3">
            <div className="row center">
                <div className="col-3 text-center homepage-sidebar">
                    <div className="sidebar-tittle">
                        <h2>Resultados da pesquisa <p>67<span>Encontrados</span></p></h2>
                    </div>
                    <div className="sidebar-results">
                        Resultados da busca
                    </div>
                </div>
                <div className="col-8 text-center homepage-content">
                    Grafo
                </div>
            </div>
        </div>
    )
}

export default HomePage;