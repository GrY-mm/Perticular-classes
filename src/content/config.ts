import { defineCollection, z } from "astro:content";

const subject = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
        location: z.object({
            granada: z.string(),
        })
    }),
})

export const collections = { subject };