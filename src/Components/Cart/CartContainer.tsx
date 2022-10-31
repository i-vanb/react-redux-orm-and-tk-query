import {Cart} from './Cart'
import {useSelector} from "react-redux";
import {productSelector} from "../../redux/selectors/product.selector";
import {ProductType} from "../../redux/types/product";

const CartContainer = () => {
    const products:Array<ProductType> = useSelector(productSelector).map(i => ({
        id: i.id,
        name: i.name,
        category_id: i.category_id,
        description: i.description
    }))

    return <Cart products={products} />
}

export default CartContainer
