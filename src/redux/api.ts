import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {
    ProductType,
    ProductQueryParams,
    ProductVariation,
    ProductVariationsQueryParams,
    ProductImage,
    ProductImagesQueryParams,
    VariationProperty,
    ListValues,
    ProductVariationValue, VariationValuesQueryParams
} from "./types/product";
import {encodeParams} from "../utils/encodeParams";
import orm from "./schema";
import {CategoryQueryParams, CategoryType} from "./types/category";


export const sionicApi = createApi({
    reducerPath: 'sionic/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://test2.sionic.ru/api/',
    }),
    endpoints: (build) => ({
        getProducts: build.query<Array<ProductType>, ProductQueryParams>({
            query: params => ({
                url: `Products`,
                params: encodeParams(params)
            }),
        }),
        // ProductVariations?filter={"product_id":1}
        getProductVariations: build.query<Array<ProductVariation>, ProductVariationsQueryParams>({
            query: params => ({
                url: `ProductVariations`,
                params: encodeParams({...params, sort: ["price","ASC"]})
            }),
        }),
        getProductImages: build.query<Array<ProductImage>, ProductImagesQueryParams>({
            query: params => ({
                url: `ProductImages`,
                params: encodeParams(params)
            }),
        }),
        getProductVariationValues: build.query<Array<ProductVariationValue>, VariationValuesQueryParams>({
            query: params => ({
                url: `ProductVariationPropertyValues`,
                params: encodeParams(params)
            }),
        }),
        getCategories: build.query<Array<CategoryType>, CategoryQueryParams>({
            query: params => ({
                url: `Categories`,
                params: encodeParams(params)
            }),
        }),
        getProperties: build.query<Array<VariationProperty>, null>({
            query: params => ({
                url: `ProductVariationProperties`,
            }),
        }),
        getPropertyListValues: build.query<Array<ListValues>, null>({
            query: params => ({
                url: `ProductVariationPropertyListValues`,
            }),
        }),

    })
})

export const {
    useGetProductsQuery,
    useGetCategoriesQuery,
    useGetProductVariationsQuery,
    useGetProductImagesQuery,
    useGetPropertiesQuery,
    useGetPropertyListValuesQuery,
    useGetProductVariationValuesQuery
} = sionicApi
