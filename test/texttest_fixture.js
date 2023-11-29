
const { Shop, Item } = require("../src/gilded_rose");
const testConsole = require('./test_console')

function getResult() {

  const items = [
    new Item(Item.Type.Dexterity, 10, 20),
    new Item(Item.Type.AgedBrie, 2, 0),
    new Item(Item.Type.Elixir, 5, 7),
    new Item(Item.Type.Sulfuras, 0, 80),
    new Item(Item.Type.Sulfuras, -1, 80),
    new Item(Item.Type.Backstage, 15, 20),
    new Item(Item.Type.Backstage, 10, 49),
    new Item(Item.Type.Backstage, 5, 49),

    // This Conjured item does not work properly yet
    new Item(Item.Type.Mana, 3, 6),
  ];

  const days = Number(process.argv[2]) || 2;
  const gildedRose = new Shop(items);

  testConsole.log("OMGHAI!");
  for (let day = 0; day < days + 1; day++) {
    testConsole.log(`-------- day ${day} --------`);
    testConsole.log("name, sellIn, quality");
    items.forEach(
      item => testConsole.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
    gildedRose.updateQuality();
    testConsole.log("")
  }

  return testConsole.getAllLogs()
}

module.exports = {
  getResult
}
