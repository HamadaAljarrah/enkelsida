"use server";

import { BLOCKS } from "@/data/blocks";
import { PAGES } from "@/data/pages";



export const getPageBySlug = async (slug: string) => {
    return PAGES.find((page) => page.slug === slug);
};

export const getPageById = async (id: string) => {
    return PAGES.find((page) => page.id === id);
}

export const getPages = async ({websiteId}:{websiteId: string}) => {
    return PAGES;
};

export const getPageBlocks = async (pageId: string) => {
    const blocks = BLOCKS.map((block) => {
        if (block.pageId === pageId) 
            return block
    });
    
    return blocks;   
}