import { createSlice } from "@reduxjs/toolkit"

const initialState= {
    productList:[],
    selectedProduct:{}
}


export const productSlice = createSlice({
    name:'productList',
    initialState,
    reducers:{
        setProductList:(state, action)=>{
            state.productList = action.payload;

        },
        setSelectedProduct:(state, action)=>{
            state.selectedProduct =action.payload;

        }
    }
})
export const {setProductList, setSelectedProduct} = productSlice.actions;
export default productSlice.reducer;