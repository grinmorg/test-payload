import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
  className?: string
}

export const HeroSection: React.FC<Props> = ({ className }) => {
  return (
    <section className={cn('', className)}>
      <div className="grid px-4 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Обменивайтесь книгами с людьми рядом с вами
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Находите книги которые вас интересует и обменивайте книги, которые уже прочитали!
          </p>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex relative -translate-y-[100px] ">
          {/* <Globe /> */}
        </div>
      </div>
    </section>
  )
}
