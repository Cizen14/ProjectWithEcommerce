import { addDoc, collection, getDoc, getDocs } from "firebase/firestore"
import { db } from "../../src/Firebase-config"
import { toast } from "react-toastify";
import { setProductList } from "./productSlice";


export const addProductAction = async (productList) =>{
    console.log(productList)
    try{
       
        const docRef= await addDoc(collection(db, "products"),productList);
        toast.success("Product Added Successfully")  
        console.log(productList)

    }
    catch (e){
        console.log(e)
        toast.error("Something is Wrong")
    }
}



export const getProductListAction = () => async (dispatch) =>{
try{
    //get the product from the db
    const querySnapShotPromise = getDocs(collection(db, "products"));
    toast.promise(querySnapShotPromise,{
        pending:"In Progress..."
    })
    const querySnapShot = await querySnapShotPromise;
    const productList = [];
    querySnapShot.forEach((doc)=>{
        const id= doc.id;
        const productData = doc.data();
        
        
        productList.push({id, ...productData
         
        });
        
        
    })
    dispatch(setProductList(productList))
}
catch(error){
    console.log(error)
    toast('failed', error.message)
}

}