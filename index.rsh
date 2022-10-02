'reach 0.1'

const [isOutcome, A_WINS, DRAW, B_WINS] = makeEnum(3);

const winner = (handAlice, guessAlice, handBob, guessBob) => {
    const total = handAlice + handBob;
    
    if(total == guessAlice && total != guessBob){
        return A_WINS;
    }
    else if(total == guessBob && total != guessAlice){
        return B_WINS;
    }
    else{
        return DRAW;
    }
}

//Khew1125

assert(winner(2, 5, 3, 6) == A_WINS);
assert(winner(2, 6, 3, 5) == B_WINS);
assert(winner(2, 5, 1, 4) == DRAW);
assert(winner(2, 5, 3, 5) == DRAW);

forall(UInt, a => 
    forall(UInt, b => 
        forall(UInt, c => 
            forall(UInt, d =>
                assert(isOutcome(winner(a, b, c, d)))))));

const Player = {
    ...hasRandom,
    getHand: Fun([], UInt),
    getGuess: Fun([UInt], UInt),
    seeOutcome: Fun([UInt], Null),
    informTimeout: Fun([], Null),
}

export const main = Reach.App(() => {
    const Alice = Participant('Alice', {
        ...Player,
        wager: UInt,
        deadline: UInt,
    });

    const Bob = Participant('Bob', {
        ...Player,
        acceptWager: Fun([UInt], Null),
    });

    init();

    const informTimeout = () => {
        each([Alice, Bob], () => {
            interact.informTimeout();
        });
    }

    Alice.only(() => {
        const wager = declassify(interact.wager);
        const deadline = declassify(interact.deadline);
    });

    Alice.publish(wager, deadline).pay(wager);
    commit();

    Bob.only(() => {
        interact.acceptWager(wager);
    });

    Bob.pay(wager).timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));

    var outcome = DRAW;
    invariant(balance() == 2 * wager && isOutcome(outcome));
    while(outcome == DRAW){
        commit();

        Alice.only(() => {
            const _handAlice = interact.getHand();
            const _guessAlice = interact.getGuess(_handAlice);
            const [_commitHandAlice, _saltHandAlice] = makeCommitment(interact, _handAlice);
            const [_commitGuessAlice, _saltGuessAlice] = makeCommitment(interact, _guessAlice);
            const commitHandAlice = declassify(_commitHandAlice);
            const commitGuessAlice = declassify(_commitGuessAlice);
        });

        Alice.publish(commitHandAlice, commitGuessAlice).timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
        commit();

        unknowable(Bob, Alice(_handAlice, _guessAlice, _saltHandAlice, _saltGuessAlice));

        Bob.only(() => {
            const handBob = declassify(interact.getHand());
            const guessBob = declassify(interact.getGuess(handBob));
        });

        Bob.publish(handBob, guessBob).timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
        commit();

        Alice.only(() => {
            const handAlice = declassify(_handAlice);
            const guessAlice = declassify(_guessAlice);
            const saltHandAlice = declassify(_saltHandAlice);
            const saltGuessAlice = declassify(_saltGuessAlice);
        });
    
        Alice.publish(handAlice, guessAlice, saltHandAlice, saltGuessAlice).timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
        checkCommitment(commitHandAlice, saltHandAlice, handAlice);
        checkCommitment(commitGuessAlice, saltGuessAlice, guessAlice);

        outcome = winner(handAlice, guessAlice, handBob, guessBob);
        continue;
    }

    assert(outcome == A_WINS || outcome == B_WINS);

    transfer(2 * wager).to(outcome == A_WINS ? Alice : Bob);
    commit();

    each([Alice, Bob], () => {
        interact.seeOutcome(outcome);
    });
});