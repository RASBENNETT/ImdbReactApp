import React from 'react';
import FilmList from "./containers/FilmList"

function App() {


    const list_container = {
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
      width: "80vw",
      margin: "auto"
    }
    return (
      <FilmList style={list_container}/>
    )
}
  


export default App;
