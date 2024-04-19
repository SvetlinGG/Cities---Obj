function store(store, order){
    let storeObj = {};
    for ( let i=0; i < store.length; i+=2){
        let product = store[i];
        storeObj[product] = Number(store[i+1]);
        
        
    }
    for ( let i=0; i < order.length; i+=2){
        let productOrder = order[i];
        if ( !storeObj.hasOwnProperty(productOrder)){
            storeObj[productOrder] = Number(order[i+1]);
        }else if ( storeObj.hasOwnProperty(productOrder)){
            storeObj[productOrder] += Number(order[i+1])
        }
         
    }
    for ( let key in storeObj){
        console.log(`${key} -> ${storeObj[key]}`);
    }
    

}
store([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);