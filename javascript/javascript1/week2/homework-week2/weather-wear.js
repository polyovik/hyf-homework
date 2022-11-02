function temperatureCheck(temperature) {
  const clothes = [['jacket', 'scarf'], ['sweater'], ['longsleeve', 'jeans'], ['t-shirt', 'shorts']];
  if (temperature <= 0) {
    return `Today is ${temperature}°C. You should wear ${clothes[0]}`;
  } else if (temperature <= 10) {
    return `Today is ${temperature}°C. You should wear ${clothes[1]}`;
  } else if (temperature <= 18) {
    return `Today is ${temperature}°C. You should wear ${clothes[2]}`;
  }
  return `Today is ${temperature}°C. You should wear ${clothes[3]}`;
}

const clothesToWear = temperatureCheck(-20);

console.log(clothesToWear);
