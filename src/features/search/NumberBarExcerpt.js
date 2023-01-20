//Returns Number button on NumberBar at the bottom of the browser
export default function NumberBarExcerpt ({element,setPageNumber}) {
  return (
    <button
      key={element} 
      type="button" 
      className="btn btn-primary"
      onClick={event => {setPageNumber("&page="+element);}}
    >
      {element}
    </button>
  )
}

