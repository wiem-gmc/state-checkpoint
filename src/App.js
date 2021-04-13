import React, { Component } from 'react'
import Img from './a.png'

class App extends Component {
  constructor(props){
  super(props);
  this.state={
    fullName:"wiem",
    bio: "Lorem",
    imgSrc: Img,
    profession:"ingénieur",
    show:true,
    seconds:0
  }
this.togglebtn=this.togglebtn.bind(this);

}
  togglebtn(){this.setState(state=>
    ({show:!state.show}));
  }

  inc() {
    this.setState(state=>({
    seconds: state.seconds+1
  }))}

  componentDidMount(){
    console.log('msg');
    this.setInterval=setInterval(()=>this.inc(),1000);}
    
  render(){
    const code= this.state.show?  (<div>
      <h1>Name:{this.state.fullName}</h1>
      <h1>bio:{this.state.bio}</h1>
      <img src={this.state.imgSrc} alt="img"></img>
      {/* <h1>imgSrc:{this.state.imgSrc}</h1> */}
      <h1>profession:{this.state.profession}</h1>
    </div>):null;
    return (
      <div>
        {this.state.seconds}
        <br/>
        <button onClick={this.togglebtn}>{this.state.show? "Hide":"show"}</button>
        <br/>
        {code}
    </div>
         )

  }
}
export default App