function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  let incomeProp = `income-${getCurrentYear()}`;
  let gdpProp = `gdp-${getCurrentYear()}`;
  let capitaProp = `capita-${getCurrentYear()}`;

  const budget = {
    [incomeProp]: income,
    [gdpProp]: gdp,
    [capitaProp]: capita,
  };
  
  return budget;
}
