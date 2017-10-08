const _random = require('../lib/random.js');
const _math = require('mathjs');

// number range to sample
const rangeStart = 412121;
const rangeStop = rangeStart + 97;

// 500M samples
const numSamples = 1*1000*1000;

// count samples
const counter = new Array(rangeStop-rangeStart+1).fill(0);

(async function(){
    try{

        // Sampling
        // -----------------------------------------------------
        console.time('Sampling');
        for (let i=0;i<numSamples;i++){
            // get sample within range
            const r = await _random.randomIntInRange(rangeStart, rangeStop);

            // increment counter
            counter[r-rangeStart]++;
        }
        console.timeEnd('Sampling');

        // Analyzing
        // -----------------------------------------------------
        console.log('Standard Deviation', _math.std(counter));
        console.log('Mean Value', _math.mean(counter));
        console.log('Min Value', _math.min(counter));
        console.log('Max Value', _math.max(counter));
       
    }catch(e){
        console.error(e);
    }
})();

