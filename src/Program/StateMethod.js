
import React, {useState}from "react";


function Main() {
    let mobiles = [{
        id:"001",
        name :"oneplus11",
        price : 56999,
        isPurchased: true},
        {
        id:"002",
        name : "Vivi Y100",
        price : 24999,
        isPurchased: "false"},
        {
        id:"003",
        name : "Redmi 10",
        price : 56999,
        isPurchased : true},
        {
        id:"004",
        name : "iphone 13",
        price : 62990,
        isPurchased : "false"},
        {
        id:"005",
        name : "Nokia",
        price : 12000,
        isPurchased : true},
        {
        id:"006",
        name : "Poco M4",
        price : 13999,
        isPurchased : true}]


     const [state,setstate]=useState(mobiles)

     const firstName=()=>{
       const firstName= [...state].sort((a, b) => a.price - b.price);
       setstate(firstName);
     };
     const firstNamel=()=>{
        const firstNamel= [...state].sort((a, b) => a.price - b.price);
        setstate(firstNamel.reverse());
      };
      const trueFlase=()=>{
        const trueFlase= state.filter((val) => val.isPurchased==="false");
        setstate(trueFlase);
      };

      const firstNameA=()=>{
        const firstNameA= [...state].sort((a, b) => {
          if (a.name > b.name){
            return -1;
          }
          if (a.name< b.name){
            return 1;
          }
            return 0;
        })
        setstate(firstNameA);
      }
     

      const firstNameD=()=>{
        const firstNameD= [...state].sort((a, b) => {
          if (a.name > b.name){
            return -1;
          }
          if (a.name < b.name){
            return 1;
          }
          return 0;
        });

        setstate(firstNameD.reverse());

      }
     


    return ( 
        <>
        {state.map((value,index)=>{

        return(
            <div key={index}>
                <h1>Name:{value.name}</h1>
                <h1>price:{value. price}</h1>
                <h1> isPurchased:{value.  isPurchased}</h1>
            </div>
        )
        
         } )}
         <button onClick={firstName}>low to high</button>
         <button onClick={firstNamel}>high to low</button>
         <button onClick={trueFlase}>true or flase</button>
         <button onClick={firstNameA}>firstNameA</button>
         <button onClick={firstNameD}>firstNameD</button>
        </>
     );
}

export default Main;