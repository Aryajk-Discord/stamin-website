import React from "react";
import jk from "../assets/img/jk.png";
import sajjad from "../assets/img/sajjad.png";
import enterprise from "../assets/img/enterprise.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faCode, faAddressCard } from '@fortawesome/free-solid-svg-icons'




export const Team = () => {
   return(
      <section id="team" className="team">
      <h1 class="heading">
          <strong>طهران تیم</strong>
      </h1>
      <div class="container">
          <div class="box">
              <div class="top-bar"></div>
                  <div class="nav">
                      <i class="verify fas fa-check-circle"><FontAwesomeIcon icon={faCoffee} /></i>
                  </div>

                  <div class="details">
                      <img src={sajjad} alt=""></img>
                      <strong>sajjadmrx#2010</strong>
                      <p>BackEnd Developer , Easydl Founder</p>
                  </div>

                  <div class="btn">
                      <a href="https://sajjadmrx.ir/"><FontAwesomeIcon icon={faAddressCard} /><i></i></a>
                      <a href="https://github.com/sajjadmrx"><FontAwesomeIcon icon={faCode} /><i></i></a>
                  </div>
              </div>
          <div class="box">
              <div class="top-bar"></div>
                  <div class="nav">
                      <i class="verify fas fa-check-circle"><FontAwesomeIcon icon={faCoffee} /></i>
                  </div>

                  <div class="details">
                      <img src={jk} alt=""></img>
                      <strong>~•Arya#3108</strong>
                      <p>Web Developer , Bot Developer</p>
                  </div>

                  <div class="btn">
                      <a href="https://zil.ink/aryajk"><i><FontAwesomeIcon icon={faAddressCard} /></i></a>
                      <a href="https://github.com/Aryajk-Discord"><i><FontAwesomeIcon icon={faCode} /></i></a>
                  </div>
              </div>
          <div class="box">
              <div class="top-bar"></div>
                  <div class="nav">
                      <i class="verify fas fa-check-circle" src={jk}>  <FontAwesomeIcon icon={faCoffee} /></i>
                  </div>
                  <div class="details">
                      <img src={enterprise} alt=""></img>
                      <strong>- Enterprise#7172</strong>
                      <p>Bot Developer, Bizzy Founder</p>
                  </div>

                  <div class="btn">
                      <a href="#"><i><FontAwesomeIcon icon={faAddressCard} /></i></a>
                      <a href="https://github.com/Enterprise-ir"><i><FontAwesomeIcon icon={faCode} /></i></a>
                  </div>
                </div>
      </div>
  </section>
   )
}