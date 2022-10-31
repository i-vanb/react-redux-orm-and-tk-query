import {ChangeEvent} from "react";
import { Outlet, Link } from "react-router-dom";


type searchProps = {
    value: string,
    setValue: Function,
    count: number
}


export const Header = ({value, setValue, count}:searchProps) => {
    const setValueHandler = (e:ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

    return(
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__logo">
                        <Link to='/'>React</Link>
                    </div>
                    <div className="header__geo">
                        <span className='text-geo'>Александровск-Сахалинский</span>
                    </div>
                    <div className="header__search">
                        <div className="header__search-input">
                            <input value={value}
                                   onChange={setValueHandler}
                                   placeholder="Поиск бренда, товара, категории..."/>
                        </div>
                        <div className="header__search-btn"/>
                    </div>
                    <div className="header__account">
                        <Link to={`cart`} className="header__account__cart">
                            {/*<Link to={`cart`}>LINK</Link>*/}
                            <span className="header__account__cart-count">{count}</span>
                        </Link>
                        <div className="header__account__profile">

                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
