import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import  React from 'react'

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <section className="skill" id="skills">
      <div data-simplebar>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>امکانات</h2>
                        <p>  سرور لول 3 بوده و امکانات سرور به بهترین شکل برای شما تنظیم شده است <br></br>بروزرسانی میشود TehranTeam و توسط </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="dwadwae" />
                                <h5>تیم برنامه نویسی</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="wdawad" />
                                <h5>ایونت و برنامه های تفریحی</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="dawdwa" />
                                <h5>ربات های شخصی</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="awdwa" />
                                <h5>فعالیت سرور</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="dwadw" />
        </div>
    </section>
  )
}
