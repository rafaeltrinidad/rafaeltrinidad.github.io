import React from "react"
import ReactDOM from "react-dom"
import './style.css';

function Videodata(){
  return(
    <div>
    <body>

            <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>
            <div className="grid-container">
              <div className="grid-item"> <iframe className="myImages" id="myImg" style={{maxWidth: '100%', height: 'auto'}} width={400} height={315} src="https://www.youtube.com/embed/hTf1otkzTz4" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> </div>
              <div className="grid-item"> <iframe className="myImages" id="myImg" style={{maxWidth: '100%', height: 'auto'}} width={400} height={315} src="https://www.youtube.com/embed/_4WrKeoeZhk" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> </div>
              <div className="grid-item"> <iframe className="myImages" id="myImg" style={{maxWidth: '100%', height: 'auto'}} width={400} height={315} src="https://www.youtube.com/embed/0Kvw2BPKjz0" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> </div>
              <div className="grid-item"> <iframe className="myImages" id="myImg" style={{maxWidth: '100%', height: 'auto'}} width={400} height={315} src="https://www.youtube.com/embed/FyUfZeoMeB8" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> </div>
            </div>
            {/* The Modal */}
            <div id="myModal" className="modal">
              {/* Modal Content (The Image) */}
              <img className="modal-content" id="img01" />
            </div>
</body>


    </div>
  )
}

export default Videodata;
