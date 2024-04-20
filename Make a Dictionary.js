function dictionary(arr){
    let dictionaryObj = {};
    for ( let obj of arr){
        let strObj = JSON.parse(obj);
        let[ term, definition] = Object.entries(strObj)[0];
        
        dictionaryObj[term] = definition;
    }
    let sortedObj = Object.keys(dictionaryObj).sort();
    for ( let sort of sortedObj){
        let definition = dictionaryObj[sort]
        console.log(`Term: ${sort} => Definition: ${definition}`);
    }
    

}
dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )