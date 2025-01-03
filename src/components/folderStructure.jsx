import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Treebeard } from "react-treebeard";
import { setSelectedId, toggleFolderNode } from "../redux/slice/folderSlice";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"; // Down arrow
import ArrowRightIcon from "@mui/icons-material/ArrowRight"; // Right arrow
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";


const TreeNode = ({ node }) => {
  const [isExpanded, setIsExpanded] = useState(false);
console.log('isExpanded', isExpanded);
  // Toggle expand/collapse state
  const handleToggle = () => {
    if (node.type === "folder") setIsExpanded((prev) => !prev);
  };

  return (
    <li style={{ marginLeft: "20px", listStyleType: "none" }}>
      {/* Folder/File Label */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          cursor: node.type === "folder" ? "pointer" : "default",
        }}
        onClick={handleToggle}
      >
        {/* Icons for Folder/File */}
        {node.type === "folder" ? (
          isExpanded ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <ArrowDropDownIcon style={{ marginRight: "5px", }} />
              📂
            </div>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <ArrowRightIcon style={{ marginRight: "5px" }} />
              📁
            </div>
          )
        ) : (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <InsertDriveFileIcon style={{ marginRight: "5px", color: "#757575" }} />
          </div>
        )}

        {/* Node Name */}
        <span style={{ marginLeft: 5 }}>{node.name}</span>
      </div>

      {/* Render Children */}
      {isExpanded && node.children && (
        <ul style={{ paddingLeft: "10px", marginTop: "5px" }}>
          {node.children.map((childNode) => (
            <TreeNode key={childNode.id} node={childNode} />
          ))}
        </ul>
      )}
    </li>
  );
};

// Main Tree Component
const TreeView = ({ data }) => {
  return (
    <ul style={{ paddingLeft: "0", fontFamily: "Arial, sans-serif" }}>
      <TreeNode node={data} />
    </ul>
  );
};


const FolderStructure = () => {
  const { folderStructure, selectedId } = useSelector((state) => state.folder);
  const dispatch = useDispatch();
  console.log('folderStructure', folderStructure)

  return (
    <div style={{ width: "300px" }}>
      <TreeView data={folderStructure} />;
    </div>
  );
};

export default FolderStructure;
