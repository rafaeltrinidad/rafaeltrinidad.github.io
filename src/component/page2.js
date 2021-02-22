import React from "react"
import ReactDOM from "react-dom"
import './style.css';
import Logo1 from './back_to_the_future_bernie.jpeg';
import Logo2 from './endgame.jpg';
import Logo3 from './et_bernie.jpeg';
import Logo4 from './fun.jpg';
import Logo5 from './game-meme.png';
import Logo6 from './hot-cool-meme.jpg';
import Logo7 from './nuggets.jpg';
import Logo8 from './Wake-up-meme.jpg';
import Logo9 from './Zoom-meme-2.jpg';
import Logo10 from './Zoom-meme.png';
import Logo11 from './got_bernie.jpeg';
import Logo12 from './jeep-meme.jpg';

function Imagedata(){

  return(
    <div>
    <body>

        {/*These websites helped me with making my website responsive: https://www.w3schools.com/html/html_responsive.asp
	https://css-tricks.com/scaled-proportional-blocks-with-css-and-javascript/ */}

        <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>
        <div className="grid-container">
          <div className="grid-item"> <img className="myImages" id="myImg" src={Logo5} style={{maxWidth: '100%', height: 'auto'}} width="400px" height="300px" alt="game-meme" /> </div>
          <div className="grid-item"> <img className="myImages" id="myImg" src={Logo6} style={{maxWidth: '100%', height: 'auto'}} width="350px" height="300px" alt="hot-cool-meme" /> </div>
          <div className="grid-item"> <img className="myImages" id="myImg" src={Logo12} style={{maxWidth: '100%', height: 'auto'}} width="400px" height="300px" alt="jeep-meme" /> </div>
          <div className="grid-item"> <img className="myImages" id="myImg" src={Logo8} style={{maxWidth: '100%', height: 'auto'}} width="400px" height="300px" alt="Wake-up-meme" /> </div>
          <div className="grid-item"> <img className="myImages" id="myImg" src={Logo10} style={{maxWidth: '100%', height: 'auto'}} width="350px" height="300px" alt="Zoom-meme" /> </div>
          <div className="grid-item"> <img className="myImages" id="myImg" src={Logo9} style={{maxWidth: '100%', height: 'auto'}} width="450px" height="300px" alt="Zoom-meme-2" /> </div>
          <div className="grid-item"> <img className="myImages" id="myImg" src={Logo3} style={{maxWidth: '100%', height: 'auto'}} width="400px" height="300px" alt="et_bernie" /> </div>
          <div className="grid-item"> <img className="myImages" id="myImg" src={Logo1} style={{maxWidth: '100%', height: 'auto'}} width="400px" height="300px" alt="back_to_the_future_bernie" /> </div>
          <div className="grid-item"> <img className="myImages" id="myImg" src={Logo4} style={{maxWidth: '100%', height: 'auto'}} width="400px" height="300px" alt="fun" /> </div>
          <div className="grid-item"> <img className="myImages" id="myImg" src={Logo11} style={{maxWidth: '100%', height: 'auto'}} width="400px" height="300px" alt="got_bernie" /> </div>
          <div className="grid-item"> <img className="myImages" id="myImg" src={Logo7} style={{maxWidth: '100%', height: 'auto'}} width="400px" height="300px" alt="nuggets" /> </div>
          <div className="grid-item"> <img className="myImages" id="myImg" src={Logo2} style={{maxWidth: '100%', height: 'auto'}} width="400px" height="300px" alt="endgame" /> </div>
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


export default Imagedata;
