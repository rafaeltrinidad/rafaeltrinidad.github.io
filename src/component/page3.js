import React from "react"
import ReactDOM from "react-dom"
import './style.css';

function Text(){
  return(
    <div>
    <body>

            <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>
            <form>
              <label>First name:</label><br />
              <input type="text" id="fname" defaultValue="Rafael" /><br />
              <label> Last name:</label><br />
              <input type="text" id="fname" defaultValue="Trinidad" /><br /><br />
              <label>Favorite meme template</label><br />
              <input type="radio" id="fname"  /><label htmlFor="k">Spiderman pointing at Spiderman</label><br />
              <input type="radio" id="fname" /><label htmlFor="k">Distracted boyfriend</label><br />
              <input type="radio" id="fname"  /><label htmlFor="k">You know, I'm something of a scientist myself</label><br />
              <br />
              <input type="submit" defaultValue="Submit" />
            </form>
    </body>
    </div>
  )
}
export default Text;
