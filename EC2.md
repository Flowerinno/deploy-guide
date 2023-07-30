# EC2


# 1. Create instance !! Don't forget to pick correct region !! 

 ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/0764a1b7-8907-4c76-a208-bdad14ee20b8)
   
 ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/e9e6db86-6d5a-401e-aad1-122949783741)

 
  1.1 Create Key pair 
      ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/bd433d29-6402-4555-a5af-f5c69830b5a0)
  
  ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/1b6daf65-4dae-46e2-aec8-eab6ab3dfa40)


  # !IMPORTANT You will need this file, don't lose it (example-application.pem)

  1.2 ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/5ed0872f-623f-46b3-9a3b-706b96f97c73)

# 2. Create Elastic IP and assign to your instance to have static ip

  2.1 ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/79855e9a-4e39-4d0f-a26a-e6f2c0911cd3)

  2.2 Go to created elastic ip and allocate it

  ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/f29af3a2-846e-40fe-b6f8-b84be1e952a3)

  ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/395227cb-4749-433d-98e5-0618fe6597f3)

  # -> Associate // Now your instance ip will be static

# 3. Pick your instance and click `Connect` 

  ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/16cb8f36-be7d-43fe-a168-d78ef6d59934)

   3.1 You will need to SSH into this instance to install node.js, pm2 , aws cli, jb

  # Place your `example-application.pem` file in your server root folder to be able to SSH into the instance. (You'll have another name of the file)

  Give your .pem file proper permissions with command (if linux) - `chmod 400 example-application.pem`

  and paste this command in your terminal: 
  
  ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/b0d2576f-c05d-4837-a4b6-a91a7f6b607d)

  After that you will be inside your instance where you need to install packages.

  ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/25f4ec62-1c2b-452d-b00c-10f6b4b6bc22)

  - Install PM2 `sudo npm i pm2 -g`
    
  - Install NODE (check your version locally to avoid problems) https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04

  You will need this section for node installation

  ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/1d3a6610-c732-42fe-a32f-3c4dca789307)

  - Install AWS CLI  https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
    
    (Probably will need to install zip/unzip packages to unpack)

  - Install jq package `sudo apt install -y jq`

  

    


  

  
  

  
