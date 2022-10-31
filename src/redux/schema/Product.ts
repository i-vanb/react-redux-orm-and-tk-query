import {Model, attr, fk, many, ModelType, createSelector} from "redux-orm";
import {ProductType} from "../types/product";
import {OrmSession} from "redux-orm/Session";
import {createAction} from "@reduxjs/toolkit";

export const addProduct = createAction<ProductType>("models/products/create");
export const removeProduct = createAction<number>("models/products/delete");

// type AddProductAction = {
//     type: typeof addProduct.type,
//     payload: ProductType
// }
// type RemoveProductAction = {
//     type: typeof removeProduct.type,
//     payload: number
// }
// type ProductActions = AddProductAction | RemoveProductAction


class Product extends Model {
    static reducer(action:any, Product:ModelType<Product>, session:OrmSession<any>) {
        // let product;
        // console.log('action', action)
        switch (action.type) {
            case addProduct.type:
                Product.create(action.payload);
                break;
            case removeProduct.type:
                let product = Product.withId(action.payload);
                console.log('delete this', product)
                if (product) {
                    product.delete();
                } else {
                    console.warn(`No product found with id: ${action.payload}`);
                }
                break;
            default: break
        }
    }
}
Product.modelName = 'Product';

Product.fields = {
    id: attr(), // non-relational field for any value; optional but highly recommended
    name: attr(),
    category_id: fk({
        to: 'Category',
        as: 'Category',
        relatedName: 'products',
    }),
    description: attr()
};

export default Product


