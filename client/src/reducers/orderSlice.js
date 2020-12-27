import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    newOrder:[],
    newBill:'',
    newId:'',
   },
  reducers: {
    orderDetails: (state, action) => {
      state.newOrder = action.payload;
    },
    orderBill: (state, action) => {
      state.newBill = action.payload;
    },
    orderId: (state, action) => {
      state.newId = action.payload;
    },
  },
});

export const {
  orderDetails,
  orderBill,
  orderId,
} =orderSlice.actions;

export const order = (value,id) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      'http://localhost:5000/juice_items'
    );
    dispatch(orderDetails(data));
    dispatch(orderBill(value));
    dispatch(orderId(id));
  } catch (error) {
    console.log(error.response.data);
  }
};

export default orderSlice.reducer;