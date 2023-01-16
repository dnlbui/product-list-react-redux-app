import { useState } from "react";
import { useDispatch } from "react-redux";
import { useGetAllProductsQuery } from "../apiSlice";

//function component that renders the searchbar
const SearchBar = () => {
  const [queryState, setQuery] = useState('')
  const [categoryState, setCategory ] = useState('');
  const [priceState, setPrice ] = useState('');
  //const dispatch = useDispatch();

  let queryUrl = queryState+categoryState+priceState;

  const { data } = useGetAllProductsQuery();
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
              onInput={event => setQuery( event.target.value === '' ? '' : "?query=" + event.target.value )}
               />
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="input-group mb-3">
            <select 
              defaultValue = ''
              onClick={event => event.target.value === "" ? setCategory("") : setCategory("?price=" + event.target.value)} 
              
              className="form-select" 
              id="inputGroupSelect01"
            >
              <option value = "">Sort by Category</option>
              <option value="1" >One</option>
              <option value="2" >Two</option>
              <option value="3" >Three</option>
            </select>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="input-group mb-3">
              <select 
                defaultValue = ''
                onClick={event => event.target.value === "" ? setPrice("") : setPrice("?price=" + event.target.value)} 
                
                className="form-select" 
                id="inputGroupSelect02"
              >
                <option value = "">Sort by Price</option>
                <option value="lowest" >lowest</option>
                <option value="highest" >highest</option>
              </select>
            </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
