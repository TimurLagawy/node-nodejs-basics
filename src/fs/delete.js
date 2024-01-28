const fs = require("fs").promises;
const path = require("path");

const deleteFile = async () => {
  const filePath = path.join(__dirname, "fileToRemove.txt");

  try {
    await fs.access(filePath);

    await fs.unlink(filePath);
    console.log("File deleted successfully:", filePath);
  } catch (error) {
    throw new Error(`FS operation failed: ${error.message}`);
  }
};

await deleteFile();
