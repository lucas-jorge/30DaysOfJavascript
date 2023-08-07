//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];

const ethiopiaIndex = countries.indexOf('Ethiopia'); if (ethiopiaIndex !== -1) { countries.splice(ethiopiaIndex, 1, 'ETHIOPIA'); } else { countries.push('Ethiopia'); }

console.log(countries);
