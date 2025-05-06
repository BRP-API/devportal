import fs from 'fs';
import path from 'path';
import fsExtra from 'fs-extra';

const fsPromises = fs.promises;
const sourceDir = './pages/img';
const targetDir = './public/img';

const createPostImageFoldersForCopy = async () => {
    const files = await fsPromises.readdir(sourceDir);

    for (const file of files) {
        const sourcePath = path.join(sourceDir, file);
        const targetPath = path.join(targetDir, file);

        const stat = await fsPromises.stat(sourcePath);
        if (stat.isFile()) {
            await fsPromises.copyFile(sourcePath, targetPath);
        }
    }
}

await fsExtra.emptyDir(targetDir);
await createPostImageFoldersForCopy();