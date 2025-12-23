#!/bin/bash

sudo apt-get update
sudo apt-get install -y lolcat

dotnet restore

mkdir ~/.ssh && chmod 700 ~/.ssh

exercism configure --token=$EXERCISM_TOKEN
exercism configure --workspace=/workspaces/exercism
