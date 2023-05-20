import FileTree from "./components/FileTree";
import data from "./mockData";

const App = () => {
  return (
    <div>
      <FileTree data={data} />
    </div>
  );
};

export default App;
