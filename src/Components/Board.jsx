import React from 'react'
import Squares from './Squares'

function Board() {
  return (
    <div className='board'>
        <div className='board-row'>
            <Squares val="1"/>
            <Squares val="2"/>
            <Squares val="3"/>
        </div>
        <div className='board-row'>
            <Squares val="4"/>
            <Squares val="5"/>
            <Squares val="6"/>
        </div>
        <div className='board-row'>
            <Squares val="7"/>
            <Squares val="8"/>
            <Squares val="9"/>
        </div>
        

    </div>
  )
}

export default Board