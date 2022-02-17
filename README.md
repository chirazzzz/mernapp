# mernapp

## Getting started

You'll need to npm install the dependencies.

The .env file hasn't been pushed to Github so you'll need to recreate this. The first two variables are below however you'll need to create a new MongoDB cluster. 

NODE_ENV = development
PORT = 3000
MONGO_URI = 

You can go to [cloud.mongodb.com](https://cloud.mongodb.com/) to set this up.

![image](https://user-images.githubusercontent.com/38448409/154438492-0959f5f6-5371-4c24-8f77-0b6cd4bfcf44.png)

To get the MONGO connection string you'll need to choose the connect your application option above, follow the instructions and copy the string. That string will be the value of MONGO_URI inyour .env file
