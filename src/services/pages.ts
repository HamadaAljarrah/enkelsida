"use server";

import { BLOCKS } from "@/data/blocks";
import { PAGES } from "@/data/pages";
import { WEBSITES } from "@/data/websites";

export const getWebsites = async () => {
    return WEBSITES;
};

export const getWebsiteById = async ({ websiteId }: { websiteId: string }) => {
    return WEBSITES.find((website) => website.id === websiteId);
};

export const getPageByWebsiteIdAndPageId = async ({ websiteId, pageId }:{websiteId:string, pageId:string}) => {
    console.log(websiteId, pageId);
    
    const website = WEBSITES.find((website) => website.id === websiteId);
    return website?.pages?.find((page) => page.id === pageId);
}
