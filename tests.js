test("Domain 1 -> 1 to 3", function(assert) {
  assert.propEqual(convertIntegerToRoman(1), {value: "I", message: '', result: true}, "TC-1");
  assert.propEqual(convertRomanToInteger("I"), {value: 1, message: '', result: true}, "TC-2");
  assert.propEqual(convertIntegerToRoman(3), {value: "III", message: '', result: true}, "TC-3");
  assert.propEqual(convertRomanToInteger("III"), {value: 3, message: '', result: true}, "TC-4");
  assert.propEqual(convertIntegerToRoman(2), {value: "II", message: '', result: true}, "TC-5");
  assert.propEqual(convertRomanToInteger("II"), {value: 2, message: '', result: true}, "TC-6");
});

test("Domain 2 -> 4 to 8", function(assert) {
  assert.propEqual(convertIntegerToRoman(4), {value: "IV", message: '', result: true}, "TC-7");
  assert.propEqual(convertRomanToInteger("IV"), {value: 4, message: '', result: true}, "TC-8");
  assert.propEqual(convertIntegerToRoman(8), {value: "VIII", message: '', result: true}, "TC-9");
  assert.propEqual(convertRomanToInteger("VIII"), {value: 8, message: '', result: true}, "TC-10");
  assert.propEqual(convertIntegerToRoman(5), {value: "V", message: '', result: true}, "TC-11");
  assert.propEqual(convertRomanToInteger("V"), {value: 5, message: '', result: true}, "TC-12");
});

test("Domain 3 -> 9 to 39", function(assert) {
  assert.propEqual(convertIntegerToRoman(9), {value: "IX", message: '', result: true}, "TC-13");
  assert.propEqual(convertRomanToInteger("IX"), {value: 9, message: '', result: true}, "TC-14");
  assert.propEqual(convertIntegerToRoman(39), {value: "XXXIX", message: '', result: true}, "TC-15");
  assert.propEqual(convertRomanToInteger("XXXIX"), {value: 39, message: '', result: true}, "TC-16");
  assert.propEqual(convertIntegerToRoman(10), {value: "X", message: '', result: true}, "TC-17");
  assert.propEqual(convertRomanToInteger("X"), {value: 10, message: '', result: true}, "TC-18");
});

test("Domain 4 -> 40 to 89", function(assert) {
  assert.propEqual(convertIntegerToRoman(40), {value: "XL", message: '', result: true}, "TC-19");
  assert.propEqual(convertRomanToInteger("XL"), {value: 40, message: '', result: true}, "TC-20");
  assert.propEqual(convertIntegerToRoman(89), {value: "LXXXIX", message: '', result: true}, "TC-21");
  assert.propEqual(convertRomanToInteger("LXXXIX"), {value: 89, message: '', result: true}, "TC-22");
  assert.propEqual(convertIntegerToRoman(50), {value: "L", message: '', result: true}, "TC-23");
  assert.propEqual(convertRomanToInteger("L"), {value: 50, message: '', result: true}, "TC-24");
});

test("Domain 5 -> 90 to 399", function(assert) {
  assert.propEqual(convertIntegerToRoman(90), {value: "XC", message: '', result: true}, "TC-25");
  assert.propEqual(convertRomanToInteger("XC"), {value: 90, message: '', result: true}, "TC-26");
  assert.propEqual(convertIntegerToRoman(399), {value: "CCCXCIX", message: '', result: true}, "TC-27");
  assert.propEqual(convertRomanToInteger("CCCXCIX"), {value: 399, message: '', result: true}, "TC-28");
  assert.propEqual(convertIntegerToRoman(100), {value: "C", message: '', result: true}, "TC-29");
  assert.propEqual(convertRomanToInteger("C"), {value: 100, message: '', result: true}, "TC-30");
});

test("Domain 6 -> 400 to 899", function(assert) {
  assert.propEqual(convertIntegerToRoman(400), {value: "CD", message: '', result: true}, "TC-31");
  assert.propEqual(convertRomanToInteger("CD"), {value: 400, message: '', result: true}, "TC-32");
  assert.propEqual(convertIntegerToRoman(899), {value: "DCCCXCIX", message: '', result: true}, "TC-33");
  assert.propEqual(convertRomanToInteger("DCCCXCIX"), {value: 899, message: '', result: true}, "TC-34");
  assert.propEqual(convertIntegerToRoman(500), {value: "D", message: '', result: true}, "TC-35");
  assert.propEqual(convertRomanToInteger("D"), {value: 500, message: '', result: true}, "TC-36");
});

test("Domain 7 -> 900 to 3999", function(assert) {
  assert.propEqual(convertIntegerToRoman(900), {value: "CM", message: '', result: true}, "TC-37");
  assert.propEqual(convertRomanToInteger("CM"), {value: 900, message: '', result: true}, "TC-38");
  assert.propEqual(convertIntegerToRoman(3999), {value: "MMMCMXCIX", message: '', result: true}, "TC-39");
  assert.propEqual(convertRomanToInteger("MMMCMXCIX"), {value: 3999, message: '', result: true}, "TC-40");
  assert.propEqual(convertIntegerToRoman(1000), {value: "M", message: '', result: true}, "TC-41");
  assert.propEqual(convertRomanToInteger("M"), {value: 1000, message: '', result: true}, "TC-42");
});

test("Over limit : 4000", function(assert) {
  assert.propEqual(convertIntegerToRoman(4000), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-43");
});

test("Wrong format", function(assert) {
  assert.propEqual(convertIntegerToRoman(13,5), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-44");
  assert.propEqual(convertIntegerToRoman(4/2), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-45");
  // assert.propEqual(convertRomanToInteger("m"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-46");
  assert.propEqual(convertIntegerToRoman(-8), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-46");
});

test("Int instead Roman and Opposite", function(assert) {
  assert.propEqual(convertIntegerToRoman("XV"), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-47");
  assert.propEqual(convertRomanToInteger(15), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-48");
});

test("Wrong roman multiple", function(assert) {
  assert.propEqual(convertRomanToInteger("IIII"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-49");
  assert.propEqual(convertRomanToInteger("VV"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-50");
  assert.propEqual(convertRomanToInteger("XXXX"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-51");
  assert.propEqual(convertRomanToInteger("LL"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-52");
  assert.propEqual(convertRomanToInteger("CCCC"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-53");
  assert.propEqual(convertRomanToInteger("DD"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-54");
  assert.propEqual(convertRomanToInteger("MMMM"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-55");
});