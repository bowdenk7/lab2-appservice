# Lab 2

In this lab you will use Azure App Service to host a simple express app and see how VS Code and the App Service extension make developing on Azure easy and fast.

## Checkout and build the Express/React App
1. Clone and open the code in this repository with VS Code:
`git clone https://github.com/bowdenk7/lab2-appservice.git`
2. Run `npm install` to get the dependencies
3. Run `npm run build` to build locally
4. Run locally with `npm run start`. You should see the following:

## Your First Deployment
1. Open the Azure tab, the App Service section, and then the `CADDAI Backups` demo subscriptions
<img width="393" alt="image" src="https://user-images.githubusercontent.com/820883/46754332-0ca34000-cc77-11e8-9d26-c6a84e17c4cc.png">

2. Right click the app service that corresponds to your machine number (eg. jsinteractive<number>) and choose **Deploy to Web App**

3. Choose browse and select the `lab2-appservice` folder. This contains your entire project folder
4. Deployment will take a minute or two. You can see the status in the `output` window. Feel free to ask us questions while you wait!
5. When complete, you will see a notification in the bottom right. Click **Browse Website**
<img width="465" alt="image" src="https://user-images.githubusercontent.com/820883/46754588-ad91fb00-cc77-11e8-9ec0-6a145b17256a.png">
6. If everything worked you should see a basic express page:
<img width="556" alt="image" src="https://user-images.githubusercontent.com/820883/46754668-da461280-cc77-11e8-9e01-0c16da5b0e0f.png">

## Make a code change
1. Back in VS Code, open `views/index.pug` and make a change. If you're unfamiliar with pug, that's ok, find **line 5** and edit the text.
<img width="717" alt="image" src="https://user-images.githubusercontent.com/820883/46756803-247dc280-cc7d-11e8-9abf-29b35ce1a3f8.png">

2. Redeploy following the same steps in the above section


## All Done!
