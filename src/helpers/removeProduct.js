// ___Firebase________________________________________________________________________________________________________
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase-config';

export const removeProduct = async (id) => {
    const productToRemove = doc(db, 'products', id );
    try {
        await deleteDoc(productToRemove);
    } catch(error) {
        window.alert('Something went wrong! No connection with server.');
        console.log(error);
    }
}