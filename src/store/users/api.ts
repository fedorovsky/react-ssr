import { apiService } from 'store/api/apiService';

export type UserType = {
  id: number;
  name: string;
};
export const userApi = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<UserType[], void>({
      query: () => 'users',
      keepUnusedDataFor: 5,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'User' as const, id })),
              { type: 'User', id: 'LIST' },
            ]
          : [{ type: 'User', id: 'LIST' }],
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
