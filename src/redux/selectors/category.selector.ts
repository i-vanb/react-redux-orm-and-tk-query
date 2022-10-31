import {createSelector} from 'redux-orm';
import orm from "../schema";

export const categorySelector = createSelector(orm, session => {
        return session.Product.all().toModelArray();
    }
);
