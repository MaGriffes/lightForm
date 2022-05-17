const fs = require("fs-extra");
const path = require("path");
const readFiles = async (filePath, fileName, callback) => {
  const files = fs.readdirSync(filePath);
  files.forEach(file => {
    const fileDir = path.join(filePath, file);
    fs.stat(fileDir, (error, stats) => {
      if (error) {
        return console.log(`错误: ${error}`);
      }
      if (
        (stats.isFile() && fileDir.indexOf(fileName) > -1) ||
        /\.(svg|ttf|jpe?g|gif|png)(\?.*)?$/i.test(fileDir)
      ) {
        //是否是文件
        callback && callback(fileDir);
      } else if (stats.isDirectory()) {
        //是否是文件夹
        readFiles(fileDir, fileName, callback);
      }
    });
  });
};
const componentUrl = "src";
readFiles(path.join(__dirname, "../", componentUrl), ".less", (file, error) => {
  if (error) {
    return console.log(`读取文件失败：${error}`);
  }
  fs.outputFileSync(file.replace(componentUrl, "lib"), fs.readFileSync(file));
});
