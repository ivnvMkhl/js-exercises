/* 
Нужно написать кастомный fetch, который под капотом делает до 3 попыток с интервалом в 1 секунду между попытками в случае ошибки. То есть делается запрос и если он успешен то возвращается промис, как у обычного fetch,  если ошибка то ждем секунду и пробуем еще раз , и так далее до 3 раз, если в 3ий раз возвращается ошибка - то выбрасываем исключение с ошибкой из 3ей попытки.

url с рандомным ответом: https://ff-exercises-api.glitch.me/random-error-response
*/

const customFetch = async () => {};

console.log(
    customFetch('https://ff-exercises-api.glitch.me/random-error-response')
        .then((response) => {
            if (response.status >= 300) {
                throw new Error('Ошибка');
            } else {
                return response.json();
            }
        })
        .catch((error) => console.error(error))
        .then((json) => console.log(json)),
);
