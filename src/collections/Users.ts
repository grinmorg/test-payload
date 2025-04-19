import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  labels: {
    singular: 'Пользователь',
    plural: 'Пользователи',
  },
  admin: {
    useAsTitle: 'username',
    defaultColumns: ['username', 'email', 'rating', 'status'],
  },
  fields: [
    {
      name: 'username',
      type: 'text',
      label: 'Имя пользователя',
      required: true,
    },
    {
      name: 'avatar',
      type: 'upload',
      label: 'Аватар',
      relationTo: 'media',
    },
    {
      name: 'bio',
      type: 'textarea',
      label: 'О себе',
    },
    {
      name: 'location',
      type: 'group',
      label: 'Местоположение',
      fields: [
        {
          name: 'city',
          type: 'text',
          label: 'Город',
        },
        {
          name: 'district',
          type: 'text',
          label: 'Район',
        },
      ],
    },
    {
      name: 'rating',
      type: 'number',
      label: 'Рейтинг',
      min: 0,
      max: 5,
      defaultValue: 5,
    },
    {
      name: 'status',
      type: 'select',
      label: 'Статус',
      options: ['Активен', 'Неактивен', 'Заблокирован'],
      defaultValue: 'Активен',
    },
    {
      name: 'preferences',
      type: 'group',
      label: 'Настройки',
      fields: [
        {
          name: 'notifications',
          type: 'checkbox',
          label: 'Получать уведомления',
          defaultValue: true,
        },
        {
          name: 'theme',
          type: 'select',
          label: 'Тема интерфейса',
          options: ['Светлая', 'Тёмная', 'Системная'],
          defaultValue: 'Системная',
        },
      ],
    },
  ],
}
