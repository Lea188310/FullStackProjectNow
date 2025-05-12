import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { GetAllreactCategories } from "../axios/CategoryAxios"
import { updatereactGame } from "../axios/gameaxios"
import { useLocation, useNavigate } from "react-router-dom";

//עידכון מוצר
export const UpdateGame = () => {
//משתנים לרענון
const navigate = useNavigate();
const location = useLocation();


  let Pid=useParams().id
  const [category, setCategory] = useState([])
  
  const f1 = async () => {
    if (category.length === 0) {
      let y = (await GetAllreactCategories()).data
      setCategory(y)
    }
  }
  useEffect(() => {
    f1()
  },[])
  const [obj, setObj] = useState({
    "gameId": Pid,
    "productName": "",
    "categorId": 0,
    "price": 0,
    "pecture": "",
    "quantity": 0
  })
  const funcServer =  () => {
 
    let y = ( updatereactGame(Pid,obj));
      // ddreactCategory
    if (y) {
      alert('הצלחת')
  //רענון 
            const previousPath = location.pathname; // אחסון נתיב נוכחי
             navigate("/"); // זה ירענן את הדף הנוכחי
             setTimeout(() => { // אופציונלי לרענן את הדף
              // window.history.back(); // זה יחזיר את המשתמש לדף הקודם

              navigate(previousPath); // נווט חזרה לנתיב הקודם לאחר עיכוב(50)
          }, 5);



    }
    else {
      alert('נכשלת')
    }
  }
  return <><div className="form-container">
<h3>עידכון מוצר</h3>
    <div>
      <button className="form-control" type="number">בחרת לעדכן את מוצר מספר {`${Pid}`}</button>
      <br/>  <input type={"text"}  className="form-control" placeholder="name" onBlur={(e)=>setObj({...obj,productName:e.target.value})}/>

      <br/> <select className="form-select" aria-label="Default select example" 
      onBlur={(e) => setObj({ ...obj, categorId: e.target.value })}                  
      onChange={(e)=>setObj({...obj,categorId:e.target.value})}>                  
     {category.map((x, i) => (<option key={i} value={x.categorId}>{x.categoryName}:{x.categorId}</option>))}                       
      </select>                  

      <br/> <input type={"number"} className="form-control" placeholder="categorId" onBlur={(e)=>setObj({...obj,categorId:e.target.value})} />
      <br/> <input type={"number"}  className="form-control" placeholder="price" onBlur={(e) => setObj({ ...obj, price: e.target.value })} />
     <br/> <input type={"text"}  className="form-control" placeholder="img" onBlur={(e) => setObj({ ...obj, pecture: e.target.value })} />
     <br/>  <input type={"number"} className="form-control"  placeholder="quantity" onBlur={(e) => setObj({ ...obj, quantity: e.target.value })} />
      <br/>  <input type={"button"}  className="btn btn-outline-dark"  onClick={() => funcServer()} value="שמור" /></div>
      </div>
    {/* } */}
    {/* <div className="form-container">
   
        <div>
            <input
                type="text"
                className="form-input"
                placeholder="name"
                onBlur={(e) => setObj({ ...obj, name: e.target.value })}
            />
            <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => setObj({ ...obj, categorId: e.target.value })}
            >
                {category.map((x, i) => (
                    <option key={i} value={x.categorId}>{x.categoryName}</option>
                ))}
            </select>
            <input
                type="number"
                className="form-input"
                placeholder="price"
                onBlur={(e) => setObj({ ...obj, price: e.target.value })}
            />
            <input
                type="text"
                className="form-input"
                placeholder="img"
                onBlur={(e) => setObj({ ...obj, img: e.target.value })}
            />
            <input
                type="number"
                className="form-input"
                placeholder="quantity"
                onBlur={(e) => setObj({ ...obj, quantity: e.target.value })}
            />
            <input
                type="button"
                className="submit-button"
                onClick={() => funcServer()}
                value="שמור"
            />
        </div>
    
</div> */}
 </>
}