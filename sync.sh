echo "Building site..."
bundler exec jekyll build

echo "Pushing to AWS..."
aws s3 sync ./_site s3://navaonti.com --delete

echo "Done."