class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  static get Type() {
    return {
      AgedBrie: 'Aged Brie',
      Backstage: 'Backstage passes to a TAFKAL80ETC concert',
      Sulfuras: 'Sulfuras, Hand of Ragnaros',
      Elixir: 'Elixir of the Mongoose',
      Dexterity: '+5 Dexterity Vest',
      Mana: 'Conjured Mana Cake'
    }
  }
}



class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    this.items.forEach(item => {
      this.processQuality(item)
      this.sellInNotSulfuras(item)
      this.sellInLessZero(item)
    })

    return this.items;
  }

  processQuality(item) {
    if (this.notAgedBrie(item) && this.notBackstage(item)) {
      if (item.quality <= 0) {
        return
      }
      if (!this.notSulfuras(item)) {
        return
      }
      item.quality = item.quality - 1
      return
    }

    if (item.quality >= 50) {
      return
    }
    item.quality = item.quality + 1

    if (!this.isBackstage(item)) {
      return
    }

    if (item.sellIn < 11 && item.quality < 50) {
      item.quality = item.quality + 1
    }

    if (item.sellIn >= 6) {
      return
    }

    if (item.quality >= 50) {
      return
    }
    item.quality = item.quality + 1
  }

  sellInLessZero(item) {
    if (item.sellIn >= 0) {
      return
    }
    if (!this.notAgedBrie(item) && item.quality < 50) {
      item.quality = item.quality + 1
      return
    }
    if (!this.notBackstage(item)) {
      item.quality = 0
      return
    }
    if (item.quality <= 0) {
      return
    }
    if (!this.notSulfuras(item)) {
      return
    }

    item.quality = item.quality - 1
  }

  sellInNotSulfuras(item) {
    if (!this.notSulfuras(item)) {
      return
    }
    item.sellIn = item.sellIn - 1
  }

  notSulfuras(item) {
    return item.name !== Item.Type.Sulfuras
  }

  isBackstage(item) {
    return item.name === Item.Type.Backstage
  }

  notBackstage(item) {
    return item.name !== Item.Type.Backstage
  }

  notAgedBrie(item) {
    return item.name !== Item.Type.AgedBrie
  }
}
module.exports = {
  Item,
  Shop
}
