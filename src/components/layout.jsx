import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";
import Sidebar from "./sidebar";
import FolderTreeView from "./folderTreeView";
import Folder from "./folder";

const Layout = () => (
  <Box display="flex" justifyContent={'center'} marginTop={10}>
    <div>
      {/* <Sidebar /> */}
      <FolderTreeView />
      {/* <Folder/> */}
    </div>
    <div>
      <Box component="main" flex="1" p={2}>
        <Outlet />
      </Box>
    </div>
  </Box>
);

export default Layout;