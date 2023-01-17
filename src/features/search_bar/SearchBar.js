import { useState } from "react";
import { useDispatch } from "react-redux";
import { useGetProductsQuery } from "../apiSlice";
import {
  setCompletedQueryValues
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
  const queryValues = inputState+categoryState+priceState;
  const { data } = useGetProductsQuery(queryValues);
  console.log(data);

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
