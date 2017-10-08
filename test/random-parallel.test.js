const _random = require('../lib/random.js');
const _math = require('mathjs');

// number range to sample
const rangeStart = 412121;
const rangeStop = rangeStart + 97;

// 500M samples
const numSamples = 1*1000*1000;

// count samples
const counter = new Array(rangeStop-rangeStart+1).fill(0);

// parallel call
function blockSample(n, x, y){
    return Promise.all((new Array(n)).fill(0).map(() => _random.randomIntInRange(x, y)));
}

(async function(){
    try{     
        // Sampling
        // -----------------------------------------------------
        // 10k element blocksize
        const blocksize = 10*1000;

        // get num iterations - ignore rest
        const numIterations = Math.floor(numSamples/blocksize);

        // sample blockwise
        for (let j=0;j<numIterations;j++){
            console.log('Iteration ' + j + '/' + numIterations);
            console.time('Sampling');
            const samples = await blockSample(blocksize, rangeStart, rangeStop);
            console.timeEnd('Sampling');

            // merge counter
            for (let i=0;i<samples.length;i++){
                // increment counter
                counter[samples[i]-rangeStart]++;
            }
        }
        
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

