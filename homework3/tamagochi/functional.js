function Pet(name) {
    var interval = 1000;
    var pet = {
        time: 0,
        hunger: 100,
        clock1: setInterval(depleteH, interval),
        bladder: 100,
        clock2: setInterval(depleteB, interval),
        fun: 100,
        clock3: setInterval(depleteF, interval),
        energy: 100,
        clock4: setInterval(depleteE, interval),
        happy: 100,
        clock5: setInterval(depleteHap, interval),
        gameover: 0
    }

    document.getElementById("BtnHunger").onclick = fillHunger;
    document.getElementById("BtnBladder").onclick = fillBladder;
    document.getElementById("BtnFun").onclick = fillFun;
    document.getElementById("BtnEnergy").onclick = fillEnergy;
    document.getElementById("BtnHappiness").onclick = fillHappy;
    document.getElementById("BtnKill").onclick = killPet;

    function gameovercheck() {
        if (pet.hunger == 0 && pet.bladder == 0 && pet.fun == 0 && pet.happy == 0 && pet.energy == 0 && pet.gameover == 0) {
            pet.gameover++;
            document.getElementById('name').innerHTML = 'RIP\n' + name;
            alert("Game Over!");
            spriteHandler();

        }
        else {
            spriteHandler();
        }
    }

    function spriteHandler() {
        if (pet.hunger == 0 && pet.bladder == 0 && pet.fun == 0 && pet.energy == 0 && pet.happy == 0) {
            document.getElementById("Sprite").src = "https://orig00.deviantart.net/7a8e/f/2018/049/f/f/dead_pet_asset_js_game_by_karukami1-dc3jgfu.png";
        }
    }

    function getTime() {
        if (pet.hunger > 0 && pet.bladder > 0 && pet.fun > 0 && pet.energy > 0 && pet.happy > 0) {
            document.getElementById("TimeValue").value = pet.time;
            pet.time++;
        }
        if (pet.time == 1000) alert('good job)) your pet still alive');
        else if (pet.time == 3000) alert('u a good ovner)) your pet still alive');
    }
    setInterval(getTime, 1000);


    function killPet() {
        pet.fun = 0;
        pet.happy = 0;
        pet.hunger = 0;
        pet.bladder = 0;
        pet.energy = 0;
        gameovercheck();
    }

    function fillHunger() {
        if (pet.hunger <= 99 && pet.hunger != 0) {
            pet.hunger += 10;
        }
        else if (pet.hunger == 0 || pet.hunger > 100) {
            pet.hunger += 0;
        } else if (pet.hunger <= 91 && pet.hunger <= 100) {
            pet.hunger += 100 - pet.hunger;
        }
    }

    function fillBladder() {
        if (pet.bladder <= 99 && pet.bladder != 0) {
            pet.bladder += 10;
        }
        else if (pet.bladder == 0 || pet.bladder > 100) {
            pet.bladder += 0;
        } else if (pet.bladder <= 91 && pet.bladder <= 100) {
            pet.bladder += 100 - pet.bladder;
        }
    }

    function fillFun() {
        if (pet.fun <= 99 && pet.bladder != 0) {
            pet.fun += 10;
        }
        else if (pet.fun == 0 || pet.fun > 100) {
            pet.fun += 0;
        } else if (pet.fun <= 91 && pet.fun <= 100) {
            pet.fun += 100 - pet.fun;
        }
    }

    function fillEnergy() {
        if (pet.energy <= 99 && pet.hunger != 0) {
            pet.energy += 10;
        }
        else if (pet.energy == 0 || pet.energy > 100) {
            pet.energy += 0;
        } else if (pet.energy <= 91 && pet.energy <= 100) {
            pet.energy += 100 - pet.energy;
        }
    }

    function fillHappy() {
        if (pet.happy <= 99 && pet.bladder != 0 && pet.fun != 0 && pet.hunger != 0) {
            pet.happy += 10;
        }
        else if (pet.happy == 0 || pet.happy > 100) {
            pet.happy += 0;
        } else if (pet.happy <= 91 && pet.happy <= 100) {
            pet.happy += 100 - pet.happy;
        }
    }

    function depleteH() {
        if (pet.hunger == 0) {
            document.getElementById('hungger').innerHTML = "Your pet is starving!";
            clearInterval(pet.clock1);
            gameovercheck();
        } else if (pet.hunger == 20) {
            document.getElementById('hungger').innerHTML = "Your pet will be starving soon!";
            pet.hunger--;
        } else if (pet.hunger != 0)
            pet.hunger--;
        document.getElementById("HungerBar").value = pet.hunger;
    }

    function depleteB() {
        if (pet.bladder == 0) {
            document.getElementById('bladder').innerHTML = "Your pet has become sick!";
            clearInterval(pet.clock2);
            gameovercheck();
        } else if (pet.bladder == 20) {
            document.getElementById('bladder').innerHTML = "Your pet want pipi now!";
            pet.bladder--;
        } else if (pet.bladder != 0)
            pet.bladder--;
        document.getElementById("BladderBar").value = pet.bladder;

    }

    function depleteF() {
        if (pet.fun == 0) {
            document.getElementById('fun').innerHTML = "Your pet is depressed!";
            clearInterval(pet.clock3);
            gameovercheck();
        } else if (pet.fun == 20) {
            document.getElementById('fun').innerHTML = "Your pet is bored!";
            pet.fun--;
        } else if (pet.fun != 0)
            pet.fun--;
        document.getElementById("FunBar").value = pet.fun;

    }

    function depleteE() {
        if (pet.energy == 0) {
            document.getElementById('energy').innerHTML = "Your pet is tired!";
            clearInterval(pet.clock4);
            gameovercheck();
        } else if (pet.energy == 20) {
            document.getElementById('energy').innerHTML = "Your pet is done!";
            pet.energy--;
        } else if (pet.energy !== 0)
            pet.energy--;
        document.getElementById("EnergyBar").value = pet.energy;

    }
    function depleteHap() {
        if (pet.happy == 0) {
            document.getElementById('happy').innerHTML = "Your pet can to do suiside!";
            clearInterval(pet.clock5);
            gameovercheck();
        } else if (pet.happy == 20) {
            document.getElementById('happy').innerHTML = "Your pet hasn't happy!";
            pet.happy--;
        } else if (pet.happy !== 0)
            pet.happy--;
        document.getElementById("HappinessBar").value = pet.happy;

    }


}

window.onload = function () {
    var ret = true;
    while (ret) {
        var name = prompt("name pet");
        if (name == null || name == '' || name == 'null') {
            ret = true;

        } else if (name !== null) {
            console.log(name);

            document.getElementById('name').innerHTML = name;
            Pet(name);
            ret = false;
        }
    }
}