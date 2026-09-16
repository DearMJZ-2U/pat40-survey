const fs = require("fs");
const path = require("path");

const root = __dirname;
let html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const css = fs.readFileSync(path.join(root, "style.css"), "utf8");
const js = fs.readFileSync(path.join(root, "app.js"), "utf8");

html = html.replace(
  '<link rel="stylesheet" href="style.css" />',
  "<style>\n" + css + "\n</style>"
);
html = html.replace(
  '<script src="app.js"></script>',
  "<script>\n" + js + "\n</script>"
);

fs.writeFileSync(path.join(root, "pat40-standalone.html"), html);
console.log("standalone bytes", html.length);
