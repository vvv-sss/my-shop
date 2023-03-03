import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { addProductContext } from '../App';

const Aside = () => {
    const productList = useSelector((state) => state.productList);
    const { setAddProduct } = useContext(addProductContext);

    return ( 
        <aside>
            <div className="total-products">
                <h3>Total number of products</h3>
                <span>{ productList.length }</span>
            </div>
            <button 
                onClick={ () => setAddProduct(true) }
                id="btn-add-product"
            >
                Add new product
            </button>
        </aside> 
    );
}

export default Aside;