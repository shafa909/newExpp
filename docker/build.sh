#!/bin/bash

TAG=$1

docker build -t exceptionly/platform:$TAG .
