module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  env: {
    questions: [
      {
        "id": 1,
        "question": "HMOs make up approximately what percentage of bovine (cow’s) milk?",
        "options": {
          "A": "<0.1%",
          "B": "<1.0%",
          "C": "<5.0%",
          "D": ">10.0%"
        },
        "answer": {
          "value": "A",
          "content": {
            "tagline": "With Similac, there's a lot in every drop.",
            "info": "Only Similac includes 2'-FL HMO, previouslt only found in breast milk, for improving immunity."
          },
          "asset": ""
        }
      },
      {
        "id": 2,
        "question": "True or false: HMOs support the immune system beyond the gastrointestinal tract.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": {
          "value": "A",
          "content": {
            "tagline": "With Similac, there's a lot in every drop.",
            "info": "Only Similac includes 2'-FL HMO, previouslt only found in breast milk, for improving immunity."
          },
          "asset": ""
        }
      },
      {
        "id": 3,
        "question": "HMOs are associated with reduced gastrointestinal and respiratory infections.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": {
          "value": "A",
          "content": {
            "tagline": "With Similac, there's a lot in every drop.",
            "info": "Only Similac includes 2'-FL HMO, previouslt only found in breast milk, for improving immunity."
          },
          "asset": ""
        }
      },
      {
        "id": 4,
        "question": "Breastfed babies have __ fewer infections than babies fed with bovine milk.",
        "options": {
          "A": "2x",
          "B": "4x",
          "C": "5x",
          "D": "10x"
        },
        "answer": {
          "value": "A",
          "content": {
            "tagline": "With Similac, there's a lot in every drop.",
            "info": "Only Similac includes 2'-FL HMO, previouslt only found in breast milk, for improving immunity."
          },
          "asset": ""
        }
      },
      {
        "id": 5,
        "question": "Which company was the first in the world to successfully launch HMO in infant formula?",
        "options": {
          "A": "Abbott",
          "B": "Nestle",
          "C": "Danome",
          "D": "Mead Johnson"
        },
        "answer": {
          "value": "A",
          "content": {
            "tagline": "With Similac, there's a lot in every drop.",
            "info": "Only Similac includes 2'-FL HMO, previouslt only found in breast milk, for improving immunity."
          },
          "asset": ""
        }
      }
    ]
  },
  css: [
    'hover.css/css/hover-min.css',
    { src: 'bulma', lang: 'sass' }
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Generate configuration
  * Dynamic routes need to be defined
  */
  // generate: {
  //   routes: [
  //     '/slide'
  //   ]
  // },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
