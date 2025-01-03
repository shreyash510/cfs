let folderStructureData = {
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

folderStructureData = {
	id: "1",
	name: "My Drive",
	type: "folder",
	path: "/",
	metadata: {
		createdBy: "user123",
		createdAt: "2025-01-03T10:00:00Z",
		updatedAt: "2025-01-03T10:15:00Z"
	},
	permissions: {
		read: ["user123", "teamA"],
		write: ["user123"]
	},
	children: [
		{
			id: "2",
			name: "Extra Data",
			type: "folder",
			path: "/extra-data",
			metadata: {
				createdBy: "user123",
				createdAt: "2025-01-02T10:00:00Z",
				updatedAt: "2025-01-02T10:15:00Z"
			},
			permissions: {
				read: ["user123"],
				write: ["user123"]
			},
			children: [
				{
					id: "3",
					name: "Test",
					type: "folder",
					path: "/extra-data/test",
					metadata: {
						createdBy: "user123",
						createdAt: "2025-01-02T11:00:00Z",
						updatedAt: "2025-01-02T11:15:00Z"
					},
					permissions: {
						read: ["user123"],
						write: ["user123"]
					},
					children: [
						{
							id: "4",
							name: "file1.pdf",
							type: "file",
							path: "/extra-data/test/file1.pdf",
							metadata: {
								createdBy: "user123",
								createdAt: "2025-01-02T11:30:00Z",
								updatedAt: "2025-01-02T11:45:00Z",
								size: "1.2MB"
							},
							permissions: {
								read: ["user123"],
								write: ["user123"]
							},
							versions: [
								{
									version: 1,
									uploadedAt: "2025-01-02T11:30:00Z",
									uploadedBy: "user123",
									size: "1.2MB"
								}
							]
						},
						{
							id: "5",
							name: "file2.pdf",
							type: "file",
							path: "/extra-data/test/file2.pdf",
							metadata: {
								createdBy: "user123",
								createdAt: "2025-01-02T12:00:00Z",
								updatedAt: "2025-01-02T12:15:00Z",
								size: "1.5MB"
							},
							permissions: {
								read: ["user123"],
								write: ["user123"]
							},
							versions: [
								{
									version: 1,
									uploadedAt: "2025-01-02T12:00:00Z",
									uploadedBy: "user123",
									size: "1.5MB"
								}
							]
						}
					]
				}
			]
		},
		{
			id: "6",
			name: "Study XYZ-123",
			type: "folder",
			path: "/study/xyz-123",
			metadata: {
				createdBy: "user456",
				createdAt: "2025-01-01T09:00:00Z",
				updatedAt: "2025-01-01T09:30:00Z"
			},
			permissions: {
				read: ["user456", "teamB"],
				write: ["user456"]
			},
			children: [
				{
					id: "7",
					name: "Module 2.7",
					type: "folder",
					path: "/study/xyz-123/module-2.7",
					metadata: {
						createdBy: "user456",
						createdAt: "2025-01-01T10:00:00Z",
						updatedAt: "2025-01-01T10:30:00Z"
					},
					permissions: {
						read: ["user456", "teamB"],
						write: ["user456"]
					},
					children: [
						{
							id: "8",
							name: "CSR",
							type: "folder",
							path: "/study/xyz-123/module-2.7/csr",
							metadata: {
								createdBy: "user456",
								createdAt: "2025-01-01T11:00:00Z",
								updatedAt: "2025-01-01T11:30:00Z"
							},
							permissions: {
								read: ["user456", "teamB"],
								write: ["user456"]
							},
							children: []
						}
					]
				}
			]
		}
	]
};


export default folderStructureData;