module.exports.config = {
	name: "goiadmin11",
	version: "1.1.0",
	permission: 0,
	credits: "farhan",
	prefix: true,
	description: "Bot will rep ng tag admin or rep ng tagbot",
	category: "Other",
	usages: "",
	cooldowns: 5
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100011422197840","100007247231391","61551443126518") {
    var aid = ["100011422197840","100007247231391","61551443126518"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = [",আর পারলামনা bot bot করতে করতে এখন মেনশন দেয়া শুরু করছে 🙂",  "আছি আছি এতো মেনশন দিতে হবেনা😌", " দারা তোদের একটা ব্যবস্হা নিতে হবে খালি ডাকে আর ডাকে 🥲", "আবে সালা তোরা নেকামি করবি আর আমাকে মেনশন দিবি কেন, আমার বসকে মেনশন দে😌", "Assalamu Walaikum আপনি জদি মে হন তাহলে বেশী করে রাকিব বসকে মেনশন দেন আমাকে নাহ ওকে🥵🙈", " তুই আর কতো জালাবি একটু বলবি🥵🥰😍😏","আমাকে মেনশন না দিয়ে আমার বস এর জন্য জি এফ দাও"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
