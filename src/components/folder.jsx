import React, { useState } from 'react';
import FileTable from './fileTable';
import FileUpload from './fileUpload';


const filesData = [
  { name: "cdiscpilot01_clean copy 20.pdf", size: "4.0MB", owner: "Faris Awad", created: "Mon Oct 28 2024", modified: "Tue Nov 19 2024" },
  { name: "cdiscpilot01_clean copy 24.pdf", size: "4.0MB", owner: "Faris Awad", created: "Mon Oct 28 2024", modified: "Mon Oct 28 2024" },
];


const Folder = ({ folderId, folderName }) => {
  const [files, setFiles] = useState([...filesData]);
  
  // const onFileUpload = (file, targetFolderId) => {
  //   const fileExists = files.find((f) => f.name === file.name);
  //   if (fileExists) {
  //     // Handle versioning logic here
  //     setFiles((prevFiles) =>
  //       prevFiles.map((f) => (f.name === file.name ? { ...f, version: f.version + 1 } : f))
  //     );
  //   } else {
  //     setFiles([...files, { ...file, version: 1 }]);
  //   }
  // };


  const onMoveFile = (file, targetFolderId) => {
    console.log(`Moving file: ${file.name} to folder: ${folderName}`);
    // Add logic for moving files between folders (update folder structure)
  };

  return (
    <div>
      <h3>{folderName}</h3>
      {/* <FileUpload folderId={folderId} onFileUpload={onFileUpload} /> */}
      <FileTable folderId={folderId} files={files} onMoveFile={onMoveFile} />
    </div>
  );
};

export default Folder;
