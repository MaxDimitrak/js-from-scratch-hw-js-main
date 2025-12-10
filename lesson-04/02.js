/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function includesElement(arr ,el) {
    let isElemetInArr = false;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === el){
            isElemetInArr = true;
        }
    }
    return isElemetInArr;
}

function findUniqueElements(arr) {
    const resArr = [];
    for (let i = 0; i < arr.length; i++){
        if (!includesElement(resArr, arr[i])){            
            resArr.push(arr[i]);
        }
    }
    return resArr;
}

