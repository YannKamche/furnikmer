import { bulb, menu } from '../assets'
import { chair4, chair5, chair3, chair2, couch, bed } from '../assets'

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