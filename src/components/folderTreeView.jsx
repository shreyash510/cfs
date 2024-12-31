import React, { useState } from "react";
import { Treebeard } from "react-treebeard";

const FolderTreeView = () => {
  const [data, setData] = useState({
    name: "Root",
    toggled: true,
    children: [
      {
        name: "Study XYZ-123",
        children: [
          {
            name: "Module 2.7",
            children: [
              { name: "CSR", children: [] },
            ],
          },
          { name: "Module 5.3", children: [] },
        ],
      },
      {
        name: "Study ABC-456",
        children: [],
      },
    ],
  });

  const [cursor, setCursor] = useState(null);

  const onToggle = (node, toggled) => {
    if (cursor) {
      cursor.active = false; // Deselect previous node
    }
    node.active = true; // Select the current node
    if (node.children) {
      node.toggled = toggled; // Expand/Collapse if it has children
    }
    setCursor(node);
    setData({ ...data });
  };

  return (
    <div style={{ width: "250px" }}>
      <Treebeard
        data={data}
        onToggle={onToggle}
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
