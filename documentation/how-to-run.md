## Pre-requisite

- Nodejs: version 10.x
- AWS Account and CLI setup
- S3 Bucket for Frontent hosting

### Nodejs

- Official: <https://nodejs.org/en/download/>
- RECOMMENDED - To avoid permission error: <https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally>

### Setup your AWS CLI and credential

#### Install AWS CLI

- Instructions to follow: [AWS CLI install](http://docs.aws.amazon.com/cli/latest/userguide/installing.html)
- Or directly for MacOs user: [AWS CLI install MacOS](http://docs.aws.amazon.com/cli/latest/userguide/cli-install-macos.html)

#### Configure AWS CLI and credentials

- Instructions to follow: [AWS cli configuration](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html)

```bash
$ aws configure
AWS Access Key ID [None]: your_access_key
AWS Secret Access Key [None]: your_secret_key
Default region name [None]: ap-southeast-1
Default output format [None]:
```

This command line will create a credentials file at :

- `~/.aws/credentials` on `Mac/Linux` 
- `C:\Users\USERNAME\.aws\credentials` on `Windows`

This file will be used by the serverless framework when deploying to AWS.

### Frontend Hosting using S3

- Current project is using this S3 bucket: http://calculator-project.s3-website-ap-southeast-1.amazonaws.com/

- To install your own S3 Bucket:
https://serverless-stack.com/chapters/create-an-s3-bucket.html

## Deployment

### CICD deployment using Travis

CICD is deployed using Travis: https://travis-ci.com

A `.travis.yml` file is already ceated to run a job in Travis.

```text
Note: You should change the S3 bucket name in the package.json as S3 name are unique globally.
```

Set up the below variable for your Travis job in your Travis account setup:

- AWS_ACCESS_KEY_ID: [Your AWS client id set up in previous step]
- AWS_SECRET_ACCESS_KEY: [Your AWS secret Key set up in previous step]
- AWS_DEFAULT_REGION: `ap-southeast-1`
- CI: `true`
- GH_TOKEN: [Personal github access token](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line)

### Manual deployment for Frontend React:

- Pre-requisite: `Setup your AWS CLI and credential` from the AWS Setup
- cd `frontend`
- npm run build
- Run AWS to S3 Bucket (Note: `calculator-project` should be you bucket name)

```bash
aws s3 sync build/ s3://calculator-project --delete
```

- Current project is deployed to S3 bucket: http://calculator-project.s3-website-ap-southeast-1.amazonaws.com/
