let posts = [
  {
    day: 18,
    month: 'August',
    author: 'Tommy Griffin',
    title: new Lorem().generate(7),
    url: '#',
    image_path: '/images/not_found.png'
  },
  {
    day: 23,
    month: 'August',
    author: 'Tommy Griffin',
    title: 'Hollywood\'s latest trend comes underfire',
    url: '#',
    image_path: '/images/not_found.png'
  },
  {
    day: 28,
    month: 'August',
    author: 'Spencer Blankenship',
    title: 'How long will Google keep burning money on Motorola?',
    url: '#',
    image_path: '/images/not_found.png'
  },
  {
    day: 29,
    month: 'August',
    author: 'Tommy Griffin',
    title: new Lorem().generate(7),
    url: '#',
    image_path: '/images/not_found.png'
  },
  {
    day: 1,
    month: 'September',
    author: 'Spencer Blankenship',
    title: new Lorem().generate(7),
    url: '#',
    image_path: '/images/not_found.png'
  },
  {
    day: 4,
    month: 'September',
    author: 'Tommy Griffin',
    title: new Lorem().generate(7),
    url: '#',
    image_path: '/images/not_found.png'
  }
];

Template.blogPosts.helpers({
  posts: ()=>posts
});
