/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['es.wikipedia.org', 'https://es.wikipedia.org/'],
    disableStaticImages: true,
    },
    onDemandEntries: {
      onError: (error) => {
        console.error('Error during SSR:', error);
      },
    },
}

module.exports = nextConfig
