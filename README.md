## Contento Basic Starter Kit

This is a basic starter kit that has the Contento SDKs and API calls required to connect your front end code to your Contento site. It’s designed to get you started using Contento, and is built with [Next.js](https://nextjs.org).

☯️ [Contento Library Site](https://app.contento.io/library/site-starters?kit=s_01j8Fgt0RKMd5ApH62Vry4TC7V)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🎓 [User Guide](https://www.contento.io/docs/guides/starter-kits/basic)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;📄 [Contento Docs](https://www.contento.io/docs)

## Getting Started

First, install all the required dependencies:

```bash
npm install
```

Then, rename the `.env.sample` file to `.env`.

In your [Contento Account Settings](https://app.contento.io/account/api-keys) create a new API Key for this site, copy the value given to you in the dialog
and then paste it into your `.env` file as the value of the `CONTENTO_API_KEY` key.

Now navigate to the Sites screen, and find your new site. Copy the ID of it from here, and paste it into your `.env` as
the value of the `CONTENTO_SITE_ID` key.

At this point, you can run the development server and get coding:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy this repo is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Once deployed, make sure to update the domain name in your [Site Settings](https://app.contento.io/settings).

## Visual Preview

This project is pre-configured work with the [Contento Visual Preview](https://www.contento.io/docs/sdk/next#visual-preview),
simply go to the [Site Settings > Preview](https://app.contento.io/settings/preview) page, copy the value of the
auto-generated secret and add it into your `.env` as the value of the `CONTENTO_PREVIEW_SECRET` key.

You can use the Preview panel within Contento whilst you are developing the site as we have configured the preview
settings to use `http://localhost:3000` for the preview URL.

Once you have your site deployed however you will want to change this to your production domain so that your content
editors can use it.

## Learn More

To learn more about the tools we’ve used in this repo, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - the React framework we use to produce a static site.
- [Vercel](https://vercel.com) - a simple way to deploy a Next.js site.
