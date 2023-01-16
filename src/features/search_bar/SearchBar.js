//import { useState } from "react";
//import { useDispatch, useSelector } from "react-redux";

const SearchBar = () => {
  //const baseUrl = "localhost:8000/products"
  //const [urlState, setUrl] = useState(`${baseUrl}`)


  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search" aria-label="Search input" aria-describedby="button-addon2"/>
          </div>
        </div>
        <div className="col-3">
          <div className="input-group mb-3">
            <select className="form-select" id="inputGroupSelect01">
              <option selected value = "">Sort by Category</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="col-3">
          <div className="input-group mb-3">
              <select className="form-select" id="inputGroupSelect02">
                <option selected>Sort by Price</option>
                <option value="lowest">lowest</option>
                <option value="highst">highst</option>
              </select>
            </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
