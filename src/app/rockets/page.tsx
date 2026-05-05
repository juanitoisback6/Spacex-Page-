






export default function RocketsPage () {

return(
          <>
          <video 
    className="starshipLanding"
    autoPlay 
    muted 
    loop>
   
  <source src="/Starshiplanding2.mp4" type="video/mp4" />
  <p>
    Your browser doesn't support HTML video.  
  </p>
</video>

<img className="canvaArt" src="/Vector2.png" alt="" />

<section className="starcontainer">
          <div className="rocketPartimg">

                    <h2 className="rocketTitle">STARSHIP</h2>
                    <img src="/starship.svg" alt="painter looking at the top of the page" />
          </div>
          <div className="rocketInfoPart">
                    <h2>STARSHIP</h2>
                    <p className="description">"With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost."</p>

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
                   
          </div>
</section>
          </>
)
}
