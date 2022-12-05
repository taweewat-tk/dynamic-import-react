import { ImageProps } from "../App";

type DynamicImport2Props = {
  img: ImageProps;
};

const DynamicImport2 = ({ img }: DynamicImport2Props) => {
  return (
    <img
      src={require(`../assets/images/${img.name}.${img.type}`)}
      alt={img.name}
    />
  );
};
export default DynamicImport2;
