const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  sellerName: String,
  fullPrice: Number,
  ASIN: String,
  title: String,
  url: String,
  description: String,
  keyword: [Strings]
})

module.exports = mongoose.model('Products', productSchema);
/*
  {
    "sellerName": "iPuzzle Online",
    "fullPrice": "$579.00",
    "ASIN": "B08Q7F2VP8",
    "title": "Microsoft Xbox One S 1TB All-Digital Edition Disc-free Console with Wireless Controller, Codes for Minecraft, Sea of Thieves, Fortnite Battle Royale, 1-month Live Gold Card- iPuzzle 4 Covers+ 3FT HDMI",
    "url": "https://www.amazon.com/dp/B08Q7F2VP8",
    "description": "\n Make sure this fits\nby entering your model number.\n\n\n Make sure this fits\nby entering your model number.\n\nby entering your model number.\nWhat’s in the box: Xbox One S 1TB All-Digital Edition Console | Xbox Wireless Controller | Minecraft | Sea of Thieves | Fortnite Battle Royale | 1-month Xbox Live Gold Card\nXbox One S has over 1,300 games: blockbusters, popular franchises, and Xbox One exclusives. Play with friends, access entertainment apps, and 4K video streaming.\nEnter three of the most compelling video game franchises with included downloads of Minecraft, Fortnite Battle Royale, and Sea of Thieves.\nEnjoy unlimited access to over 100 great games and new Xbox exclusives with Xbox Game Pass.\n■ Authorized Ipuzzle Bundle ■ Bundled with iPuzzle 4 Colors Soft Anti-Slip Silicone Controller Cover Skins Thumb Grips Caps Protective Case ( Semi-Transparent Clear, Black, Red, Blue) + 3FT HDMI Cable\n",
    "keyword": "xbox one s"
  }
*/