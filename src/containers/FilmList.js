import React, { Component } from "react"
import Film from "../components/Film"
import '../FilmsListStyle.css'
let List = require('../top_100_movies.json')

class FilmList extends Component {
   
    render(){
        

    const filmNodes = List.map((film) => {
        return <Film
        key={film.id}
        id={film.id + 1}
        title={film.title}
        poster={film.poster}
        rating={film.rating}
        link={film.link}
        />
    })

        return(
            <div className="list-container">
                {filmNodes}
            </div>
        )
    }
}

export default FilmList;