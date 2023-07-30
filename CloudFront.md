# CloudFront

# We will need two distributions for both `example.ua` and `www.example.ua` (as redirect)

1. Go to CloudFront dashboard -> Create distribution
   
   1.1 ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/af5d9fb5-8746-4f6d-921e-071a5f46f16b)
   
   1.2 Click `Use website endpoint`.
   
    ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/e9beb1ad-850f-4e5a-bf0c-75af84909fb8)
   
    ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/319ab486-5b87-4f93-908b-0e9a60606051)
   
    # For `example.ua` domain keep the caching option enabled
   
      ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/97b382b9-dec4-4ef0-9f03-dd04f7beccc6)
   
![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/a4debcac-3d23-4f3a-a3b1-59aedb0cb491)

![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/b506ea2e-b5d8-442b-a5d8-ae90928c4aea)

# !In Custom SSL certificate pick your certificate (available only N.Virginia)

![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/e8b90c05-cbb2-44f1-83f8-c5aef27ddbbe)

# Create distribution

2. For `www.xample.ua`(redirect) create second distribution
3. 
     2.1 Change only the following parts:
   
      # Disable caching
   
![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/9f720076-4e30-4fa5-9a19-edca1858f676)

      # Change alternate domain name 
      
![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/30a7f6a0-d29a-40af-8804-3eb914484ac9)

      # Add SSL certificate and description as `redirect` to see the difference between distros.
      
For every distribution add origin for both example.ua and www.example.ua s3 buckets.

For example.ua (now www e.g redirect) add Error pages like the following

![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/7f9ce31a-66ef-4cfa-8581-a1356ccf467a)
