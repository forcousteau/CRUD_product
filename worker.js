var ASINInGroup = {}
const groupASIN = (arr) => {
  let result = {};
  while (arr.length != 0) {
    let temp = arr.pop();
    let asin = temp['ASIN'];
    delete temp['ASIN'];
    delete temp['description'];
    if (result[asin] !== undefined)
      result[asin].push(temp);
    else
      result[asin] = [temp]
  }
  appendToASIN(result);
  return ASINInGroup;
}

const appendToASIN = (obj) => {
  const list1 = Object.getOwnPropertyNames(ASINInGroup);
  const list2 = Object.getOwnPropertyNames(obj);
  for (asin of list2) {
    if (list1.indexOf(asin) !== -1) {
      ASINInGroup[asin].push(...obj[asin]);
    } else {
      ASINInGroup[asin] = obj[asin];
    }
  }
}

const updateASIN = (obj) => {
  const list1 = Object.getOwnPropertyNames(ASINInGroup);
  const list2 = Object.getOwnPropertyNames(obj);
  for (asin of list2) {
    if (list1.indexOf(asin) !== -1) {
      ASINInGroup[asin] = obj[asin];
    } else {
      ASINInGroup[asin] = obj[asin];
    }
  }
}

const deleteASIN = (asin) => {
  let temp = Object.getOwnPropertyNames(ASINInGroup);
  if (temp.indexOf(asin) != -1)
    delete ASINInGroup[asin];
}

exports.groupASIN = groupASIN;
exports.ASINInGroup = ASINInGroup;
exports.updateASIN = updateASIN;
exports.deleteASIN = deleteASIN;