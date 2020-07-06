import React, { Component } from "react"
import '../FilmStyle.css'

class Film extends Component {

    render(){
        return (
            <div className="film-container">
                <div>
                    {this.props.id}
                    {this.props.title}
                </div>
       
                <div>
                    <img src={this.props.poster} className="poster"  crossOrigin="anonymous"/>
                    {/* {this.props.poster} */}
                </div>
                <div>
                   Rating: {this.props.rating} ⭐
                </div>
                <div>
                    <a href={this.props.link}>IMDB LINK</a>
                </div>
            </div>
        )
    }

}

export default Film