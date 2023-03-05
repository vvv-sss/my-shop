// ___Firebase________________________________________________________________________________________________________
import { db } from '../firebase-config';
import { collection, addDoc } from 'firebase/firestore';

export const sendProduct = async (productToAdd) => {

    const productsCollectionRef = collection(db, 'products');
    
    try {
        await addDoc(productsCollectionRef, productToAdd);
    } catch (error) {
        window.alert('Something went wrong! No connection with server.');
        console.log(error);
    }
}