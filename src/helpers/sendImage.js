// ___Firebase________________________________________________________________________________________________________
import { storage } from '../firebase-config';
import { ref, uploadBytes } from 'firebase/storage';

export const sendImage = async (e) => {
    
    const image = e.target.querySelector('#add-product-file').files[0];
    
    try {
        if (image) {
            const imageCollectionRef = ref(storage, `/images/${image.name}`);
            await uploadBytes(imageCollectionRef, image);
        }
    } catch (error) {
        window.alert('Something went wrong! No connection with server.');
        console.log(error);
    }
}