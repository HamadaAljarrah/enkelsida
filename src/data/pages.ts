import { heroBlock1, twoColumnBlock1 } from "./blocks";

export const PAGES= [
    {
        id: "1",
        name: "Home",
        slug: "home",
        path: "/",
        block: [
            heroBlock1,
            twoColumnBlock1

        ],
    },
    {
        id: "2",
        name: "About",
        slug: "about",
        path: "/about",
        block: [],
    },
    {
        id: "3",
        name: "Contact",
        slug: "contact",
        path: "/contact",
        block: [],
    }
]
