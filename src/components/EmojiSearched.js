import React, { Component } from 'react'

class EmojiSearched extends Component {
   
    render() {
        console.log(this.props)
        return (
            
            <span className="pr-2 ">
              {this.props.value.map((item,index)=><span key={index}>{item.char}</span>)}
            </span>
           
        )
    }
}

export default EmojiSearched
