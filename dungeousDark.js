
const hero = {
    life: 100,
    coins: 0,
}


function letsPlayDungeous (array) {



    for (const el of array) {

        let newArray = el.split('|')

        for (let index = 0; index < newArray.length; index++) {
            
            let line = newArray[index].split(' ')
            let action = line[0];
            let num = Number(line[1]);

            fightOrHeal(action, num, hero, index)
           



           
            
        }


        
    }



} letsPlayDungeous (["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])

function fightOrHeal (action, num, hero,index) {

   

    
    if (action === 'potion') {
        hero.life = Math.min(hero.life + num, 100);
        console.log(`You healed for ${num} hp.`);
        console.log(`Current health: ${hero.life} hp.`);
    } else if (action === 'chest') {
        hero.coins += num;
        console.log(`You found ${num} coins.`);
    } else {
        if (hero.life > 0) {
            hero.life -= num;
            if (hero.life > 0) {
                console.log(`You slayed ${action}.`);
            } else {
                console.log(`You died! Killed by ${action}.`);
                console.log(`Best room: ${index + 1}`);
            }
        }
    }
               
         

           
            
    

}




    

   


