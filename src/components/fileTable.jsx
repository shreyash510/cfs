import React from 'react';
import { List } from '@mui/material';
import FileItem from './fileItem';
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";


const FileTable = ({ files}) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Size</TableCell>
          <TableCell>Owner</TableCell>
          <TableCell>Created</TableCell>
          <TableCell>Modified</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {files.map((file, index) => (
          <TableRow key={index}>
            <TableCell>{file.name}</TableCell>
            <TableCell>{file.size}</TableCell>
            <TableCell>{file.owner}</TableCell>
            <TableCell>{file.created}</TableCell>
            <TableCell>{file.modified}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default FileTable;
