import React from "react";
import {useDispatch} from "react-redux";
import {show} from "../../redux/warning";
import {Modal} from "../Modal/Modal";
// @ts-ignore
import image from '../../assets/Group.png';
// @ts-ignore
import image1 from '../../assets/Group-1.png';
// @ts-ignore
import image2 from '../../assets/Group-2.png';
import {useNavigate} from "react-router";
import {ProductType} from "../../redux/types/product";
import {removeProduct} from "../../redux/schema/Product";

type CartPropsType = {
    products: Array<ProductType>
}

export const Cart = (props: CartPropsType) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {products} = props
    // console.log(products)

    const clearCartConfirm = () => {
        products.forEach(i => dispatch(removeProduct(i.id)))
    }

    const clearCartHandler = () => dispatch(show({
        message:'Вы действительно хотите очистить корзину?',
        type: "confirm"
    }))

    const checkoutHandler = () => navigate('/shipping')

    return(
        <div>
            <div className="cart__title">
                <span>Корзина</span>
                <a onClick={clearCartHandler} className="card__clear-btn">Очистить корзину</a>
            </div>
            {products.length
                ?
                <div className="cart-table">
                    <div className="cart-table__header">
                        <div className="cart-table__header__name text-bolder text-font-middle">Xiaomi</div>
                        <div className="cart-table__header__price">
                            <div>Стоимость корзины:</div>
                            <div className="text-bold text-font-middle">1 185 000₽</div>
                        </div>
                        <div className="cart-table__header-btn">
                            <button onClick={checkoutHandler} className="btn btn-main">Оформить</button>
                        </div>
                        <div className="cart-table__header__image">
                            <img className="cart-table__header__image-1" src={image1}/>
                            <img className="cart-table__header__image-2" src={image2}/>
                            <img className="cart-table__header__image-3" src={image}/>
                        </div>
                    </div>
                    <div className="cart-table__wrapper">
                        {products.map(i => {
                            const removeProductHandler = () => dispatch(removeProduct(i.id))
                            return (
                                <div key={i.id} className="cart-table__row">
                                    <div className="cart-table__row__icon"/>
                                    <div className="cart-table__row__info">
                                        <p>{i.name}</p>
                                        <p>{i.description}</p>
                                    </div>
                                    <div className="cart-table__row__count">
                                        <div className="cart-table__row__count-dec">-</div>
                                        <div className="cart-table__row__count-num">25</div>
                                        <div className="cart-table__row__count-inc">+</div>
                                    </div>
                                    <div className="cart-table__row__price">
                                        <div className="text-bolder text-font-middle">от 350 000 ₽</div>
                                        <div className="text-sub text-line-through">450 500 ₽</div>
                                    </div>
                                    <div className="cart-table__row__remove">
                                        <button onClick={removeProductHandler} className="btn-icon btn-remove"/>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            :
            <h3>Корзина пуста</h3>}
            <Modal onResolve={clearCartConfirm} />
        </div>
    )
}
