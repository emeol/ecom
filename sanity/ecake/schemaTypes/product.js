import {defineArrayMember, defineField, defineType} from 'sanity'

export const product = defineType({
	name: 'product',
	title: 'Product',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (rule) => rule.required().min(2).max(120),
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {source: 'title', maxLength: 96},
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
			rows: 5,
			validation: (rule) => rule.required().min(20).max(2000),
		}),
		defineField({
			name: 'price',
			title: 'Price',
			type: 'number',
			validation: (rule) => rule.required().min(0),
		}),
		defineField({
			name: 'compareAtPrice',
			title: 'Compare At Price',
			type: 'number',
			validation: (rule) => rule.min(0),
		}),
		defineField({
			name: 'images',
			title: 'Images',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'image',
					options: {hotspot: true},
					fields: [
						defineField({
							name: 'alt',
							title: 'Alt Text',
							type: 'string',
							validation: (rule) => rule.required().max(160),
						}),
					],
				}),
			],
			validation: (rule) => rule.required().min(1),
		}),
		defineField({
			name: 'inStock',
			title: 'In Stock',
			type: 'boolean',
			initialValue: true,
		}),
		defineField({
			name: 'categories',
			title: 'Categories',
			type: 'array',
			of: [defineArrayMember({type: 'string'})],
		}),
	],
	preview: {
		select: {
			title: 'title',
			media: 'images.0',
			price: 'price',
			inStock: 'inStock',
		},
		prepare(selection) {
			const {title, media, price, inStock} = selection
			const status = inStock ? 'In stock' : 'Out of stock'
			return {
				title,
				media,
				subtitle: typeof price === 'number' ? `$${price} • ${status}` : status,
			}
		},
	},
})

