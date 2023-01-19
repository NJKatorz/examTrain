module.exports = function (array) {
    const regResult = new RegExp("[Xx]+");
    /** let i = 0;
    const newArray = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (!regResult.test(element)) {
            newArray[i] = element;
            i++;

            or newArray.push(element),
        }
    }
    **/
    const newArray = array.filter((name) => !regResult.test(name));

    return newArray;
};
