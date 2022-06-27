echo "Switching to branch Master"
git checkout master

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r out/* root@157.245.115.107:/home/apps/zay-app/out

echo "Done!"