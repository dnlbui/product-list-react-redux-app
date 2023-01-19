import { useState } from "react";
import { useGetProductsQuery } from "../api/apiSlice";
import CardExcerpt from './CardExcerpt'
import NumberBarExcerpt from './NumberBarExcerpt'
import SearchBarExcerpt from './SearchBarExcerpt'


//function component that renders the searchbar
const Search = () => {
  
  //local states for search bar
  const [inputState, setInput] = useState('')
  const [categoryState, setCategory ] = useState('');
  const [priceState, setPrice ] = useState("");
  const [ pageNumberState, setPageNumber ] = useState("&page=1")
  
  //destructure data from Product Query
  const {
    data: queryData,
    isLoading,
    isSuccess,
    isError,
    error
  }  = useGetProductsQuery(inputState+categoryState+priceState+pageNumberState);
  
  let content;
  let numberBar;
  let responseData;
  if(isLoading) {

    content = <p>Loading...</p>

  } 
  else if (isSuccess) {
    
    responseData = queryData;
    //returns Cards to display by mapping products
    content =  queryData.product.map( element => {
      return(<CardExcerpt element={element}/>)
    });

    //creates an array for mapping over
    let numberOfPagesArray = Array.from({length: queryData.pages}, (_, i) => i + 1);
    //map over array to create the numbers in the numberbar
    numberBar = numberOfPagesArray.map((element) => {
      return(<NumberBarExcerpt element={element} setPageNumber = {setPageNumber}/>)
    })

  } 
  else if (isError) {

    content = <p>{error}</p>

  }


  const asyncPageCheck = async () => {
    let loadedContent = await responseData;

    if(pageNumberState<loadedContent.pages){setPageNumber(1)};
  }
  asyncPageCheck();

 

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
