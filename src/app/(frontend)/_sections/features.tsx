import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid'
import {
  MagnifyingGlassIcon,
  ChatBubbleIcon,
  PersonIcon,
  ClockIcon,
  CheckCircledIcon,
  UpdateIcon,
} from '@radix-ui/react-icons'

const features = [
  {
    Icon: UpdateIcon,
    name: 'Обмен книгами',
    description: 'Легко отдавайте ненужные книги и находите новые для чтения',
    href: '/',
    cta: 'Узнать больше',
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: 'lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2',
  },
  {
    Icon: MagnifyingGlassIcon,
    name: 'Умный поиск',
    description: 'Находите нужные книги по автору, жанру или названию',
    href: '/',
    cta: 'Узнать больше',
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: 'lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2',
  },
  {
    Icon: ChatBubbleIcon,
    name: 'Чат с пользователями',
    description: 'Обсуждайте детали обмена напрямую с другими читателями',
    href: '/',
    cta: 'Узнать больше',
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: 'lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2',
  },
  {
    Icon: PersonIcon,
    name: 'Профиль читателя',
    description: 'Создайте свою коллекцию и отслеживайте историю обменов',
    href: '/',
    cta: 'Узнать больше',
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4',
  },
  {
    Icon: ClockIcon,
    name: 'Быстрый обмен',
    description: 'Среднее время нахождения книги - менее 2 дней',
    href: '/',
    cta: 'Узнать больше',
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: 'lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-4',
  },
  {
    Icon: CheckCircledIcon,
    name: 'Гарантия качества',
    description: 'Проверка состояния книг перед обменом',
    href: '/',
    cta: 'Узнать больше',
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: 'lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4',
  },
]

export function FeaturesSection() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  )
}
