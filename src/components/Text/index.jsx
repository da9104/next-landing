'use client'
import React, { useRef } from 'react'
import Image from 'next/image'

const Slide = (props) => {
  return (
    <div className="relative flex whitespace-nowrap">
      <Phrase src={props.src} text='Discover Your New Favorites.' />
      <Phrase src={props.src} text='Experience the Difference.' />
      <Phrase src={props.src} text='Find Your Perfect Match' />
    </div>
  )
}

const Phrase = ({ src, text }) => (
  <div className="flex flex-row items-center">
    <p className="place-content-center self-center">
        {text}
     <span className="relative h-[4.5vw] w-[10.5vw] ml-2 rounded-full overflow-hidden inline-block place-content-center">
        <Image
            src={src}
            alt="image"
            layout="fill" // For dynamic sizes
            objectFit="cover" // Maintain the aspect ratio
        />
     </span>
    </p>
  </div>
)

export default function Text() {
  return (
    <div className="absolute flex flex-col text-[5.5vw] uppercase w-[80vw] items-start leading-tight">
      <Phrase src="/images/1.jpg" text="Discover Your New Favorites." />
      <Phrase src="/images/2.jpg" text="Experience the Difference." />
      <Phrase src="/images/3.jpg" text="Find Your Perfect Match" />
    </div>
  )
}
