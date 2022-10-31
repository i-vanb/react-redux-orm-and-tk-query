import {useDispatch} from "react-redux";
import {addProduct, removeProduct} from "../../redux/schema/Product";
import {ListValues, ProductType, ProductVariation, VariationProperty} from "../../redux/types/product";
import {CategoryType} from "../../redux/types/category";
import {useGetProductImagesQuery, useGetProductVariationsQuery, useGetProductVariationValuesQuery } from "../../redux/api";
import {useState} from "react";

type ProductCardProps = {
    product: ProductType,
    isInCart:boolean,
    categories: Array<CategoryType>,
    properties?:Array<VariationProperty>
    listValues?:Array<ListValues>
}

export const ProductCard = (props: ProductCardProps) => {
    const dispatch = useDispatch()
    const {product, isInCart, categories, listValues, properties} = props
    // const [openMenu, setOpenMenu] = useState<boolean>(false)

    const {data: variations, isLoading: isVariationsLoading} = useGetProductVariationsQuery({filter:{product_id:product.id}})
    const {data: images, isLoading: isImagesLoading} = useGetProductImagesQuery({filter:{product_id:product.id}})

    const variationWithLowestPrice = variations?.filter(i => i.stock>0)?.[0]?.id
    const minPrice = variations?.filter(i => i.stock>0)?.[0]?.price
    const mainImageSrc = 'https://test2.sionic.ru/'+images?.[0]?.image_url
    // useGetProductVariationsQuery
    const getCategoryName = () => categories.filter(i => i.id === product.category_id)[0]?.name

    // const openMenuHandler = () => setOpenMenu(true)
    // const closeMenuHandler = () => setOpenMenu(false)


    const addProductHandler = () => {
        // add variation
        dispatch(addProduct(product))
    }
    const removeProductHandler = () => dispatch(removeProduct(product.id))

    const getButton = () => {
        if(isVariationsLoading) return null
        if(!minPrice) return <div>Нет в наличии</div>
        if(isInCart) return <div onClick={removeProductHandler} className="product-card__btn__remove-wrapper"/>
        return <button onClick={addProductHandler} className="btn btn-outline w-100">Добавить в корзину</button>
        // return <button onClick={addProductHandler} className="btn btn-outline w-100">Добавить в корзину</button>
    }

    return(
        <div className="product-card">
            <div className="product-card__img">
                {/*<div className="product-card__img-empty"/>*/}
                <img src={mainImageSrc} />
                <div className="product-card__cat">
                    <div className="product-card__cat-wrapper">
                        <div className="tag tag-blue">{getCategoryName()}</div>
                    </div>
                </div>
            </div>
            <div className="product-card__label">{product.name}</div>
            <div className="product-card__price">от {minPrice} ₽</div>
            <div className="product-card__btn">
                {getButton()}
            </div>
            {/*{variations?.length && variationWithLowestPrice ?*/}
            {/*    <VariationMenu apply={addProductHandler}*/}
            {/*                   cancel={closeMenuHandler}*/}
            {/*                   list={variations}*/}
            {/*                   activeProductId={variationWithLowestPrice}*/}
            {/*                   isShow={openMenu}*/}
            {/*                   properties={properties}*/}
            {/*                   listValues={listValues}*/}
            {/*                   product={product}*/}
            {/*    />*/}
            {/*    : null}*/}
        </div>
    )
}

type VariationMenuType = {
    isShow:boolean
    activeProductId:number
    cancel:()=>void
    apply:(id:number)=>void
    list:Array<ProductVariation>
    properties?:Array<VariationProperty>
    listValues?:Array<ListValues>
    product: ProductType
}

const VariationMenu = (props: VariationMenuType) => {
    const {cancel, apply, list, activeProductId, isShow, listValues, properties, product} = props
    const [active, setActive] = useState<number>(activeProductId)

    const {data: values, isLoading} = useGetProductVariationValuesQuery({filter:{product_variation_id:list.map(i=>i.id)}})

    if(!isLoading) console.log('!!!', product, listValues, properties, values)

    const applyHandler = () => apply(active)

    if(!isShow) return null

    return(
        <div className="modal__container">
            <div className="modal__content">
                <div onClick={cancel} className="modal__close-icon">&#10006;</div>
                <h3>Выберите модификацию</h3>
                <div className="product-card__variations__container">
                    {list.map(i => {
                        const setActiveHandler = () => setActive(i.id)
                        return <div key={i.id} className="product-card__variations__row">
                            <div onClick={setActiveHandler} className={`product-card__variations__input${i.id === active?' active':''}`} />
                            <div></div>
                            <div></div>
                        </div>
                    })}
                </div>
                <div className="modal__control">
                    <button onClick={applyHandler} className="btn btn-main modal__control__apply">Добавить в корзину</button>
                    <button onClick={cancel} className="btn btn-secondary modal__control__cancel">Отмена</button>
                </div>
            </div>
        </div>
    )
}
