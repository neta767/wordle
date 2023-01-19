import {Cell} from "../grid/Cell";
import {BaseModal} from "./BaseModal";

type Props = {
    isOpen: boolean;
    handleClose: () => void;
};

export const InfoModal = ({isOpen, handleClose}: Props) => {
    return (
        <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
            <p className="text-sm text-gray-500 dark:text-gray-300">
                Guess the word in 6 tries. After each guess, the color of the tiles will
                change to show how close your guess was to the word.
            </p>

            <div className="mb-1 mt-4 flex justify-center">
                <Cell isRevealing isCompleted value="W" status="correct"/>
                <Cell value="E" isCompleted/>
                <Cell value="A" isCompleted/>
                <Cell value="R" isCompleted/>
                <Cell value="Y" isCompleted/>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-300">
                The letter W is in the word and in the correct spot.
            </p>

            <div className="mb-1 mt-4 flex justify-center">
                <Cell value="P" isCompleted/>
                <Cell value="I" isCompleted/>
                <Cell isRevealing isCompleted value="L" status="present"/>
                <Cell value="O" isCompleted/>
                <Cell value="T" isCompleted/>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-300">
                The letter L is in the word but in the wrong spot.
            </p>

            <div className="mb-1 mt-4 flex justify-center">
                <Cell value="V" isCompleted/>
                <Cell value="A" isCompleted/>
                <Cell value="G" isCompleted/>
                <Cell isRevealing isCompleted value="U" status="absent"/>
                <Cell value="E" isCompleted/>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-300">
                The letter U is not in the word in any spot.
            </p>
        </BaseModal>
    );
};
