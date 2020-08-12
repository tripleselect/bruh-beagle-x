const random =  <Type>(arr: Type[]): Type => arr[Math.floor(Math.random() * arr.length)]
const beg = [
  "assets/beg/nick.png",
  "assets/beg/swear.png",
  "assets/beg/bruh.webp",
];
export const getBeg = () => random(beg);
const bark = [
  "assets/beg/nick.png",
  "assets/beg/swear.png",
  "assets/beg/josemon.png",
  "assets/beg/bruh.webp",
]
export const getBark = () =>
  random(bark);

document.head.append(...beg.concat(bark).map(url => {
  const link = document.createElement('link')
  link.rel = 'preload'
  link.as = 'image'
  link.href = url
  return link
}))
