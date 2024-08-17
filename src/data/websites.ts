import { PAGES } from "./pages";

export const WEBSITES = [
    {
        id: "website1",
        name: "Website 1",
        domain: "website1.com",
        pages: [
            {
                id: "1",
                name: "Home",
                slug: "home",
                path: "/",
                blocks: [
                    {
                        id: "2",
                        name: "Hero",
                        type: "HeroBlock",
                        mediaType: "image",
                        image: "/hero-h.jpg",
                        video: null,
                        header: "Welcome to our website",
                        paragraph:
                            "We are a team of professionals ready to help you with your beauty needs.",
                        mainButton: {
                            text: "Learn more",
                            link: "/about",
                        },
                        secondButton: {
                            text: "Contact us",
                            link: "/contact",
                        },
                    },
                    {
                        id: "1",
                        name: "Two Column",
                        type: "TwoColumnBlock",
                        imageDirection: "left",
                        mediaType: "image",
                        image: "/hero.jpg",
                        video: null,
                        header: "Skönhetsbehandlingar i världsklass",
                        paragraph:
                            "Upptäck skönheten hos Gino Beauty! Våra experter erbjuder avancerade estetiska behandlingar med marknadens bästa teknik, inklusive smärtfri laserhårborttagning och hudföryngring.",
                    },
                ],
            },
            {
                id: "2",
                name: "About",
                slug: "about",
                path: "/about",
            },
            {
                id: "3",
                name: "Contact",
                slug: "contact",
                path: "/contact",
            },
        ],
    },
    {
        id: "website2",
        name: "Website 2",
        domain: "website2.com",
    },
];
