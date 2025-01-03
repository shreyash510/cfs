import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Treebeard } from "react-treebeard";
import { setSelectedId, toggleFolderNode } from "../redux/slice/folderSlice";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"; // Down arrow
import ArrowRightIcon from "@mui/icons-material/ArrowRight"; // Right arrow
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

const FolderStructure = () => {
  const { folderStructure, selectedId } = useSelector((state) => state.folder);
  const dispatch = useDispatch();
  console.log('folderStructure', folderStructure)

  // const toggleNode = (node, toggled) => {
  //   const updateNode = (currentNode) => {
  //     return {
  //       ...currentNode,
  //       active: currentNode.id === node.id, // Use `id` for unique identification
  //       toggled: currentNode.id === node.id ? toggled : currentNode.toggled,
  //       children: currentNode.children?.map(updateNode) || [], // Recursively update children
  //     };
  //   };

  //   const updatedTree = updateNode(folderStructure);
  //   dispatch(setSelectedId(node.id)); // Update selected node using `id`
  //   dispatch(toggleFolderNode(updatedTree)); // Update tree with the new toggled state
  // };

  // const renderNodeTitle = (node) => {
  //   if (node.type === "folder") {
  //     return (
  //       <span style={{ fontWeight: "bold", color: "#4A90E2" }}>
  //         📁 {node.name}
  //       </span>
  //     );
  //   } else if (node.type === "file") {
  //     return (
  //       <span style={{ color: "#333" }}>
  //         📄 {node.name} <small>({node.metadata?.size || "Unknown Size"})</small>
  //       </span>
  //     );
  //   }
  //   return <span>{node.name}</span>;
  // };

  const TreeNode = ({ node }) => {
    const [isExpanded, setIsExpanded] = useState(false);

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


  return (
    <div style={{ width: "300px" }}>
      {/* <Treebeard
        data={folderTree}
        onToggle={toggleNode}
        decorators={{
          Header: ({ node }) => <div>{renderNodeTitle(node)}</div>, // Custom node rendering
        }}
        style={{
          tree: {
            base: {
              backgroundColor: "#f9f9f9",
              fontSize: "14px",
              padding: "10px",
            },
            node: {
              activeLink: {
                background: "#cce7ff",
              },
              link: {
                cursor: "pointer",
              },
            },
          },
        }}
      /> */}

      <TreeView data={folderStructure} />;
    </div>
  );
};

export default FolderStructure;
