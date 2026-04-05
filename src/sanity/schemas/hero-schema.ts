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
            name: 'title',
            title: 'Main Title',
            type: 'string',
            description: 'The primary headline (e.g., Luxury Waterfront Design)',
            placeholder: 'Luxury Waterfront Design',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
            description: 'The secondary tagline (e.g., Contemporary Custom Residences)',
            placeholder: 'Contemporary Custom Residences',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'button_label',
            title: 'Button Label',
            type: 'string',
            description: 'Text for the call to action button.',
            placeholder: 'View Projects',
            validation: (rule) => rule.required()
        }),
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
        })
    ]
});

export default hero;
