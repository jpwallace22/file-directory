import Display from './components/Display';
import FileTree from './components/FileTree';
import useFileTree from './components/FileTree/hooks/useFileTree';
import SplitPane from './components/SplitPane';

const App = () => {
  const [head, openDirs, { ...fileTreeUtils }] = useFileTree();

  return (
    <SplitPane
      left={<FileTree head={head} openDirs={openDirs} {...fileTreeUtils} />}
      right={<Display openFile={fileTreeUtils.openFile} />}
    />
  );
};

export default App;
