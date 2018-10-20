rem start /WAIT npm run build

call npm run build

rem navigate into the build output directory
cd dist


git init
git add -A
git commit -m 'deploy'

rem if you are deploying to https://<USERNAME>.github.io
rem git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

rem if you are deploying to https://<USERNAME>.github.io/<REPO>
git remote add gh-pages https://github.com/adi-gonnen/new-proj.git  
git push -f gh-pages master:gh-pages

cd ..