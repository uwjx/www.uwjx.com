#!/usr/bin/env bash
git add .
comment="push on branch master"
if [ -z "$1" ]; then
    echo "default comment ! ";
   else
     echo $1;
     comment=$1;
fi
git commit -a -m "$comment"
git push origin master
