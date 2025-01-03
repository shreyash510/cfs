
// Dashboard component
import React, { useState } from 'react';
// import Grid from '@mui/material/Grid';
import FolderTree from '../components/folderTree';
import TableView from '../components/tableView';
import FolderStructure from '../components/folderStructure';

const Dashboard = () => {
  return (
    <div container spacing={2} style={{ display: 'flex' }}>
      <div>
        <div>
          <FolderStructure />
        </div>
      </div>
      <div>
        <FolderTree />
        <TableView />
      </div>
    </div>
  );
};

export default Dashboard;
