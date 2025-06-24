import fs from 'fs';
import path from 'path';
import fsExtra from 'fs-extra';

const fsPromises = fs.promises;
const sourceDir = './pages/img';
const targetDir = './public/img';

export async function createPostImageFoldersForCopy() {
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

export async function copyImages() {
    await fsExtra.emptyDir(targetDir);
    await createPostImageFoldersForCopy();
}