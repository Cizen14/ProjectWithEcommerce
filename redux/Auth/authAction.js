import { doc, getDoc } from "firebase/firestore";

import { toast } from "react-toastify";
import {setUserInfo} from './authSlice';
import { db } from "../../src/Firebase-config";



export const getUserInfoAction = (uid) => async(dispatch) => {
  
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
   
    if(docSnap.exists()){
      const userData = docSnap.data();

      dispatch(setUserInfo(userData));
      toast("Logged In Successfully");
    
    }else{
      toast.error("No User Found")
    }
}