import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div
          className="column eight wide"
          style={{
            textAlign: "center",
            paddingTop: "20px",
            marginTop: "10px",
            border: "3px solid darkgrey",
            background: "lightgrey",
          }}
        >
          <SongDetail />
        </div>
      </div>
    </div>
  );
};
export default App;
