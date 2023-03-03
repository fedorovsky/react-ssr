const http = <T>(request: RequestInfo): Promise<T> => {
  return fetch(request).then((response) => response.json());
};

export default http;
