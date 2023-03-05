// ___Firebase________________________________________________________________________________________________________
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase-config';

export const updateProduct = async (id, productToEdit) => {

    const productRef = doc(db, 'products', id);
    
    try {
        await updateDoc(productRef, productToEdit);
    } catch(error) {
        window.alert('Something went wrong! No connection with server.');
        console.log(error);
    }
}

