import { serverProducts } from "../data/Products"

export const getProductsByCat = (cat) => {
    return serverProducts.filter(product => product.cat === cat);
}