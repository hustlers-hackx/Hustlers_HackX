import db from '../firebase/config'
import {doc, getDoc, setDoc} from 'firebase/firestore';
import {onSnapshot} from 'firebase/firestore'
import {getDocumentId} from '../utils/firebaseUtilities'
import { useEffect, useState } from 'react';

export const useChat = (sender_id) => {

  let doc_id = getDocumentId(sender_id)
  let unsub
  const docRef = doc(db,'chat',doc_id)  
  const [msgs,setMsgs] = useState(undefined)
  
  const subscribe = () => {
    unsub = onSnapshot(docRef,(doc) => {
     setMsgs(prev => doc.data()? doc.data().msgs || [] : [])
    })
  }

  const unsubscribe = () => {
    unsub()
  }

  const getMsgs = async () => {
    let doc = await getDoc(docRef)
    setMsgs(prev => doc.data()? doc.data().msgs || [] : [])
    subscribe()
  }

  useEffect(() => {
    let temp = async() => {
      await getMsgs()
    }
    temp()
    return () => unsubscribe()
  },[doc_id])
 
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
