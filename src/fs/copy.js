const fs = require("fs").promises;
const path = require("path");

const copy = async () => {
  const sourceFolderPath = path.join(__dirname, "files");
  const destinationFolderPath = path.join(__dirname, "files_copy");

  try {
    await fs.access(destinationFolderPath);
    throw new Error("FS operation failed: Destination folder already exists");
  } catch (error) {
    try {
      await fs.mkdir(destinationFolderPath);

      const files = await fs.readdir(sourceFolderPath);

      for (const file of files) {
        const sourceFilePath = path.join(sourceFolderPath, file);
        const destinationFilePath = path.join(destinationFolderPath, file);
        await fs.copyFile(sourceFilePath, destinationFilePath);
      }

      console.log("Files copied successfully to:", destinationFolderPath);
    } catch (copyError) {
      throw new Error(`FS operation failed: ${copyError.message}`);
    }
  }
};

await copy();
