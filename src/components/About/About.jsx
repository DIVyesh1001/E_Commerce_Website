import React from 'react'
import './About.css'

function About() {
  return (
    <div>
      <div className="aboutus">
      <div className="image">
        <h1>
          We Believe in <br />
          the Power of Pen
        </h1>
      </div>
    </div>

    <div className="text">
      <div className="main_text">
        <p>
          We believe play is an essential component of children’s well‑being.
          Welly is <br />
          dedicated to ensuring all children have the opportunity to jump in,
          experience the <br />
          adventure, and reap the physical and emotional benefits of play.
        </p>
      </div>
    </div>
    <div className="community_impact">
      <div className="main_impact">
        <h1>COMMUNITY IMPACT</h1>
      </div>
      <div className="boxes">
        <div className="box">
          <h1>354+</h1>
          <p>
            Employee hours <br />
            donated in 2023 to <br />
            10+ organizations
          </p>
        </div>
        <div className="box">
          <h1>100+</h1>
          <p>Annual Welly Day<br />of Service at<br />St. Paul Parks</p>
        </div>
        <div className="box">
          <h1>2.6M+</h1>
          <p>
            bandages shipped <br />
            to Red Cross locations <br />
            across the US
          </p>
        </div>
      </div>
    </div>

    <div className="Believe">
      <div className="what_believe">
        <h1>WHAT WE BELIEVE</h1>
      </div>
      <div className="pannels">
        <div className="Pannel1">
          <div className="icons"></div>
          <h4>CREATE ACCESS TO PLAY</h4>
          <p>
            We support equitable access to play <br />
            for underserved communities and <br />
            children in need through building <br />
            playgrounds, toy donations, enabling <br />
            youth sports participation to <br />connecting children to the
            outdoors.
          </p>
        </div>
        <div className="Pannel1">
          <div className="icons"></div>
          <h4>ENCOURAGE SAFE PLAY</h4>
          <p>
            We support safe play through raising <br />
            awareness and education of families <br />
            about safe play. This is done by <br />
            supporting organizations that <br />
            provide the tools and support to <br />
            communities, ensuring the safety of <br />
            all children during play. 
          </p>
        </div>
        <div className="Pannel1">
          <div className="icons"></div>
          <h4>SUPPORT RETURN TO PLAY</h4>
          <p>
            We actively support return to play in <br />
            communities through employee <br />
            volunteerism and product donations. <br />
            Our aim is to bring joy and ease to <br />
            everyday healing, and help enable <br />children to resume playing. 
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
