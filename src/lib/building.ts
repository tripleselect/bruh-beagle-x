const list = document.getElementById('upg')! as HTMLFieldSetElement

export default class Building extends EventTarget {
  public readonly name: string
  private button: HTMLButtonElement
  constructor({ price, name, desc }: {
    price: bigint
    name: string
    desc?: string
  }) {
    super()
    this.name = name
    if (!this.price) localStorage.setItem(name, price.toString())
    const html = document.createElement('article')
    const heading = document.createElement('h1')
    heading.innerText = name
    const para = document.createElement('p')
    para.innerText = desc || ''
    this.button = document.createElement('button')
    this.button.innerText = price.toLocaleString()
    this.button.addEventListener('click', () => {
      if (bruhs >= this.price) {
        bruhs -= this.price
        this.dispatchEvent(new CustomEvent('buy'))
      }
    })
    html.append(heading, para, this.button)
    list.append(html)
    this.price = this.price // update counter
  }

  get price (): bigint {
    return BigInt(localStorage.getItem(this.name) || 0n)
  }
  set price (amount) {
    localStorage.setItem(this.name, amount.toString())
    this.button.innerText = amount.toLocaleString()
  }
}

