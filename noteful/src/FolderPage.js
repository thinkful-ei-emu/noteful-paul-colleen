import React from "react";
import Note from "./Note";
import './FolderPage.css';

class FolderPage extends React.Component {
  render() {
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
              Link to {folder.name}
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
