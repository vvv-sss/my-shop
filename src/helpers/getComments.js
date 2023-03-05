// ___Firebase_______________________________________________________________________________________________________
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

export const getComments = async () => {

    const commentsCollectionsRef = collection(db, 'comments');

    try {
        const response = await getDocs(commentsCollectionsRef);
        const data = response.docs.map((doc) => ({ ...doc.data() }));
        return data;
    } catch(error) {
        console.log(error);
    }

}