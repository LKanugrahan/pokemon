import { Api } from "infrastructure/services/api";
import { UsersRes, UsersTransformRes } from "domain/dto/user/res.interfaces";

const routeApi = "/users";
export const userApi = Api.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<UsersRes, void>({
      query: () => ({ url: routeApi }),
      keepUnusedDataFor: 0,
    }),
  }),
  overrideExisting: false,
});

export const { useGetUsersQuery } = userApi;
