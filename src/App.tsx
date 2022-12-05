import logo from "./logo.svg";
import "./App.css";
import DynamicImage, { IMG_NAME } from "./component/dynamic-image.component";
import DynamicImport2 from "./component/dynamic-image-2.component";

export type ImageProps = {
  name: string;
  type: string;
};

function App() {
  const img = [
    {
      name: IMG_NAME.dog,
      path: "../assets/dog.jpg",
    },
    {
      name: IMG_NAME.tiger,
      path: "../assets/tiger.jpg",
    },
  ];
  const imageList = [
    { name: "dog", type: "jpg" },
    { name: "duck", type: "jpg" },
    { name: "cat", type: "jpeg" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        Dynamic Image
        {img.map((item, index) => {
          return <DynamicImage name={item.name} key={"img-" + index} />;
        })}
        {/* not work */}
        {imageList.map((item) => {
          return <DynamicImport2 img={item} key={item.name} />;
        })}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
