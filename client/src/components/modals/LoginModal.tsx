import { BaseModal } from "./BaseModal";
import { useForm } from "react-hook-form";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  handleLogin: (name: string) => void;
};

type Inputs = {
  name: string;
};

export const LoginModal = ({ isOpen, handleClose, handleLogin }: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => {
    handleLogin(data.name);
    handleClose();
  };
  return (
    <BaseModal title="Login" isOpen={isOpen} handleClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="mb-4 block flex flex-col text-start font-bold dark:text-white ">
          Username
          <input
            data-cy="name"
            {...register("name")}
            className="focus:shadow-outline mt-4 appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            type="text"
            placeholder="Username"
          />
        </label>
        <input
          type="submit"
          value="Submit"
          className="cursor-pointer rounded-full bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        />
      </form>
    </BaseModal>
  );
};
