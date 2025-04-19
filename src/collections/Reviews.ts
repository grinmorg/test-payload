import { CollectionConfig } from 'payload'

export const Reviews: CollectionConfig = {
  slug: 'reviews',
  labels: {
    singular: 'Отзыв',
    plural: 'Отзывы',
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      label: 'Пользователь',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'rating',
      type: 'number',
      label: 'Оценка',
      min: 1,
      max: 5,
      required: true,
    },
    {
      name: 'text',
      type: 'textarea',
      label: 'Текст отзыва',
    },
    {
      name: 'exchange',
      type: 'relationship',
      label: 'Связанный обмен',
      relationTo: 'exchanges',
    },
  ],
  timestamps: true,
}
