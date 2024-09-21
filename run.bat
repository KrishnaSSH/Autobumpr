#!/bin/bash

# Update and upgrade Termux packages
pkg update && pkg upgrade -y

# Install necessary packages
pkg i git nodejs -y

# Copy .env.example to .env
cp .env.example .env

# Open .env in nano text editor
nano .env
