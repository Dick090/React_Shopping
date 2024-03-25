import React from 'react'
import { NavLink } from 'react-router-dom'


function Header() {
const links = [
  {id: 1,url:'Home', path:'/'},
  {id: 2,url:'About',path:"about"},
  {id: 3,url:'Services' , path: "service"},
  {id: 4,url:'contact' , path: "contact"},
  {id: 5,url:'SingUP' , path: "signup"},
]


  return (
    <div>
      <header>
        <ul>
          {links.map((links)=>{
            return( <>
            <li key={links.id} >
            <NavLink to={links.path}> {links.url}</NavLink> 
               </li>
            </>)
          })}
        </ul>
      </header>
    </div>
  )
}

export default Header
