import {Link, useRouteError} from "react-router-dom";

export const Error = () => {
    const error = useRouteError();

    // console.log(typeof error)

    return (
        <div className="error__wrapper" id="error-page">
            <h1>Ой!</h1>
            <p>Пардон, кажется, возникла ошибка.</p>
            {/*<p>*/}
                {/*<i>{error.status}</i>*/}
            {/*</p>*/}
            <div className="error__back">
                <Link to={"/"}>Вернуться на главную</Link>
            </div>
        </div>
    );
}
