import React, { Component } from 'react';
import {Consumer} from '../../context'
import Spinner from '../layout/Spinner'
import Track from './Track'

class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {value =>{
          const { track_list, heading } = value
          if(!track_list||!track_list.length){
            return <Spinner/>
          }else{
            return (
              <React.Fragment>
                <h3 className="text-center mb-4">
                  {heading}
                  </h3>
                <div className="row">
                  {track_list.map(item=>{
                    console.log("KEY: ",item.key)
                    //return <div key={item.key}>{item.artists[0].alias}</div>
                    return <Track key={item.key} track={item} />
                  })}
              </div>
              </React.Fragment>
            )
          }
        }}
      </Consumer>
    );
  }
}

export default Tracks
