#!/bin/sh

export ECR_REPO=559684791460.dkr.ecr.us-east-1.amazonaws.com
echo "ECR_REPO=$ECR_REPO"

REPOSITORY=exceptionly
CONTAINER_NAME=platform
VERSION=$1

echo "Pushing Image "$CONTAINER_NAME

echo "Login to ECR repo"
eval $(aws ecr get-login --no-include-email --region us-east-1)

docker tag $REPOSITORY/$CONTAINER_NAME:$VERSION $ECR_REPO/$REPOSITORY/$CONTAINER_NAME:$VERSION

echo "docker push $ECR_REPO/$REPOSITORY/$CONTAINER_NAME:$VERSION"
docker push $ECR_REPO/$REPOSITORY/$CONTAINER_NAME:$VERSION

if [ $? -ne 0 ]; then
  echo "Docker push failed"
  exit 1;
fi

echo "Created image $CONTAINER_NAME $ECR_REPO/$REPOSITORY/$CONTAINER_NAME:$VERSION"
