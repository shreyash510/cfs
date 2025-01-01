import React from 'react';
import { Breadcrumbs, Typography, Link } from '@mui/material';
import { NavigateNext } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedId } from '../redux/slice/folderSlice';
import { useNavigate } from 'react-router-dom';

// Recursive function to find the breadcrumb path
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { folderStructure, selectedId } = useSelector((state) => state.folder);

  const handleNavigate = (path, id) => {
    dispatch(setSelectedId(id));
    navigate(path);
  };

  const breadcrumbPath = findPathById(folderStructure, selectedId) || [folderStructure];

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
