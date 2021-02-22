import React, {Component} from 'react';
import Videodata from './page1';
import Imagedata from './page2';
import Text from './page3';
import Table from './page4';
import Email from './page5';
import './style.css'

class Body extends Component {

  render(){

    var displaycontent = ()=>{
      var activetab = this.props.activetab;
      if(activetab ==1){
        return <Videodata/>
      }else if (activetab ==2){
        return <Imagedata/>
      }else if (activetab ==3){
        return <Text/>
      }else if (activetab ==4){
        return <Table/>
      }else if(activetab ==5){
        return <Email/>
      }
      else{
        return <div className ="text">page 6</div>
      }
    }
    return (displaycontent())
  }
}
export default Body;
