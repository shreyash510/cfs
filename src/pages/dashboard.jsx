import Grid from '@mui/material/Grid2';
import FolderTree from '../components/folderTree';
import FileTable from '../components/fileTable';
const Dashboard = () => (
  <Grid container spacing={2} >
    <Grid item xs={3}>
      <FolderTree />
    </Grid>
    <Grid item xs={9}>
      <FileTable />
    </Grid>
  </Grid>
);

export default Dashboard;
