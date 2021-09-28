import { serverProducts } from "../data/Products";

export const getDetailById = (id) => {
    return serverProducts.find(detail => detail.id === id);
}