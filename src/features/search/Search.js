import { useState } from "react";
import { useGetProductsQuery } from "../api/apiSlice";
import CardExcerpt from './CardExcerpt'
import NumberBarExcerpt from './NumberBarExcerpt'
import SearchBarExcerpt from './SearchBarExcerpt'


//function component that renders the searchbar
const Search = () => {
  
  //local states for search bar
  const [ inputState, setInput ] = useState('')
  const [ categoryState, setCategory ] = useState('');
  const [ priceState, setPrice ] = useState("");
  const [ pageNumberState, setPageNumber ] = useState("&page=1")
  
  //destructure data from Product Query
  const {
    data: queryData,
    isLoading,
    isSuccess,
    isError,
    error
  }  = useGetProductsQuery( inputState+ categoryState + priceState + pageNumberState );
  
  //if statement that will return component depending on query status
  let content;
  let numberBar;
  if(isLoading) {
    content = <p>Loading...</p>
  } 
  else if (isSuccess) {
    //returns Cards to display by mapping products
    content =  queryData.product.map( element => {
      return(<CardExcerpt key={element.name} element={element}/>)
    });
    
    //creates an array for mapping over
    let numberOfPagesArray = Array.from({length: queryData.pages}, (_, i) => i + 1);

    //map over array to create the numbers in the numberbar
    numberBar = numberOfPagesArray.map((element, i) => {
      return(<NumberBarExcerpt key={"n"+i} element={element} setPageNumber = {setPageNumber}/>)
    })
  } 
  else if (isError) {
    content = <p>{error}</p>
  }

  return (
    <div id="SearchContainer" className="container">
      <div id="SearchBarRow" className="row">
        <SearchBarExcerpt id="sbExcerpt" setInput={setInput} setCategory={setCategory} setPrice={setPrice}/>
      </div>
      <div id="ContentRow" className='row row-cols-3 gy-5 offset-1'>
        {content}
      </div>  
      <div id="NumberBarRow" className='row '>
        <hr className='gy-5'/>
        <div className="d-flex justify-content-center">
          <div className="btn-toolbar mx-auto" role="toolbar">
            <div className="btn-group" role="group" aria-label="First group">
              {numberBar}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
