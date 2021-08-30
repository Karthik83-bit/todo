import React, { Component } from 'react'
import { MdDone,MdDelete } from 'react-icons/md'
import {FaUndo} from 'react-icons/fa'



class Todos extends Component {
    render() {
        return (
            <div  className="todo" style={{ backgroundColor:this.props.item.completed ?'black':"",
            color:this.props.item.completed ?'white':""}}>
                <p style={{textDecorationLine:this.props.item.completed ?'line-through':"",
               
                }}>{this.props.itemtext}</p>
                {console.log(this.props.item.completed)}
               <div className="buttons">
                <button  onClick={this.props.completehandler} key={this.props.itemskey}  ><MdDone size="17px" color="black"/></button>
                <button onClick={this.props.deletehandler}><MdDelete size="17px" color="black"/></button>
                </div>
                {/* <button  onClick={this.props.uncompletehandler} ><FaUndo size="17px" color="black"/></button> */}
            </div>
        )
    }
}

export default Todos
