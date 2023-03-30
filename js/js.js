// Testimonial arrow







// // Выбрать случайное слово

// // Пока слово не угадано {

// //   Показать игроку текущее состояние игры

// //   Запросить у игрока вариант ответа

// //   Если игрок хочет выйти из игры {

// //     Выйти из игры
// //   }
// //   else if вариант ответа - не одиночная буква {

// //     Сообщить игроку, что он должен ввести букву
// //   }
// //   else {
// //     if такая буква есть в слове {

// //       обновить состояние игры, подставив новую букву
// //     }
// //   }
// // }

// // Поздравляем игрока с победой - слово угадано

// let words = [
//   "программа",
//   "макака",
//   "прекрасный",
//   "оладушек"
// ];

// // Выбраем случайное слово
// let word = words[Math.floor(Math.random() * words.length)];

// // Создаем итоговый массив
// let answerArray = [];
// for (let i = 0; i < words.length; i++) {
//   answerArray[i] = "__";
// }

// let remainingLetters = word.length;

// // Игровой цикл
// while (remainingLetters > 0) {
//   // Показываем состояние игры
//   alert(answer.Array.join(" "));
// }

// // Запрашиваем вариант ответа
// let guess = prompt("Угадайте букву или нажмите отмена для выхода из игры.");

// if (guess === null) {
//   // Выходим из игрового цикла

//   break;

// } else if (guess.length !== 1) {
//   alert("Пожалуйста, введите только одну букву.");
// } else {
//   //  Обновляем состояние игры
//   for (let j = 0; j < word.length; j++) {
//     if (word[j] === guess) {
//       answerArray[j] = guess;
//       remainingLetters--;
//     }
//   }
// }

// // Конец игрового цикла

// // Отображаем ответ
// alert(answerArray.join(" "));
// alert("Отлично! Было загадано слово " + word);


// let sheepCounted = 0;

// while (sheepCounted < 10) {
//   alert()
// }

// let number = '12345';

// function opNumbers(number) {
//   if (!number)
//     return 0;
//   let result = 1;
//   while (number) {
//     result *= number % 10;
//     number = Math.floor(number / 10);
//   }
//   return result;
// }

// alert(result);

let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

let randomString = '';

let randomLength = 7;

while (randomLength.length < randomString) {
    randomString += alphabet[Math.floor(Math.random() * alphabet.length)]
}

console.log(randomString);







