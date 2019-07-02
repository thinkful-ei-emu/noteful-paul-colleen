import React from 'react';
import Note from './Note';
import {Link} from 'react-router-dom';
import './NotePage.css'

class NotePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nothing: []
    }
  }
  render() {
    const note = this.props.notes.find(note=>note.name.toLowerCase()===this.props.currentName.toLowerCase());
    if(note === undefined){return <p>This is not a link!</p>}
    const currentFolderId= note.folderId

    return (
      <div className="folder_page">
        <div className="folders">
          <button onClick={()=> this.props.history.goBack()}>Go Back </button>
          <h3>{
            this.props.folders.find(folder => folder.id === currentFolderId).name
            }
          </h3>
        </div>
        <div className="notes">
          <Note title={note.name} modDate={note.modified} isNotLink={true} />
          <p> {note.content} </p>
        </div>
      </div>
    );
  }
}

export default NotePage