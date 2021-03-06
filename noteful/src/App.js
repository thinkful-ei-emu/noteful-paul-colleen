import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import MainPage from "./MainPage";
import FolderPage from "./FolderPage";
import NotePage from "./NotePage";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <MainPage
                notes={this.props.store.notes}
                folders={this.props.store.folders}
              />
            )}
          />
          <Route
            path="/folder/:folderName"
            render={({ match }) => (
              <FolderPage
                folders={this.props.store.folders}
                notes={this.props.store.notes}
                currentFolder={match.params.folderName}
               
              />
            )}
          />

          <Route
            path="/note/:noteName"
            render={({ match, history }) => (
              <NotePage
                notes={this.props.store.notes}
                folders={this.props.store.folders}
                currentName={match.params.noteName}
                history={history}
              />
            )}
          />

          <Route render={()=><p>Page not found</p>} />
        </Switch>

      </div>
    );
  }
}

export default App;
