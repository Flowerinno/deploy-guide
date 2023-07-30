# You will need to store deploy ssh key and secret keys in Github repository of your project

# Required secrets.

`AWS_ACCESS_KEY_ID=user key id`

`AWS_SECRET_ACCESS_KEY=user secret key`

`AWS_REGION=user region`

`S3_BUCKET=name of the bucket`

`SSH_KEY=.pem file as base64 string`

# aws user's security credentials save on creation.

# For deploy key you will need to generate new ssh key in your instance and add to your repo

![image](https://github.com/Flowerinno/deploy-guide/assets/93313212/5526d832-2302-4cac-860a-acb71d86eacb)

Commands to generate and copy the key:

`ssh-keygen` - skip all question

Your key will be generated in ./.ssh/id_rsa.pub key (public key) , you need to copy the key.

`cat .ssh/id_rsa.pub`

Copy contents `CTRL + Shift + C` (if linux OS) and paste the key in github deploy keys , no need to specify the name of the key, it will automatically add name.

