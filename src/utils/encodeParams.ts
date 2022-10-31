export const encodeParams = (params:object) => {
    let encodedParams:any = {}
    for(const [key, value] of Object.entries(params)) {
        encodedParams[key] = typeof value === "object" ? JSON.stringify(value) : value
    }
    return encodedParams
}
