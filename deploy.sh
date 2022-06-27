echo "Switching to branch Master"
git checkout master

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* root@157.245.115.107:/root/home/apps/zay-app/

echo "Done!"