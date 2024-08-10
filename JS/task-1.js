
function slugify(title) {
 return title
 .toLowerCase()                // Перетворюємо текст на нижній регістр
//  .trim()                       // Видаляємо пробіли з початку і кінця рядка
 .replace(/[\s\W-]+/g, '-')    // Замінюємо пробіли, спеціальні символи і дефіси на один дефіс
//  .replace(/^-+|-+$/g, '');     // Видаляємо дефіси з початку і кінця рядка
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
  