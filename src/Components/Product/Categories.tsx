import {Link} from "react-router-dom";
import {CategoryType} from "../../redux/types/category";

type CategoryProps = {
    list: Array<CategoryType>,
    setActiveCategory: (id:number) => void,
    activeCategories: Array<number>
}


export const Categories = (props: CategoryProps) => {
    const {list, setActiveCategory, activeCategories} = props

    console.log(activeCategories)

    return(
        <div className="categories__container">
            <div className="categories__title">
                <span>Категории товаров</span>
                <Link to={`settings`} className="categories__set-link">Настройки</Link>
            </div>
            <div className="categories__tags">
                {list.map(i => {
                    const isActive = activeCategories.includes(i.id)
                    const tagClassName = `tag tag-outline-blue${isActive ? ' active' : ''}`
                    const setActiveCategoryHandler = () => setActiveCategory(i.id)
                    return <button key={i.id} onClick={setActiveCategoryHandler} className={tagClassName}>{i.name}</button>
                })}
            </div>
        </div>
    )
}
