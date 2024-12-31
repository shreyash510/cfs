import React, { useState } from 'react';
import { Breadcrumbs, Typography, Link } from '@mui/material';
import { NavigateNext } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// Sample folder structure with parent-child hierarchy
const folderData = {
  id: '1',
  name: 'My Drive',
  path: '/',
  children: [
    {
      id: '2',
      name: 'extra data',
      path: '/extra-data',
      children: [
        {
          id: '3',
          name: 'test',
          path: '/test',
          children: [
            { id: '4', name: 'file1.pdf', path: '/test/file1.pdf', type: 'file' },
            { id: '5', name: 'file2.pdf', path: '/test/file2.pdf', type: 'file' },
          ],
        },
      ],
    },
    {
      id: '6',
      name: 'Study XYZ-123',
      path: '/study/xyz-123',
      children: [
        {
          id: '7',
          name: 'Module 2.7',
          path: '/study/xyz-123/module-2.7',
          children: [
            { id: '8', name: 'CSR', path: '/study/xyz-123/module-2.7/csr', type: 'folder' },
          ],
        },
      ],
    },
  ],
};

// Recursive function to find a path to a specific node
const findPathById = (node, targetId, path = []) => {
  if (node.id === targetId) return [...path, node];
  if (!node.children) return null;

  for (const child of node.children) {
    const result = findPathById(child, targetId, [...path, node]);
    if (result) return result;
  }

  return null;
};

const FolderTree = () => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState('3'); // Default selected node

  const handleNavigate = (path, id) => {
    console.log(`Navigating to: ${path}`);
    setSelectedId(id);
    navigate(path);
  };

  // Find the breadcrumb path for the selected node
  const breadcrumbPath = findPathById(folderData, selectedId) || [folderData];

  return (
    <Breadcrumbs
      separator={<NavigateNext fontSize="small" />}
      aria-label="breadcrumb"
      sx={{ padding: '8px', backgroundColor: '#f9fafc', borderRadius: '4px' }}
    >
      {breadcrumbPath.map((folder, index) => (
        <div key={folder.id}>
          {index !== breadcrumbPath.length - 1 ? (
            <Link
              component="button"
              variant="body2"
              onClick={() => handleNavigate(folder.path, folder.id)}
              underline="hover"
              sx={{ cursor: 'pointer' }}
            >
              {folder.name}
            </Link>
          ) : (
            <Typography color="text.primary">{folder.name}</Typography>
          )}
        </div>
      ))}
    </Breadcrumbs>
  );
};

export default FolderTree;
