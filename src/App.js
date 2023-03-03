import Header from './components/Header';
import ProductList from './components/product-list/ProductList';
import './App.scss';
import Aside from './components/Aside';
import { useState, createContext } from 'react';

export const addProductContext = createContext()

function App() {
  const [addProduct, setAddProduct] = useState(false);

  return (
    <>
      <Header />
      <main>
        <addProductContext.Provider value={{ addProduct, setAddProduct }}>
          <Aside />
          <ProductList />
        </addProductContext.Provider>
      </main>
    </>
  );
}

export default App;
