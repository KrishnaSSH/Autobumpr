#!/bin/bash

# Update and upgrade Termux packages
pkg update && pkg upgrade -y

# Install necessary packages
pkg i git nodejs -y

# Clone Autobumpr repository
cd /
cd storage/emulated/0
git clone https://github.com/KrishnaSSH/Autobumpr

# Navigate to Autobumpr directory
cd Autobumpr

# Copy .env.example to .env
cp .env.example .env

# Open .env in nano text editor
nano .env
