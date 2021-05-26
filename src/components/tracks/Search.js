import React, {Component} from 'react'
import axios from 'axios'
import { Consumer } from '../../context'

class Search extends Component {
  state = {
    trackTitle:'',
    result:{}
  }
  onChange(e){
    this.setState({ [e.target.name]:e.target.value })
  }
  searchSong = async (dispatch, e ) =>{
    e.preventDefault()
    const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/search',
    params: {term: this.state.trackTitle, locale: 'en-US', offset: '0', limit: '10'},
    headers: {
    'x-rapidapi-key': process.env.REACT_APP_SHZM_KEY,
    'x-rapidapi-host': 'shazam.p.rapidapi.com'
    }
  };

  const req = await axios.request(options)
  dispatch({
      type:'SEARCH_SONGS',
      payload:req.data.tracks.hits.map(a=>a.track)
    })

    this.setState({trackTitle:''})

  }
  render() {
    return (
      <Consumer>
        {value=>{
          const {dispatch} = value
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <i className="fas fa-music"></i> Search for a Song
              </h1>
              <p className="lead text-center">Get your favorite song lyrics</p>
              <form onSubmit={ this.searchSong.bind(this, dispatch) }>
                <div className="form-group">
                  <input
                    type="text" placeholder="Enter the song title"
                    name="trackTitle" value={this.state.trackTitle} 
                    onChange={this.onChange.bind(this)} 
                    className="form-control form-control-lg"
                  />
                </div>
                  <button className="col-12 btn btn-primary btn-lg input-block-level mb-5" type="submit">
                  Search Lyrics</button>
              </form>
            </div>
          )
        }}
        </Consumer>
    );
  }
}
export default Search
