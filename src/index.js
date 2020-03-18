const core = require('@actions/core');
const client = require('twilio')(
  core.getInput('twilio_account_sid'),
  core.getInput('twilio_auth_token'),
  { lazyLoading: true }
);
const fs = require('fs');

const VOICE_FILE = 'src/voice.generated.xml';

const oldContent = fs.readFileSync('src/voice.xml', 'utf8');
process.stdout.write(oldContent);
const newContent = oldContent.replace('${text}', core.getInput('text'));
fs.writeFileSync(VOICE_FILE, newContent);

client.calls
  .create({
    from: core.getInput('from'),
    to: core.getInput('to'),
    url: VOICE_FILE
  })
  .then(call => process.stdout.write(call));
