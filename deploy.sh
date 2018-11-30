rm -rf dist
npm run build
cd dist
git init
git add -A
git commit -m 'update api docs'
git push -f git@github.com:akifo/vue-svg-text.git master:gh-pages
