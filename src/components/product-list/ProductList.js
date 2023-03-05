// ___Redux___________________________________________________________________________________________________________
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from './productListSlice';
// ___Framer Motion___________________________________________________________________________________________________
import { motion } from "framer-motion";
// ___Components______________________________________________________________________________________________________
import SortInput from '../SortInput';
// ___Helpers_________________________________________________________________________________________________________
import { getProducts } from "../../helpers/getProducts";
import { removeProduct } from "../../helpers/removeProduct";

const ProductList = ({ setProductViewActive, setProductId }) => {   

    const products = useSelector((state) => state.productList);
    const dispatch = useDispatch();

    const handleViewClick = (id) => {
        setProductId(id);
        setProductViewActive(true);
    }

    const handleDeleteClick = (id) => {
        if (window.confirm("Do you really want to remove this product?")) {
            removeProduct(id);
            getProducts()
                .then(data => dispatch(setProducts(data)));
        }
    }

    return ( 
        <motion.section 
            className="product-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            { products.length === 0 && <span id='empty-list-msg'>There are no added products yet!</span> }
            { products.length > 0 &&
                <>
                    <SortInput />
                    <ul>
                        { products.map(product => {
                            return (
                                <li key={ product.id }>
                                    <div className="product-list__info">
                                        <span>{ product.name }</span>
                                        <span>Qty: { product.count }</span>
                                    </div>
                                    <div className="product-list__btns">
                                        <button onClick={ () => handleViewClick(product.productId) }>View</button>
                                        <button onClick={ () => handleDeleteClick(product.id) }>Delete</button>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </>
            }
        </motion.section>
    );
}

export default ProductList;