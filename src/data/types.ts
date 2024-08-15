export interface IBlock {
    id:string,
    name:string,
    type:string,
}

export interface IHeroBlock extends IBlock {
    name: string,
    type: "HeroBlock",
    mediaType: "image" | "video",
    image: string | null,
    video: string | null,
    header: string,
    paragraph: string,
    mainButton: {
        text: string,
        link: string,
    },
    secondButton: {
        text: string,
        link: string,
    }
}

export interface ITwoColumnBlock extends IBlock {
    name: "Two Column",
    type: "TwoColumnBlock",
    imageDirection: "left" | "right",
    mediaType: "image" | "video",
    image: string | null,
    video: string | null,
    header: string,
    paragraph: string,
}


