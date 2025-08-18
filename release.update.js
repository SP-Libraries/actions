/* eslint-disable no-console */
import fs from 'fs';
import { execSync } from 'child_process';

const space = 2;
const packageFile = './package.json';

if (!process.env.RELEASE_VERSION) {
  console.error('RELEASE_VERSION environment variable is not set');
  process.exit(1);
}

// Update package.json
if (fs.existsSync(packageFile)) {
  const packageJson = JSON.parse(fs.readFileSync(packageFile, 'utf8'));
  packageJson.version = process.env.RELEASE_VERSION;
  fs.writeFileSync(
    packageFile,
    JSON.stringify(packageJson, null, space) + '\n'
  );
  console.log(`Updated ${packageFile} to version ${packageJson.version}`);

  // Update package-lock.json
  try {
    execSync('npm install --package-lock-only', { stdio: 'inherit' });
    console.log('Updated package-lock.json');
  } catch (error) {
    console.error('Failed to update package-lock.json', error);
  }
}
