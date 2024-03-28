import { apiService } from 'store/api/apiService';

export type Preview = {
  id: number;
  title: string;
};
export const newsfeedApi = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getPreviews: builder.query<Preview[], void>({
      query: (payload) => ({
        url: 'http://192.168.0.25:8000/api/newsfeed/previews/', // URL для POST запроса
        method: 'POST', // Метод запроса
        body: JSON.stringify({
          gameIds: [101],
          pagination: { count: 10, offset: 0 },
        }),
      }),
      keepUnusedDataFor: 5,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Newsfeed' as const, id })),
              { type: 'Newsfeed', id: 'LIST' },
            ]
          : [{ type: 'Newsfeed', id: 'LIST' }],
    }),
  }),
});

export const { useGetPreviewsQuery } = newsfeedApi;
