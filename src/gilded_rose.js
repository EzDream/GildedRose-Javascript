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
      if (item.name !== Item.Type.AgedBrie && item.name !==  Item.Type.Backstage) {
        if (item.quality > 0) {
          if (item.name !== Item.Type.Sulfuras) {
            item.quality = item.quality - 1;
          }
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
          if (item.name === Item.Type.Backstage) {
            if (item.sellIn < 11) {
              if (item.quality < 50) {
                item.quality = item.quality + 1;
              }
            }
            if (item.sellIn < 6) {
              if (item.quality < 50) {
                item.quality = item.quality + 1;
              }
            }
          }
        }
      }
      if (item.name !== Item.Type.Sulfuras) {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < 0) {
        if (item.name !== Item.Type.AgedBrie) {
          if (item.name !== Item.Type.Backstage) {
            if (item.quality > 0) {
              if (item.name !== Item.Type.Sulfuras) {
                item.quality = item.quality - 1;
              }
            }
          } else {
            item.quality = item.quality - item.quality;
          }
        } else {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
          }
        }
      }
    })

    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}
