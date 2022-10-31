import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {hide, resolve} from "../../redux/warning";
import {useEffect} from "react";

type ModalPropsType = {
    onResolve?: Function
}

export const Modal = ({onResolve}:ModalPropsType) => {
    const dispatch = useDispatch()
    const {message, type, result} = useSelector((state:RootState) => state.warning)

    useEffect(()=>{
        if(result) dispatch(hide())
    }, [result])

    if(!message) return null

    const closeHandler = () => dispatch(resolve("cancel"))
    const rejectHandler = () => dispatch(resolve("cancel"))

    const resolveHandler = () => {
        dispatch(resolve("apply"))
        onResolve && onResolve()
    }

    const getTitle = () => {
        switch (type) {
            case "confirm": return 'Подтвердите действие';
            case "error": return 'Ошибка';
            case "warning": return 'Предупреждение';
            default: return 'Сообщение'
        }
    }

    const confirmPanel = () =>
        <>
            <button onClick={resolveHandler} className="btn btn-main modal__control__apply">Да</button>
            <button onClick={rejectHandler} className="btn btn-secondary modal__control__cancel">Нет</button>
        </>

    const messagePanel = () => <button onClick={resolveHandler} className="modal__control__apply">OK</button>

    const getControlPanel = () => {
        switch (type) {
            case "confirm": return confirmPanel();
            default: return messagePanel();
        }
    }

    return(
        <div className="modal__container">
            <div className="modal__content">
                <div onClick={closeHandler} className="modal__close-icon">&#10006;</div>
                <h3>{getTitle()}</h3>
                <p>{message}</p>
                <div className="modal__control">
                    {getControlPanel()}
                </div>
            </div>
        </div>
    )
}
