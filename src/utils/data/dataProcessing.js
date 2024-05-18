/**
 * Get new array of objects with specified keys only
 * @param {Array<object>} data
 * @param {object: {
 * "new key name": "old key name"
 * }} keys
 */
export function extractRows(data, keys) {
  let new_arr = [];
  data.map((obj) => {
    let new_obj = {};
    console.log("object -- ", obj);
    for (const key in keys) {
      new_obj[key] = obj[keys[key]];
    }

    new_arr.push(new_obj);
    console.log("new object", new_obj);
  });
  return new_arr;
}
