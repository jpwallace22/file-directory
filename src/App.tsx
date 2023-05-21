import Display from "./components/Display";
import FileTree from "./components/FileTree";
import { TreeWrapper } from "./components/FileTree/fileTree.styles";
import useFileTree from "./components/FileTree/utils/useFileTree";
import useOpenDirectories from "./components/FileTree/utils/useOpenDirectory";
import SplitPane from "./components/SplitPane";
import UtilityBar from "./components/UtilityBar";

const App = () => {
  const [head, { openFile, ...selectedUtils }] = useFileTree();
  const [openDirs, { toggleDirOpen, ...allDirUtils }] = useOpenDirectories();

  return (
    <SplitPane
      left={
        <>
          <UtilityBar head={head} {...allDirUtils} />
          <TreeWrapper>
            <FileTree
              path="/"
              level={0}
              node={head}
              toggleOpen={toggleDirOpen}
              openDirs={openDirs}
              {...selectedUtils}
            />
          </TreeWrapper>
        </>
      }
      right={<Display openFile={openFile} />}
    />
  );
};

export default App;
