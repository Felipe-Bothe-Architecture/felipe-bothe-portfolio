import { defineType, defineField, defineArrayMember } from "sanity";
import { CogIcon } from "@sanity/icons";

export const settings = defineType({
    name: 'site-settings',
    title: 'Site Settings',
    icon: CogIcon,
    type: 'document',
    groups: [
        { name: 'header', title: 'Header' },
        { name: 'footer', title: 'Footer' },
        { name: 'home', title: 'Home Sections' }
    ],
    fields: [
        defineField({
            name: 'logo_text',
            title: 'Logo Text',
            type: 'string',
            group: 'header',
            placeholder: 'FELIPE BOTHE',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'logo_subtitle',
            title: 'Logo Subtitle',
            type: 'string',
            group: 'header',
            placeholder: 'Architecture',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'nav_links',
            title: 'Navigation Links',
            type: 'array',
            group: 'header',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        { name: 'label', title: 'Label', type: 'string' },
                        { name: 'path', title: 'Path', type: 'string' }
                    ]
                })
            ]
        }),
        defineField({
            name: 'copyright_text',
            title: 'Copyright Text',
            type: 'string',
            group: 'footer',
            description: 'Text shown in the footer (e.g., © 2026 FELIPE BOTHE ARCHITECTURE. ALL RIGHTS RESERVED.)',
            placeholder: '© 2026 FELIPE BOTHE ARCHITECTURE. ALL RIGHTS RESERVED.',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'credits_text',
            title: 'Credits Text',
            type: 'string',
            group: 'footer',
            description: 'Text for website credits (e.g., WEBSITE BY SANTIAGO ORTIZ BETANCOURT)',
            placeholder: 'WEBSITE BY SANTIAGO ORTIZ BETANCOURT',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'projects_section_label',
            title: 'Projects Section Label',
            type: 'string',
            group: 'home',
            description: 'Small text above projects title (e.g., Selected Works)',
            placeholder: 'Selected Works'
        }),
        defineField({
            name: 'projects_section_title',
            title: 'Projects Section Title',
            type: 'string',
            group: 'home',
            description: 'Main title for projects section (e.g., Signature Luxury Work)',
            placeholder: 'Signature Luxury Work'
        }),
        defineField({
            name: 'view_more_projects_label',
            title: 'View More Projects Label',
            type: 'string',
            group: 'home',
            description: 'Label for the button to see more projects.',
            placeholder: 'View More Projects'
        })
    ]
});

export default settings;
