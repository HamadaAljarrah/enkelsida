import { IHeroBlock, ITwoColumnBlock } from "./types";

export const heroBlock1: IHeroBlock = {
    id: "2",
    name: "Hero",
    type: "HeroBlock",
    mediaType: "image",
    image: "/hero-h.jpg",
    video: null,
    header: "Welcome to our website",
    paragraph: "We are a team of professionals ready to help you with your beauty needs.",
    mainButton: {
        text: "Learn more",
        link: "/about",
    },
    secondButton: {
        text: "Contact us",
        link: "/contact",
    },
};

export const twoColumnBlock1: ITwoColumnBlock = {
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
};
