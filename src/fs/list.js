const fs = require("fs").promises;
const path = require("path");

const list = async () => {
  const folderPath = path.join(__dirname, "files");

  try {
    await fs.access(folderPath);

    const files = await fs.readdir(folderPath);

    console.log("List of files:", files);
  } catch (error) {
    throw new Error(`FS operation failed: ${error.message}`);
  }
};

await list();
