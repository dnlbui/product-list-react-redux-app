import { createSlice } from '@reduxjs/toolkit';



const initialState = {
  pages: 0,
  count: 0,
  product: [],
  completedQueryValues: ''
};

export const searchBarSlice = createSlice({
  name: 'counter',
  initialState,
  //lets us define reducers and generate associate actions
  reducers: {
    setPages: (state, action) => {
      state.pages = action.payload.pages
    },
    setCount: (state, action) => {
      state.count = action.payload.count
    },
    setProduct: (state, action) => {
      state.product = action.payload.product
    },
    setCompletedQueryValues: (state, action) => {
      state.completedQueryValues = action.payload
    },
  }
});

export const {setPages, setCount, setProduct, setCompletedQueryValues} = searchBarSlice.actions;

//this is called selector and allows us to select a value from the state.
export const selectPages = (state) => state.pages.value;
export const selectCount = (state) => state.count.value;
export const selectProduct = (state) => state.product.value;
export const selectCompletedQueryValues = (state) => state.completedQueryValues.value;

export default searchBarSlice.reducer;

