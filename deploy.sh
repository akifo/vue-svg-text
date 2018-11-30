rm -rf dist
npm run build
cd dist
touch .nojekyll
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:akifo/vue-svg-text.git master:gh-pages
