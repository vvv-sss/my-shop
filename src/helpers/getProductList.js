import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

export const getProductList = async () => {

    const productsCollectionsRef = collection(db, "products");

    try {
        const response = await getDocs(productsCollectionsRef);
        const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        return data;
    } catch(error) {
        console.log(error);
    }

}