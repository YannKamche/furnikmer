import { bulb, footer1, footer2, footer3, footer4, footer5, footer6, footer_logo, furniture, menu, play, right_chevron, team1, team2, team3, team4, team6, team7, x } from '../assets'
import { chair4, chair5, chair3, chair2, couch, bed } from '../assets'
import { furn1, furn2, furn3, furn4, furn5, furn6 } from '../assets'
import { product1, product2, product3, product4, product5, product6, product7, product8 } from '../assets'
import { bg_image, plus } from '../assets'

export const header = {
    logo: {
        id: 'lol',
        img: bulb
    },
    navLinks: [
        {href: "#home", link: "home" },
        {href: "#shop", link: "shop" },
        {href: "#features", link: "features" },
        {href: "#new-arrival", link: "new arrival" },
        {href: "#team", link: "team" },
        {href: "#contact", link: "contact" },
    ],
    bars: {
        id: 'bar',
        img: menu
    }
}

export const home = {
    id: 'home',
    title1: "Quality is the best thing",
    title2: "in the business",
    desc1: "We make our products in the best shape for your happiness,",
    desc2: "so we hope to build a bridge of trust with you.",
    link: "shop Now"
}

export const collection = [
    {img: chair4, link: 'chair'},
    {img: chair5, link: 'decoration'},
    {img: chair3, link: 'furniture'},
    {img: bed, link: 'bed'},
    {img: chair2, link: 'armchair'},
    {img: couch, link: 'couch'}
]

export const shop = {
    title1: "we are very proud to present you",
    title2: "our furniture",
    desc: "Quality is the easiest way to make beautiful products.",
    images: [
        [
            { img: furn1, title: "White Chair" },
            { img: furn2, title: "Blue Chair" }
        ],
        [
            { img: furn3, title: "Black Chair" },
            { img: furn4, title: "White lamp" }
        ]
    ],
    span: "Furniture",
    link: "Shop Now",
    image2: [{ img: furn6, title: "Brown Chair" }]
};

export const features = {
  desc: "browse our items",
  title: "Ideal for your home",
  images: [
    { img: product1, title: "White Vase", price: "$44.00", article: "decoration" },
    { img: product2, title: "Neon Light", price: "$16.00", article: "lighting" },
    { img: product3, title: "Gray Chair", price: "$53.00", article: "furniture" },
    { img: product4, title: "Cup Holder", price: "$19.00", article: "decoration" },
    { img: product5, title: "White Vase", price: "$44.00", article: "decoration" },
    { img: product6, title: "Gray Sofa", price: "$165.00", article: "furniture" },
    { img: product7, title: "Baby Chair", price: "$122.00", article: "furniture" },
    { img: product8, title: "Read Chair", price: "$115.00", article: "furniture" },
  ],
};

export const arrival = {
    title: 'Discover our furnitures from our',
    title2: 'resources',
    desc: 'View our everyday amazing products',
    img1: bg_image,
    img2: plus,
    img3: product6,
    title3: 'New Couch',
    desc2: 'take our furniture with perfect quality and price',
    link: 'shop now'
}

export const animation = {
    right_chevron: right_chevron,
    x: x,
    video: furniture,
    play: play
}

export const footerImage = [
    footer1, 
    footer2, 
    footer3,
    footer4, 
    footer5, 
    footer6
]

export const team = [
    team1,
    team2,
    team3,
    team4,
    team6, team7
]
export const footer = {
  title: "furniture",
  section:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem eius labore commodi illum autem asperiores doloribus praesentium non ut.",
  links: [
    {
      title: "helfpful",
      links: [
        "about us",
        "our blog",
        "visit site",
        "contact us",
        "apply a job",
      ],
    },
    {
      title: "shopping",
      links: [
        "online cards",
        "return policy",
        "privacy policy",
        "shipping",
        "inventory",
      ],
    },
  ],
    title2: "payment method",
    section2: " select one of the most common ways to pay a money for our products.",
    image: footer_logo,
};