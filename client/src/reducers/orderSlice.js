import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';



export const orderSlice = createSlice({
  name: 'order',
  initialState: {
   newOrder:[],
  },
  reducers: {
    order_details: (state, action) => {
      state.newOrder= [...state.newOrder,action.payload];
  },
}
});

export const {
  order_details,
} = orderSlice.actions;

export const order = (value,id) => async (dispatch) => {
  try {
    console.log("came here")
    console.log(id)
    const { data } = await axios.get(`http://localhost:5000/juice_items/${id}`)  
    dispatch(order_details({...(data.data[0]),value:value}));
    console.log(data.data)
  } catch (error) {
    console.log("error");
  }
};

export default orderSlice.reducer;
