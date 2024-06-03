import { Carousel } from "react-responsive-carousel";

import images from "../../images/images";
import styles from "./Slider.module.css";

type SliderComponentProps = {
  restOfViewport: number;
};

const SliderComponent = ({ restOfViewport }: SliderComponentProps) => {

  return (
    <div className={styles.container}>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showIndicators={false}
        preventMovementUntilSwipeScrollTolerance
        swipeScrollTolerance={50}
        showArrows={false}
        showStatus={false}
        interval={4500}
      >
        {images.map((image) => (
          <div key={image.src} className={styles.imageContainer} style={{ height: `calc(100vh - ${restOfViewport / 2}px)` }}>
            <img src={image.src} alt={image.text} />
            <div className={styles.textContainer}>
              <p className={styles.text}>{image.text}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SliderComponent;
