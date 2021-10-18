import { getUser } from '../redux/helpers/authHelpers';
import db from '../firebase/config'
import {doc, deleteDoc} from 'firebase/firestore';

export const getDocumentId = (sender_id) => {
    let doc_id = "";

    let email = getUser()._id
    let y= email.localeCompare(sender_id);

    if(y < 0){
        doc_id =  email + "_" +  sender_id ; 
    }else{
        doc_id =  sender_id + "_" + email;
    }
    
    return doc_id
}

export const deleteDocument = async(id) => {
    let doc_id = getDocumentId(id)
    const docRef = doc(db,'chat',doc_id)  
    await deleteDoc(docRef);
}