import React from 'react'
import Note from './Note'
import './MainPage.css'
import { Link } from 'react-router-dom';

class MainPage extends React.Component {

  render(){
    return(<div className="main_page">
      <div className="folders">
      {this.props.folders.map(folder=><div className="folder"><Link to={`/folder/${folder.name}`}>{folder.name}</Link></div>)}
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