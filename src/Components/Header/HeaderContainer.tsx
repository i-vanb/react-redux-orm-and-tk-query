import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Header} from './Header'
import {productSelector} from "../../redux/selectors/product.selector";
import {RootState} from "../../redux/store";
import {print} from "../../redux/search";


const HeaderContainer = () => {
    // const [searchValue, setSearchValue] = useState('')
    const dispatch = useDispatch()
    const {query} = useSelector((state:RootState) => state.search)
    const setQuery = (value:string) => dispatch(print(value))

    const cartCount = useSelector(productSelector).length

    return <Header value={query} setValue={setQuery} count={cartCount}/>
}

export default HeaderContainer
