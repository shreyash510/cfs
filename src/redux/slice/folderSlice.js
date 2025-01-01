import { createSlice } from '@reduxjs/toolkit';

const folderStructureData = {
	id: '1',
	name: 'My Drive',
	path: '/',
	children: [
	  {
		id: '2',
		name: 'extra data',
		path: '/extra-data',
		children: [
		  {
			id: '3',
			name: 'test',
			path: '/test',
			children: [
			  { id: '4', name: 'file1.pdf', path: '/test/file1.pdf', type: 'file' },
			  { id: '5', name: 'file2.pdf', path: '/test/file2.pdf', type: 'file' },
			],
		  },
		],
	  },
	  {
		id: '6',
		name: 'Study XYZ-123',
		path: '/study/xyz-123',
		children: [
		  {
			id: '7',
			name: 'Module 2.7',
			path: '/study/xyz-123/module-2.7',
			children: [
			  { id: '8', name: 'CSR', path: '/study/xyz-123/module-2.7/csr', type: 'folder' },
			],
		  },
		],
	  },
	],
  }

  const folderTreeData = {
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
	}

const initialState = {
	selectedId: '1',
	folderStructure: folderStructureData,
	folderTree : folderTreeData
  };
  

  const toggleNode = (node, toggled, selectedId) => {
	return {
	  ...node,
	  active: node.name === selectedId,
	  toggled: node.children ? toggled : node.toggled,
	  children: node.children?.map((child) => toggleNode(child, toggled, selectedId)) || [],
	};
  };

  const folderSlice = createSlice({
	name: 'folder',
	initialState,
	reducers: {
	  setSelectedId: (state, action) => {
		state.selectedId = action.payload;
	  },
	  toggleFolderNode: (state, action) => {
		// const { selectedId, toggled } = action.payload;
		state.folderTree = action.payload;
	  },
	},
  });
  
  export const { setSelectedId, toggleFolderNode } = folderSlice.actions;
  export default folderSlice.reducer;