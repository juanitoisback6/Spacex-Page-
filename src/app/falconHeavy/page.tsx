



'use client'
 import AnimarAlScroll  from "@/Components/AnimateScroll";





export default function falconH () {

          return(
<>
  <video 
    className="starshipLanding"
    autoPlay 
    muted 
    loop>
   
  <source src="/falconh.mp4" type="video/mp4" />
  <p>
    Your browser doesn't support HTML video.  
  </p>
</video>

<img className="canvaArt" src="/Vector2.png" alt="" />

<h2 className="rocketTitle">Falcon Heavy</h2>

<section className="starcontainer">

          <div className="rocketPartimg">
            <AnimarAlScroll>
              
                    <img  
                    src="/falconH(1).png" alt="falcon heavy image" />
                    
            </AnimarAlScroll>
          </div>
          <div className="rocketInfoPart">
            
            <AnimarAlScroll>

                    <h2 className="rocketInfoPartTittle"> Falcon Heavy </h2>
                    
            </AnimarAlScroll>

            <AnimarAlScroll>
              
              <p className="description">"With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost."</p>

            </AnimarAlScroll>
                    
<AnimarAlScroll> 
                    <div className="rocketS">
                              <div>
                                <h2>STAGES</h2>
                                <p>2</p>
                              </div>
                              <div>
                                <h2>BOOSTERS</h2>
                                <p>2</p>
                              </div>
                              <div>
                                <h2>ENGINES</h2>
                                <p>2</p>
                              </div>
                             
                              
                    </div> 
 </AnimarAlScroll>   
                    
                    
          </div>
</section>
<section className="landingPart">
                              <video 
    className="starshipLanding"
    autoPlay 
    muted 
    loop>
   
  <source src="/falconHlanding.mp4" type="video/mp4" />
  <p>
    Your browser doesn't support HTML video.  
  </p>
</video>
                    </section>
</>
)
}








  
 