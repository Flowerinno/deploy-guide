# Hosted Zone (Route 53) 

If domain is registered not on AWS (like transIP, marcaria) you will have to configure your DNS records.

Duplicate every dns record in your hosted zone.

![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/d62246ab-5bfe-4dac-94e6-638278e9571b)

If your domain is registered on a piece of shit like marcaria, you will have to change your DNS Server

Basically just add these records to marcaria and update (takes up to 48 hours to complete) 

![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/c1a78413-32f3-42fa-839a-670505f38144)

# Required records in your hosted zone:

1. For every cloudfront distro you will need to make `A` & `AAAA` records and point to appropriate distribution
   
2. For your server you will create `api.example.ua` A record and point to created instance balancer.

