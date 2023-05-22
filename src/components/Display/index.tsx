import type { Maybe } from '../../utils/typeUtils';
import type { File } from '../FileTree/fileTree';
import type { FC } from 'react';

import { DisplayWrapper } from './display.styles';

interface DisplayProps {
  openFile?: Maybe<File>;
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
