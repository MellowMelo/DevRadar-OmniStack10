module.exports = function parseSringAsArray(arrayAsString){
    let techsArray = arrayAsString.split(",").map(tech => tech.trim());
    return techsArray;
}