import { LoginReqI } from "domain/dto/auth/auth-req.interfaces";
import { LoginResI } from "domain/dto/auth/auth-res.interfaces";
import { Api } from "infrastructure/services/api";

export const userApi = Api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginResI, LoginReqI>({
      queryFn: async (body, { getState }) => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        const state = getState() as any;
        const users = state.users?.data || [];
        const user = users.find((u: any) => u.email === body.email);
        console.log(user);
        if (!user) {
          return {
            error: {
              status: 400,
              data: { message: "User not found" },
            },
          };
        }
        if (body.password !== "Password123!") {
          return {
            error: {
              status: 400,
              data: { message: "Wrong password" },
            },
          };
        }
        return {
          data: {
            data: {
              id: user.id,
              name: user.name,
              username: user.username,
              email: user.email,
              phone: user.phone,
              token: "dummy-token",
            },
          },
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation } = userApi;
