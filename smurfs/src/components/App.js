import React, { Component } from 'react';
import './App.css';
import {createSmurf,getSmurfs} from '../actions';
import {connect} from 'react-redux';
import mushroom from './smurfmushroom1.png'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component{
  state={
    name:'',
    age:Number(''),
    height:''
  }
  //inputs
  handleInputChange=event=>{
    this.setState({[event.target.name]:event.target.value});
  };
  //addsmurf
  addSmurf=()=>{
    const{name,age,height}=this.state;
    this.props.createSmurf({name,age,height});
    this.setState({name:'',age:'',height:''});
  };
  componentDidMount(){
    //console log to see my props
    console.log(this.props);
    this.props.getSmurfs()
    //getsmurfs comes from actions
  }
render(){
  return(
    
    <div className='WholeApp'>
      <img className='Mushroom'src={mushroom}alt='mushroom'/>
      <div className='Info'>
      <div className='Title'>
        <h1>Smurfs Redux</h1>
        <h2>Smurfin up some Redux!</h2>
      </div>
    <ul>
      {this.props.smurfs.map(smurf=>{
        return(
          <div className='smurfBox'>
            <li key={smurf.id}>{smurf.name} </li>
            <li>{smurf.age}</li>
            <li>{smurf.height}</li>
          </div>
        );
      })}
    </ul>
    <form className='smurfForm'>
      <input value={this.state.name}name='name'type='text'placeholder='Smurfs Name'onChange={this.handleInputChange}/>
      <input value={this.state.age}name='age'type='text'placeholder='Smurfs Age'onChange={this.handleInputChange}/>
      <input value={this.state.height}name='height'type='text'placeholder='Smurfs Height'onChange={this.handleInputChange}/>
        <button onClick={()=>this.addSmurf()}type='button'>
          Add Smurf
        </button>
    </form>
    </div>
    <img className='Mushroom'src={mushroom}alt='mushroom'/>
  </div>
  
  );
 }
}
const mapStateToProps=state=>{
  console.log(state)
  return{
    smurfs:state.smurfs
  };
}
export default connect(
  mapStateToProps,
  {createSmurf,getSmurfs}

)(App);
