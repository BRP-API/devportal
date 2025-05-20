import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { visit } from 'unist-util-visit';

export default function remarkConfigInjector() {
  const basePath = process.env.NODE_ENV === 'production' ? '' : '';
  const imgDirectoryInPublic = 'img';

  return (tree, file) => {
    const dir = path.dirname(file.history[0]);
    let config = {};
    let currentDir = dir;

    while (currentDir !== path.parse(currentDir).root) {
      const configPath = path.join(currentDir, '_config.yml');
      if (fs.existsSync(configPath)) {
        config = yaml.load(fs.readFileSync(configPath, 'utf8'));
        break;
      }
      currentDir = path.dirname(currentDir);
    }

    const placeholderRegex = /\{\{\s*([\w-]+)\s*\}\}/g;
    
    visit(tree, 'text', (node) => {
      node.value = node.value.replace(placeholderRegex, (match, key) => {
        return config[key] || match;
      });
    });
  
    visit(tree, 'link', (node) => {
      if (node.url) {
        node.url = node.url.replace(placeholderRegex, (match, key) => {
          return config[key] || match;
        });
      }
    });

    visit(tree, 'paragraph', node => {
      const image = node.children.find(child => child.type === 'image');

      if (image) {
        const fileName = image.url.replace('./', '');
        image.url = `${basePath}/${imgDirectoryInPublic}/${fileName}`;
      }
    });
  };
}
