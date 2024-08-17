

export interface IBlock {
    pageId: string;
    id: string;
    name: string;
    type: string;
}

export interface IHeroBlock extends IBlock {
    mediaType: "image" | "video";
    image: string | null;
    video: string | null;
    header: string;
    paragraph: string;
    mainButton: {
        text: string;
        link: string;
    };
    secondButton: {
        text: string;
        link: string;
    };
}

export interface ITwoColumnBlock extends IBlock {
    imageDirection: "left" | "right";
    mediaType: "image" | "video";
    image: string | null;
    video: string | null;
    header: string;
    paragraph: string;
}
