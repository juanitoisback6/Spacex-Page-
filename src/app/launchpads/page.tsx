import Image from "next/image";





export default function LaunchPads (){

 return(
          <>
           <section className="titleLPDS">
             <h2>LAUNCHPADS</h2>        
           </section>
           <section className="sectionLPDS">
                    <Image
                    className="imglaunchpads"
                    src="/launchpads.png"
                    alt="Launchpads image"
                    width= {1100} 
                    height={1100}
                    />
           </section>
            <section className="sectionLPDSSBTX">
                    <h2>Starbase, Texas</h2>
                    <Image
                    className="imglaunchpads"
                    src="/starbase.jpg"
                    alt="Launchpads image"
                    width= {1100} 
                    height={1100}
                    />
           </section>
          </>
 );  
}