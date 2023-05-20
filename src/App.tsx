import FileTree from "./components/FileTree";
import SplitPane from "./components/SplitPane";
import { FileTreeProvider } from "./contexts/FileTreeContext";

const App = () => {
  return (
    <FileTreeProvider>
      <SplitPane left={<FileTree />} right={<div>poop</div>} />
    </FileTreeProvider>
  );
};

export default App;
