import React from 'react';
import styles from "./styles/ProductPage.module.css";


const ProductPage = () => {

    return (
        <div>
            <div>
                <div className={styles.lineDevider}></div>
                <div className={styles.breadcrums}>Breadcrums/ bread/ crums</div>
                <div className={styles.productPage}>
                    <div className={styles.photoBox}>
                        <img src={require("../images/Products/bigImg/img_1111.jpg")} alt="t-shirt"/>
                        <img src={require("../images/Products/bigImg/img_1121.jpg")} alt="t-shirt"/>
                        <img src={require("../images/Products/bigImg/img_1131.jpg")} alt="t-shirt"/>
                        <img src={require("../images/Products/bigImg/img_1141.jpg")} alt="t-shirt"/>
                    </div>

                    <div className={styles.productInfoBox}>
                        <div className={styles.discount}>-45%</div>
                        <div className={styles.title}>Title</div>
                        <div className={styles.description}>The T-Shirt sets you up with soft cotton jersey and a classic logo with camo on the chest.</div>
                        <div className={styles.newPrice}>$35</div>
                        <div className={styles.price}>$55</div>

                        <div className={styles.lineDeviderSmall}></div>

                        <div className={styles.productColorBox}>
                            <div className={styles.productColorText}>color:Black</div>
                            <div className={styles.productColorImg}>
                                <img src={require ("../images/Products/color/img1.png")} alt="color"/>
                                <img src={require ("../images/Products/color/img2.png")} alt="color"/>
                                <img src={require ("../images/Products/color/img3.png")} alt="color"/>
                                <img src={require ("../images/Products/color/img4.png")} alt="color"/>
                            </div>
                        </div>

                        <div className={styles.productSizeBox}>Choose size
                            <div className={styles.productSize}>L / 14 US</div>
                        </div>

                        <button className={styles.addBtn}>Add to chart</button>
                        <div className={styles.lineDeviderSmall}></div>
                        <div className={styles.detailsDropdown}>
                            <div>Details</div>
                        </div>
                        <div className={styles.shippingDropdown}>
                            <div>Shipping & Returns</div>
                        </div>
                    </div>
                </div>
                <div className={styles.lineDevider}></div>
            </div>

        </div>

    );
};

export default ProductPage;