import  React from 'react'
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/sn.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "discord.gg/stan", "Game and Event!", "Voice Talk!" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Stamin Discord Server</span>
                <h1>{`"Stamin"`} <br></br> <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "discord.gg/stan", "Game and Event!", "Voice Talk!" ]'><span className="wrap">{text}</span></span></h1>
                  <p>  .سرور "استامین" یک سرور دیسکورد برای سرگرمی و وقت گذرونی در اوقات فراغت است </p>
                  <p> کانفیگ سرور استاندارد بوده و دارای ربات های امنیتی است و هیچگونه خطری برای اکانت های شما عزیزان ایجاد نمیکند پس با خیالی راحت از این فضا لذت ببرید </p>
                  <p> در سرور به صورت روزانه ایونت هایی گزاشته میشود و همچنین میتوانید بازی مورد علاقه 
                  خود را پلی دهید و لذت ببرید یا با ربات های شخصی ای که برای شما دوستان آماده شده با کیفیت بالا آهنگ گوش کنید و خلاصه هرکاری انجام دهید فقط کافیه رو دکمه زیر کلیک کنید</p>
                  <button onClick={() => console.log('connect')} href="discord.gg/stan"> عضو شوید <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
