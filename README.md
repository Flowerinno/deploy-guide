# AWS deploy-guide 
1. [S3 buckets](https://github.com/Flowerinno/deploy-guide/blob/main/S3.md)
2. [Certificates](https://github.com/Flowerinno/deploy-guide/blob/main/Certificates.md)
3. [Cloud front](https://github.com/Flowerinno/deploy-guide/blob/main/CloudFront.md)
4. [EC2 (instance, load balancer, elastic IP)](https://github.com/Flowerinno/deploy-guide/blob/main/EC2.md)
5. [RDS database](https://github.com/Flowerinno/deploy-guide/blob/main/RDS.md)
6. [Secrets Manager](https://github.com/Flowerinno/deploy-guide/blob/main/Secrets.md)
7. [Secret keys for Github repository](https://github.com/Flowerinno/deploy-guide/blob/main/Secret-keys.md)


generate-env-file.sh, ecosystem.config.js are files to automate your deployment process. 
For github actions folder with necessary commands (CI/CD) ask your PM or Tech Lead, or else where ;)  

Commands for production deployment with pm2:

`pm2 deploy production setup`

This command is used to set up the initial deployment configuration for your application in the production environment. It is typically run once when you are preparing to deploy your application to the production server for the first time.

`pm2 deploy production`

Once you have set up the deployment configuration using pm2 deploy production setup, you can use this command to deploy your Node.js application to the production environment anytime you want to update the code on the server. (no need to do it manually, we will have CI/CD Github actions configured, hopefully)
