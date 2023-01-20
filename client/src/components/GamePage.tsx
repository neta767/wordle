import {
    MAX_CHALLENGES,
    REVEAL_TIME_MS,
    SOLUTION_LENGTH,
} from "../constants/settings";
import {CORRECT_WORD_MESSAGE, WIN_MESSAGES} from "../constants/strings";
import {
    loadGameStateFromLocalStorage,
    saveGameStateToLocalStorage,
} from "../lib/localStorage";
import {
    getHashSolution,
    updateGameStatus,
} from "../lib/server-requests";
import {
    alertProps,
    CharStatus,
    gameReq,
} from '../lib/types'
import {Grid} from "./grid/Grid";
import {Keyboard} from "./keyboard/Keyboard";
import {InfoModal} from "./modals/InfoModal";
import {useEffect, useState} from "react";
import {Alert} from "./Alert";

function GamePage() {
    const [alertProps, setAlertProps] = useState<alertProps>({isOpen: false, message: '', variant: undefined});

    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
    const [isRevealing, setIsRevealing] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);
    const [charStatuses, setCharStatuses] = useState<{
        [key: string]: CharStatus;
    }>(() => {
        const loaded = loadGameStateFromLocalStorage();
        if (!loaded) {
            return {};
        }
        return loaded.charStatuses;
    });
    const [guessesStatuses, setGuessesStatuses] = useState<CharStatus[][]>(() => {
        const loaded = loadGameStateFromLocalStorage();
        if (!loaded) {
            return [];
        }
        return loaded.guessesStatuses;
    });
    const [hashSolution, setHashSolution] = useState(() => {
        const loaded = loadGameStateFromLocalStorage();
        if (!loaded) {
            return "";
        }
        return loaded.hashSolution;
    });
    const [guesses, setGuesses] = useState<string[]>(() => {
        const loaded = loadGameStateFromLocalStorage();
        if (!loaded) {
            return [];
        }
        return loaded.guesses;
    });

    useEffect(() => {
        // if no game state on load,
        // show the user the how-to info modal
        if (!loadGameStateFromLocalStorage()) {
            setTimeout(() => {
                setIsInfoModalOpen(true);
            }, REVEAL_TIME_MS);
            getHashSolution().then((value) => {
                if (typeof value === "string") {
                    setHashSolution(value);
                }
            })
                .catch((e) => console.log(e));
        } else if (hashSolution) {
            updateGame(guesses);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        saveGameStateToLocalStorage({
            guesses,
            hashSolution,
            guessesStatuses,
            charStatuses,
        });
    }, [charStatuses, guesses, guessesStatuses, hashSolution]);

    useEffect(() => {
        if (isGameOver) {
            return;
        }
        if (currentGuess.length === SOLUTION_LENGTH) {
            console.log("Done");
            if (guesses.length < MAX_CHALLENGES) {
                updateGame([...guesses, currentGuess]);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentGuess]);

    const updateGame = (currenGuesses: string[]) => {
        const dataReq: gameReq = {
            guesses: currenGuesses,
            hashSolution: hashSolution,
        };

        updateGameStatus(dataReq).then((dataRes) => {
            if (typeof dataRes === "string") {
                return console.log(dataRes);
            }
            const {charStatuses, guessesStatuses, isGameWon, solution} = dataRes;
            setCharStatuses(charStatuses);
            setGuessesStatuses(guessesStatuses);
            setGuesses(currenGuesses);
            setCurrentGuess("");
            setIsRevealing(true);
            // turn this back off after all
            // chars have been revealed
            setTimeout(() => {
                setIsRevealing(false);
            }, REVEAL_TIME_MS * SOLUTION_LENGTH);
            if (isGameWon) {
                setTimeout(() => {
                    setAlertMessage(WIN_MESSAGES[Math.floor(Math.random() * WIN_MESSAGES.length)])
                    setAlertStatus('success')
                    setIsAlertVisible(true)
                    return setIsGameOver(true);
                }, REVEAL_TIME_MS * SOLUTION_LENGTH)
            } else if (guesses.length >= MAX_CHALLENGES - 1) {
                setTimeout(() => {
                    setAlertMessage(CORRECT_WORD_MESSAGE(solution))
                    setAlertStatus('error')
                    setIsAlertVisible(true)
                    setIsGameOver(true);
                }, REVEAL_TIME_MS * SOLUTION_LENGTH)
            }
        })
            .catch((e) => console.log(e));
    };

    const onChar = (value: string) => {
        if (
            (currentGuess + value).length <= SOLUTION_LENGTH &&
            guesses.length < MAX_CHALLENGES &&
            !isGameOver
        ) {
            setCurrentGuess(currentGuess + value);
        }
    };

    const onDelete = () => {
        setCurrentGuess(currentGuess.split("").slice(0, -1).join(""));
    };

    return (
        <div
            data-cy='game-page'
            className="mx-auto flex w-full grow flex-col px-1 pt-2 pb-8 sm:px-6 md:max-w-7xl lg:px-8 short:pb-2 short:pt-2">
            <div className="flex grow flex-col justify-center pb-6 short:pb-2">
                <Grid
                    guesses={guesses}
                    currentGuess={currentGuess}
                    isRevealing={isRevealing}
                    guessesStatuses={guessesStatuses}
                />
            </div>
            <Keyboard
                onChar={onChar}
                onDelete={onDelete}
                isRevealing={isRevealing}
                charStatuses={charStatuses}
            />
            <InfoModal
                isOpen={isInfoModalOpen}
                handleClose={() => setIsInfoModalOpen(false)}
            />
            <Alert {...alertProps}/>
        </div>
    );
}

export default GamePage;
