import { getUser } from '../redux/helpers/authHelpers';

export const getDocumentId = (sender_id) => {
    let doc_id = "";

    let email = getUser().email || 'sugarbae051@gmail.com'
    let y= email.localeCompare(sender_id);

    if(y < 0){
        doc_id =  email + "_" +  sender_id ; 
    }else{
        doc_id =  sender_id + "_" + email;
    }
    
    return doc_id
}
