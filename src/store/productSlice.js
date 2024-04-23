import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import StatusCode from "../utils/StatusCode";

const initialState = {
  data: [],
  status: StatusCode.IDLE,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = StatusCode.IDLE;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
      });
  },
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk("products/get", async () => {
  const response = await axios.get(`https://fakestoreapi.com/products/`);
  const data = response.data;
  return data;
});
