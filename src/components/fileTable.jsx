import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

const FileTable = () => {
  const files = [
    { name: "cdiscpilot01_clean copy 20.pdf", size: "4.0MB", owner: "Faris Awad", created: "Mon Oct 28 2024", modified: "Tue Nov 19 2024" },
    { name: "cdiscpilot01_clean copy 24.pdf", size: "4.0MB", owner: "Faris Awad", created: "Mon Oct 28 2024", modified: "Mon Oct 28 2024" },
  ];

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Size</TableCell>
          <TableCell>Owner</TableCell>
          <TableCell>Created</TableCell>
          <TableCell>Modified</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {files.map((file, index) => (
          <TableRow key={index}>
            <TableCell>{file.name}</TableCell>
            <TableCell>{file.size}</TableCell>
            <TableCell>{file.owner}</TableCell>
            <TableCell>{file.created}</TableCell>
            <TableCell>{file.modified}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default FileTable;
