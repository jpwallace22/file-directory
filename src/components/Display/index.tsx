import { FC } from "react";
import { File } from "../FileTree/fileTree";
import { DisplayWrapper } from "./display.styles";

interface DisplayProps {
  openFile?: File | null;
}

const Display: FC<DisplayProps> = ({ openFile }) => {
  if (!openFile) {
    return null;
  }

  const modDate = new Date(openFile.modified).toLocaleString();

  return (
    <DisplayWrapper>
      <div>Name: {openFile.name}</div>
      <div>Size: {openFile.size}</div>
      <div>Last Modified: {modDate}</div>
    </DisplayWrapper>
  );
};

export default Display;