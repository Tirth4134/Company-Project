
import React from 'react'
// import client from './sanityClient'
import client from '@/client/sanity.client'
import imageUrlBuilder from '@sanity/image-url'

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)

export function urlFor(source : string) {
  return builder.image(source)
}