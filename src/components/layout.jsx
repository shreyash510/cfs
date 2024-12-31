import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";
import Sidebar from "./sidebar";
import FolderTreeView from "./folderTreeView";

const Layout = () => (
  <Box display="flex" >
    <div style={{ background: 'gray' }}>
      {/* <Sidebar /> */}
      <FolderTreeView/>
    </div>
    <div style={{ background: 'yellow'}}>
      <Box component="main" flex="1" p={2}>
        <Outlet />
      </Box>
    </div>
  </Box>
);

export default Layout;