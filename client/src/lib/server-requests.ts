import { gameReq, gameRes } from "./types";

const endpoint = "http://localhost:3333";

export async function updateGameStatus(
  gameReq: gameReq
): Promise<string | gameRes> {
  try {
    const body = JSON.stringify(gameReq);
    const method = "POST";
    const headers = {
      "content-type": "application/json",
    };
    const url = `${endpoint}/game`;
    const response = await fetch(url, { method, headers, body });
    if (!response.ok) {
      return `Error! status: ${response.status}`;
    }
    return (await response.json()) as gameRes;
  } catch (error) {
    if (error instanceof Error) {
      return "error message: " + error.message;
    } else {
      return "unexpected error: " + error;
    }
  }
}
