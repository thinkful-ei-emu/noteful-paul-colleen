import React from "react";
import "./Note.css";
import { Link } from "react-router-dom";

class Note extends React.Component {
  render() {
    return (
      <div>
        {this.props.isNotLink === undefined ? (
          <Link to={`/note/${this.props.title}`}>
            <div className="note">
              <h4>{this.props.title}</h4>
              <p>Date Modified: {this.props.modDate.substring(0, 10)}</p>
              <button>Delete Note</button>
            </div>
          </Link>
        ) : (
          <div className="note">
            <h4>{this.props.title}</h4>
            <p>Date Modified: {this.props.modDate.substring(0, 10)}</p>
            <button>Delete Note</button>
          </div>
        )}
      </div>
    );
  }
}

export default Note;
