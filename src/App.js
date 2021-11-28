import { useData } from "./useData";
import { Marks } from "./Marks";
import "./App.css";

const width = 960;
const height = 500;

const App = () => {
  const data = useData();

  if (!data) {
    return <pre>Loading...</pre>;
  }

  return (
    <svg width={width} height={height}>
      <Marks data={data} />
    </svg>
  );
};

export default App;
