import { writable } from "svelte/store"

import type{ Cards } from "src/types/Cards"

export let cards = writable<Cards[]>([
    {
      id: 1,
      isNotOpen: true,
      srcImage: '/images/book_angle.png',
    },
    {
      id: 2,
      isNotOpen: true,
      srcImage: '/images/book_angle.png',
    },
  
    {
      id: 3,
      isNotOpen: true,
      srcImage: '/images/eye_angle.png',
    },
    {
      id: 4,
      isNotOpen: true,
      srcImage: '/images/eye_angle.png',
    },
  
    {
      id: 5,
      isNotOpen: true,
      srcImage: '/images/Image.png',
    },
    {
      id: 6,
      isNotOpen: true,
      srcImage: '/images/Image.png',
    },
    {
      id: 7,
      isNotOpen: true,
      srcImage: '/images/Image(2).png',
    },
    {
      id: 8,
      isNotOpen: true,
      srcImage: '/images/Image(2).png',
    },
  
    {
      id: 9,
      isNotOpen: true,
      srcImage: '/images/Image(3).png',
    },
    {
      id: 10,
      isNotOpen: true,
      srcImage: '/images/Image(3).png',
    },
    {
      id: 11,
      isNotOpen: true,
      srcImage: '/images/Image(5).png',
    },
    {
      id: 12,
      isNotOpen: true,
      srcImage: '/images/Image(5).png',
    },
  
    {
      id: 13,
      isNotOpen: true,
      srcImage: '/images/Image(7).png',
    },
    {
      id: 14,
      isNotOpen: true,
      srcImage: '/images/Image(7).png',
    },
    
    {
      id: 15,
      isNotOpen: true,
      srcImage: '/images/vImage.png',
    },
    {
      id: 16,
      isNotOpen: true,
      srcImage: '/images/vImage.png',
    },
])