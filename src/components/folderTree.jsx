import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { TreeView, TreeItem } from "@mui/lab";

const ItemType = 'FOLDER'; // Define the type of items being dragged

const FolderTree = () => {
  // Sample data (use actual folder structure in your app)
  const folders = [
    { id: '1', name: 'Study XYZ-123' },
    { id: '2', name: 'Study ABC-456' },
    { id: '3', name: 'Study DEF-789' },
  ];

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType, // This identifies the type of item being dragged
    item: { id: '1', name: 'Study XYZ-123' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: ItemType, // This is the type of item it accepts
    drop: (item) => {
      console.log(`Dropped folder: ${item.name} into folder: Study XYZ-123`);
      // Add your logic here to handle folder movement
    },
  }));

  return (
    <div ref={drop} style={{ width: '250px', padding: '10px', border: '1px solid #ddd' }}>
      <TreeView>
        {folders.map((folder) => (
          <TreeItem
            nodeId={folder.id}
            label={folder.name}
            key={folder.id}
            ref={drag} // Make the tree items draggable
            style={{
              background: isDragging ? '#d3e5ff' : 'transparent', // Highlight when dragging
            }}
          />
        ))}
      </TreeView>
    </div>
  );
};

export default FolderTree;
