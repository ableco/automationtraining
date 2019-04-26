module.exports.getStagedFiles =
  "git diff --staged --name-only -z --diff-filter=ACMR";

module.exports.onlyJSFiles = filenames => {
  return filenames.filter(
    file => file.endsWith(".js") || file.endsWith(".jsx"),
  );
};

module.exports.splitFileNames = ret => {
  const fileNames = ret.stdout.substring(0, ret.stdout.length - 1);
  return fileNames.split("\u0000");
};

function and(x, y) {
  return x && y;
}

module.exports.reduceWithAnd = xs => {
  return xs.reduce(and, true);
};

module.exports.exit = success => {
  if (success) {
    process.exit(0);
  } else {
    process.exit(1);
  }
};
