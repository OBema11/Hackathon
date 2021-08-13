import React from 'react';
import { Link } from 'react-router-dom';
import './Images.css';

const Slide = () => {
    return (
        <>
            <div className="slide">
                <div className="section-fluid-main">
                    <div className="section-row">
                        <div className="section-col">
                            <div className="section">
                                <div className="section-in">
                                    <Link to='/list?_limit=6&type=Серьги'>
                                    <img src="https://cdn.shopify.com/s/files/1/0023/9193/3039/products/KnPobsOkRnOQ7FtK1BaHmg_thumb_31_800x.jpg?v=1612750847"
                                        alt="" />
                                        </Link>
                                </div>
                            </div>
                        </div>
                        <div className="hover-text">
                            <h2>Серьги</h2>
                        </div>
                        <div className="section-col">
                            <div className="section">
                                <div className="section-in">
                                    <Link to='list?_limit=6&type=Подвеска'>
                                    <img src="https://cdn.shopify.com/s/files/1/0023/9193/3039/products/45851_copy_800x.jpg?v=1602753526" alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="hover-text">
                            <h2>Подвески</h2>
                        </div>
                        <div className="section-col">
                            <div className="section">
                                <div className="section-in">
                                    <Link to='list?_limit=6&type=Чокер'>
                                    <img src="https://cdn.shopify.com/s/files/1/0023/9193/3039/products/5Jw10UdXSsGGaCmradIXTw_thumb_97_c203a0e4-043b-4e65-b777-918a664b8623_800x.jpg?v=1627324572"
                                        alt="" />
                                        </Link>
                                </div>
                            </div>
                        </div>
                        <div className="hover-text">
                            <h2>Чокеры</h2>
                        </div>
                        <div className="section-col">
                            <div className="section">
                                <div className="section-in">
                                    <Link to='list?_limit=6&type=Браслет'>
                                    <img src="https://cdn.shopify.com/s/files/1/0023/9193/3039/products/45555_copy_c40e1834-d7a9-495c-825d-7f4fd767143e_800x.jpg?v=1612753887"
                                        alt="" />
                                        </Link>
                                </div>
                            </div>
                        </div>
                        <div className="hover-text">
                            <h2>Браслеты</h2>
                        </div>
                        <div className="section-col">
                            <div className="section">
                                <div className="section-in">
                                    <Link to='list?_limit=6&type=Кольцо'>
                                    <img
                                        src="https://cdn.shopify.com/s/files/1/0023/9193/3039/products/9JD4iElnSeWr4CjRqH_02g_thumb_16_800x.jpg?v=1612740085"
                                        alt="" />
                                        </Link>
                                </div>
                            </div>
                        </div>
                        <div className="hover-text">
                            <h2>Кольца</h2>
                        </div>
                        <div className="section-col">
                            <div className="section">
                                <div className="section-in">
                                    <Link to='list?_limit=6&type=Кафф'>
                                    <img src="https://cdn.shopify.com/s/files/1/0023/9193/3039/products/BZJMIzVGRqaJmhO1u0MVZQ_thumb_a_900x.jpg?v=1627324713"
                                        alt="" />
                                        </Link>
                                </div>
                            </div>
                        </div>
                        <div className="hover-text">
                            <h2>Каффы</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Slide;