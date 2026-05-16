 'use client'

import Link from "next/link"
import { useState } from "react"



export default function Header (){

const [menu,setMenu]=useState(false);

const [rocketsMenu, setRocketsMenu]=useState(false);

function closeNav (){
    setMenu(false)
}

return(
   <>
           <header>
                    <Link onClick={closeNav} className="iconSPXheader" href="/">
                     <img 
                     className="iconSPXheader" 
                     src='/spacexsvg.svg' 
                     alt="SpaceX icon" />
                    </Link>
                    
                    <button className="hambuMenu">
                     <img 
                     onClick={()=>{setMenu(!menu)}}
                     src="/icons8-menú.svg" 
                     alt="Hamburguer menu icon" />
                    </button>

                    <nav className={`side-menu ${menu ? 'open' : ''} `}>
                     
                     <ul className="menu-links">
                        <li>
            <button className="closeX" onClick={() => setMenu(false)}>X </button>
          </li>
                        <li> <Link onClick={closeNav} href="/">Upcoming Launches 
                        </Link>
                        </li> 
                        <button className="btnRockets" onClick={()=>{setRocketsMenu(!rocketsMenu)}}> Rockets {rocketsMenu ? '▲' : '▼'} </button>
                        <ul className={`submenu ${rocketsMenu ? 'mostrar' : 'ocultar'}`}>
<<<<<<< HEAD
                        <li><Link onClick={closeNav} href="/falcon9">Falcon 9</Link></li>
                        <li><Link onClick={closeNav} href="/falconHeavy">Falcon Heavy</Link></li>
=======
                        <li><Link href="#">Falcon 9</Link></li>
                        <li><Link href="#">Falcon Heavy</Link></li>
>>>>>>> 858824d6e7783f88e8d3f10fded9520d33ad56c4
                        <li><Link onClick={closeNav} href="/starship">Starship</Link></li>
                        </ul>


                        <li> <Link onClick={closeNav} href="/launchpads"> Launchpads </Link></li>
<<<<<<< HEAD
                        <li> <Link onClick={closeNav} href="#"> Ships</Link></li>
                        <li> <Link onClick={closeNav} href="#"> Past Launches</Link></li>
=======
                        <li> <Link href="#"> Ships</Link></li>
                        <li> <Link href="#"> Past Launches</Link></li>
>>>>>>> 858824d6e7783f88e8d3f10fded9520d33ad56c4
                     </ul>
                     </nav> 
          </header>
   </>
)
}

