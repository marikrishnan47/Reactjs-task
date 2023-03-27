function Child(props){
    const books=props.books;

    function handleSubmit(){
        books.filter(function(val){  
            if(val.year<2014){
            console.log(val)
            }       
         })
    }
    return ( 
    <>
       <div>     
           {books.map((book,a) =>(
                <div key={a}>       
                <p>Name:<span>{book.name}</span></p>
                <p>year:<span>{book.year}</span></p>
            </div>
            
            ))} 
       </div>
       <button onClick={handleSubmit}>submit</button>
    </>
     );
}
export default Child;