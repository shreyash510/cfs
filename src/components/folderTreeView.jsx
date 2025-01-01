import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Treebeard } from "react-treebeard";
import { setSelectedId, toggleFolderNode } from "../redux/slice/folderSlice";

const FolderTreeView = () => {
  const { folderTree, selectedId } = useSelector((state) => state.folder);
  const dispatch = useDispatch();

  const toggleNode = (node, toggled) => {
    const updateNode = (currentNode) => {
      return {
        ...currentNode,
        active: currentNode.name === node.name,
        toggled: currentNode.name === node.name ? toggled : currentNode.toggled,
        children: currentNode.children?.map(updateNode) || [],
      };
    };

    const updatedTree = updateNode(folderTree);
    dispatch(setSelectedId(node.name)); // Update selected node
    dispatch(toggleFolderNode(updatedTree)); // Update tree with the new toggled state
  };

  return (
    <div style={{ width: "250px" }}>
      <Treebeard
        data={folderTree}
        onToggle={toggleNode}
        style={{
          tree: {
            base: {
              backgroundColor: "#f9f9f9",
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
      />
    </div>
  );
};

export default FolderTreeView;
