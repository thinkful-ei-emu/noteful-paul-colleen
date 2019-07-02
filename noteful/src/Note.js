import React from 'react'

class Note extends React.Component {
  render(){
    return (
      <div className="note">
        <h4>{this.props.title}</h4>
        <p>Date Modified: {this.props.modDate.substring(0, 10)}</p>
      </div>
    )
  }
}

export default Note