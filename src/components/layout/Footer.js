import React, {useState} from "react"
import moment from 'moment'

function Footer(){
  return(
<footer className="text-center">&copy; <small>Copyright {moment().format('YYYY')} Muiz Uvais</small></footer>
    )
}

export default Footer
