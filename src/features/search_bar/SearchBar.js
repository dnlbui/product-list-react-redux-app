import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useGetProductsQuery } from "../apiSlice";
import {
  setCompletedQueryValues,
  setPages,
  setProduct,
  setCount
} from './searchBarSlice';

//function component that renders the searchbar
const SearchBar = () => {
  //local states for search bar
  const [inputState, setInput] = useState('')
  const [categoryState, setCategory ] = useState('');
  const [priceState, setPrice ] = useState('');

  //set up redex state
  const dispatch = useDispatch();
  //trying out api query
  //const queryValues = inputState+categoryState+priceState;
  const {
    data: queryData,
    isLoading,
    isSuccess,
    isError,
    error
  }  = useGetProductsQuery(inputState+categoryState+priceState);
  
  let content;
  if(isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    content = queryData
    dispatch(setPages(content))
    dispatch(setProduct(content))
    dispatch(setCount(content))
  } else if (isError) {
    content = "failed"
  }

  console.log(content);

  return (
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
                dispatch(setPages(content))
                dispatch(setProduct(content))
                dispatch(setCount(content))
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
                  dispatch(setPages(content))
                  dispatch(setProduct(content))
                  dispatch(setCount(content))
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
                    dispatch(setPages(content))
                    dispatch(setProduct(content))
                    dispatch(setCount(content))
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
  );
}

export default SearchBar;
