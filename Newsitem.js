import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let {tittle, description, img} = this.props;

    return (
      <div>
        <div class="card" style={{width:"18rem;"}}>
  <img src={img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{tittle}</h5>
    <p class="card-text">{description}.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
    )
  }
}
