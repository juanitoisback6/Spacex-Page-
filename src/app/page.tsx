 
export default function Home() {

 





  return (
    <>
 
    <video 
    className="earthVideo"
    autoPlay 
    muted 
    loop>
   
  <source src="/Video Project.mp4" type="video/mp4" />
  <p>
    Your browser doesn't support HTML video. Here is a
    <a href="myVideo.mp4" download="myVideo.mp4">link to the video</a> instead.
  </p>
</video>


    </>
  );
}
