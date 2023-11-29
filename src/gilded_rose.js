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
      Dexterity: '+5 Dexterity Vest'
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
      this.sellInLessZeor(item)
    })

    return this.items;
  }

  processQuality(item) {
    if (this.notAgedBrie(item) && this.notBackstage(item)) {
      if (item.quality > 0) {
        if (this.notSulfuras(item)) {
          item.quality = item.quality - 1
        }
      }
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1
        if (this.isBackstage(item)) {
          if (item.sellIn < 11) {
            if (item.quality < 50) {
              item.quality = item.quality + 1
            }
          }
          if (item.sellIn < 6) {
            if (item.quality < 50) {
              item.quality = item.quality + 1
            }
          }
        }
      }
    }
  }

  sellInLessZeor(item) {
    if (item.sellIn < 0) {
      if (this.notAgedBrie(item)) {
        if (this.notBackstage(item)) {
          if (item.quality > 0) {
            if (this.notSulfuras(item)) {
              item.quality = item.quality - 1
            }
          }
        } else {
          item.quality = item.quality - item.quality
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1
        }
      }
    }
  }

  sellInNotSulfuras(item) {
    if (this.notSulfuras(item)) {
      item.sellIn = item.sellIn - 1
    }
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
