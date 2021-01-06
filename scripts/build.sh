#!/bin/bash

echo "Starting build..."
rm -rf ./build
npm install
npm run compile
echo "Built Node app"