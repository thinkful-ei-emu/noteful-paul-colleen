import React from 'react'
import Note from './Note'
import './MainPage.css'

class MainPage extends React.Component {

  render(){
    return(<div className="main_page">
      Main Page
      <div className="folders">
      {this.props.folders.map(folder=><div className="folder">Link to {folder.name}</div>)}
        <button>Add Folder</button>
      </div>
      <div className="notes">
        {this.props.notes.map(note=><Note title={note.name} modDate={note.modified}/>)}
      <button>Add Note</button>
      </div>
    </div>)
  }
}

export default MainPage