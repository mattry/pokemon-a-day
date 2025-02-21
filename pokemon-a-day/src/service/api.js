// we will calculate the days since Jan. 1 to find the ID of the daily 'mon
const today = new Date()
const NYD = new Date(today.getFullYear(), 0, 1);
// time in ms since start of year
const diff = today - NYD;
// convert the ms difference to difference in days
// the id is 1 + difference in days
const id = 1 + (Math.floor(diff / (1000 * 60 * 60 * 24)));

console.log(id);