 'use client'

import Link from "next/link"



export default function Header (){

return(
   <>
           <header>
                    <Link className="iconSPXheader" href="#">
                     <img 
                     className="iconSPXheader" 
                     src='/spacexsvg.svg' 
                     alt="SpaceX icon" />
                    </Link>
                    
                    
                    <Link className="hambuMenu" href="#">
                     <img 
                     src="/icons8-menú.svg" 
                     alt="Hamburguer menu icon" />
                     </Link>
          </header>
   </>
)
}

