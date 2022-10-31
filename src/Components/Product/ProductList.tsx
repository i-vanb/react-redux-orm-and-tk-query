import { useGetProductsQuery, useGetCategoriesQuery, useGetPropertiesQuery, useGetPropertyListValuesQuery } from "../../redux/api";
import {Categories} from "./Categories";
import {ProductCard} from "./ProductCard";
import {useEffect, useState} from "react";
import {ProductQueryParams, ProductType, rangeType} from "../../redux/types/product";
import {useSelector} from "react-redux";
import {productSelector} from "../../redux/selectors/product.selector";
import {RootState} from "../../redux/store";
import {useDebounce} from "../../hooks/debounce";

export const ProductsContainer = () => {
    /* products in carts */
    const idsInCart = useSelector(productSelector).map(i=>i.id)
    /* products per page */
    const countProducts = 25

    const [page, setPage] = useState<number>(1)
    const [isLastPage, setIsLastPage] = useState(false)
    const nextPage = () => setPage(page+1)

    /* search by name */
    const [filterByName, setFilterByName] = useState('')
    const {query} = useSelector((state:RootState) => state.search)
    /* custom hook for delaying request while typing in search input */
    const debounced = useDebounce(query)

    /* all products on the page */
    const [list, setList] = useState<Array<ProductType>>([])

    /* defines range depending of the page and amount per page */
    const getRange = (page:number, count:number):rangeType => {
        const start = (page-1)*count
        const end = start+count-1
        return [start, end]
    }

    /* category chosen for filtering products */
    const [filterCat, setFilterCat] = useState<Array<number>>([])
    const filterByCategory = (id:number) => {
        // console.log(id, filterCat)
        setList([])
        setPage(1)
        if(filterCat.includes(id)) {
            setFilterCat(filterCat.filter(i=> i !== id))
        } else {
            setFilterCat([...filterCat, id])
        }
    }

    const getParams = (page:number, count:number, filterCat:Array<number>, filterByName:string):ProductQueryParams => {
        const params:ProductQueryParams = {
            range:getRange(page,countProducts)
        }
        if(filterCat.length) params.filter = {category_id: filterCat}
        // if(filterByName.length) params.filter = {...params.filter, name: filterByName}
        params.filter = {...params.filter, name: filterByName}
        return params
    }

    /* products and categories from redux tk query */
    const {data: productsRes} = useGetProductsQuery(getParams(page, countProducts, filterCat, filterByName)
        // {range:getRange(page,countProducts)}
    )
    const {data: categories, isLoading} = useGetCategoriesQuery({range:[0,100]})
    const {data: properties, isLoading:isPropertiesLoading} = useGetPropertiesQuery(null)
    const {data: listValues, isLoading:isListValuesLoading} = useGetPropertyListValuesQuery(null)


    // console.log('properties', properties, listValues)
    useEffect(()=>{
        if(!isLoading) {
            setList([])
            setPage(1)
        }
        setFilterByName(debounced)
    }, [debounced])

    useEffect(()=>{
        /* defines whether is it last page */
        if(productsRes && productsRes.length < countProducts) setIsLastPage(true)
        if(productsRes && productsRes.length === countProducts && isLastPage) setIsLastPage(false)
        /* concatenates fetched products to list of products on the page */
        if(productsRes && productsRes.length) setList([...list, ...productsRes])
    }, [productsRes])

    return (
        <div className="product-list__container">
            <Categories list={categories || []} setActiveCategory={filterByCategory} activeCategories={filterCat}/>
            <div className="product-list__content">
                {list.map(i => <ProductCard key={i.id}
                                            product={i}
                                            isInCart={idsInCart.includes(i.id)}
                                            categories={categories || []}
                                            properties={properties}
                                            listValues={listValues}
                />)}
            </div>
            {!isLastPage ? <div className="product-list__control">
                <button onClick={nextPage} className="btn btn-secondary btn-big">Показать больше</button>
            </div> : null}
        </div>
    )
}

export default ProductsContainer
