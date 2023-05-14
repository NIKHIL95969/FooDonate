import React from 'react'
import './css/Home.css'

// import { foodimage1 } from ''

export default function Home() {
  return (
    <React.Fragment>
      <div className="home_section">
        <div className="slider_image">
          <img className="slider_image" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        </div>
        <hr className="home_hr" />
        <div className="home_foodlist">
          <h3>Foodlist</h3>
        </div>
      </div>
    </React.Fragment>
  )
}
