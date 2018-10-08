# Getting Started

This application is a canonical React application generated with `create-react-app`. The client code is under the `client` folder. The server code is in `index.js`. It is designed to work well with [Visual Studio Code](https://code.visualstudio.com) and to be easily deployed to [Azure App Service](https://azure.microsoft.com/en-us/services/app-service/), Azure's fully-managed Platform as a Service (PaaS) that let's you deploy and scale web, mobile, and API apps. 

## Getting the Code

Clone directly from GitHub or from your Try Azure App Service instance.

## Running the Application Locally

After cloning, install the necessary npm dependencies and then run the local development server to launch the application:

``` console
npm install
npm run start-dev
```

The default browser will open and you will automatically browse to `http://localhost:3000`. The Express API is running on port 3001 and Webpack will take care of proxying requests from the front-end server to your API server as needed.

## Deployment

### Production Build

```
> npm run build
```

You may want to prune both the root and the client packages:

```
> npm prune --production && cd client && npm prune --production
```

### Deploying to Azure
When you first open this folder in VS Code, you'll be prompted to install the [Azure App Service extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice). 

The App Service extension lets you quickly quickly create sites, deploy them, view logs, and even set environment variables (such as a Connection String), right from within VS Code. For more information, see the [App Service Walkthrough](https://code.visualstudio.com/tutorials/app-service-extension/getting-started).

## Additional Documentation

More information on building and deploying Node applications to Azure can be found on the [Node Developer Center](https://docs.microsoft.com/en-us/javascript/azure/?view=azure-node-latest).

## Contributing

This sample's code is hosted on GitHub: https://github.com/microsoft/vscode-tas-react.

This project welcomes contributions and suggestions. Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## License
[MIT](LICENSE.md)