import { useState } from "react";
import { Button } from "react-daisyui";
import useLoginForm from "application/hooks/login/useLoginForm";
import Logo from "presentation/assets/images/logo.webp";
import { Eye, EyeSlash } from "iconsax-react";
import MInput from "presentation/components/multi-input";

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const { register, handleLogin, errors, isLoading } = useLoginForm();

  return (
    <div className="flex justify-center items-center w-screen h-screen overflow-hidden bg-[#E8E8E8]">
        <div className="bg-white sm:w-[450px] w-fit justify-center mx-2 sm:mx-0 rounded-xl shadow-xl p-4 sm:p-8 flex flex-col gap-3">
          <div className="w-full flex justify-center">
            <img src={Logo} width={150} />
          </div>
          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-3 font-poppins"
          >
            <div>
              <h1 className="text-xl font-semibold text-shark">
                Welcome to Pokemon Registry
              </h1>
              <small className="text-sm font-light text-[#7C7C7C]">
                Please login with your account
              </small>
            </div>
            <div className="flex flex-col justify-around w-full gap-3">
              <MInput
                type="email"
                register={register}
                registerName="email"
                label="Email"
                errors={errors}
              />
              <MInput
                type={hidePassword ? "password" : "text"}
                register={register}
                registerName="password"
                label="Password"
                errors={errors}
                innerElement={
                  hidePassword ? (
                    <EyeSlash
                      className="cursor-pointer absolute top-1/2 right-3 -translate-y-1/2"
                      size={20}
                      onClick={() => {
                        setHidePassword(!hidePassword);
                      }}
                    />
                  ) : (
                    <Eye
                      className="cursor-pointer absolute top-1/2 right-3 -translate-y-1/2"
                      size={20}
                      onClick={() => {
                        setHidePassword(!hidePassword);
                      }}
                    />
                  )
                }
              />
            </div>
            <Button
              type="submit"
              shape="circle"
              className="text-center bg-[#2A75BB] hover:bg-[#2A75BB]/75 w-full text-white text-base font-semibold"
              loading={isLoading}
            >
              Login
            </Button>
          </form>
      </div>
    </div>
  );
};

export default Login;
