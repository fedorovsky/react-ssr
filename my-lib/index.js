// Объект с вложенными свойствами
const user = {
  name: 'John',
  address: {
    street: '123 Main St',
    city: 'New York',
    // Закомментируйте следующую строку для демонстрации отсутствия значения
    zipCode: '10001',
  },
};

// Попытка доступа к свойству, которое может быть undefined
const zipCode = user.address?.zipCode;

console.log(zipCode);

export default zipCode;
