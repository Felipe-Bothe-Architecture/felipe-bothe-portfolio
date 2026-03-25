import { defineType, defineField } from "sanity";
import { EnvelopeIcon, LinkedinIcon, MobileDeviceIcon, LinkIcon } from "@sanity/icons";

export const contact = defineType({
    name: 'contact-info',
    title: 'Contact Information',
    description: 'Provide your contact details and social media links for visitors to reach out.',
    type: 'document',
    groups: [
        { name: 'direct', title: 'Direct Contact' },
        { name: 'socials', title: 'Social Networks' }
    ],
    fields: [
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
            placeholder: '+1 234 567 890',
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
