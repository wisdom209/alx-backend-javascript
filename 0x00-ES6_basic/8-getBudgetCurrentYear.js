function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const incomeProp = `income-${getCurrentYear()}`;
  const gdpProp = `gdp-${getCurrentYear()}`;
  const capitaProp = `capita-${getCurrentYear()}`;

  const budget = {
    [incomeProp]: income,
    [gdpProp]: gdp,
    [capitaProp]: capita,
  };

  return budget;
}
