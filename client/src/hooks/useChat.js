import db from '../firebase/config'
import {doc, getDoc, setDoc} from 'firebase/firestore';
import {onSnapshot} from 'firebase/firestore'
import {getDocumentId} from '../utils/firebaseUtilities'
import { useEffect, useState } from 'react';

export const useChat = (sender_id) => {

  //let doc_id = getDocumentId(sender_id)

  let doc_id = "test"

  const docRef = doc(db,'chat',doc_id)  
  const [msgs,setMsgs] = useState(undefined)

  const subscribe = () => onSnapshot(docRef,(doc) => {
    console.log(doc.data())
    setMsgs(prev => doc.data().msgs)
  })

  const getMsgs = async () => {
    let doc = await getDoc(docRef)
    if(doc.exists()){
      setMsgs(prev => doc.data().msgs || [])
      subscribe()
    }
    console.log(msgs)
  }

  useEffect(() => {
    let temp = async() => {
      await getMsgs()
    }
    temp()
  },[])
 
  const addMsg = async (msg) => {
    if(msgs.length === 0){
      subscribe()
    }
    setMsgs(prev => [...prev,msg])
    await setDoc(docRef,{
      msgs : [...msgs,msg]
    })
  }

  return [
    msgs,
    addMsg
  ]
  
}
