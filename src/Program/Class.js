import React ,{ Component } from "react";
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

 
 class Home extends Component{
    constructor(){
        super();

       let get =mobiles;
       this.state={
           get
       }
      

    }
    render(){
        
     

     const firstName=()=>{
       const firstName= [...mobiles].sort((a, b) => a.price - b.price);
      this.setState({get:firstName});
     };
     const firstNamel=()=>{
        const firstNamel= [...mobiles].sort((a, b) => a.price - b.price);
        this.setState({get:firstNamel.reverse()});
      };
      const trueFlase=()=>{
        const trueFlase= [...mobiles].filter((val) => val.isPurchased==="false");
        this.setState({get:trueFlase});
      };

      const firstNameA=()=>{
        const firstNameA= [...mobiles].sort((a, b) => {
          if (a.name > b.name){
            return -1;
          }
          if (a.name< b.name){
            return 1;
          }
            return 0;
        })
        this.setState({get:firstNameA});
      }
     

      const firstNameD=()=>{
        const firstNameD= [...mobiles].sort((a, b) => {
          if (a.name > b.name){
            return -1;
          }
          if (a.name < b.name){
            return 1;
          }
          return 0;
        });

        this.setState({get:firstNameD.reverse()});

      }
    let mobile=this.state.get;
        return(
           <>
          
              {mobile.map((value,index)=>{
                
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
        )
    }
}
export default Home;
