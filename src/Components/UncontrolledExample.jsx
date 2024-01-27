import { Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function UncontrolledExample({ images }) {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          thumbnail
          src={`http://127.0.0.1:3000/img/${images[0]}`}
          alt=""
          height={"100%"}
          width={"100%"}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          thumbnail
          src={`http://127.0.0.1:3000/img/${images[1]}`}
          alt=""
          height={"100%"}
          width={"100%"}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          thumbnail
          src={`http://127.0.0.1:3000/img/${images[2]}`}
          alt=""
          width={"100%"}
          height={"100%"}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
