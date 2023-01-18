// import { useState,useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   selectProduct,
//   selectCount,
//   selectCompletedQueryValues
// } from '../search_bar/searchBarSlice';
// import { productsApi, useGetProductsQuery } from "../apiSlice";


// const ProductsCards = () => {
  //get redux query sent from search bar
  // let query = selectCompletedQueryValues;

  //use RTK API query
  // const {
  //   data: queryData,
  //   isLoading,
  //   isSuccess,
  //   isError,
  // }  = useGetProductsQuery(query);
  
  // let content;
  // if(isLoading) {
  //   content = <p>Loading...</p>
  // } else if (isSuccess) {
  //   content = queryData
    
  // } else if (isError) {
  //   content = "failed"
  // }
  // {},{ refetchOnMountOrArgChange: true }
  
  // const {data: product = []} = useGetProductsQuery()

  //let {product, count} = content

  // console.log(product);
  
  // const RenderCards = () => {
  //   if(product.length === !0) {  
  //     product.forEach(element => {
  //     const {category, image, name, price} = element;
  //       return(
  //         <div className="col">
  //           <div className="card">
  //             <img src={image} className="card-img-top" alt="..."/>
  //             <div className="card-body">
  //               <h5 className="card-title">{name}</h5>
  //               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //             </div>
  //             <ul className="list-group list-group-flush">
  //               <li className="list-group-item"></li>
  //               <li className="list-group-item">Category: {category}</li>
  //               <li className="list-group-item">${price}</li>
  //             </ul>
  //           </div>
  //         </div>
  //       )
  //     })
  //   }
  // }
//<div>{content.count}</div>
  
//<RenderCards/>
//   return(
//     <div></div>
//   )
// };


// export default ProductsCards;