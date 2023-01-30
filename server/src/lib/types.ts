export type CharStatus = 'absent' | 'present' | 'correct';

export type letter = {
  value: string;
  status: CharStatus;
};

export type gameReq = {
  guess: string;
  // for indication to send solution
  isGameOver: boolean;
};

export type gameRes = {
  guessStatus: letter[];
  //return only when game over
  solution?: string;
};
