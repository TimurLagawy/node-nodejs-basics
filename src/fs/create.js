const fs = require("fs").promises;
const path = require("path");

const create = async () => {
  const folderPath = path.join(__dirname, "files");
  const filePath = path.join(folderPath, "fresh.txt");
  const fileContent = "I am fresh and young";

  try {
    await fs.access(filePath);
    throw new Error("FS operation failed: File already exists");
  } catch (error) {
    try {
      await fs.writeFile(filePath, fileContent);
      console.log("File created successfully:", filePath);
    } catch (writeError) {
      throw new Error(`FS operation failed: ${writeError.message}`);
    }
  }
};

await create();
