# Azure Functions with tsoa

Deploy an OpenAPI-compliant REST APIs using [tsoa](https://github.com/lukeautry/tsoa) on Azure Functions

## Development Setup

```zsh
npm install # install required dependencies
npm start # start Azure Functons emulator for local development
npm run generate-spec # generate OpenAPI specs in JSON format
```

## Motivation

I don't want to write OpenAPI specs for each function by hand, and I want to deploy it with Azure Functions. [tsoa](https://github.com/lukeautry/tsoa) can do that for me, but it will require some tinkering for it to work with Azure Functions.

## How it works?

It's just Azure Functions calling a method in the controllers that uses tsoa's decorators to help generate specs. Manual routing (in `function.json`) is required because we only use tsoa for spec generation capabilities.
