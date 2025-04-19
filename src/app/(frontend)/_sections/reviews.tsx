import { Marquee } from '@/components/magicui/marquee'
import { cn } from '@/lib/utils'

const reviews = [
  {
    name: 'Иван',
    username: '@ivan_knigolyub',
    body: 'Очень круто, не думал, что так быстро получится обменяться книгами! Удобный сервис.',
    img: 'https://avatar.vercel.sh/ivan',
  },
  {
    name: 'Анна',
    username: '@anna_reads',
    body: 'Обменяла две книги за день – восторг! Теперь всем советую этот сервис.',
    img: 'https://avatar.vercel.sh/anna',
  },
  {
    name: 'Дмитрий',
    username: '@dmitry_bookworm',
    body: 'Наконец-то нашёл редкую книгу, которую давно искал. Спасибо!',
    img: 'https://avatar.vercel.sh/dmitry',
  },
  {
    name: 'Екатерина',
    username: '@katya_litera',
    body: 'Просто, быстро и без лишних заморочек. Уже обменяла 5 книг!',
    img: 'https://avatar.vercel.sh/katya',
  },
  {
    name: 'Артём',
    username: '@artem_books',
    body: 'Боялся, что мои книги никому не нужны, но их разобрали за пару часов. Класс!',
    img: 'https://avatar.vercel.sh/artem',
  },
  {
    name: 'Ольга',
    username: '@olga_biblio',
    body: 'Обожаю этот сервис! Теперь не коплю книги дома, а обмениваюсь с другими.',
    img: 'https://avatar.vercel.sh/olga',
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        'relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}

export function ReviewsSection() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:30s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:30s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  )
}
