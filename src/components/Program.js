import React from 'react'
import yoga from  "../images/yoga.jpg"
import boxing from  "../images/boxing.jpg"
import dance from  "../images/dance.jpg"
import gain from  "../images/waigh-gain.jpg"
const Program = () => {
  return (
    <div class="row row-cols-1 row-cols-md-3 g-4" id='nanu'>
  <div class="col"style={{width: "20rem" }}>
    <div class="card" style={{width: "19rem" ,paddingLeft:"10px" }}>
      <img src={yoga} class="card-img-top" alt="..." style={{height: "19rem" }}/>
      <div class="card-body">
        <h5 class="card-title">Yoga</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <a href="/pricing" class="btn btn-primary">Join</a>
      </div>
    </div>
  </div>
  <div class="col" style={{width: "21rem" }} >
    <div class="card" style={{width: "20rem" }}>
      <img src={boxing} class="card-img-top" alt="..." style={{height: "19rem" }} />
      <div class="card-body">
        <h5 class="card-title">Boxing</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <a href="/pricing" class="btn btn-primary">Join</a>
      </div>
    </div>
  </div>
  <div class="col" style={{width: "22rem" }}  >
    <div class="card" style={{width: "20rem" }}>
      <img src={dance} class="card-img-top" alt="..." style={{height: "19rem" }} />
      <div class="card-body">
        <h5 class="card-title">Dancing</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <a href="/pricing" class="btn btn-primary">Join</a>
      </div>
    </div>
  </div>
  <div class="col" style={{width: "21rem" }}  >
    <div class="card" style={{width: "20rem" }}>
      <img src={gain} class="card-img-top" alt="..." style={{height: "19rem" }} />
      <div class="card-body">
        <h5 class="card-title">Waight Gain</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <a href="/pricing" class="btn btn-primary">Join</a>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
  {/* <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only"></span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only"></span>
  </a> */}
</div>
  )
}

export default Program
