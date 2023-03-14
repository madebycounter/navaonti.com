@echo off

echo Building site...
call bundler exec jekyll build

echo Pushing to AWS...
aws s3 sync .\_site\ s3://navaonti.com --delete

echo Done.