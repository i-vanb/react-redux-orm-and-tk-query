import {Model, ModelType} from "redux-orm";
import {createAction} from "@reduxjs/toolkit";
import {CategoryType} from "../types/category";
import {OrmSession} from "redux-orm/Session";

export const createCategory = createAction<CategoryType>("models/category/create");

class Category extends Model {
    static reducer(action:any, Category:ModelType<Category>, session:OrmSession<any>) {
        // let category;
        switch (action.type) {
            case createCategory.type:
                Category.create(action.payload);
                break;
            default: break
        }
    }
}
Category.modelName = 'Category';

export default Category
