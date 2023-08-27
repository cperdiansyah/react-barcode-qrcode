import { exec } from 'child_process';

function executeCommand(command: string): Promise<string> {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
      }
      resolve(stdout);
    });
  });
}

async function publish(type: string) {
  try {
    switch (type) {
      case 'alpha':
      case 'beta':
        await executeCommand(`npm version prerelease --preid=${type}`);
        await executeCommand(`npm publish --tag ${type}`);
        break;
      case 'release':
        await executeCommand('npm version patch');
        await executeCommand('npm publish');
        break;
      default:
        console.error('Unknown type. Use alpha, beta, or release.');
        break;
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Check for command line arguments
const type = process.argv[2];
if (!type) {
  console.error('Please provide a type: alpha, beta, or release.');
  process.exit(1);
}
publish(type);
