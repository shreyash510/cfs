import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <Drawer variant="permanent">
    <List>
      <ListItem>
        <Link to="/study/xyz-123">
          <ListItemText primary="Study XYZ-123" />
        </Link>
      </ListItem>
      <ListItem>
        <Link to="/study/abc-456">
          <ListItemText primary="Study ABC-456" />
        </Link>
      </ListItem>
    </List>
  </Drawer>
);

export default Sidebar;
