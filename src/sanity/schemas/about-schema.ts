import { defineType, defineField, defineArrayMember } from "sanity";
import { UserIcon } from "@sanity/icons";

export const about = defineType({
    name: 'about_me',
    title: 'About Me',
    icon: UserIcon,
    description: 'Tell your story and introduce yourself to visitors.',
    type: 'document',
    groups: [
        { name: 'homepage', title: 'Home Page Preview' },
        { name: 'biography', title: 'Full Biography' }
    ],
    fields: [ 
        defineField({
            name: 'display_name',
            title: 'Display Name',
            type: 'string',
            description: 'The name that will be displayed in the about section.',
            placeholder: 'Felipe Bothe',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'profession',
            title: 'Profession',
            type: 'string',
            description: 'Your professional title (e.g. Software Engineer, Architecture).',
            placeholder: 'Architecture',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'hook_phrase',
            title: 'Hook Phrase / Quote',
            type: 'string',
            description: 'A catchy phrase or personal quote.',
            placeholder: 'Building better products with code.',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'home_title',
            title: 'Home Section Title',
            type: 'string',
            group: 'homepage',
            description: 'The title shown on the Home section (e.g., Bespoke Residential Architecture)',
            placeholder: 'Bespoke Residential Architecture'
        }),
        defineField({
            name: 'home_description',
            title: 'Home Section Description',
            type: 'text',
            group: 'homepage',
            description: 'The brief description shown on the Home section.',
            rows: 3
        }),
        defineField({
            name: 'home_button_label',
            title: 'Home Button Label',
            type: 'string',
            group: 'homepage',
            description: 'Label for the button on the Home section.',
            placeholder: 'Learn More'
        }),
        defineField({
            name: 'image',
            title: 'Main Photo',
            type: 'image',
            description: 'The primary photo for about sections.',
            options: { hotspot: true },
            validation: (rule) => rule.required().assetRequired(),
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string',
                    description: 'Important for accessibility.',
                    placeholder: 'Felipe Bothe portrait',
                    validation: (rule) => rule.required()
                })
            ]
        }),
        defineField({
            name: 'full_biography',
            title: 'Full Biography',
            type: 'array',
            group: 'biography',
            description: 'The complete story for the About page.',
            of: [defineArrayMember({ type: 'block' })],
            validation: (rule) => rule.required()
        })
    ]
});

export default about;
