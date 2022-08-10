let store = {
    _state:
        {
            productPage: {
                product: [
                    {
                        product_id: 1,
                        prorduct_main_img: img_1111.jpg,
                        prorduct_imgs: {img_1121.jpg, img_1131.jpg, img_1141.jpg}
                        product_title: "Basic T-shirt",
                        description: "The T-Shirt sets you up with soft cotton jersey and a classic logo with camo on the chest."
                        rating: 4,
                        color:
                            {"Black",
                                "Blue",
                                "Gray",
                                "White"},
                        size:
                            {"L/14 US",
                                "M/12 US"},
                        details: "Standard fit for a relaxed, easy feel Fabric: 100% cotton Machine wash Imported Shown: Cactus Flower Style: CU8914-564"
                        price: 55,
                        discount: 45
                    }
                ]
            }
        },

    getState() {
        return this._state
    },
}