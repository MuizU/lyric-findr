import React, {Component} from 'react'
import axios from 'axios'
import Spinner from '../layout/Spinner'
import {Link} from 'react-router-dom'

class Lyrics extends Component {
    state = {
      lyrics:{},
      track:{},
      isLyrics:0 // 0 == loading, 1 == no lyrics, 2 == contains lyrics

    }
  async componentDidMount(){
  const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/songs/get-details',
      params: {key: this.props.match.params.id, locale: 'en-US'},
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_SHZM_KEY,
      'x-rapidapi-host': 'shazam.p.rapidapi.com'
    }
  };

    const res = await axios.request(options)
    let lyrics = res.data.sections.find(a=>{
        return a.type.toLowerCase()=="lyrics"
    })
    if(!!lyrics&&!!lyrics.text&&!!lyrics.text.length){
      this.setState({isLyrics:2})
    }
    else{
      this.setState({isLyrics:1})
    }
    lyrics = lyrics
    this.setState({lyrics})
    let section = res.data.sections.find(a=>{
      return a.type.toUpperCase()==="SONG"
     })
    let songDetails = {}
    section.metadata.forEach(a=>{
      let item = {}
      songDetails[a.title] = a.text
    })

    const track = {title: res.data.title, subtitle: res.data.subtitle,url:  res.data.url,genre: res.data.genres.primary, albmId: res.data.albumadamid, songDetails}
    this.setState({track})
}
  render() {
    let {track, lyrics, isLyrics} = this.state
    if(isLyrics===0){
      return <Spinner/>
    }
    else if(isLyrics===2&&!!lyrics&&!!lyrics.text&&!!track&&!!track.songDetails){
      console.log("LYRICS TEXT: ",track.songDetails)
      return(
        <React.Fragment>
          <Link exact to="/" className="btn btn-dark btn-sm mb-4"><i className="fas fa-arrow-left"></i> Go Back</Link>
          <div className="card">
            <div className="card-header">
              {track.title} by <span className="text-secondary">{track.subtitle}</span>
            </div>
            <div className="card-body">
              {lyrics.text.map(a=>{
                return <p className="card-text">{a}</p>
              })}
            </div>
            <ul className="list-group mt-3">
              <li className="list-group-item">
                <strong>Album ID</strong>: {track.albmId}
              </li>
              <li className="list-group-item">
                <strong>Music Genre</strong>: {track.genre}
              </li>
              <li className="list-group-item">
                <strong>First Released</strong>: {track.songDetails.Released}
              </li>
            </ul>
          </div>
          </React.Fragment>
      )
    }
    return (
        <React.Fragment>
          <Link exact to="/" className="btn btn-dark btn-sm mb-4"><i className="fas fa-arrow-left"></i> Go Back</Link>
        <h1>Lyrics are Unavailable</h1>
      </React.Fragment>
    );
  }
}

export default Lyrics
