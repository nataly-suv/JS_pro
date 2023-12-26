// создайте функцию, которая возвращает Promise, выполняющиймя через 1 секунду
//и резолвит случайное число от 1до 10. При ошибку - выкинуть ошибку

const generateRandomNumber = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      if (randomNumber) {
        resolve(randomNumber);
      } else {
        reject("ошибка");
      }
    }, 1000);
  });
};

generateRandomNumber()
  .then((number) => {
    console.log("Сренерировано случайное число", number);
  })
  .catch((error) => {
    console.log("Ошибка: ", error);
  });

// Фуекция, Которая принимает url и возвращает данные

let fetchData = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject("ошибка"));
  });
};

fetchData("https://randombig.cat/roar.json")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// деление

let divNumbers = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("делить на ноль нельзя");
    } else {
      resolve(a / b);
    }
  });
};

divNumbers(10, 2)
.then((result) => {
    console.log('Результат: ', result);
}).catch((err) => {
    console.log(err);
});
