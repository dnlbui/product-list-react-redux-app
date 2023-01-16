import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({baseUrl: "127.0.0.1:8000/"}),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products"
    })
  })

})

export const { useGetAllProductsQuery } = productsApi;