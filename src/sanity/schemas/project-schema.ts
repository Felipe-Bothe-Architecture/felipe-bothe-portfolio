import { defineType, defineField, defineArrayMember } from "sanity";
import { CaseIcon } from "@sanity/icons";

export const project = defineType({
    name: 'project',
    title: 'Projects',
    icon: CaseIcon,
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Project Title',
            type: 'string',
            description: 'The main title of the project.',
            placeholder: 'Waterfront Residence',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'Unique URL identifier for the project.',
            options: { source: 'title' },
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'main_image',
            title: 'Main Image',
            type: 'image',
            description: 'The primary featured image for the project.',
            options: { hotspot: true },
            validation: (rule) => rule.required().assetRequired(),
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string',
                    description: 'Important for accessibility.',
                    validation: (rule) => rule.required()
                })
            ]
        }),
        defineField({
            name: 'short_description',
            title: 'Short Description',
            type: 'text',
            description: 'A concise summary for project cards and previews.',
            rows: 3,
            validation: (rule) => rule.required().max(300)
        }),
        defineField({
            name: 'long_description',
            title: 'Long Description',
            type: 'array',
            description: 'Detailed story and technical details of the project.',
            of: [defineArrayMember({ type: 'block' })],
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'characteristics',
            title: 'Characteristics',
            type: 'array',
            description: 'Key project details (e.g., Height: 20m, Area: 500sqm).',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        { name: 'label', title: 'Label', type: 'string', placeholder: 'Area' },
                        { name: 'value', title: 'Value', type: 'string', placeholder: '500 sqm' }
                    ],
                    preview: {
                        select: {
                            title: 'label',
                            subtitle: 'value'
                        }
                    }
                })
            ]
        }),
        defineField({
            name: 'blueprints',
            title: 'Blueprints',
            type: 'array',
            description: 'Architectural drawings and floor plans.',
            of: [
                defineArrayMember({
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        defineField({
                            name: 'description',
                            title: 'Short Description',
                            type: 'string',
                            description: 'Optional comment about this blueprint.'
                        }),
                        defineField({
                            name: 'alt',
                            title: 'Alternative Text',
                            type: 'string',
                            validation: (rule) => rule.required()
                        })
                    ]
                })
            ]
        }),
        defineField({
            name: 'concept_arts',
            title: 'Concept Arts',
            type: 'array',
            description: 'Initial sketches and conceptual renderings.',
            of: [
                defineArrayMember({
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        defineField({
                            name: 'description',
                            title: 'Short Description',
                            type: 'string',
                            description: 'Optional comment about this concept art.'
                        }),
                        defineField({
                            name: 'alt',
                            title: 'Alternative Text',
                            type: 'string',
                            validation: (rule) => rule.required()
                        })
                    ]
                })
            ]
        }),
        defineField({
            name: 'other_images',
            title: 'Other Images',
            type: 'array',
            description: 'Additional project photos and views.',
            of: [
                defineArrayMember({
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        defineField({
                            name: 'description',
                            title: 'Short Description',
                            type: 'string',
                            description: 'Optional comment about this image.'
                        }),
                        defineField({
                            name: 'alt',
                            title: 'Alternative Text',
                            type: 'string',
                            validation: (rule) => rule.required()
                        })
                    ]
                })
            ]
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            placeholder: 'Residential',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'isFeatured',
            title: 'Featured Project',
            type: 'boolean',
            description: 'Should this project appear on the Home page?',
            initialValue: false
        })
    ]
});

export default project;
