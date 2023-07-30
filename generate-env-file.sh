#!/bin/bash

AWS_SECRET_ID=your aws secret name
AWS_REGION=
ENVFILE="./.env"

# Export the secret to .env
aws secretsmanager get-secret-value --secret-id $AWS_SECRET_ID --region $AWS_REGION | \
  jq -r '.SecretString' | \
  jq -r "to_entries|map(\"\(.key)=\\\"\(.value|tostring)\\\"\")|.[]" > $ENVFILE
