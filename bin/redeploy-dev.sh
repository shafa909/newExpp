#!/usr/bin/env bash


curl -X POST -H 'Accept: application/json' -H "Authorization: Bearer ${SWARMPIT_TOKEN}" http://swarm.exceptionly.io:888/api/stacks/platform/redeploy