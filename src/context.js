import React, {Component} from 'react'

const Context = React.createContext()

export class Provider extends Component {
  state = {
    track_list:{ hits:[ 
      {track:{layout:"5",type:"MUSIC",title:"Kiss The Rain"}}
    ],artists:{hits:[] }},
    heading:'Top 10 Tracks'
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
