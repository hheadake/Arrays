
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

            fightOrHeal(action, num, hero.life, hero.coins, index)
           



           
            
        }


        
    }



} letsPlayDungeous (["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])

function fightOrHeal (action, num, life,coins,index) {

   

    
        if (action == 'potion') {

            life += num;
            
                if(life > 100) {
                    return;
                
                } else {

                    console.log(`You healed for ${num} hp.`)
                    console.log(`Current num: ${life} hp.`)
                }
        } else if (action === 'chest') {

            console.log(`You found ${num} coins.`)
            coins += num
        } else {
            if (life > 0) {
                life -= num
                console.log(`You slayed ${action}.`)
            } else if (life <= 0){
                console.log(`You died! Killed by ${action}.`)
                console.log(`Best room: ${index}`)
            }

        }
               
         

           
            
    

}




    

   


