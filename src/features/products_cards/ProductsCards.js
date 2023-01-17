import { useState } from "react";
import { useDispatch } from "react-redux";
import { useGetProductsQuery } from "../apiSlice";
import {
  setPages, setCount, setProduct,
} from './searchBarSlice';


const ProductsCards = () => {
  const { data } = useGetProductsQuery(queryValues);
  let numberOfPages = data.pages;
  let numberOfCount = data.count;
  let numberOfProducts = data.products;


  return(

  )
};


export default ProductsCards;