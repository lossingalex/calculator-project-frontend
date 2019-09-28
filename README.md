# calculator-project-frontend

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

### Manual deployment for Frontend React:

- Pre-requisite: `Setup your AWS CLI and credential` from the AWS Setup
- cd `frontend`
- npm run build
- Run AWS to S3 Bucket (Note: `calculator-project` should be you bucket name)

```bash
aws s3 sync build/ s3://calculator-project

```

- Current project is deployed to S3 bucket: http://calculator-project.s3-website-ap-southeast-1.amazonaws.com/
