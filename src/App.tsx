import Display from './components/Display';
import FileTree from './components/FileTree';
import { TreeWrapper } from './components/FileTree/fileTree.styles';
import useFileTree from './components/FileTree/hooks/useFileTree';
import useOpenDirectories from './components/FileTree/hooks/useOpenDirectory';
import SplitPane from './components/SplitPane';
import UtilityBar from './components/UtilityBar';
const App = () => {
  const [head, { ...fileTreeUtils }] = useFileTree();
  const [openDirs, { ...allDirUtils }] = useOpenDirectories();

  return (
    <SplitPane
      left={
        <>
          <UtilityBar head={head} {...fileTreeUtils} {...allDirUtils} />
          <TreeWrapper onClick={() => fileTreeUtils.setSelected(null)}>
            <FileTree
              dirPath=""
              level={-1} // set to -1 so root has negative margin
              node={head}
              openDirs={openDirs}
              {...fileTreeUtils}
              {...allDirUtils}
            />
          </TreeWrapper>
        </>
      }
      right={<Display openFile={fileTreeUtils.openFile} />}
    />
  );
};

export default App;
