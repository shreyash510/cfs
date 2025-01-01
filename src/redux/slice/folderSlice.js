import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	selectedId: '1',
	folderData: {
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
	},
  };
  

  const folderSlice = createSlice({
	name: 'folder',
	initialState,
	reducers: {
	  setSelectedId: (state, action) => {
		state.selectedId = action.payload;
	  },
	},
  });
  
  export const { setSelectedId } = folderSlice.actions;
  export default folderSlice.reducer;