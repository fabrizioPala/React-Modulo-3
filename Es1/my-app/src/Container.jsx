import { useState } from 'react'
import './Container.css'
export function Container({title,children}){
    const [collapsed,setCollapsed]=useState(true)

function handleClick(){
    setCollapsed((t)=>!t)
}
    return (
        <>
         <div className='app'>
        <div onClick={ handleClick} className='app_title'>{title}</div>
        {!collapsed&&<div className='app_content'>{children}</div>}
        </div>
        </>
    )
}