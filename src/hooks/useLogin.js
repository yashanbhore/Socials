import React from 'react'
import useShowToast from './useShowToast'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../firebase/firebase';
import useAuthStore from '../store/authStore';
import { doc,getDoc } from 'firebase/firestore';

const useLogin = () => {


  const showToast=useShowToast();
  //its a function provided by firebase to signin
  const [signInWithEmailAndPassword,loading,error]=useSignInWithEmailAndPassword(auth);

  //loginUser variable now holds a reference to the login
  const loginUser=useAuthStore((state)=>state.login);
  
  const login=async(inputs)=>{
    if(!inputs.email || !inputs.password){
        return showToast("Error","Please fill all fields","error");
    }
    try{

            const userCred= await signInWithEmailAndPassword(inputs.email,inputs.password);

            console.log(userCred)

            // if userCred exist use firebase to 

            if(userCred){
                const docRef = doc(firestore,"users",userCred.user.uid);  //a reference to a document in Firestore using doc(). The path to the document is constructed using the firestore instance, the collection name users, and the unique identifier of the user (userCred.user.uid).
                const docSnap = await getDoc(docRef);  //fetch the document using getDoc(docRef)
                localStorage.setItem("user-info",JSON.stringify(docSnap.data()));
                loginUser(docSnap.data())
            }
    }
    catch(error){
        showToast("Error",error.message,"error");
    }
  }
  return {loading,error,login}
}

export default useLogin


//When we call loginUser(docSnap.data()), 
// it invokes the login function stored within the Zustand store, passing docSnap.data() as an argument. 
// This login function updates the state of the store to reflect that a user is logged in.