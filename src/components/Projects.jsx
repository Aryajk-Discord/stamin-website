import  React from 'react'
import { Container } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';



export const Projects = () => {


  return (
    <section className="project" id="project">
      <Container>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2> امنیت و تیم برنامه نویسی</h2>
              <div className="sex">
                <p>قرار دارد Wick Premium کانفیگ سرور به صورت استاندارد بوده و امنیت تحت نظارت </p>
                <p>تمامی امکانات مانند وبسایت و بات های شخصی تحت توسعه تهران تیم قرار دارد</p>
                <h2>برخی از پروژه های طهران تیم</h2>
                <p> <a href="" target="_blank">بیزی</a> یک ربات وریفای شده دیسکورد است </p>
                <p> <a href="https://easydl.net/" target="_blank">ایزی دانلود</a> یک پلتفورم سریع و ساده برای دانلود از اسپاتیفای , رادیوجوان و ساندکلاد است </p>
                <p> <a href="https://app.irworld.xyz/login" target="_blank">داشبورد و فروشگاه</a> پروژه بازی نقش آفرینی یک داشبورد برای پلیرهای سرور فایو ام هستش که میتوانن اطلاعات خود رو مشاهده کنند و از طریق فروشگاه آیتم بخرند</p>
              </div>
              </div>}
            </TrackVisibility>
      </Container>
    </section>
  )
}
