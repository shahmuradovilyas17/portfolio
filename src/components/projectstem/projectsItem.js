import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  Keyboard,
  Mousewheel,
} from "swiper/modules";

import inkHouseImg from "../../assets/images/inkHouse.png";
import furnikingImg from "../../assets/images/Furniking.png";
import githubImg from "../../assets/images/github.png";

export const ProjectsItem = () => {
  const projects = [
    {
      id: 1,
      name: "InkHouse-React",
      githubLink: "https://github.com/shahmuradovilyas17/pticka",
      desc: "online store selling paintings from countries such as France, Germany and England",
      img: inkHouseImg,
    },
    {
      id: 2,
      name: "Furniking",
      githubLink:
        "https://github.com/shahmuradovilyas17/StepIt/tree/main/Furniking",
      desc: "online store selling various home furniture",
      img: furnikingImg,
    },
  ];

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Keyboard, Mousewheel]}
        spaceBetween={50}
        slidesPerView={1}
        // autoplay
        keyboard
        mousewheel
        navigation
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {projects.map((item) => {
          return (
            <SwiperSlide>
              <div className="projects-item" key={item.id}>
                <img src={item.img} alt={item.name} className="project-image" />
                <div className="projects-item-name">{item.name}</div>
                <div className="projects-item-desc">{item.desc}</div>
                <a href={item.githubLink}>
                  <img src={githubImg} alt="githubLink" />
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
