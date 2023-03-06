import React, { useEffect, useState } from "react";

import {
  MAX_CHALLENGES,
  REVEAL_TIME_MS,
  SOLUTION_LENGTH,
} from "../constants/settings";
import {
  CORRECT_WORD_MESSAGE,
  NOT_ENOUGH_LETTERS_MESSAGE,
  WIN_MESSAGES,
  WORD_NOT_FOUND_MESSAGE,
} from "../constants/strings";
import {
  loadGameStateFromLocalStorage,
  saveGameStateToLocalStorage,
} from "../lib/localStorage";
import { updateGameStatus } from "../lib/server-requests";
import { alertProps, char, CharStatus, gameReq, guess } from "../lib/types";
import { Grid } from "./grid/Grid";
import { Keyboard } from "./keyboard/Keyboard";
import { InfoModal } from "./modals/InfoModal";
import { Alert } from "./Alert";

export const GamePage = React.memo(function GamePage() {
  const [alertProps, setAlertProps] = useState<alertProps>({
    isOpen: false,
    message: "",
    variant: undefined,
  });
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [currentGuess, setCurrentGuess] = useState("");
  const [isRevealing, setIsRevealing] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [currentRowClass, setCurrentRowClass] = useState("");
  //run only the first time the component render
  const [keysStatuses, setKeysStatuses] = useState<{
    [key: string]: CharStatus;
  }>(() => {
    const loaded = loadGameStateFromLocalStorage();
    if (!loaded) {
      return {};
    }
    return loaded.keysStatuses;
  });
  const [guesses, setGuesses] = useState<guess[]>(() => {
    const loaded = loadGameStateFromLocalStorage();
    if (!loaded) {
      return [];
    }
    return loaded.guesses;
  });
  // const [stats, setStats] = useState(() => loadStats())

  useEffect(() => {
    // if no game state on load,
    // show the user the how-to info modal
    if (!loadGameStateFromLocalStorage()) {
      setTimeout(() => {
        setIsInfoModalOpen(true);
      }, REVEAL_TIME_MS);
    }
    // show alert if needed when page been refreshed
    else if (guesses.length > 0) {
      if (guesses[guesses.length - 1].every((l) => l.status === "correct")) {
        showWinAlert();
        setIsGameOver(true);
      } else if (guesses.length === MAX_CHALLENGES) {
        showLostAlert("Maybe next time");
        setIsGameOver(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    saveGameStateToLocalStorage({
      guesses,
      keysStatuses,
    });
  }, [keysStatuses, guesses]);

  const updateGame = (currenGuesses: string) => {
    const dataReq: gameReq = {
      guess: currenGuesses,
      isGameOver: guesses.length === MAX_CHALLENGES - 1,
    };

    updateGameStatus(dataReq)
      .then((dataRes) => {
        if (typeof dataRes === "string") {
          return console.log(dataRes);
        }
        const { guessStatus, solution } = dataRes;
        setGuesses((preGuesses) => [...preGuesses, guessStatus]);
        setKeysStatuses((prevUsedKeys) =>
          updateKeys(prevUsedKeys, guessStatus)
        );
        setCurrentGuess("");
        setIsRevealing(true);
        // turn this back off after all keysStatuses have been revealed
        setTimeout(() => {
          setIsRevealing(false);
        }, REVEAL_TIME_MS * SOLUTION_LENGTH);

        if (guessStatus.every((l) => l.status === "correct")) {
          setTimeout(() => {
            setIsGameOver(() => true);
            showWinAlert();
          }, REVEAL_TIME_MS * SOLUTION_LENGTH);
        } else if (solution) {
          setTimeout(() => {
            showLostAlert(CORRECT_WORD_MESSAGE(solution));
            setIsGameOver(true);
          }, REVEAL_TIME_MS * SOLUTION_LENGTH);
        }
      })
      .catch((e) => console.log(e));
  };

  const updateKeys = (
    prevUsedKeys: { [key: string]: CharStatus },
    guessStatus: char[]
  ) => {
    guessStatus.forEach((l) => {
      const currentStatus = prevUsedKeys[l.value];

      if (l.status === "correct") {
        prevUsedKeys[l.value] = "correct";
        return;
      }
      if (l.status === "present" && currentStatus !== "correct") {
        prevUsedKeys[l.value] = "present";
        return;
      }
      if (l.status === "absent" && currentStatus !== ("correct" || "present")) {
        prevUsedKeys[l.value] = "absent";
        return;
      }
    });
    return prevUsedKeys;
  };
  const showWinAlert = () => {
    setAlertProps({
      isOpen: true,
      message: WIN_MESSAGES[Math.floor(Math.random() * WIN_MESSAGES.length)],
      variant: "success",
    });
  };
  const showLostAlert = (message: string) => {
    setAlertProps({
      isOpen: true,
      message,
      variant: "error",
    });
  };
  const showErrorAlert = (message: string) => {
    setCurrentRowClass("jiggle");
    setAlertProps({
      isOpen: true,
      message: WORD_NOT_FOUND_MESSAGE,
      variant: "error",
    });
    setTimeout(() => {
      return setAlertProps({
        isOpen: false,
        message: "",
        variant: undefined,
      });
    }, 1000);
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
  const onEnter = () => {
    if (isGameOver) {
      return;
    }
    if (currentGuess.length !== SOLUTION_LENGTH) {
      showErrorAlert(NOT_ENOUGH_LETTERS_MESSAGE);
    } else if (guesses.length < MAX_CHALLENGES) {
      updateGame(currentGuess);
      // if (!isWordInWordList(currentGuess)) {
      showErrorAlert(WORD_NOT_FOUND_MESSAGE);
      // }
    }
  };

  return (
    <div
      data-cy="game-page"
      className="mx-auto flex w-full grow flex-col px-1 pt-2 pb-8 sm:px-6 md:max-w-7xl lg:px-8 short:pb-2 short:pt-2"
    >
      <div className="flex grow flex-col justify-center pb-6 short:pb-2">
        <Grid
          guesses={guesses}
          currentGuess={currentGuess}
          isRevealing={isRevealing}
          currentRowClassName={currentRowClass}
        />
      </div>
      <Keyboard
        onChar={onChar}
        onDelete={onDelete}
        onEnter={onEnter}
        isRevealing={isRevealing}
        keysStatuses={keysStatuses}
      />
      <InfoModal
        isOpen={isInfoModalOpen}
        handleClose={() => setIsInfoModalOpen(false)}
      />
      <Alert {...alertProps} />
    </div>
  );
});
