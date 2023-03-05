// ___Firebase_______________________________________________________________________________________________________
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

export const getProducts = async () => {

    const productsCollectionsRef = collection(db, "products");

    try {
        const response = await getDocs(productsCollectionsRef);
        const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        return data;
    } catch(error) {
        window.alert('Something went wrong! No connection with server.');
        console.log(error);
    }

}