import { TreeView, TreeItem } from "@mui/lab";

const FolderTree = () => (
  <TreeView>
    <TreeItem nodeId="1" label="Study XYZ-123">
      <TreeItem nodeId="2" label="Module 2.7">
        <TreeItem nodeId="3" label="CSR" />
      </TreeItem>
      <TreeItem nodeId="4" label="Module 5.3" />
    </TreeItem>
    <TreeItem nodeId="5" label="Study ABC-456" />
  </TreeView>
);

export default FolderTree;
