export default {
    logo: <span>PinPint Documentation</span>,
    project: {
        link: 'https://github.com/RajasBhagatkar/PinPoint-PincodeExtractor'
    },
    useNextSeoProps: () => {
        return { titleTemplate: `%s - PinPoint` };
    },
    banner: {
        text: "🚧 The PinPoint documentation is undergoing reconstruction. Please be patient for all providers to be fully-documented. 🚧",
    },
    faviconGlyph: "🚧",
    footer: {
        text: "Copyright (c) Rajas Bhagatkar | 2024-present",
    },
    editLink: {
        component: null
    },
    feedback: {
        useLink: () => "/feedback"
    },
    head: function useHead() {
        const description =
          "A collection of documentation for PinPoint API. Find out how to efficiently use the PinPoint Pincode API here!";
        return (
          <>
            <meta httpEquiv="Content-Language" content="en" />
            <meta name="description" content={description} />
            <meta name="og:description" content={description} />
          </>
        );
      },
    // ... other theme options
}