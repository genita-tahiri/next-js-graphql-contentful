[![Netlify Status](https://api.netlify.com/api/v1/badges/c9188e35-8df8-4a4a-9359-f5a10df5052f/deploy-status)](https://app.netlify.com/sites/nextjs-contentful-gql/deploys)

## Site Preview URL
[nextjs-contentful-gql.netlify.app/](https://nextjs-contentful-gql.netlify.app/).

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contentful Graphiql Playground

You can explore and inspect the schema of a space using the GraphiQL, an in-browser GraphQL IDE.

To open GraphiQL server visit the below url:
`https://graphql.contentful.com/content/v1/spaces/{SPACE_ID}/environments/{ENVIRONMENT_ID}/explore?access_token={DELIVERY_ACCESS_TOKEN}`

## Contentful UI Extensions

In the folder `contentful-extensions` there is a set of UI Extensions for Contentful. You need to install the `contentful-cli` globally to create/update extensions in Contentful: https://github.com/contentful/contentful-cli

### Select space and environment

- `contentful login --management-token <management-token>`
- `contentful space use`
- `contentful space environment use`

### Create new extension

- navigate to the folder of the new extension you want to add.
- `contentful extension create`
- remember to repeat this for all environments as extensions are not part of migration tool

### Update existing extension

- navigate to the folder of the extension you have updated and want to push to contentful.
- `contentful extension update --force`
- remember to repeat this for all environments as extensions are not part of migration tool

## Data Migration Between Environments

- [Importing and exporting content with the Contentful CLI](https://www.contentful.com/developers/docs/tutorials/cli/import-and-export/)
- Exporting content models, content entries and assets from `Develop` Environment using this cli command `contentful space export --download-assets --environment-id="develop"`
- Importing to the `Master` Environment using this cli command `contentful space import --content-file=PUT_JSON_FILE_NAME.json`

