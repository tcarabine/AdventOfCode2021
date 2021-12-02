const fs = require('fs');
const {EOL} = require('os');

function task1Algo(depths: Array<number>) {
    const thoseLower = depths.filter( (depth, ix) => ix > 0 && depth > depths[ix-1]);

    return thoseLower.length;
}

function task2Algo(depths: Array<number>) {
    let slidingWindow = depths.map((depth, ix) => ix <= depths.length -3 ? depth + depths[ix+1] + depths[ix+2] : null).filter((depth) => depth);

    return task1Algo(slidingWindow);
}

const inputFile = fs.readFileSync('input-1.txt','utf8');

const depths = inputFile.split(EOL).map((line) => parseInt(line));

const lower = task1Algo(depths);
const slidingLower = task2Algo(depths);

console.log(`There are ${lower} that are lower than the one before`);
console.log(`There are ${slidingLower} windows of 3 depths that are lower than the window before`);


export {task1Algo, task2Algo};