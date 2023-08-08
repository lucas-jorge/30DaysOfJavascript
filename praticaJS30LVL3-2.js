const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  const middleCountries = Math.floor(countries.length / 2);
    console.log(middleCountries);//número do índice do país do meio.
    console.log(countries[middleCountries]);//país do meio.
    console.log(countries[0]);//primeiro país.
    console.log(countries[countries.length - 1]);//último país.
    console.log(countries[0], countries[middleCountries], countries[countries.length - 1]);//primeiro, meio e ultimo países.