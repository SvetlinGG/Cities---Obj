function city(arr){
    let cityArr = [];
    for ( let town of arr){
        let tokens = town.split(' |');
        let cityObj = {
            town: tokens[0],
            latitude: Number(tokens[1]).toFixed(2),
            longitude: Number(tokens[2]).toFixed(2),
        }
        cityArr.push(cityObj);
    }
    for ( let town of cityArr){
        console.log(town);
    }

}
city(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);