const { execSync } = require('child_process')

async function globalSetup() {
  // Start the dev server
  execSync('npm run dev', { stdio: 'inherit' })
}

module.exports = globalSetup