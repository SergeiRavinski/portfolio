'use client'

import { useNextSanityImage } from 'next-sanity-image'
import Image from 'next/image'
import {client} from '@/sanity/lib/client'
import {ImageProps} from '@/types/components/sanity/sanity-next-image'
import {imagePreviewObject} from '@/types/components/sanity/sanity-next-image'

export default function SanityNextImage({
  value,
  className,
  lqip,
  onMouseEnter,
  onMouseLeave
}: ImageProps) {
  const altText = value?.alt ?? ''
  const imageProps = useNextSanityImage(client, value)
  const imagePreview: imagePreviewObject = {
    placeholder: 'blur',
    blurDataURL: lqip,
  }


  if (imageProps && imageProps != null && typeof imageProps === 'object') {
    return (
      <Image
        src=""
		className={className}
        alt={altText ? altText : ''}
        {...(typeof imageProps === 'object' ? imageProps : {})}
        quality={75}
        priority={false}
        {...(lqip ? imagePreview : {})}
        loading={"eager"}
        sizes={'(max-width: 768px) 100vw, (max-width: 1024px) 75vw, (max-width: 1440px) 70vw, 50vw'}
		onMouseEnter={onMouseEnter} 
        onMouseLeave={onMouseLeave} 
      />
    )
  }
}