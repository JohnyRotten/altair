var navs = [
  { url: '#', title: 'Home', class: 'active' },
  { url: '#', title: 'Work', class: '' },
  { url: '#', title: 'Process', class: '' },
  { url: '#', title: 'Blog', class: '' },
  { url: '#', title: 'Fun Facts', class: '' }
];

Template.header.helpers({
  navs: ()=>navs
});
