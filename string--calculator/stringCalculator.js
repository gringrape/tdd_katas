export function calculate(str) {
  if (str.length === 0) {
    return 0;
  }

  const numbers = parse(str);

  return sum(...validate(numbers));
}

function findDelimeter(str) {
  const prefixMatch = str.match(/\/\/.*\n/);

  if (!prefixMatch) {
    return null;
  }

  return prefixMatch[0].slice(2, -1);
}

function parse(str) {
  const delimeters = [',', '\n'];
  const definedDelimeter = findDelimeter(str);

  return str
    .split(',')
    .flatMap((part) => part.split('\n'))
    .flatMap((part) => (
      definedDelimeter
        ? part.split(definedDelimeter)
        : part
    ))
    .map((part) => parseInt(part));
}

function validate(numbers) {
  const filteredByMin = filterByMinValue(numbers);
  const filteredByMax = filterByMaxValue(numbers);

  if (filteredByMin.length > 0) {
    throw new Error(createErrorMessage(filteredByMin));
  }

  return filteredByMax;
}

function createErrorMessage(numbers) {
  return numbers
    .reduce((acc, number) => acc.concat(`${number},`), 'negatives not allowed: ')
    .slice(0, -1);
}

function filterByMinValue(numbers) {
  return numbers
    .filter((number) => number < 0);
}

function filterByMaxValue(numbers) {
  return numbers
    .filter((number) => number < 1001);
}
 
function sum(...numbers) {
  return [...numbers]
    .reduce((acc, num) => acc + num, 0);
}
