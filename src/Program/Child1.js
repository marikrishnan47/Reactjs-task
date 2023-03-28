import React, { Component } from 'react'

class Child1 extends Component{
    constructor(props){
        super(props);
        let h = props.books
        this.state={h}
    }
    render(){
        const books=this.state.h;

        function handleSubmit(){
            books.filter(function(val){  
                if(val.year<2014){
                console.log(val)
                }       
             })
        }
        return(
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

        )
    }
}
export default Child1;