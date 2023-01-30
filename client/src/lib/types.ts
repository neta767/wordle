export type CharStatus = "absent" | "present" | "correct";

export type char = {
  value: string;
  status: CharStatus;
};
export type guess = char[];

export type gameReq = {
  guess: string;
  // for indication to send solution
  isGameOver: boolean;
};

export type gameRes = {
  guessStatus: char[];
  //return only when game over
  solution?: string;
};

export type alertProps = {
  isOpen: boolean;
  message: string;
  variant: "success" | "error" | undefined;
};
