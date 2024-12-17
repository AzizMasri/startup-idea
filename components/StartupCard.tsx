import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { Author,Startup } from '@/sanity/types'

export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author };


const StartupCard = ({post}: {post:StartupTypeCard}) => {
    const {_createdAt, views, author, title, _id, image, description, category} = post;
  return (
    <li className='startup-card group'>
        <div className='flex-between '>
            <p className='startup_card_date'>
                {formatDate(_createdAt)}
            </p>
            <div className='flex gap-1.5'>
                <span className='text-16-medium'>{views}</span>
                <EyeIcon />
                
            </div>
        </div>

        <div className='flex-between mt-5 gap-5'>
            <div className='flex-1'>
                <Link href={`/user/${author?.id}`}>
                    <p className='text-16-medium line-clamp-1'>{author?.name}</p>
                </Link>
                <Link href={`/startup/${_id}`}>
                <p className='text-26-semibold'>{title}</p>
                </Link>
            </div>
            <Link href={`/user/${author?.id}`}>
                    <Image src='https://placehold.co/400x400' alt='avatar' width={48} height={48} className='rounded-full' />
            </Link>
        </div>
        <Link href={`/startup/${_id}`}>
        <p className='startup-card-desc'>{description}</p>
        <img src={image} alt='placeholder' className='startup-card_img mt-5' />
        </Link>

        <div className='flex-between gap-3 mt-5'>
            <Link href={`/?query=${category}`}>
                <p className='text-16-medium'>{category}</p>
            </Link>
            <Button className='startup-card_btn' asChild>
                <Link href={`/startup/${_id}`}>
                    Details
                </Link>
            </Button>
        </div>
    </li>
  )
}

export default StartupCard