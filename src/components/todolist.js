import React, { Component } from 'react'
import Form from './form'
import Todos from './todos'

class Todolist extends Component {
     
    constructor(){
        super()
        this.state={
            list:[],
            option:"All",
        
         
        }
     
        this.addtodo=this.addtodo.bind(this)
      this.completehandler=this.completehandler.bind(this)
   this.selecthandler=this.selecthandler.bind(this)
//    this.uncompletehandler=this.uncompletehandler.bind(this)
      
    }
   









  
      addtodo(todo){
       
          this.setState({
              list:[...this.state.list,todo],
              
            
          })
          
        
        
      
      }
      completehandler(key){
        
      
          this.setState(prev=>({
            
              list:this.state.list.map((items)=>{
              
                if(key===items.id){
               
                    return{
                      ...items,completed:!prev.completed
                    }
               
                   
                }
              return items
            })
          }))
        }

       

deletehandler(key){
    this.setState({
        list:this.state.list.filter(items=>{
            if(key===items.id){
                return null
            }
            else{
                return items
            }
        })
    })
}

selecthandler(e){
    e.preventDefault()
    this.setState({
        option:e.target.value
    })
    
   
}


// uncompletehandler(key){

//     this.setState({
//         list:this.state.list.filter(items=>{
//             if(items.id===key){
//                 console.log(items)
//                 return {...items,completed:!this.state.completed}
//             }
//             return items
//         })
//     })


// }
      
  
    
    render() {
        let todo=[]
   
   if(this.state.option==="Completed"){
       todo=this.state.list.filter(items=>items.completed)
    console.log(todo)}
 else if(this.state.option==="Uncompleted"){
    todo=this.state.list.filter(items=>
!items.completed)}
else{
    todo=this.state.list
}

   
        return (
            <div style={{
                display:'flex',
                justifyContent:'center',
                flexDirection:'column',
                alignItems:'center'
            }}>
           
          
                <Form   clickhandler={this.addtodo} inputhandler={this.inputhandler}  />
                <select value={this.state.option} onChange={this.selecthandler} style={{height:"30px", textAlign:"center",border:"2px slid black"}}>
                   <option  >All</option>
                   <option>Completed</option>
                   <option>Uncompleted</option>
               </select>
                {todo.map((items)=>{
                    
                    
                    return <Todos    item={items} itemtext={items.text} key={items.id} itemskey={items.key} completehandler={()=>this.completehandler(items.id,Event)}  uncompletehandler={()=>this.uncompletehandler(items.id)} deletehandler={()=>this.deletehandler(items.id)}/>               })}
            </div>
        )
    }
}

export default Todolist
