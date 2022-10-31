import {
    createBrowserRouter,
    RouterProvider,
    Route, Routes,
    Link,
} from "react-router-dom";

export const Sidebar = () => <div className="app__main-sidebar__wrapper"><SalesCard /><CollectionsCards/></div>


function SalesCard() {
    return(
        <div className="card-sale">
            <div className="card-sale__img"></div>
            <div className="card-sale__content">
                <div className="card-sale__title">
                    Получай товары
                    БЕСПЛАТНО!
                </div>
                <button className="btn btn-main">Узнать подробнее</button>
            </div>
        </div>
    )
}

function CollectionsCards() {
    const collections = [
        {id:1, name:'Новая коллекция', img:'new1'},
        {id:2, name:'Новая коллекция', img:'new2'},
        {id:3, name:'Новая коллекция', img:'new1'}
    ]

    return(
        <>
            {collections.map(i => <div key={i.id} className={`card-category card-category__${i.img}`}>{i.name}</div>)}
        </>
    )
}
