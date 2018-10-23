let ground = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];
let arr = [2, 5, 1, 3, 1, 2, 1, 7, 7, 6];
let arr1 = [7, 0, 1, 3, 4, 1, 2, 1];
let arr2 = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];
let arr3 = [2, 2, 1, 2, 2, 3, 0, 1, 2];
let arr4 = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8];
let arr5 = [2, 2, 2, 2, 2];

function maxEl(arr) {
    let min = arr[0], max = min;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }
    return max;
}

function waterVolume(arr) {
    let max = maxEl(arr),
        volume = 0;

    for (var y = 1; y <= max; y++) {
        let side = false,
            space = 0;

        for (var x = 0; x < arr.length; x++) {
            if (arr[x] >= y) {
                if (side) {
                    side = false;
                    volume += space;
                    x--;
                } else {
                    side = true;
                    space = 0;
                }
            } else {
                space++;
            }
        }
    }
    return volume;
}
console.log(waterVolume(ground));
console.log(waterVolume(arr));
console.log(waterVolume(arr1));
console.log(waterVolume(arr2));
console.log(waterVolume(arr3));
console.log(waterVolume(arr4));
console.log(waterVolume(arr5));

