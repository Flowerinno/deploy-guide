
# EC2


### 1. Create instance !! Don't forget to pick correct region !! 
![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/0764a1b7-8907-4c76-a208-bdad14ee20b8)
 ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/e9e6db86-6d5a-401e-aad1-122949783741)

 
  1.1 Create Key pair 
     ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/bd433d29-6402-4555-a5af-f5c69830b5a0)
  
  ###  !IMPORTANT You will need this file, don't lose it (example-application.pem)  
  ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/1b6daf65-4dae-46e2-aec8-eab6ab3dfa40)

  1.2  Configure storage
  ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/5ed0872f-623f-46b3-9a3b-706b96f97c73)

###  2. Create Elastic IP and assign to your instance to have static ip

  2.1 Allocate Elastic IP
  ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/79855e9a-4e39-4d0f-a26a-e6f2c0911cd3)

  2.2 Go to created elastic ip and allocate it

  ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/f29af3a2-846e-40fe-b6f8-b84be1e952a3)

  ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/395227cb-4749-433d-98e5-0618fe6597f3)

  ### -> Associate // Now your instance ip will be static

###  3. Pick your instance and click `Connect` 

  ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/16cb8f36-be7d-43fe-a168-d78ef6d59934)

   3.1 You will need to SSH into this instance to install node.js, pm2 , aws cli, jb

  ###  Place your `example-application.pem` file in your server root folder to be able to SSH into the instance. (You'll have another name of the file)

  Give your .pem file proper permissions with command (if linux) - `chmod 400 example-application.pem`

  and paste this command in your terminal: 
  
  ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/b0d2576f-c05d-4837-a4b6-a91a7f6b607d)

  After that you will be inside your instance where you need to install packages.

  ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/25f4ec62-1c2b-452d-b00c-10f6b4b6bc22)

  - Install PM2 `sudo npm i pm2 -g`
    
  - Install NODE (check your version locally to avoid problems) [https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04](https://github.com/nodesource/distributions/blob/master/README.md#debian-and-ubuntu-based-distributions)

  - Install AWS CLI  https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
    
    (Probably will need to install zip/unzip packages to unpack)

  - Install jq package `sudo apt install -y jq`

### Run command:
`aws configure`  - paste Client Id & Secret Key & Region

###  4. Create load balancer

 For the load balancer create target group

 ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/3a9674d2-3b5e-46ea-8829-b7e9110180d6)

![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/3e9c7b18-ab06-4fcd-a1c6-3e893a9c1a71)

 `api/health-check` will be your app controller with this endpoint. (create if doesn't exist)

![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/2016a8da-bbd5-40f9-894a-af4111ae85ec)

 -> Create target group

 Back to load balancer 

 ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/1874570f-20ab-43fb-a67c-01f0d008f778)

Pick 3 availability zones

![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/8794afdd-f771-4d4d-a2a1-6af26151d2a3)

  ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/3c37e456-886d-4540-b125-e5760c87d542)

  ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/7a3b2f9f-349f-4adf-b4d3-ff53841f688f)

Create -> Go to the balancer
  
Edit listeners and rules

![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/48016e07-7a7b-44b8-8ff5-f421cfddc35d)

![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/b9166b0c-f452-4691-9890-d4bd49f952b0)

 ###  Add certificate to port 443

 Second port `80`  

 ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/a36e5a0b-6e5c-4304-8c9b-abdcd6740514)

 No certificate required

 Go to balancer -> security -> security group (click by id)
 Configure the following ports

![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/18283402-b6d4-4087-a79d-248be5af5b71)


 


 
