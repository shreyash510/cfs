import React from 'react';
import { Breadcrumbs, Typography, Link } from '@mui/material';
import { NavigateNext } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const FolderTree = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    console.log(`Navigating to: ${path}`);
    navigate(path);
  };

  const folderTree = [
    { id: '1', name: 'My Drive', path: '/' },
    { id: '2', name: 'extra data', path: '/extra-data' },
    { id: '3', name: 'test', path: '/test' },
  ];

  return (
    <Breadcrumbs
      separator={<NavigateNext fontSize="small" />}
      aria-label="breadcrumb"
      sx={{ padding: '8px', backgroundColor: '#f9fafc', borderRadius: '4px' }}
    >
      {folderTree.map((folder, index) => (
        <div key={folder.id}>
          {index !== folderTree.length - 1 ? (
            <Link
              component="button"
              variant="body2"
              onClick={() => handleNavigate(folder.path)}
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
