# CALCULATOR PROJECTS

## Architecture:

#### Frontend

- React Calculator

### APIs

- Serverless calculator APIs
- Serverless reporting APIs

### Authentication

- login to restrict the access to the calcuator (NOT DONE)

#### Backend process

- Serverless Daily/weekly/monthly report generation. (NOT DONE)

## Infrastructure and tools

#### Development tools

- Github for code versioning
- Swagger Hub for API documentation

#### Frontend

- React Framework
- S3 for React frontend hosting

#### APIs

- AWS Serverless for APIS and backend process
- serverlesss.com APIs Framework

#### Reporting

- Amazon DynamoDB for transaction
- S3 for static report storage (NOT DONE)
- SQS for transaction for decoupling write transaction ?  (NOT DONE)

#### Monitoring

- Basic: Out of box AWS Cloudwatch / DynamoDB monitoring
- More Advance: Grafana for monitoring ? (NOT DONE)

#### Authentication system

- More Advance: AWS Cognito (NOT DONE)

## Stories

#### NON-FUNCTIONAL REQUIRMENTS

DONE - NFR1 - APIs: Set up a local server less framework with unit testing.
DONE - NFR2 - Frontend: Set up a local React for frontend.
DONE - NFR3 - APIs Travis CICD to push the code to AWS (including but, deploy, versioning and testing automation)
DONE - NFR4 - React Travis CICD to push to S3.
DONE - NFR5 - Swagger and Postman Documentation set up.
DONE - NFR6 - Set Amazon DynamoDB + S3 storage for reporting
DONE - NFR7 - Update README for how to run 
DONE - NFR8 - CICD with better versioning management and tagging
NFR8 - Create separated Dev, QA and PROD envrionment

#### CALCULATOR

DONE - C1 - APIs for Calculation basic and more advanced calculator
DONE - C2 - UI Calculator (simple text input) and integration to APIS
DONE - C3 - UI Advance calculator with buttons
C4 - Login integration with AWS Cognito
C5 - Improve calculator UI using Bootstrap

#### REPORTING

DONE - R1 - get reports though API
R2 - Backend process to generate reports and store in S3
R3 - UI to display reports
R5 - Decouple Reporting transaction saving using Queue Messaging

#### MONITORING
M1 - Basic AWS monitoring with AWS Cloudwatch and serverless integration.
M2 - Grafana integration with AWS Cloudwatch
M3 - Grafana reporting setup
