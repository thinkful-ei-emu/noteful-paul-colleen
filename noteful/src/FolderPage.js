import React from "react";
import Note from "./Note";
import './FolderPage.css';
import {Link} from 'react-router-dom';

class FolderPage extends React.Component {
  render() {
    const currentFolder=this.props.folders.find(folder => folder.name === this.props.currentFolder
      )
      if(currentFolder === undefined){return <p>This isn't a link</p>}
    return (
      <div className="folder_page">
        <div className="folders">
          {this.props.folders.map(folder => (
            <div
              className={
                folder.name === this.props.currentFolder
                  ? "folder highlight"
                  : "folder"
              }
            >
              <Link to={`/folder/${folder.name}`}>{folder.name}</Link>
            </div>
          ))}
          <button>Add Folder</button>
        </div>
        <div className="notes">
          {this.props.notes.filter(note => {
            if(note.folderId === this.props.currentFolderId){
              return true;
            } return false;
          })
          .map(note => (
            <Note title={note.name} modDate={note.modified} />
          ))}
          <button>Add Note</button>
        </div>
      </div>
    );
  }
}

export default FolderPage;
