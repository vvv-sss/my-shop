import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase-config';

export const getImageUrl = (url, setProductImageSrc) => {

    const imageEndpoint = url;
    const imageRef = ref(storage, `images/${imageEndpoint}`);

    getDownloadURL(imageRef)
        .then(url => {
            setProductImageSrc(url);
        })
        .catch(error => {
            console.log(error);
        });
}