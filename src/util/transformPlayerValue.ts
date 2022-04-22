const transformPlayerValue = (playerValue: number) => {
  const transformedValue = playerValue / 10;
  return `${transformedValue} £`;
};

export default transformPlayerValue;
