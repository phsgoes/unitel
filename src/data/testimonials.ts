import { type TestimonialItem } from '@/components/ui/Testimonials.astro'
import amazon from '../assets/images/testimonials/Amazon_logo.svg'
import google from '../assets/images/testimonials/Google_2015_logo.svg'
import man from '../assets/images/testimonials/photo-1507003211169-0a1dd7228f2d.avif'
import woman from '../assets/images/testimonials/photo-1494790108377-be9c29b29330.avif'

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    companyLogo: {
      src: amazon.src,
      alt: 'Tuple',
    },
    quote:
      'Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus tortor consequat at.',
    author: {
      name: 'Judith Black',
      role: 'CEO of Tuple',
      avatar: woman.src,
    },
  },
  {
    id: 2,
    companyLogo: {
      src: google.src,
      alt: 'Reform',
    },
    quote:
      'Excepteur veniam labore ullamco eiusmod. Pariatur consequat proident duis dolore nulla veniam reprehenderit nisi officia voluptate incididunt.',
    author: {
      name: 'Joseph Rodriguez',
      role: 'CEO of Reform',
      avatar: man.src,
    },
  },
  {
    id: 3,
    companyLogo: {
      src: amazon.src,
      alt: 'Whatever',
    },
    quote:
      'Excepteur veniam labore ullamco eiusmod. Pariatur consequat proident duis dolore nulla veniam reprehenderit nisi officia voluptate incididunt.',
    author: {
      name: 'Mark Rodriguez',
      role: 'CEO of Facebook',
      avatar: man.src,
    },
  },
  {
    id: 4,
    companyLogo: {
      src: google.src,
      alt: 'Tuple',
    },
    quote:
      'Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus tortor consequat at.',
    author: {
      name: 'Judith Black',
      role: 'CEO of Tuple',
      avatar: woman.src,
    },
  },
]

export default testimonials
