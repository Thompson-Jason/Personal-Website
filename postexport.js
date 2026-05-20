// postexport.js
// Moves blog.html and portfolio.html to index.html inside their respective directories after static export

const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');

function moveToIndexHtml(dirName) {
  const htmlPath = path.join(outDir, `${dirName}.html`);
  const targetDir = path.join(outDir, dirName);
  const targetIndex = path.join(targetDir, 'index.html');
  if (fs.existsSync(htmlPath)) {
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir);
    }
    fs.renameSync(htmlPath, targetIndex);
    console.log(`Moved ${dirName}.html to ${dirName}/index.html`);
  }
}

moveToIndexHtml('blog');
moveToIndexHtml('portfolio');
