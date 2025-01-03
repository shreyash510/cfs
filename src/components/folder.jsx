import React, { useState } from 'react';
import FileTable from './fileTable';
import FileUpload from './fileUpload';


const filesData = [
  { name: "cdiscpilot01_clean copy 20.pdf", size: "4.0MB", owner: "Faris Awad", created: "Mon Oct 28 2024", modified: "Tue Nov 19 2024" },
  { name: "cdiscpilot01_clean copy 24.pdf", size: "4.0MB", owner: "Faris Awad", created: "Mon Oct 28 2024", modified: "Mon Oct 28 2024" },
];


const Folder = ({ folderId, folderName }) => {
  const [files, setFiles] = useState([...filesData]);

  return (
    <div>
      <h3>{folderName}</h3>
      {/* <FileUpload folderId={folderId} onFileUpload={onFileUpload} /> */}
      <FileTable folderId={folderId} files={files} />
    </div>
  );
};

export default Folder;
