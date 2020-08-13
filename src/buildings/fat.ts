import Building from '../lib/building.js'
const dog = document.getElementById('click')! as HTMLFieldSetElement
const fat = new Building({
  price: 10n,
  name: 'make bruh beagle fat',
  desc: 'working 2012'
})
let per = 100
fat.addEventListener('buy', () => {
  dog.style.backgroundSize = `${per *= 1.1}% 100%`
})
