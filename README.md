# Twilio voice call action
![](https://img.shields.io/github/v/release/fabasoad/twilio-voice-call-action?include_prereleases) ![YAML Lint](https://github.com/fabasoad/twilio-voice-call-action/workflows/YAML%20Lint/badge.svg)

This action sends Twilio voice call.

## Prerequisites
Sign up to [Twilio](https://twilio.com) official web page. Then [register a new number](https://www.twilio.com/console/voice/numbers) to use it as `from` parameter. If you use free trial account you have to [add verified phone number](https://support.twilio.com/hc/en-us/articles/223180048-Adding-a-Verified-Phone-Number-or-Caller-ID-with-Twilio) to use it as `to` parameter. Account SID and Auth token you can find on a [Dashboard page](https://www.twilio.com/console).

## Inputs
1. `twilio_account_sid` - _[Required]_ Twilio account SID. 
2. `twilio_auth_token` - _[Required]_ Twilio auth token.
3. `text` - _[Required]_ Text that will be send by voice call.
4. `from` - _[Required]_ Phone number in your Twilio account to send the voice call from.
5. `to` - _[Required]_ Phone number to send the voice call to.

## Example usage

### Workflow configuration

```yaml
name: Twilio

on: push

jobs:
  twilio-voice-call:
    name: Twilio voice call
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - uses: fabasoad/twilio-voice-call-action@v1.0.0
        if: success()
        with:
          text: 'GitHub actions build number ${{ github.run_number }} passed successfully.'
          from: '+1(123)4567890'
          to: '+1(123)4567809'
          twilio_account_sid: ${{ secrets.TWILIO_ACCOUNT_SID }}
          twilio_auth_token: ${{ secrets.TWILIO_AUTH_TOKEN }}
```

### Result
Click [here](https://github.com/fabasoad/twilio-voice-call-action/blob/master/example.ogg) to listen.