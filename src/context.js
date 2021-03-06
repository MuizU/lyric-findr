import React, {Component} from 'react'
import axios from 'axios'

const Context = React.createContext()
const reducer = (state, action) =>{
  switch(action.type){
    case "SEARCH_SONGS":
      return{
        ...state,
        track_list:action.payload,
        heading:"Search Results"
      }
    default:
      return state
  }
}

export class Provider extends Component {
  state = {
    track_list:{},
    heading:'Top 10 Tracks',
    dispatch: action => this.setState(state => reducer(state, action))
  }

  async componentDidMount(){
  const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/charts/track',
    params: {locale: 'en-US', pageSize: '10', startFrom: '0'},
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_SHZM_KEY,
      'x-rapidapi-host': 'shazam.p.rapidapi.com'
    }
  };
  const res = await axios.request(options)
  this.setState({track_list: res.data.tracks})
  console.log("RES: ",this.state.track_list)
    
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
        </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer
