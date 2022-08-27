import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react'
import axios from "axios"
import { Navigate, useNavigate } from 'react-router-dom';
export const Context=createContext()

const ContextProvider = ({children}) => {
  var p;
    const [data, setData] = useState([]);
    const [cart,setCart] = useState([]);
    const [sign,setSign] = useState([]);
    const navigate=useNavigate()
   async function getTodos () {
      const res=  await axios.get("https://warm-sea-77698.herokuapp.com/fruits")
       setData(res.data )               
      }
      useEffect(() => {
        getTodos();
       }, []);




  async  function getCart(){ 
    const res=  await axios.get("https://warm-sea-77698.herokuapp.com/diary_exercise")
    console.log(res.data)
    setCart(res.data )        
      }


    const handleAdd=(el,qty)=>{
            console.log(el.quantity,qty)
       axios.post("https://warm-sea-77698.herokuapp.com/diary_exercise",el).then(()=>getCart());
       alert("Fruit Added Successfully!!")
        
     }
     useEffect(()=>{
        getCart()
      },[])
      const handlePatch=(id,quan,energy,quantity,updated_energy)=>{
        return axios({
            url: `https://warm-sea-77698.herokuapp.com/diary_exercise/${id}`,
            method: "PATCH",
            data:{quantity:quantity+quan, updated_energy:updated_energy+(energy*quan)}
          }).then(()=>getCart());
      }
     const handleSignUp=(el)=>{
       const users=sign.find((elem)=>
         el.email===elem.email
       )
       
       if(users!==undefined)
       {
          alert("Already Exists!!")
       }
       else{
        axios.post("https://warm-sea-77698.herokuapp.com/trends",el);
        navigate("/login")
       }
       
      // axios.post("https://warm-sea-77698.herokuapp.com/trends",el);
     }
     
     async  function getSignUpData(){        
      const res=  await axios.get("https://warm-sea-77698.herokuapp.com/trends")
      //  console.log(res.data)
      setSign(res.data)        
        }

        const handleLogin=(el)=>{
          const user=sign.find((elem)=>
          el.email===elem.email && el.password===elem.password
        )
        // console.log(user)
        if(user===undefined)
        {
           alert("Wrong Credentials!!")
        }
        else{
          console.log(user)
        // p=user
         navigate("/")
        

         }
        }
// console.log("user",p)
// const x=handleLogin()
// console.log("p",p)
useEffect(()=>{
  getSignUpData()
},[])
  return (
    <div>
<Context.Provider value={{handleAdd,data,cart,getCart,handlePatch,handleSignUp,handleLogin,p}}>
    {children}
</Context.Provider>
    </div>
  )
}
export default ContextProvider