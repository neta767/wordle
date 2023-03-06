import { gameReq, gameRes, loginReq, loginRes } from './types';

const endpoint = 'http://localhost:3333';

export async function updateGameStatus(
  gameReq: gameReq
): Promise<string | gameRes> {
  try {
    const body = JSON.stringify(gameReq);
    const method = 'POST';
    const headers = {
      'content-type': 'application/json'
    };
    const url = `${endpoint}/game`;
    const response = await fetch(url, { method, headers, body });
    if (!response.ok) {
      return `Error! status: ${response.status}`;
    }
    return (await response.json()) as gameRes;
  } catch (error) {
    if (error instanceof Error) {
      return 'error message: ' + error.message;
    } else {
      return 'unexpected error: ' + error;
    }
  }
}

export async function googleLogin(credential: string): Promise<loginRes | string> {
  try {
    const url = `${endpoint}/google-login/${credential}`;
    const response = await fetch(url);
    if (!response.ok) {
      return `Error! status: ${response.status}`;
    }
    return (await response.json()) as loginRes;
  } catch (error) {
    if (error instanceof Error) {
      return 'error message: ' + error.message;
    } else {
      return 'unexpected error: ' + error;
    }
  }
}

export async function login(
  loginReq: loginReq
): Promise<loginRes | string> {
  try {
    const body = JSON.stringify(loginReq);
    const method = 'POST';
    const headers = {
      'content-type': 'application/json'
    };
    const url = `${endpoint}/login`;
    const response = await fetch(url, { method, headers, body });
    if (!response.ok) {
      return `Error! status: ${response.status}`;
    }
    return (await response.json()) as loginRes;
  } catch (error) {
    if (error instanceof Error) {
      return 'error message: ' + error.message;
    } else {
      return 'unexpected error: ' + error;
    }
  }
}