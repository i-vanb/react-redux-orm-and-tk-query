export type ProductType = {
    "id": number,
    "name": string,
    "category_id": number,
    "description": string
}


export type ProductQueryParams = {
    filter?: filterType,
    sort?: sortType,
    range?: rangeType
}
export type ProductVariationsQueryParams = {
    filter: {
        product_id: number
    }
}
export type ProductImagesQueryParams = {
    filter: {
        product_id: number
    }
}
export type VariationValuesQueryParams = {
    filter: {
        product_variation_id: Array<number>
    }
}

type filterType = {
    category_id?: number | Array<number>,
    name?: string
}
type sortingField = "name"
type direction = "ASC" | "DESC"
type sortType = [sortingField, direction]

export type rangeType = [number, number]


export type ProductVariation = {
    id: number,
    product_id: number,
    price: number,
    stock: number
}
export type ProductImage = {
    id: number,
    image_name: string,
    product_id: number,
    image_url: string,
}
export type VariationProperty = {
    id: number,
    name: string,
    type: number
}
export type ListValues = {
    id: number,
    product_variation_property_id: number,
    title: string,
    value: string
}
export type ProductVariationValue = {
    id: number,
    product_variation_id: number,
    product_variation_property_id: number,
    value_string: string,
    value_int: number,
    value_float: string,
    product_variation_property_list_value_id: number
}
