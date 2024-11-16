import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const getBasketFromStorng = () => {
    if (localStorage.getItem('basket')) {
        return JSON.parse(localStorage.getItem('basket'))
    }
    return []
}

const initialState = {
    products: getBasketFromStorng(),
    drawer: false
}

const writeFromBasketToStorage = (basket) => {
    localStorage.setItem('basket', JSON.stringify(basket))
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addTobasket: (state, action) => {
           const findProduct = state.products && state.products.find((product)=> product.id === action.payload.id)
           if(findProduct){
          const extractedProducts =  state.products.filter((product)=> product.id !== action.payload.id)
          findProduct.count += action.payload.count
          state.products = [...extractedProducts, findProduct]
          writeFromBasketToStorage(state.products)
           }else{
            state.products = [...state.products, action.payload]
            writeFromBasketToStorage(state.products)
           }

        },

        removeItem: (state, action) => {
            const itemId = action.payload;
            state.products = state.products.filter((item) => item.id !== itemId);
            writeFromBasketToStorage(state.products); 
            state.totalAmount = state.products.reduce((total, product) => {
              return total + product.price * product.count;
            }, 0);
          },

        setDrawer : (state)=>{
            state.drawer = !state.drawer
        }
    }
})

export const { addTobasket, setDrawer, removeItem} = basketSlice.actions

export default basketSlice.reducer