import * as yup from "yup"


const stringSchema = yup
    .string() // Простая проверка, что поле обязано быть string.
    .required("This field is required.") // Поле обязательное для заполнения.
    .min(10, "Min lenght is 10.") // Минимальная длина строки.
    .max(100, "Max lenght is 100.") // Максимальная длина строки.
    .email("Wrong format.") // Проверяет, является ли строка валидным email-адресом(проверка на @, домен).as
    

const numberSchema = yup
    .number() // Простая проверка, что поле должно быть числом
    .required("This filed is required") // Поле обязательное для заполнения.
    .positive("Your number must be greater than 0") // Число должно быть больше нуля
    .integer("The number must be a whole number") // Число должно быть целым
    .min(10, "You need to be at least 10 years old") // Минимальное значение числа
    // .negative() // Число должно быть меньше нуля

