import React, { useState } from 'react'
import {FaRegEyeSlash, FaEye } from "react-icons/fa";

const BrossMe = ()=>{

}





function Form() {

  const [name,SetName] = useState("");
  const [Emsil,SetEmsil] = useState("");
  const [password,Setpassword] = useState("");
  const [comfrimpasswod,Setcomfrimpasswod] = useState("");
  // console.log(name);
  // console.log(Emsil);
  // console.log(password);
  // console.log(comfrimpasswod);


  const er2ror =(e)=>{
           e.preventDefault();
           console.log(name);
  };


  return (
    <div>
      <form action="" onSubmit={er2ror}>
        <input type="text"  name='' id='' placeholder='Enter your FriName' onChange={(e)=>SetName(e.target.value)}/>
        <input type="email"  name='' id='' placeholder='Enter your Email' onChange={(e)=>SetEmsil(e.target.value)}/>
        <input type="Password"  name='' id=''onChange={(e)=>Setpassword(e.target.value)} placeholder='Input your Password'/>
        <FaEye />
        <input type="password"  name='' onChange={(e)=>Setcomfrimpasswod(e.target.value)} id='' placeholder='Cpnfrim password '/>

        <button >Register</button>
      </form>
    </div>
  )
}

export default Form

 