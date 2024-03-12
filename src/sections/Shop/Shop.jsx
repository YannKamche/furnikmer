import React from 'react';
import './Shop.css';

const Shop = ({ shop }) => {
    return (
        <div className="big-shop" id="shop">
            <div className="shop-title">
                <h2 className='text-3xl'>
                    {shop.title1} <br/> {shop.title2}
                </h2>
                <p>
                    {shop.desc}
                </p>
            </div>
            <div className="shop-flex">
                {shop.images.map((row, rowIndex) => (
                    <div className="shop-one" key={rowIndex}>
                        {row.map((image, index) => (
                            <div className="image-one" key={index}>
                                <img src={image.img} alt={image.title}/>
                                <div className="overlay">
                                    <div className="txt">
                                        <h3>{image.title}</h3>
                                        <section>
                                            <span>{shop.span}</span> / Design
                                        </section>
                                        {index === (rowIndex === 0 ? 1 : 0) && (
                                            <div className="link">
                                                <a href="#">{shop.link} <i className="fas fa-long-arrow-alt-right"></i></a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
                {shop.image2.map((image, index) => (
                    <div className="shop-two" key={index}>
                        <img src={image.img} alt={image.title}/>
                        <div className="overlay">
                            <div className="txt">
                                <h3>{image.title}</h3>
                                <section>
                                    <span>{shop.span}</span> / Design
                                </section>
                                <div className="link">
                                    <a href="#">{shop.link} <i className="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shop;