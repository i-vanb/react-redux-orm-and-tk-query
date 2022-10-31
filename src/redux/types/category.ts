export type CategoryType = {
    "id": number,
    "name": string
}


export type CategoryQueryParams = {
    filter?: filterType,
    sort?: sortType,
    range?: rangeType
}

type filterType = {
    name: string,
}
type sortingField = "name"
type direction = "ASC" | "DESC"
type sortType = [sortingField, direction]

export type rangeType = [number, number]
