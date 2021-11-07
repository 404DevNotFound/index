/* Ricalcolo automatico del ranking delle armate. */

// Variabili generiche. Conterranno i valori del massimo.
var flags = new Array(12); // check se i punti gloria hanno superato il vlaore 10.
var GLORY_OFFSET = 10;

for(var i = 0; i < 12; i++) {
    flags[i] = 0; 
}    

console.log(flags);

/**
 *  Inizializzazione variabili 
 * @param array the array you want to initialize
 * @param id the id of the html element 
 */
function init(array, id) {
    currID = id;
    for (var i = 0; i < 12; i++) {
        currID = currID + (i+1); // creo il nome dell'ID
        array[i] = document.getElementById(currID).innerText;
        // if(array[i] >= 10 && currID == 'glory' + (i+1)) {
        //     flags[i] = 1;
        //     array[i] = array[i] - GLORY_OFFSET;
        // }
        currID = id; // resetto l'ID senza numero.
    }
}



var ranks = new Array(12);
init(ranks, 'rank');

var generals = new Array(12);
init(generals, 'gen');

var armies = new Array(12);
init(armies, 'army');

var factions = new Array(12);
init(factions, 'faction');

var battles = new Array(12);
init(battles, 'battle');

var victories = new Array(12);
init(victories, 'victory');

var minorVictories = new Array(12);
init(minorVictories, 'minorVictory');

var losses = new Array(12);
init(losses, 'loss');

var armyPoints = new Array(12);
init(armyPoints, 'armyPts');

var gloryPoints = new Array(12);
init(gloryPoints, 'glory');

/* estrapolo il più alto valore di glory points */


function getMax() {
    for(var i = 1; i < 12; i++) {
        if(gloryPoints[i] > max) {
            max = gloryPoints[i];
            maxPos = i;
        }
    }
}

var max = gloryPoints[0];
var maxPos = 0;
getMax();
// console.log(maxPos); // debug
 /* salvo i valori di maxPos nel rank1 */
var rank1 = {
    rankID: 'rank1', gen: generals[maxPos], army: armies[maxPos], 
    fac: factions[maxPos], batt: battles[maxPos], vict: victories[maxPos],
    minorVic: minorVictories[maxPos], los: losses[maxPos], armyPt: armyPoints[maxPos],
    glory: gloryPoints[maxPos]  
}

// azzero il valore massimo di glorypoint e itero nuovamente la ricerca
gloryPoints[maxPos] = 0;
maxPos = 0;
max = gloryPoints[0];
getMax();
// console.log(maxPos); // debug
var rank2 = {
    rankID: 'rank2', gen: generals[maxPos], army: armies[maxPos], 
    fac: factions[maxPos], batt: battles[maxPos], vict: victories[maxPos],
    minorVic: minorVictories[maxPos], los: losses[maxPos], armyPt: armyPoints[maxPos],
    glory: gloryPoints[maxPos]  
}

// azzero il valore massimo di glorypoint e itero nuovamente la ricerca
gloryPoints[maxPos] = 0;
maxPos = 0;
max = gloryPoints[0];
getMax();
// console.log(maxPos); // debug
var rank3 = {
    rankID: 'rank3', gen: generals[maxPos], army: armies[maxPos], 
    fac: factions[maxPos], batt: battles[maxPos], vict: victories[maxPos],
    minorVic: minorVictories[maxPos], los: losses[maxPos], armyPt: armyPoints[maxPos],
    glory: gloryPoints[maxPos]  
}

// azzero il valore massimo di glorypoint e itero nuovamente la ricerca
gloryPoints[maxPos] = 0;
maxPos = 0;
max = gloryPoints[0];
getMax();
// console.log(maxPos); // debug
var rank4 = {
    rankID: 'rank4', gen: generals[maxPos], army: armies[maxPos], 
    fac: factions[maxPos], batt: battles[maxPos], vict: victories[maxPos],
    minorVic: minorVictories[maxPos], los: losses[maxPos], armyPt: armyPoints[maxPos],
    glory: gloryPoints[maxPos]  
}

// azzero il valore massimo di glorypoint e itero nuovamente la ricerca
gloryPoints[maxPos] = 0;
maxPos = 0;
max = gloryPoints[0];
getMax();
// console.log(maxPos); // debug
var rank5 = {
    rankID: 'rank5', gen: generals[maxPos], army: armies[maxPos], 
    fac: factions[maxPos], batt: battles[maxPos], vict: victories[maxPos],
    minorVic: minorVictories[maxPos], los: losses[maxPos], armyPt: armyPoints[maxPos],
    glory: gloryPoints[maxPos]  
}

// azzero il valore massimo di glorypoint e itero nuovamente la ricerca
gloryPoints[maxPos] = 0;
maxPos = 0;
max = gloryPoints[0];
getMax();
// console.log(maxPos); // debug
var rank6 = {
    rankID: 'rank6', gen: generals[maxPos], army: armies[maxPos], 
    fac: factions[maxPos], batt: battles[maxPos], vict: victories[maxPos],
    minorVic: minorVictories[maxPos], los: losses[maxPos], armyPt: armyPoints[maxPos],
    glory: gloryPoints[maxPos]  
}

// azzero il valore massimo di glorypoint e itero nuovamente la ricerca
gloryPoints[maxPos] = 0;
maxPos = 0;
max = gloryPoints[0];
getMax();
// console.log(maxPos); // debug
var rank7 = {
    rankID: 'rank7', gen: generals[maxPos], army: armies[maxPos], 
    fac: factions[maxPos], batt: battles[maxPos], vict: victories[maxPos],
    minorVic: minorVictories[maxPos], los: losses[maxPos], armyPt: armyPoints[maxPos],
    glory: gloryPoints[maxPos]  
}


// azzero il valore massimo di glorypoint e itero nuovamente la ricerca
gloryPoints[maxPos] = 0;
maxPos = 0;
max = gloryPoints[0];
getMax();
// console.log(maxPos); // debug
var rank8 = {
    rankID: 'rank8', gen: generals[maxPos], army: armies[maxPos], 
    fac: factions[maxPos], batt: battles[maxPos], vict: victories[maxPos],
    minorVic: minorVictories[maxPos], los: losses[maxPos], armyPt: armyPoints[maxPos],
    glory: gloryPoints[maxPos]  
}

// azzero il valore massimo di glorypoint e itero nuovamente la ricerca
gloryPoints[maxPos] = 0;
maxPos = 0;
max = gloryPoints[0];
getMax();
// console.log(maxPos); // debug
var rank9 = {
    rankID: 'rank9', gen: generals[maxPos], army: armies[maxPos], 
    fac: factions[maxPos], batt: battles[maxPos], vict: victories[maxPos],
    minorVic: minorVictories[maxPos], los: losses[maxPos], armyPt: armyPoints[maxPos],
    glory: gloryPoints[maxPos]  
}

// azzero il valore massimo di glorypoint e itero nuovamente la ricerca
gloryPoints[maxPos] = 0;
maxPos = 0;
max = gloryPoints[0];
getMax();
// console.log(maxPos); // debug
var rank10 = {
    rankID: 'rank10', gen: generals[maxPos], army: armies[maxPos], 
    fac: factions[maxPos], batt: battles[maxPos], vict: victories[maxPos],
    minorVic: minorVictories[maxPos], los: losses[maxPos], armyPt: armyPoints[maxPos],
    glory: gloryPoints[maxPos]  
}

// azzero il valore massimo di glorypoint e itero nuovamente la ricerca
gloryPoints[maxPos] = 0;
maxPos = 0;
max = gloryPoints[0];
getMax();
// console.log(maxPos); // debug
var rank11 = {
    rankID: 'rank11', gen: generals[maxPos], army: armies[maxPos], 
    fac: factions[maxPos], batt: battles[maxPos], vict: victories[maxPos],
    minorVic: minorVictories[maxPos], los: losses[maxPos], armyPt: armyPoints[maxPos],
    glory: gloryPoints[maxPos]  
}

// azzero il valore massimo di glorypoint e itero nuovamente la ricerca
gloryPoints[maxPos] = 0;
maxPos = 0;
max = gloryPoints[0];
getMax();
// console.log(maxPos); // debug
var rank12 = {
    rankID: 'rank12', gen: generals[maxPos], army: armies[maxPos], 
    fac: factions[maxPos], batt: battles[maxPos], vict: victories[maxPos],
    minorVic: minorVictories[maxPos], los: losses[maxPos], armyPt: armyPoints[maxPos],
    glory: gloryPoints[maxPos]  
}

/* Trasferimento di una riga della tabella ad un'altra. */
function changeValue(_pos, id, value) {
    currID = id + (_pos+1);
    // console.log(id);
    document.getElementById(currID).innerText = value;
}

function changeRow(_pos, _gen, _army, _faction, _battle, _victory, _minorVictory, _loss, _armyPt, _gloryPt) {
    /* Chiamo changeValue() passando ogni id necessario. */
    changeValue(_pos, 'gen', _gen);
    changeValue(_pos, 'army', _army);
    changeValue(_pos, 'faction', _faction);
    changeValue(_pos, 'battle', _battle);
    changeValue(_pos, 'victory', _victory);
    changeValue(_pos, 'minorVictory', _minorVictory);
    changeValue(_pos, 'loss', _loss);
    changeValue(_pos, 'armyPts', _armyPt);
    changeValue(_pos, 'glory', _gloryPt);

}


changeRow(0, rank1.gen, rank1.army, rank1.fac, rank1.batt, rank1.vict, rank1.minorVic, rank1.los, rank1.armyPt, rank1.glory);

changeRow(1, rank2.gen, rank2.army, rank2.fac, rank2.batt, rank2.vict, rank2.minorVic, rank2.los, rank2.armyPt, rank2.glory);

changeRow(2, rank3.gen, rank3.army, rank3.fac, rank3.batt, rank3.vict, rank3.minorVic, rank3.los, rank3.armyPt, rank3.glory);

changeRow(3, rank4.gen, rank4.army, rank4.fac, rank4.batt, rank4.vict, rank4.minorVic, rank4.los, rank4.armyPt, rank4.glory);

changeRow(4, rank5.gen, rank5.army, rank5.fac, rank5.batt, rank5.vict, rank5.minorVic, rank5.los, rank5.armyPt, rank5.glory);

changeRow(5, rank6.gen, rank6.army, rank6.fac, rank6.batt, rank6.vict, rank6.minorVic, rank6.los, rank6.armyPt, rank6.glory);

changeRow(6, rank7.gen, rank7.army, rank7.fac, rank7.batt, rank7.vict, rank7.minorVic, rank7.los, rank7.armyPt, rank7.glory);

changeRow(7, rank8.gen, rank8.army, rank8.fac, rank8.batt, rank8.vict, rank8.minorVic, rank8.los, rank8.armyPt, rank8.glory);

changeRow(8, rank9.gen, rank9.army, rank9.fac, rank9.batt, rank9.vict, rank9.minorVic, rank9.los, rank9.armyPt, rank9.glory);

changeRow(9, rank10.gen, rank10.army, rank10.fac, rank10.batt, rank10.vict, rank10.minorVic, rank10.los, rank10.armyPt, rank10.glory);

changeRow(10, rank11.gen, rank11.army, rank11.fac, rank11.batt, rank11.vict, rank11.minorVic, rank11.los, rank11.armyPt, rank11.glory);

changeRow(11, rank12.gen, rank12.army, rank12.fac, rank12.batt, rank12.vict, rank12.minorVic, rank12.los, rank12.armyPt, rank12.glory);