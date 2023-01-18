import { useState } from "react";
import { useDispatch } from "react-redux";
import { useGetProductsQuery } from "../apiSlice";
import {
  setCompletedQueryValues,
  setPages,
  setCount,
  setProduct
} from './searchBarSlice';

//function component that renders the searchbar
const SearchBar = () => {
  //local states for search bar
  const [inputState, setInput] = useState('')
  const [categoryState, setCategory ] = useState('');
  const [priceState, setPrice ] = useState("&lowest");
  
  //set up redex state
  const dispatch = useDispatch();

  const {
    data: queryData,
    isLoading,
    isSuccess,
    isError,
  }  = useGetProductsQuery(inputState+categoryState+priceState);

  let content;
  if(isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    dispatch(setPages(queryData.pages));
    dispatch(setProduct(queryData.product));
    dispatch(setCount(queryData.count));
    
    content = queryData.product.map((element) => {
      let {category, image, name, price,} = element;
      return(
        <div className="col " key={name}>
          <div className="card" style={{width: 288}}>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Category: {category}</li>
              <li className="list-group-item">${price}</li>
            </ul>
          </div>
        </div>
      )
    },console.log(queryData));
    
    console.log(inputState+categoryState+priceState)

  } else if (isError) {
    content = "failed"
  }

  return (
    <div className="container">
      <div className="row">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-4">
              <div className="input-group mb-3">
                <input type="text" 
                  className="form-control" 
                  placeholder="Search" 
                  aria-label="Search input" 
                  aria-describedby="button-addon2"
                  onChange={event => {
                    setInput( event.target.value === '' ? '' : "&query=" + event.target.value);
                    dispatch(setCompletedQueryValues("&query="+event.target.value+categoryState+priceState));
                    // dispatch(setPages(content))
                    // dispatch(setProduct(content))
                    // dispatch(setCount(content))
                  }}
                />
              </div>
          </div>
        <div className="col-lg-3 col-md-4">
          <div className="input-group mb-3">
            <select 
              className="form-select" 
              id="inputGroupSelect01"
              defaultValue = ''
              onChange={
                event => {
                  event.target.value === "" ? setCategory("") : setCategory("&category=" + event.target.value);
                  dispatch(setCompletedQueryValues(inputState+"&category="+event.target.value+priceState));
                  // dispatch(setPages(content))
                  // dispatch(setProduct(content))
                  // dispatch(setCount(content))
                }
              }
            >
              <option value = "">Sort by Category</option>
              <option value="Music">Music</option>
              <option value="Shoes" >Shoes</option>
              <option value="Health" >Health</option>
              <option value="Grocery" >Grocery</option>
              <option value="Outdoors" >Outdoors</option>
              <option value="Jewelery" >Jewelery</option>
              <option value="Home" >Home</option>
              <option value="Games" >Games</option>
            </select>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="input-group mb-3">
              <select 
                className="form-select" 
                id="inputGroupSelect02"
                defaultValue = ''
                onChange={
                  event => {
                    event.target.value === "" ? setPrice("") : setPrice("&price=" + event.target.value);
                    dispatch(setCompletedQueryValues(inputState+categoryState+"&price="+event.target.value));
                    // dispatch(setPages(content))
                    // dispatch(setProduct(content))
                    // dispatch(setCount(content))
                  }
                } 
              >
                <option value = "">Sort by Price</option>
                <option value="Lowest" >lowest</option>
                <option value="Highest" >highest</option>
              </select>
            </div>
        </div>
          </div>
        </div>
      </div>
      <div className='row row-cols-3 gy-5 offset-1'>
        {content}
      </div>  
      <div className='row'>
        
      </div>
    </div>
  );
}

export default SearchBar;
