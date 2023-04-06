/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    imageSizes: [360,768,1024],
    deviceSizes: [360,768,1024],
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'development' ? undefined : '.' ,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    }
  },
  env: {
    appMeta: {
      canonical: 'https://brandedcontent.afr.com.au/atkinsons/scent-uncover-adventure-james', // https://brandedcontent.[masthead].com.au/xxx/xxx"
      brand: 'Atkinsons 1799', // e.g Black Hawk
      title: 'On the scent: Uncover adventure, with James', // e.g Being a good pet parent starts at mealtime
      description: 'Paying tribute to its eponymous founder, the new James EDP from UK fragrance house Atkinsons is a contemporary cologne for those who tread their own path.',
      siteName: 'Financial Review', // The Sydney Morning Herald, Good Food
      icon: 'afr', // smh, goodfood, nine, afr, traveller
      themeColour: '#E9531E', // hex
      ogImage: 'https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2023/04/11734-Atkinsons-Fragrance-AFR-Social-Share.jpg',
      date: '12-04-23', // e.g 03-12-23
      year: '2023' // e.g 2023
    },
    jobCode: '11734-atkinsons-afr', // used for nine ga scripts
    guidelines: false, // shows or hides layout guideline bars
    activateMasthead: false, // shows or hides masthead
    mastheadOverride: false, // overrides masthead that's pulling from hostname: e.g honey,style,travel,kitchen,you,parenting,coach,pets,celebrity
  }
}

module.exports = nextConfig