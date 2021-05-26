import React, {useState} from "react"
import { Link } from 'react-router-dom'

const Track = (props) => {
  const {track} = props
  return(
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{track.subtitle}</h5>
          <p className="card-text">
            <strong> <i className="fas fa-play"></i> Track</strong>: {track.title}
            <br/>
            <img src={track.images.background} alt={track.title} style={{  height:'auto', maxWidth:"20%"  }} />
          </p>
          <Link to={`lyrics/track/${track.key}`} className="btn btn-dark btn-block"> <i className="fas fa-chevron-right"></i> View Lyrics</Link>
        </div>
        </div>
    </div>
    )
}

export default Track
