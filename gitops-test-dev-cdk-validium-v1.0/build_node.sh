#!/bin/bash

# Navigate to the cloned directory
cd cdk-validium-node

# Build the Docker image using the provided Dockerfile
make build-docker

# Navigate to the test directory
cd test

# Run all needed components
make run
