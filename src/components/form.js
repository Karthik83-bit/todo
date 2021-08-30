import { placeholder } from '@babel/types'
import React, { Component } from 'react'
import shortid from 'shortid'
import {FaPlus} from 'react-icons/fa'
 class Form extends Component {
    constructor(){
        super()
        this.state={
           
            inputitem:"",
           
         
        }
      //this.handlesubmit=this.handlesubmit.bind(this)
      this.inputhandler=this.inputhandler.bind(this)
    
  
    }
    inputhandler(e){
       
        this.setState({
  inputitem:e.target.value
        }
        )
      }
     handlesubmit=(e)=>{
     e.preventDefault();
     if(this.state.inputitem===""){
         alert("field cant be empty")
     }
   
      else{
      
        this.props.clickhandler({
            text:this.state.inputitem,
            completed:false,
            id:shortid.generate()
           
        })
        this.setState({
            inputitem:""
        })
      }
    }
  


    render() {
        return (
            <div>
         <form  onSubmit={this.handlesubmit} style={{display:"flex",alignItems:'center',marginTop:"10px"}}>
               <input  className="inp" type="text" value={this.state.inputitem } onChange={this.inputhandler} placeholder="...todos"></input> 
               <button className="submit" type="submit" onClick={this.handlesubmit}><FaPlus className="submitlogo" size="17px" color="white"/></button>
             
               </form>
            </div>
        )
    }
}

export default Form
