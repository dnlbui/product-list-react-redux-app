import { configureStore } from '@reduxjs/toolkit';
import {productsApi} from '../features/apiSlice';
import {setupListeners} from '@reduxjs/toolkit/query';
import searchBarReducer from '../features/search_bar/searchBarSlice'

export const store = configureStore({
  reducer: {
    searchBar: searchBarReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(productsApi.middleware),
});

setupListeners(store.dispatch);

//{serializableCheck: false}

/* middleware: (getDefaultMiddleware) => getDefaultMiddleware({
  serializableCheck: false
}) */