// Example structure for file/folder hierarchy
// const folderData = [
//   {
//     id: '1',
//     name: 'Study XYZ-123',
//     children: [
//       {
//         id: '2',
//         name: 'Module 2.7',
//         children: [
//           { id: '3', name: 'CSR', files: [{ id: 'f1', name: 'file1.pdf', version: 1 }] },
//         ],
//       },
//       {
//         id: '4',
//         name: 'Module 5.3',
//         files: [{ id: 'f2', name: 'file2.pdf', version: 1 }],
//       },
//     ],
//   },
//   {
//     id: '5',
//     name: 'Study ABC-456',
//     files: [{ id: 'f3', name: 'file3.pdf', version: 1 }],
//   },
// ];

const folderTree = [
  { id: '1', name: 'My Drive', path: '/' },
  { id: '2', name: 'extra data', path: '/extra-data' },
  { id: '3', name: 'test', path: '/test' },
];

// Dashboard component
import React, { useState } from 'react';
// import Grid from '@mui/material/Grid';
import FolderTree from '../components/folderTree';
import FileTable from '../components/fileTable';
import Grid from '@mui/material/Grid2';
import Folder from '../components/folder';
import FolderTreeView from '../components/folderTreeView';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';



const Dashboard = () => {
  const [selectedFolderId, setSelectedFolderId] = useState(null);
  const [selectedFolderFiles, setSelectedFolderFiles] = useState([]);

  // Function to handle folder selection
  const handleFolderSelect = (folderId) => {
    const selectedFolder = findFolderById(folderId, folderData);
    setSelectedFolderId(folderId);
    setSelectedFolderFiles(selectedFolder.files);
  };

  // Recursive function to find folder by ID
  const findFolderById = (folderId, folderData) => {
    for (let folder of folderData) {
      if (folder.id === folderId) return folder;
      if (folder.children) {
        const found = findFolderById(folderId, folder.children);
        if (found) return found;
      }
    }
    return null;
  };

  return (
    <div container spacing={2} style={{display:'flex'}}>
      <div>
        <div>
          <FolderTreeView />
        </div>
      </div>
      <div>
        <FolderTree onFolderSelect={handleFolderSelect} />
        <Folder /></div>
    </div>
  );
};

export default Dashboard;
