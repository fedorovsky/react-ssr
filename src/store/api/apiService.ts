import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiService = createApi({
  reducerPath: 'api',
  baseQuery: async (args, api, extraOptions) => {
    console.log('baseQuery');
    // Получение состояния store
    // const state = api.getState();
    // Доступ к нужному свойству в store, например, state.settings.apiUrl
    // const baseUrl = state.settings.apiUrl;

    // Используем fetchBaseQuery с динамическим baseUrl
    const baseQuery = fetchBaseQuery({
      baseUrl: 'https://jsonplaceholder.typicode.com/',
      prepareHeaders: (headers, { getState }) => {
        console.log('======================');
        console.log('prepareHeaders');
        console.log('headers', headers);
        console.log('getState', getState());
        console.log('======================');
        return headers;
      },
    });
    return baseQuery(args, api, extraOptions);
  },
  tagTypes: ['User'],
  refetchOnReconnect: true,
  endpoints: () => ({}),
});
