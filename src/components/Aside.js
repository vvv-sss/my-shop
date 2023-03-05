// ___Redux__________________________________________________________________________________________________________
import { useSelector } from 'react-redux';
// ___Assets_________________________________________________________________________________________________________
import AddIcon from '../assets/icons/add_icon.png'
import ProductListIcon from '../assets/icons/product_list_icon.png'

const Aside = ({ setAddProduct, setProductViewActive, setEdit }) => {
    
    const products = useSelector((state) => state.productList);
    const productQty = products.reduce((a, product) => a + Number.parseInt(product.count), 0);

    return ( 
        <aside>
            <div className="total-products">
                <h3>Number of products</h3>
                <span>{ products.length }</span>
            </div>
            <div className="total-products-qty">
                <h3>Total quantity</h3>
                <span>{ productQty }</span>
            </div>
            <button 
                id='product-list-btn'
                onClick={ () => {
                    setAddProduct(false);
                    setProductViewActive(false);
                    setEdit(false);
                }}
            >
                <img src={ ProductListIcon } alt='Product list icon' />
                Product List
            </button>
            <button 
                onClick={ () => setAddProduct(true) }
                id="btn-add-product"
            >
                <img src={ AddIcon } alt='Add product icon' />
                Add new product
            </button>
        </aside> 
    );
}

export default Aside;