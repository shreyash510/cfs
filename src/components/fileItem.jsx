import React from 'react';
import { useDrag } from 'react-dnd';
import { ListItem, ListItemText } from '@mui/material';

const FileItem = ({ file, folderId, onMoveFile }) => {
  const [, drag] = useDrag(() => ({
    type: 'FILE',
    item: { file, folderId },
  }));

  return (
    <ListItem ref={drag} button onClick={() => onMoveFile(file, folderId)}>
      <ListItemText primary={file.name} />
    </ListItem>
  );
};

export default FileItem;
