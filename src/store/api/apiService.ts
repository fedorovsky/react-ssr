import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiService = createApi({
  reducerPath: 'api',
  baseQuery: async (args, api, extraOptions) => {
    // Получение состояния store
    // const state = api.getState();
    // Доступ к нужному свойству в store, например, state.settings.apiUrl
    // const baseUrl = state.settings.apiUrl;

    // Используем fetchBaseQuery с динамическим baseUrl
    const baseQuery = fetchBaseQuery({
      baseUrl: 'https://jsonplaceholder.typicode.com/',
      headers: {
        'Content-Type': 'application/json', // Указываем, что отправляем данные в формате JSON
      },
      prepareHeaders: (headers, { getState }) => {
        return headers;
      },
    });
    return baseQuery(args, api, extraOptions);
  },
  tagTypes: ['User', 'Newsfeed'],
  refetchOnReconnect: true,
  endpoints: () => ({}),
});
