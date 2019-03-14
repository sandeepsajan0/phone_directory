import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      name:[],
      phone:[],
      temp_name:"",
      temp_phone:"",
      clicked:false
    }
    this.AddSubscriber = this.AddSubscriber.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleBack = this.handleBack.bind(this)
  }

  handleChange(event){
    console.log(event.target.name)
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  handleSubmit(){
    this.setState(state =>{
      const name = state.name.concat(state.temp_name)
      const phone = state.phone.concat(state.temp_phone)
      const clicked = false
      const temp_phone = ""
      const temp_name = ""
      return{
        name,
        phone,
        clicked,
        temp_name,
        temp_phone
      }
    })
  }

  handleBack(){
    this.setState({
      clicked:false,
      temp_phone:"",
      temp_name:""
    })
  }

  handleDelete(props1){
    this.setState(state =>{
      const index = state.phone.indexOf(props1)
      if(index > -1){
        state.name.splice(index,1)
        state.phone.splice(index,1)
        const name = state.name
        const phone = state.phone
        console.log("name",name,state.name, )
        return{
          name,
          phone
        }
      }
    })
 
  }


  AddSubscriber(){
    this.setState({
      clicked:true
        })
    console.log("inside  add",this.state.clicked)
  }

  render() {
    console.log("render",this.state.name, this.state.phone)
    
    const name_list = Object.keys(this.state.name).map(item=> <p>{this.state.name[item]}</p>)
    // const phone_list = Object.keys(this.state.phone).map(item=> <p>{this.state.phone[item]}</p>)
    return (
      <div>
        <div className="header">
          <h1 style={{color:"white"}}> Phone Directory </h1>
        </div>
        {this.state.clicked ? (
          <form style={{marginLeft:"10px"}} onSubmit={this.handleSubmit}>
            <button className="button button1" onClick={this.handleBack}>Back</button>
            <p> Name: <br />
            <input name="temp_name" onChange={this.handleChange} type="text" /></p>
            <p>Phone: <br />
            <input name="temp_phone" onChange={this.handleChange} type="text" /></p>
            <h3> Subscriber to be added:</h3>
            Name: {this.state.temp_name}
            <br />
            Phone: {this.state.temp_phone}
            <br />
            <input className="button" type="submit" value="ADD"/>
          </form>
          ): (
          <div>
          <button className="button" onClick={this.AddSubscriber}>ADD</button>
          <div className="container">
            <div>
              <h3>Name</h3>
              {name_list}
            </div>
            <div>
              <h3>Phone</h3>
              { (this.state.phone.length >0) ? (
                this.state.phone.map(item => {return(<p>{item} {" "} <button className="button button2" onClick={() => this.handleDelete(item)} >DELETE</button></p>)})
                ): null
              }
            </div>
          </div>
          </div>
          )
        }
        
      </div>
    );
  }
}

export default App;
            {/*<div>
              <p></p>
              { for(var i=0;i< {this.state.name}.length,i++){
              <button onClick={this.handleDelete}>DELETE</button>}
            }
            </div>*/}