import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { createReducer } from "redux-orm";
import {reducer as ormReducer} from "./schema";

import warning from "./warning";
import search from "./search";
import {sionicApi} from "./api";

const rootReducer = combineReducers({
    // orm: createReducer(orm),
    orm: ormReducer,
    warning,
    search,
    [sionicApi.reducerPath]: sionicApi.reducer,
});
export const store = configureStore({
    reducer:rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sionicApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

