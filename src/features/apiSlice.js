import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({baseUrl: "http://127.0.0.1:8000/"}),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (search) => `products/?${search}`
    }),
  })

})

export const { useGetProductsQuery } = productsApi;