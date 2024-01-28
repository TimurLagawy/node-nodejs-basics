const fs = require("fs").promises;
const path = require("path");

const read = async () => {
  const filePath = path.join(__dirname, "fileToRead.txt");

  try {
    const content = await fs.readFile(filePath, "utf-8");

    console.log("File content:", content);
  } catch (error) {
    throw new Error(`FS operation failed: ${error.message}`);
  }
};

await read();
