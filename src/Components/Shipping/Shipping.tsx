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

export const Shipping:React.FunctionComponent = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()


    return(
        <div className="shipping__container">
            <div className="shipping__sidebar">
                <div className="shipping__sidebar__header text-bold text-font-middle">Доставка</div>
                <h3>Когда доставить?</h3>
                <div className="shipping__sidebar__date-time">
                    <span>Выберите дату</span>
                    <span>Выберите время</span>
                </div>
                <h3>Куда доставить?</h3>
                <div className="shipping__sidebar__dest">
                    <input placeholder="Выберите адрес доставки" className="shipping__sidebar__input" />
                </div>
                <h3>Имя</h3>
                <div className="shipping__sidebar__dest">
                    <input className="shipping__sidebar__input" />
                </div>
                <h3>Телефон</h3>
                <div className="shipping__sidebar__dest">
                    <input className="shipping__sidebar__input" />
                </div>
            </div>
            <div className="shipping__content">

            </div>
        </div>
    )
}
