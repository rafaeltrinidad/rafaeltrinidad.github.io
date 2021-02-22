import React from "react"
import ReactDOM from "react-dom"
import './style.css';

function Table(){
  return(
    <div>
    <body>

    <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>
        <h1>Projects</h1>
        <table border={1}>
          <tbody><tr>
              <th>Name</th>
              <th>Details</th>
              <th>Year</th>
            </tr>
            <tr>
              <td> <a href="https://www.signn.live/home">SigNN - Real-time ASL Alphabet Translator</a></td>
              <td>Collaborated with a team of other peers on developing a mobile app capable of
                real-time translation of American Sign Language (ASL) into English alphabet,
                achieved using MediaPipe, a machine learning pipeline developed by Google</td>
              <td>2019-2020</td>
            </tr>
            <tr>
              <td><a href="https://when2meet-6pm.herokuapp.com/">When-2-Meet CS 48 group project</a></td>
              <td>Collaborated with a group of five others on a webapp to help groups find an optimal
                time to meet, based off of the similarly named when2meet</td>
              <td>2019</td>
            </tr>
          </tbody></table>
    </body>
    </div>
  )
}

export default Table;
