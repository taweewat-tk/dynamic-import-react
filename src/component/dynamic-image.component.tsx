import Dog from "../assets/dog.jpg";
import Tiger from "../assets/tiger.jpeg";
import Duck from "../assets/duck.jpg";

export enum IMG_NAME {
  dog = "dog",
  tiger = "tiger",
  duck = "duck",
}

type DynamicImageProps = {
  name: IMG_NAME;
};

const DynamicImage = ({ name }: DynamicImageProps) => {
  const img = {
    dog: Dog,
    tiger: Tiger,
    duck: Duck,
  };
  return <img src={img[name]} alt={name} width={200} height={200} />;
};
export default DynamicImage;
