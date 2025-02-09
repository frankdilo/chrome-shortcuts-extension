#!/bin/bash

# Remove existing dist directory if it exists
rm -rf dist

# Create a new dist directory
mkdir dist

# Copy necessary files to dist
cp -r manifest.json src public dist/

# Create zip file
cd dist
zip -r ../extension.zip .

echo "✅ Build completed! The extension package is ready in extension.zip"
