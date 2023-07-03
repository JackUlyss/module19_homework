// функция выводит собственные ключ : значение объекта
function getOwnProp (obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key + " : " + obj[key])
        }
    }
}