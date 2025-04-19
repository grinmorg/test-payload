import { CollectionConfig } from 'payload'

export const Exchanges: CollectionConfig = {
  slug: 'exchanges',
  labels: {
    singular: 'Обмен',
    plural: 'Обмены',
  },
  admin: {
    useAsTitle: 'id',
    defaultColumns: ['book', 'fromUser', 'toUser', 'status', 'createdAt'],
  },
  fields: [
    {
      name: 'book',
      type: 'relationship',
      label: 'Книга',
      relationTo: 'books',
      required: true,
    },
    {
      name: 'fromUser',
      type: 'relationship',
      label: 'От пользователя',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'toUser',
      type: 'relationship',
      label: 'К пользователю',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      label: 'Статус',
      options: ['Запрошено', 'Подтверждено', 'Отменено', 'Завершено'],
      defaultValue: 'Запрошено',
    },
    {
      name: 'messages',
      type: 'array',
      label: 'Сообщения',
      fields: [
        {
          name: 'user',
          type: 'relationship',
          relationTo: 'users',
          required: true,
        },
        {
          name: 'text',
          type: 'textarea',
          required: true,
        },
        {
          name: 'createdAt',
          type: 'date',
          admin: {
            readOnly: true,
            date: {
              pickerAppearance: 'dayAndTime',
            },
          },
        },
      ],
    },
    {
      name: 'meetingDetails',
      type: 'group',
      label: 'Детали встречи',
      fields: [
        {
          name: 'date',
          type: 'date',
        },
        {
          name: 'location',
          type: 'text',
        },
        {
          name: 'notes',
          type: 'textarea',
        },
      ],
    },
  ],
  timestamps: true,
}
