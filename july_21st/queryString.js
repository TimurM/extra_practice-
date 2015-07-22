var parseString = function(/*string*/string) { /* array of strings */
  return string.split("&");
}

var parseKeyValueString = function(/*array*/stringsArray) {
  return stringsArray.reduce(function(subArray, keyValueString) {
    var subArrayKeyValue = keyValueString.split("=")
    return subArray.concat([subArrayKeyValue]);
  },[])
}

var parseQueryString = function(/*list<pair<string, string>>*/ arrayKeyStrVal) { /* map of key to value */
  // console.log(array);
  return arrayKeyStrVal.map(function(keyValueArray) {
    var key = keyValueArray[0].split("%5B").map(function(el){return el.split("%5D").join("")});
    var value = keyValueArray[1];
    return [key, value]
  })
}

var fromQS = function(qs) {
  // return (parseQueryString(parseKeyValueString(parseString(qs))));
  return (parseQueryString(parseKeyValueString(parseString(qs))));
}

var queryString = "name=timur&last_name=meyster&email=timurtwin@aol.com";

// console.log(parseQueryString(parseKeyValueString(parseString(convertToQueryStr(joinArrayStrings(turnMapToArray(queryMap)))))));
// console.log(fromQS(convertToQueryStr(joinArrayStrings(turnMapToArray(queryMap)))));

console.log(fromQS('utf8=%E2%9C%93&authenticity_token=UA5dTNDXx8lw2ZVdk%2BRjk2z0fB%2BcRwAHEkZimLpAIcw%3D&reservation%5Bpurpose%5D=myles+byrne&reservation%5Bexpected_occupancy%5D=&reservation%5Bhost_first_name%5D=&reservation%5Bhost_last_name%5D=&reservation%5Bhost_email%5D=&reservation%5Bemail_receipt%5D=0&reservation%5Bemail_receipt%5D=1&reservation%5Bon%5D=2015-07-16&reservation%5Bstarts_at_s%5D=6%3A45+PM&reservation%5Bfinishes_at_s%5D=8%3A45+PM&reservation%5Bquiet%5D=0&reservation%5Brepeats%5D=0&repeating%5Bfreq%5D=WEEKLY&repeating%5Binterval%5D=1&repeating%5Bduration_kind%5D=COUNT&repeating%5Bduration_count%5D=2&repeating%5Bduration_count_unit%5D=WEEK&repeating%5Buntil_at_s%5D=07%2F22%2F2015&commit=Create+Reservation'))
