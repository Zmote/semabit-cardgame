// *.cjs, as default type is module, but we use require - Syntax
// If you are wondering why I wrote this, the reason is the deprecation notes on sass with Bootstrap 5
// annoyed me and I turned them off, but I still wanted to get notified, when I update to a version
// that breaks compatibility, also it was fun and I wanted to try it

const checkDependency = require('./utils/dependency-checker.cjs');

(async () => {
    await checkDependency("sass", "3.0.0");
})();