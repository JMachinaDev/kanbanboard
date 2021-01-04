import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: "8q78sjfv",
    dataset: "production",
    useCdn: true
});