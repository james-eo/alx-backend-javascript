export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '') return '';

  const filteredValues = [...set].filter((value) => typeof value === 'string' && value.startsWith(startString));

  return filteredValues
    .map((value) => value.slice(startString.length))
    .join('-');
}
