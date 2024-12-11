#!/bin/bash

echo "Starting ChainFux setup..."

# 1. Initialize Git Repository
if [ ! -d ".git" ]; then
  echo "Initializing Git repository..."
  git init
else
  echo "Git repository already initialized."
fi

# 2. Add Submodules
echo "Adding submodules..."
git submodule add <Sanaa_Music_GitHub_URL> apps/sanaa_music || echo "Sanaa Music already added."
git submodule add <Sin_JCX_GitHub_URL> apps/sin_jcx || echo "Sin&JCX already added."
git submodule add <UNBNKD_Wallet_GitHub_URL> apps/unbnkd_wallet || echo "UNBNKD Wallet already added."

# 3. Initialize and Update Submodules
echo "Initializing and updating submodules..."
git submodule init
git submodule update

# 4. Install Dependencies
echo "Installing dependencies..."
if [ -f "package.json" ]; then
  npm install
else
  echo "No package.json found at the root. Skipping..."
fi

for app in apps/*; do
  if [ -f "$app/package.json" ]; then
    echo "Installing dependencies for $app..."
    cd $app
    npm install
    cd ../../
  fi
done

# 5. Set Up Environment Variables
if [ ! -f ".env" ]; then
  echo "Creating default .env file..."
  echo "JWT_SECRET=your_secret_key" > .env
  echo "PORT=4000" >> .env
else
  echo ".env file already exists. Skipping..."
fi

# 6. Finish Setup
echo "ChainFux setup complete. You're ready to go!"
