import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const OUTCOME = ['Alice Wins', 'Draws', 'Bob Wins'];

const Player = (Who) => ({
    ...stdlib.hasRandom,
    getHand: async () => {
        const hand = Math.floor(Math.random() * 5);
        console.log(`${Who} played number ${hand}`);
        if(Math.random() <= 0.01){
            for(let i = 0; i < 10; i++){
                console.log(` ${Who} takes their sweet time sending it back... `);
                await stdlib.wait(1);
            }
        }
        return hand;
    },
    getGuess: async (hand) => {
        const guess = parseInt(hand) + Math.floor(Math.random() * 5);
        console.log(`${Who} guessed the total of number is ${guess}`);
        if(Math.random() <= 0.01){
            for(let i = 0; i < 10; i++){
                console.log(` ${Who} takes their sweet time sending it back... `);
                await stdlib.wait(1);
            }
        }
        return guess;
    },
    seeOutcome: (outcome) => {
        console.log(`${Who} see the outcomes: ${OUTCOME[outcome]}`);
    },
    informTimeout: () => {
        console.log(`${Who} observed timeout`);
    }
});

const startingBalance = stdlib.parseCurrency(100);
const accAlice = await stdlib.newTestAccount(startingBalance);
const accBob = await stdlib.newTestAccount(startingBalance);

const fU = (amt) => stdlib.formatCurrency(amt);
const getBalance = async (acc) => fU(await stdlib.balanceOf(acc));

const beforeAlice = await getBalance(accAlice);
const beforeBob = await getBalance(accBob);

const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

await Promise.all([
    ctcAlice.p.Alice({
        ...Player('Alice'),
        wager: () => {
            const wager = stdlib.parseCurrency(5);
            console.log(`Alice use ${fU(wager)} wager`);
            return wager;
        },
        deadline: 10,
    }),

    ctcBob.p.Bob({
        ...Player('Bob'),
        acceptWager: (wager) => {
            console.log(`Bob accept wager of ${fU(wager)}`);
        },
    }),
]);

const afterAlice = await getBalance(accAlice);
const afterBob = await getBalance(accBob);

console.log(`Alice's balance went from ${beforeAlice} to ${afterAlice}.`);
console.log(`Bob's balance went from ${beforeBob} to ${afterBob}.`);