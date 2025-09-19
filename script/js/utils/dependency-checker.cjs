const chalk = require('chalk').default;
const semver = require('semver');
const { readFile } = require('fs/promises');
const path = require('path');
const fs = require('fs');

async function findPackageJson(packageName, startPath) {
    let currentDir = startPath;
    while (true) {
        const packageJsonPath = path.join(currentDir, 'package.json');
        if (fs.existsSync(packageJsonPath)) {
            const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
            if (pkg.name === packageName) {
                return packageJsonPath;
            }
        }

        const isProjectRoot =
            fs.existsSync(path.join(currentDir, '.git')) ||
            fs.existsSync(path.join(currentDir, 'package-lock.json')) ||
            fs.existsSync(path.join(currentDir, 'yarn.lock')) ||
            fs.existsSync(path.join(currentDir, 'pnpm-lock.yaml'));

        const parentDir = path.dirname(currentDir);
        if (isProjectRoot || parentDir === currentDir) {
            return null;
        }
        currentDir = parentDir;
    }
}

async function checkDependency(packageName, breakVersion) {
    try {
        const packageEntryPoint = require.resolve(packageName);
        const packageJsonPath = await findPackageJson(packageName, path.dirname(packageEntryPoint));

        if (packageJsonPath) {
            const packageJsonContent = await readFile(packageJsonPath, 'utf8');
            const pkg = JSON.parse(packageJsonContent.toString());
            const installedVersion = pkg.version;

            if (semver.gte(installedVersion, breakVersion)) {
                console.log(chalk.red.bold('--------------------- BREAKING CHANGE WARNING ---------------------'));
                console.log(chalk.red.bold(`Installed ${packageName.toUpperCase()} version is ${installedVersion}.`));
                console.log(chalk.yellow(`Version ${breakVersion} and above of this package may introduce breaking changes.`));
                console.log(chalk.yellow('Ensure your build system is compatible before proceeding.'));
                console.log(chalk.red.bold('-------------------------------------------------------------------'));
            }
        }
    } catch (err) {
        console.error(`[Debug] Failed to check dependency '${packageName}'. Error: ${err.message}`);
    }
}

module.exports = checkDependency;