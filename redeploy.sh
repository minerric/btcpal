#!/usr/bin/env bash
git add .
git commit -m "redploy"
git push origin master
ansible-playbook redeploy.yml
