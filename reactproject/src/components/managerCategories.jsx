import { useEffect,useState } from "react"
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import  {DellreactCategory, EditreactCategory, GetAllreactCategories} from "../axios/CategoryAxios"
import { UpdateCategory } from "./updateCategory"
export const ManagerCategories=()=>{
   
  //מחיקה
  const dell=async(id)=>{
    let y=(await DellreactCategory(id))
    if(y.data)
    alert('הצלחת')
    else
    alert('נכשלת')

  }
  // עידכון
  const update=async(id)=>{
    let y=(await EditreactCategory(id))
    if(y.data)
    alert('הצלחת')
    else
    alert('נכשלת')
  }
  
  
  
  const[is,setIs]=useState(true)
    const doSomething1=async()=>{
        if(table.length==0)
        {
            let y=(await GetAllreactCategories()).data
            setTable(y)
        }
       }
       const[table,setTable]=useState([])
        useEffect(()=>{
           doSomething1()
        },[])
// const[table,setTable]=useState([])
    return<>
    {/* {table.map((x,i)=>(<table className="table" key={x}>{x.categorId}---------{x.categoryName}</table> */}
    <div className="container mt-3" >         
    <h1>כל המוצרים</h1> 
  <table className="table table-bordered">
    <thead>
      <tr>
      <th>קוד הקטגוריה</th>
        <th>שם הקטגוריה</th>
        <th>עידכון</th>
        <th> מחיקה</th>

      </tr>
    </thead>
    <tbody>
    {table.map((x,i)=>(<tr key={i}><td>{x.categorId}</td><td>{x.categoryName}</td><td><Link className="btn btn-outline-dark" to={`updateCategory/${x.categorId}`}>📝</Link></td>
    <td><button className="btn btn-outline-dark" onClick={()=>dell(x.categorId)}>🗑️</button></td>
    {/* <button className="btn btn-primary">+</button><button className="btn btn-primary">-</button><td></td> */}
    </tr>))}
    </tbody>
  </table>
  <Outlet></Outlet>
</div>
{/* <button className="btn btn-outline-dark">להוספת קטגוריה</button> */}
<Link to={`addCategory`} className="btn btn-outline-dark"
//  onClick={()=>setIs(!is)}
 >להוספת קטגוריה</Link>
{/* <UpdateCategory is={is}></UpdateCategory> */}

    {/* ))} */}
    </>
}