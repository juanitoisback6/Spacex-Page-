import Image from "next/image";





export default function LaunchPads (){

 return(
          <>
         
           <section className="sectionLPDS">
             <h2>LAUNCHPADS</h2> 
                    <Image
                    className="imglaunchpads"
                    src="launchpadcover.svg"
                    alt="Launchpad image"
                    width= {1100} 
                    height={1200}
                    />
           </section>
            <section className="sectionLPDSSBTX">
                    <h2>Starbase, Texas</h2>
                    <p>Located in Boca Chica, this site is specifically for the development, testing, and launch of the Starship rocket. It currently features an orbital launch site (Pad 1) and a second tower (Pad 2) under development, featuring advanced "mechazilla" catching arms.</p>
                    <Image
                    className="imglaunchpadstarbase"
                    src="/starbase.jpg"
                    alt="Launchpads image"
                    width= {3100} 
                    height={3100}
                    />
           </section>
           <section className="sectionLPDSCCSFS">
            <h2>Cape Canaveral Space Force Station (CCSFS) </h2>
            <p>Located at Cape Canaveral Space Force Station, this site is heavily used for Falcon 9, including Starlink and commercial missions.</p>
            <Image
              className="imgLPDSCCSFS"
              src="/Space_Launch_Complex_40_at_Cape_Canaveral_(aerial).jpg"
              alt="Launchpads image"
              width= {1100} 
              height={1100}
            >

            </Image>
           </section>
            <section className="sectionLPDSLC">
            <h2>Space Launch Complex 4E (SLC-4E) </h2>
            <p>Located at Vandenberg Space Force Base, used for West Coast Falcon 9 launches.</p>
            <Image
              className="imgLPDSLC"
              src="/SLC-4E.jpg"
              alt="Launchpads image"
              width= {3300} 
              height={3300}
            >

            </Image>
           </section>
          </>
 );  
}