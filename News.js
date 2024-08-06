import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h1> news app</h1>
      <div className='row'>
        <div className='col-md-4'>
            <Newsitem tittle="mytittle" description="des" img="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"/>
        </div>
        <div className='col-md-4'>
            <Newsitem tittle="mytittle" description="des" img="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"/>
        </div>
        <div className='col-md-4'>
            <Newsitem tittle="mytittle" description="des" img="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"
            />
        </div>
      </div>
      </div>
      
    )
  }
}
