module.exports = {
    title: 'DawnMarch',

    description: 'DawnMarch\'s homepage',

    head: [
        ['link', {
            rel: 'icon',
            href: '/assets/img/avator.jpg'
        }],
    ],

    locales: {
        '/': {
            lang: 'zh-CN',
        },
    },

    // use this theme
    theme: 'meteorlxy',

    // set theme config
    themeConfig: {
        personalInfo: {
            // your personal info to display in the info card
            nickname: 'DawnMarch',
            description: 'Happy Coding<br/>Happy Life',
            email: 'wjqxhy@qq.com',
            location: 'ShenZhen City, China',
            organization: 'Hunan University',

            // your avator image to display in the info card (related to the .vuepress/public directory)
            avator: '/assets/img/avator.jpg',

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

        // background of the header
        headerBackground: {
            // set url for image background (related to the .vuepress/public directory)
            // url: '/assets/img/bg.jpg',

            // use geopattern to generate background randomly
            useGeo: true
        },

        // use the official last-update plugin
        lastUpdated: true,

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
            },
        ]
    }
}
