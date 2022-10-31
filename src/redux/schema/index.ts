import {createReducer, ORM} from "redux-orm";
import Product from "./Product";
import Category from "./Category";


const orm = new ORM({
    stateSelector: state => state.orm,
});
orm.register(Product,Category);

export const reducer = createReducer(orm);

export default orm;
