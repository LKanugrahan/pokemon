import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginReqI } from "domain/dto/auth/auth-req.interfaces";
import { useAppDispatch } from "infrastructure/store";
import { useLoginMutation } from "infrastructure/services/modules/auth";
import { errorHandler } from "infrastructure/services/errorHandler";
import { useGetUsersQuery } from "infrastructure/services/modules/user";
import { saveUsersData } from "infrastructure/store/users";
import { useEffect } from "react";
import { saveTokenAuth } from "infrastructure/store/auth";

const useLoginForm = () => {
  const dispatch = useAppDispatch();
  const { data: dataUsers } = useGetUsersQuery();
  console.log(dataUsers?.map((val) => val.email));
  console.log("Password123!");
  const [login, { isLoading }] = useLoginMutation();
  const schema = yup
    .object({
      email: yup.string().email().required(),
      password: yup.string().required(),
    })
    .required();

  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
  } = useForm<LoginReqI>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const upload = async (data: LoginReqI) => {
    try {
      const res = await login(data).unwrap();
      dispatch(saveTokenAuth(res));
    } catch (error) {
      errorHandler(error);
    }
  };
  const handleLogin = handleSubmit(upload);

  useEffect(() => {
    dispatch(
      saveUsersData(
        dataUsers?.map((val) => {
          return {
            id: val.id,
            name: val.name,
            username: val.username,
            phone: val.phone,
            email: val.email,
          };
        }) ?? []
      )
    );
  }, [dataUsers]);

  return { handleLogin, register, errors, watch, isLoading };
};

export default useLoginForm;
