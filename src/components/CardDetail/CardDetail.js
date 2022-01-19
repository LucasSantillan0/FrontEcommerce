
const CardDetail = () => {
    return (
        <div className={styles.card_wrapper}>
            <div className="card">
                {/* card left */}
                <div className="product_imgs">

                    <div className={styles.img_display}>
                        <div className={styles.img_showcase}>
                            <img src="https://m.media-amazon.com/images/I/71ee+5V4ZRL._AC_SL1500_.jpg" alt="" />
                            <img src="https://media.wired.com/photos/616e0c76a53804056cba5f93/master/w_2400,h_1800,c_limit/Gear-Google-Pixel-6-yellow.jpg" alt="" />
                            <img src="https://www.droid-life.com/wp-content/uploads/2021/08/Google-Pixel-6-3-980x653.jpg" alt="" />
                            <img src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/157037-phones-news-feature-google-pixel-6-pro-release-date-rumours-features-and-specs-image1-fwbume6isn.jpg" alt="" />
                        </div>
                    </div>

                    <div className={styles.img_select}>
                        <div className={styles.img_item}>
                            <a href="#" data-id="1">
                                <img src="https://media.wired.com/photos/616e0c76a53804056cba5f93/master/w_2400,h_1800,c_limit/Gear-Google-Pixel-6-yellow.jpg" alt="" />
                            </a>
                        </div>
                        <div className={styles.img_item}>
                            <a href="#" data-id="1">
                                <img src="https://media.wired.com/photos/616e0c76a53804056cba5f93/master/w_2400,h_1800,c_limit/Gear-Google-Pixel-6-yellow.jpg" alt="" />
                            </a>
                        </div>
                        <div className={styles.img_item}>
                            <a href="#" data-id="1">
                                <img src="https://media.wired.com/photos/616e0c76a53804056cba5f93/master/w_2400,h_1800,c_limit/Gear-Google-Pixel-6-yellow.jpg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* card right */}
                <div className="product-content">
                    <h2 className="product-title">Google Pixel 6 Pro</h2>
                    <div className="product-price">
                        <p><span>$900.00</span></p>
                    </div>

                    <div className="product-detail">
                        <h3>Details</h3>
                        <ul>
                            <li>Detail</li>
                            <li>Detail</li>
                            <li>Detail</li>
                            <li>Detail</li>
                            <li>Detail</li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="purchase-info">
                <div className="card-purchase">
                    <div className='purchase-content'>
                        <p><span>Available</span></p>
                    </div>

                    <div className="purchase-button">
                        <div className="purchase-quantity">
                            <p>1</p>
                            <button>+</button>
                            <button>-</button>
                            <p><span>(6)</span> available</p>
                        </div>

                        <button>Add to Cart</button>
                        <button>Buy now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetail
