const fs = require('fs').promises;
const path = require('path');

const rename = async () => {
  const sourceFilePath = path.join(__dirname, 'wrongFilename.txt');
  const targetFilePath = path.join(__dirname, 'properFilename.md');

  try {
    await fs.access(sourceFilePath);   
    await fs.access(targetFilePath);    
    throw new Error('FS operation failed: Target file already exists');
  } catch (sourceFileError) {    
    throw new Error('FS operation failed: Source file not found');
  } catch (targetFileError) {    
    try {
      await fs.rename(sourceFilePath, targetFilePath);
      console.log('File renamed successfully:', targetFilePath);
    } catch (renameError) {
      throw new Error(`FS operation failed: ${renameError.message}`);
    }
  }
};


await rename();
