/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var triangles = 0;
    for (var i = 0; i < preferences.length; i++) {
        var firstElement = preferences[i];
        var secondElement = preferences[firstElement - 1];
        if (firstElement == i + 1 || secondElement == firstElement || preferences[secondElement - 1] == secondElement - 1) {
            continue;
        }
        if (i + 1 == preferences[secondElement - 1]) {
            triangles++;
            preferences[i] = false;
            preferences[firstElement - 1] = false;
            preferences[secondElement - 1] = false;
        }
    }
    return triangles;
};
