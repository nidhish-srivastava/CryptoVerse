
type pageNumberArrayProps = {
    pageNumberArray : number[]
    setPageNumber : React.Dispatch<React.SetStateAction<number>>
 }
 
 
function PaginatedComponent({pageNumberArray,setPageNumber} : pageNumberArrayProps ){
    return(
      <div className="button-container">
      {pageNumberArray.map((e, index) => (
        <button key={index} onClick={() => setPageNumber(e)}>
          {e}
        </button>
      ))}
    </div>  
    )
  }
  export default PaginatedComponent