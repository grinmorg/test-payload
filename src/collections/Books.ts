import type { CollectionConfig } from 'payload'

export const Books: CollectionConfig = {
  slug: 'books',
  labels: {
    singular: 'Книга',
    plural: 'Книги',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'status', 'owner'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Название',
      required: true,
    },
    {
      name: 'author',
      type: 'text',
      label: 'Автор',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Описание',
    },
    {
      name: 'cover',
      type: 'upload',
      label: 'Обложка',
      relationTo: 'media',
    },
    {
      name: 'year',
      type: 'number',
      label: 'Год издания',
      min: 0,
      max: new Date().getFullYear(),
    },
    {
      name: 'genre',
      type: 'select',
      label: 'Жанр',
      options: [
        'Художественная литература',
        'Фантастика',
        'Фэнтези',
        'Детектив',
        'Роман',
        'Поэзия',
        'Биография',
        'История',
        'Наука',
        'Психология',
        'Саморазвитие',
        'Детская литература',
        'Другое',
      ],
    },
    {
      name: 'condition',
      type: 'select',
      label: 'Состояние',
      options: ['Отличное', 'Хорошее', 'Удовлетворительное', 'Плохое'],
      defaultValue: 'Хорошее',
    },
    {
      name: 'status',
      type: 'select',
      label: 'Статус',
      options: ['Доступна для обмена', 'Забронирована', 'Обменяна'],
      defaultValue: 'Доступна для обмена',
    },
    {
      name: 'owner',
      type: 'relationship',
      label: 'Владелец',
      relationTo: 'users',
      required: true,
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
  ],
}
