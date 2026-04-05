import { defineType, defineField } from "sanity";
import { EnvelopeIcon, LinkedinIcon, MobileDeviceIcon, LinkIcon } from "@sanity/icons";

export const contact = defineType({
    name: 'contact-info',
    title: 'Contact Information',
    description: 'Provide your contact details and social media links for visitors to reach out.',
    type: 'document',
    groups: [
        { name: 'content', title: 'Content' },
        { name: 'direct', title: 'Direct Contact' },
        { name: 'socials', title: 'Social Networks' }
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string',
            group: 'content',
            description: 'Main title (e.g., Let\'s Discuss Your Project)',
            placeholder: 'Let\'s Discuss Your Project',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            group: 'content',
            description: 'Brief text encouraging visitors to reach out.',
            placeholder: 'Get in touch to begin the conversation about your custom residency.',
            rows: 3,
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'button_label',
            title: 'Button Label',
            type: 'string',
            group: 'content',
            description: 'Text for the call to action button.',
            placeholder: 'Get In Touch',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'image',
            title: 'Contact Image',
            type: 'image',
            group: 'content',
            description: 'Image displayed next to the contact details.',
            options: { hotspot: true },
            validation: (rule) => rule.required().assetRequired(),
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string',
                    description: 'Important for accessibility.',
                    placeholder: 'Contact Felipe Bothe',
                    validation: (rule) => rule.required()
                })
            ]
        }),
        defineField({
            name: 'email',
            title: 'Email Address',
            type: 'string',
            group: 'direct',
            icon: EnvelopeIcon,
            description: 'The email address where visitors can reach you.',
            placeholder: 'felipe@example.com',
            validation: (rule) => rule.required().email()
        }),
        defineField({
            name: 'phone_number',
            title: 'Phone Number',
            type: 'string',
            group: 'direct',
            icon: MobileDeviceIcon,
            description: 'Optional phone number for direct contact (e.g., WhatsApp).',
            placeholder: '+1 (555) 000-0000',
        }),
        defineField({
            name: 'instagram',
            title: 'Instagram Profile',
            type: 'url',
            group: 'socials',
            icon: LinkIcon,
            description: 'Link to your Instagram profile.',
            placeholder: 'https://www.instagram.com/your-username',
            validation: (rule) => rule.uri({
                scheme: ['https']
            })
        }),
        defineField({
            name: 'linkedin',
            title: 'LinkedIn Profile',
            type: 'url',
            group: 'socials',
            icon: LinkedinIcon,
            description: 'Link to your LinkedIn profile.',
            placeholder: 'https://www.linkedin.com/in/your-username',
            validation: (rule) => rule.uri({
                scheme: ['https']
            })
        })
    ]
});

export default contact;
