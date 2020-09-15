
import React, { Component } from 'react'
import axios from 'axios'
import EmojiSearched from './EmojiSearched'
import './search.css'
class FetchData extends Component {
    constructor() {
        super()
    
        this.state = {
             emoji:[],
             typedEmoji:'',
             
        }
    }
   
    searchEmoji=event=>{
        this.setState({
            typedEmoji:event.target.value
        })
    }
    
    componentDidMount()
    {
     axios.get('https://unpkg.com/emoji.json@13.0.0/emoji.json').then(response=>{
         console.log(response.data)
         this.setState({
             emoji:response.data
         })
        
     }).catch(err=>
        {
            console.log(err)
        })
        
        
    }

    
    render() {
      
         
        return (
           
            <div className="new-chat-window">
            <i className="fa fa-search mt-1" aria-hidden="true">
            </i>
            <input type="text"  value={this.state.typedEmoji} onChange={this.searchEmoji} className="  border border-primary form-control new-chat-window-input" id="new-chat-window-input" placeholder="Search"  >
            </input>
            
          
               
               {this.state.emoji&&this.state.typedEmoji?
                (  <div className="mt-5 border border-white bg-light">
                {this.state.emoji.map((item,index)=>{
                   
               if(item.subgroup===this.state.typedEmoji || item.name===this.state.typedEmoji || item.group===this.state.typedEmoji)
               {
                const arr={ele:[]}
                arr.ele.push(item)
                return  <EmojiSearched key={item.codes} value={arr.ele}></EmojiSearched> 
               }
                 
              
                 
            })
        }
        </div>)
            :null}
            </div>
        
            
              
                
           
        )
    }
}

export default FetchData
