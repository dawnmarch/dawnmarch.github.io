module.exports = {
    title: 'DawnMarch',

    description: 'DawnMarch\'s homepage',

    head: [
        ['link', {
            rel: 'icon',
            href: '/assets/img/avatar.jpg'
        }],
    ],

    locales: {
        '/': {
            lang: 'zh-CN',
        },
    },

    theme: 'vuepress-theme-meteorlxy',

    themeConfig: {
        lang: Object.assign(require('vuepress-theme-meteorlxy/lib/langs/zh-CN'), {
            home: `Welcome to DawnMarch's Homepage`,
            posts: 'My Posts',
        }),

        personalInfo: {
            // your personal info to display in the info card
            nickname: 'DawnMarch',
            description: '冰冻三尺，非一日之寒',
            email: 'wjqxhy@qq.com',
            location: 'ShenZhen, China',
            organization: 'Hunan University',

            // your avator image to display in the info card (related to the .vuepress/public directory)
            avatar: '/assets/img/avatar.jpg',

            // your sns accounts to display in the page footer and the bottom of info card
            sns: {
                github: {
                    account: 'dawnmarch',
                    link: 'https://github.com/dawnmarch'
                },
                weibo: {
                    account: '@破晓三月',
                    link: 'https://weibo.com/'
                }
            }
        },

        headerBackground: {
            // url: '/assets/img/bg.jpg',

            // use geopattern to generate background randomly
            useGeo: true
        },

        // for the navbar
        nav: [{
            text: 'Home',
            link: '/',
            exact: true
        },
        {
            text: 'Posts',
            link: '/posts/',
            exact: false
        },
        {
            text: 'About',
            link: '/about/',
            exact: false
        }]
    },

    markdown: {
        toc: {
            includeLevel: [2, 3]
        }
    },

    plugins: [
        ['@vuepress/google-analytics', {
            'ga': 'UA-155219110-1',
        }],
        // TODO: new feature in vuepress 1.3.0
        ['container', {
            type: 'details',
            before: info => `<details class="custom-block details">${info ? `<summary>${info}</summary>` : ''}\n`,
            after: () => '</details>\n'
        }],
    ],

    chainWebpack: (config, isServer) => {
        if (isServer === false) {
            config.optimization.splitChunks({
                maxInitialRequests: 5,
                cacheGroups: {
                    2: {
                        test: /[\\/]node_modules[\\/](@vssue|@vuepress|vssue|nprogress|geopattern)[\\/]/,
                        name: 'vendor.2',
                        chunks: 'all',
                    },
                    1: {
                        test: /[\\/]node_modules[\\/](vue|vue-router|vue-i18n|vue-class-component)[\\/]/,
                        name: 'vendor.1',
                        chunks: 'all',
                    },
                    0: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10,
                        name: 'vendor.0',
                        chunks: 'all',
                    },
                },
            })
        }
    }
}
