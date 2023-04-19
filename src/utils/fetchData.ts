interface ResponseData<T> {
  data: T;
  status: number;
  statusText: string;
  headers: Headers;
}

interface FetchError extends Error {
  response?: ResponseData<any>;
}

async function fetchData<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, options);

  if (!response.ok) {
    const error: FetchError = new Error(`Request failed with status code ${response.status}`);
    error.response = {
      data: await response.json(),
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    };
    throw error;
  }

  return response.json() as Promise<T>;
}

export default fetchData;