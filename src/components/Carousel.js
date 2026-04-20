import Slider from "react-slick";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const images = [
    "/assets/carousel-1.png",
    "/assets/carousel-2.png",
    "/assets/carousel-3.png",
    "/assets/carousel-4.png",
    "/assets/carousel-5.png",
    "/assets/carousel-6.png",
  ];

  return (
    <div className="carousel">
      <Slider {...settings}>
        {images.map((src, i) => (
          <div key={i}>
            <img
              src={src}
              alt={`Service slide ${i + 1}`}
              className="carousel-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}