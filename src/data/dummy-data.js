import React from 'react'

const ITEMS = [
    {
        title: 'Analogue Resin Strap', price: '$30.00', 
        image: 'https://cdn.shopify.com/s/files/1/0332/6420/5963/products/eberj4183019d5e_q3_2-0_360x.jpg?v=1606136069', 
        color: []
    },
    {
        title: 'Ridley High Waist', price: '$36.00', 
        image: 'https://cdn.shopify.com/s/files/1/0332/6420/5963/products/nlota2087710739_q1_2-0_360x.jpg?v=1606359879', 
        color: []},
    {
        title: 'Blush Beanie', price: '$15.00', 
        image: 'https://cdn.shopify.com/s/files/1/0332/6420/5963/products/acndb3127517966_q3_2-0_360x.jpg?v=1606354275', 
        color: [
        {
            colorName: 'Grey', 
            colorImage: 'https://cdn.shopify.com/s/files/1/0332/6420/5963/products/acndb3127517966_q1_2-0_360x.jpg?v=1606354275'
        },
        {
            colorName: 'Pink',
            colorImage: 'https://cdn.shopify.com/s/files/1/0332/6420/5963/products/pr1-pink_15a53f8c-d765-48c4-8376-0383ff737716_360x.jpg?v=1606354275'
        },
        {
            colorName: 'Black',
            colorImage: 'https://cdn.shopify.com/s/files/1/0332/6420/5963/products/ragbo452081071c_q1_2-0_360x.jpg?v=1606354275'
        }
    ]},
    {
        title: 'Cluse La Boheme Rose Gold',
        price: '$45.00', 
        image: 'https://cdn.shopify.com/s/files/1/0332/6420/5963/products/cinqa31079186d2_q1_2-0_360x.jpg?v=1606813566',
        color: []
    },
    {
        title: 'Analogue Resin Strap', price: '$30.00', 
        image: 'https://cdn.shopify.com/s/files/1/0332/6420/5963/products/eberj4183019d5e_q3_2-0_360x.jpg?v=1606136069', 
        color: []
    },
    {
        title: 'Ridley High Waist', price: '$36.00', 
        image: 'https://cdn.shopify.com/s/files/1/0332/6420/5963/products/nlota2087710739_q1_2-0_360x.jpg?v=1606359879', 
        color: []},
    {
        title: 'Blush Beanie', price: '$15.00', 
        image: 'https://cdn.shopify.com/s/files/1/0332/6420/5963/products/acndb3127517966_q3_2-0_360x.jpg?v=1606354275', 
        color: [
        {
            colorName: 'Grey', 
            colorImage: 'https://cdn.shopify.com/s/files/1/0332/6420/5963/products/acndb3127517966_q1_2-0_360x.jpg?v=1606354275'
        },
        {
            colorName: 'Pink',
            colorImage: 'https://cdn.shopify.com/s/files/1/0332/6420/5963/products/pr1-pink_15a53f8c-d765-48c4-8376-0383ff737716_360x.jpg?v=1606354275'
        },
        {
            colorName: 'Black',
            colorImage: 'https://cdn.shopify.com/s/files/1/0332/6420/5963/products/ragbo452081071c_q1_2-0_360x.jpg?v=1606354275'
        }
    ]},
    {
        title: 'Cluse La Boheme Rose Gold',
        price: '$45.00', 
        image: 'https://cdn.shopify.com/s/files/1/0332/6420/5963/products/cinqa31079186d2_q1_2-0_360x.jpg?v=1606813566',
        color: []
    }
]

const BLOG_ITEMS = [
    {
        photo: "https://cdn.shopify.com/s/files/1/0332/6420/5963/articles/1_900x.jpg?v=1581524880",
        title: 'Spring – Summer Trending 2020',
        author: 'admin',
        date: 'April 6, 2020',
        post: 'Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, ...',
        active: true
    },
    {
        photo: "https://cdn.shopify.com/s/files/1/0332/6420/5963/articles/2_18a7b802-d113-43bd-9e51-78373333370c_900x.jpg?v=1581524767",
        title: 'The Easiest Way to Break Out on Top',
        author: 'admin',
        date: 'April 6, 2020',
        post: 'Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, ...',
        active: false
    },
    {
        photo: "https://cdn.shopify.com/s/files/1/0332/6420/5963/articles/couple_900x.jpg?v=1586139452",
        title: 'Style for couple in Weeding season',
        author: 'admin',
        date: 'April 6, 2020',
        post: 'Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, ...',
        active: false
    },

]

const INST_ITEMS = [
    {
        photo: "https://cdn.shopify.com/s/files/1/0332/6420/5963/files/ins1_14_540x.jpg?v=1581782221"
    },
    {
        photo: "https://cdn.shopify.com/s/files/1/0332/6420/5963/files/ins1_8_540x.jpg?v=1581782258"
    },
    {
        photo: "https://cdn.shopify.com/s/files/1/0332/6420/5963/files/ins1_1_540x.jpg?v=1581781488"
    },
    {
        photo: "https://cdn.shopify.com/s/files/1/0332/6420/5963/files/ins1_6_540x.jpg?v=1581789983"
    },
    {
        photo: "https://cdn.shopify.com/s/files/1/0332/6420/5963/files/ins1_5_540x.jpg?v=1581782315"
    },
    {
        photo: "https://cdn.shopify.com/s/files/1/0332/6420/5963/files/ins1_4_540x.jpg?v=1581782159"
    },
    {
        photo: "https://cdn.shopify.com/s/files/1/0332/6420/5963/files/ins1_2_540x.jpg?v=1581781598"
    },
    {
        photo: "https://cdn.shopify.com/s/files/1/0332/6420/5963/files/ins1_13_540x.jpg?v=1581782196"
    }
]

export default ITEMS;
export {
    BLOG_ITEMS,
    INST_ITEMS
}