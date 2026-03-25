import { defineType, defineField } from "sanity";
import { StarIcon } from "@sanity/icons";

export const hero = defineType({
    name: 'hero',
    title: 'Hero Section',
    icon: StarIcon,
    description: 'The first impression to visitors, right below the navbar. Simple, clean, and attractive.',
    type: 'document',
    fields: [
        defineField({
            name: 'bg_image',
            title: 'Background Image',
            type: 'image',
            description: 'This image will be used as the background of the hero section.',
            options: { hotspot: true },
            validation: (rule) => rule.required().assetRequired(),
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string',
                    description: 'Important for SEO and accessibility.',
                    placeholder: 'A beautiful background for the hero section',
                    validation: (rule) => rule.required()
                })
            ]
        }),
        defineField({
            name: 'slogan',
            title: 'Slogan',
            type: 'string',
            description: 'The main punchline or tagline for the hero section.',
            placeholder: 'Crafting digital experiences that matter.',
            validation: (rule) => rule.required().max(100)
        })
    ]
});

export default hero;
