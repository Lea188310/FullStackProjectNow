import { useContext } from "react"
import MyContex from "../store"
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom";
import { useState } from "react";
export const ShoppingCart=()=>{
    
    const sal=useContext(MyContex).sal
    const setSal=useContext(MyContex).setSal
  
    //משתנים לרענון
const navigate = useNavigate();
const location = useLocation();

//מחיקת מוצר מהסל
const dell=(id)=>{
  let updateSal=sal.filter(x=>x.id!=id)
  setSal(updateSal)
  //רענון 
 const previousPath = location.pathname; // אחסון נתיב נוכחי
 navigate("/"); // זה ירענן את הדף הנוכחי
 setTimeout(() => { // אופציונלי לרענן את הדף
  // window.history.back(); // זה יחזיר את המשתמש לדף הקודם

  navigate(previousPath); // נווט חזרה לנתיב הקודם לאחר עיכוב(5)
}, 5);

}
//הוספת  כמות מוצר מוצר לסל
const add=(id)=>{
 let myCart=sal.find(p=>p.id==id)
 myCart.amount=myCart.amount+1;
 myCart.totalPrice=myCart.totalPrice+myCart.pricePerUnit

 //רענון 
 const previousPath = location.pathname; // אחסון נתיב נוכחי
 navigate("/"); // זה ירענן את הדף הנוכחי
 setTimeout(() => { // אופציונלי לרענן את הדף
  // window.history.back(); // זה יחזיר את המשתמש לדף הקודם

  navigate(previousPath); // נווט חזרה לנתיב הקודם לאחר עיכוב(5)
}, 5);

}
//הורדת כמות מוצר מהסל
const minus=(id)=>{

  let myCart=sal.find(p=>p.id==id)
  if(myCart.amount>1){
  myCart.amount=myCart.amount-1;
  myCart.totalPrice=myCart.totalPrice+myCart.pricePerUnit
}
else{
  let updateSal=sal.filter(x=>x.id!=id)
  setSal(updateSal)
}
//רענון 
const previousPath = location.pathname; // אחסון נתיב נוכחי
navigate("/"); // זה ירענן את הדף הנוכחי
setTimeout(() => { // אופציונלי לרענן את הדף
 // window.history.back(); // זה יחזיר את המשתמש לדף הקודם

 navigate(previousPath); // נווט חזרה לנתיב הקודם לאחר עיכוב(5)
}, 5);

}

    return <div>
        <div className="container mt-3" >          
  <table className="table table-bordered">
    <thead>
      <tr>
                   <th>קוד מוצר</th>
                    <th>שם המוצר</th >
                     <th>כמות</th>
                    <th>מחיר</th>
                    <th>סה"כ</th>
                    <th>הוסף מוצר</th>
                    <th>הורד מוצר</th>
                    <th>מחק</th>

      </tr>
    </thead>
    <tbody>
    {sal.map((x,i)=>(<tr key={i}>
      <td>{x.id}</td>
      <td>{x.name}</td>
      <td>{x.amount}</td>
    <td>{x.pricePerUnit}</td>
    <td>{x.totalPrice}</td>
    <td><button onClick={()=>add(x.id)} className="btn btn-outline-dark">+</button >
    </td><td><button onClick={()=>minus(x.id)} className="btn btn-outline-dark">-</button></td>
    <td><button onClick={()=>dell(x.id)} className="btn btn-outline-dark">🗑️</button ></td>
    </tr>))}
    </tbody>
  </table>
    <Link to={`pay`} className="btn btn-outline-dark" > סיום קניה</Link>
  <Outlet></Outlet>
    </div></div>
}