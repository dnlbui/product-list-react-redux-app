import { useState } from "react";
import { useDispatch } from "react-redux";

//function component that renders the searchbar
const SearchBar = () => {
  const baseUrl = "localhost:8000/products"
  const [urlState, setUrl] = useState(`${baseUrl}`)
  const [categoryState, setCategory ] = useState('');
  const [priceState, setPrice ] = useState('');
  const dispatch = useDispatch();

  let queryUrl = urlState+categoryState+priceState;

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
              onInput={event => setUrl( event.target.value === '' ? baseUrl : baseUrl + "?query=" +event.target.value )}
              onChange = {dispatch(queryUrl)} />
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="input-group mb-3">
            <select 
              onClick={event => event.target.value === "" ? setCategory("") : setCategory("?price=" + event.target.value)} 
              onChange = {dispatch(queryUrl)} 
              className="form-select" 
              id="inputGroupSelect01"
            >
              <option selected value = "">Sort by Category</option>
              <option value="1" >One</option>
              <option value="2" >Two</option>
              <option value="3" >Three</option>
            </select>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="input-group mb-3">
              <select 
                onClick={event => event.target.value === "" ? setPrice("") : setPrice("?price=" + event.target.value)} 
                onChange = {dispatch(queryUrl)}
                className="form-select" 
                id="inputGroupSelect02"
              >
                <option selected value = "">Sort by Price</option>
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
