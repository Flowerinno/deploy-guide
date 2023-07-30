# RDS Database

# Pick your DB (Postgres in this case) 
![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/245c39c8-4212-485a-a61b-03be244c96c7)

1. ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/e72703bd-7e3a-4f12-9c7a-a2273bb61391)

2. ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/cff1f4d1-e7aa-4c59-9f89-6431f79dec6f)

  # Create db name , username and password (save credentials, you'll connect with them to db)

3. ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/f3d2f7f0-38b5-40fe-9c9f-70c302317feb)

4.  ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/d7dd5fd2-cb0d-4672-88d5-2212fa4485a4)

5. Choose your existing ec2 instance

   ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/f2a44a31-c865-42ae-b234-d9933a365cac)

6. ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/407468e4-62da-4b4f-81d6-9a21d8fa8875)


7. Disable monitoring

![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/a233c137-9dc7-4195-94d0-62a66e6e0620)

8. ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/77977f72-e911-497a-83ad-42586851c938)

9.  ![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/79ce273e-02fa-42d6-aefd-8745e0c0e00a)

# Important note, check your price before creation!

You will connect to your database via secrets manager

`DATABASE_URL=postgresql://username:password@aws-endpoint:5432/databaseName?schema=public`

# Database is created
