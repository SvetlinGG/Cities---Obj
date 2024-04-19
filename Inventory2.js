function inventory(heroes){

    let heroArr = [];
    for ( let element of heroes){
        let [ Hero, heroLevel, items] = element.split(' / ');
        let heroObj = { Hero, heroLevel, items}
        heroArr.push(heroObj)
    }
        heroArr.sort((a, b) =>a.heroLevel - b.heroLevel);
        for ( let hero of heroArr){
            console.log(`Hero: ${hero.Hero}`);
            console.log(`level => ${hero.heroLevel}`);
            console.log(`items => ${hero.items}`);
        }

}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);