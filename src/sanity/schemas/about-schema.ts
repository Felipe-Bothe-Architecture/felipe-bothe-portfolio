import { defineType, defineField, defineArrayMember } from "sanity";
import { UserIcon } from "@sanity/icons";

export const about = defineType({
    name: 'about_me',
    title: 'About Me',
    icon: UserIcon,
    description: 'Tell your story and introduce yourself to visitors.',
    type: 'document',
    groups: [
        { name: 'personal', title: 'Personal Information' },
        { name: 'biography', title: 'Biography' }
    ],
    fields: [ 
        defineField({
            name: 'display_name',
            title: 'Display Name',
            type: 'string',
            group: 'personal',
            description: 'The name that will be displayed in the about section.',
            placeholder: 'Felipe Bothe',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'profession_display',
            title: 'Profession',
            type: 'string',
            group: 'personal',
            description: 'Your professional title.',
            placeholder: 'Software Engineer'
        }),
        defineField({
            name: 'hook_title',
            title: 'Hook Title',
            type: 'string',
            group: 'personal',
            description: 'A brief, attention-grabbing title.',
            placeholder: 'Turning ideas into reality.'
        }),
        defineField({
            name: 'hook_phrase',
            title: 'Hook Phrase',
            type: 'string',
            group: 'personal',
            description: 'A catchy phrase for your personal introduction.',
            placeholder: 'Building better products with code.'
        }),
        defineField({
            name: 'portfolio_picture',
            title: 'Portfolio Picture',
            type: 'image',
            group: 'personal',
            description: 'Your profile or portfolio photo.',
            options: { hotspot: true },
            validation: (rule) => rule.required().assetRequired(),
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string',
                    description: 'Important for accessibility.',
                    placeholder: 'Felipe Bothe portrait'
                }),
                defineField({
                    name: 'caption',
                    title: 'Caption',
                    type: 'string',
                    description: 'Optional image caption.'
                })
            ]
        }),
        defineField({
            name: 'short_introduction',
            title: 'Short Introduction',
            type: 'array',
            group: 'biography',
            description: 'A concise introduction for quick reading.',
            of: [defineArrayMember({ type: 'block' })]
        }),
        defineField({
            name: 'full_description',
            title: 'Full Biography',
            type: 'array',
            group: 'biography',
            description: 'The complete story of your professional journey.',
            of: [defineArrayMember({ type: 'block' })]
        })
    ]
});

export default about;
