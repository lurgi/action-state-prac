"use server";

interface LoginReturn {
  email: string;
  password: string;
  message?: string;
  isError: boolean;
}

const wait = async (s = 1500) => new Promise((r) => setTimeout(r, s));

export async function login(currentState: LoginReturn, formData: FormData): Promise<LoginReturn> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  await wait();

  if (email !== "lurgi@gmail.com" || password !== "qwer1234") {
    return {
      email,
      password,
      message: "fail",
      isError: true,
    };
  }

  return {
    email,
    password,
    message: "success",
    isError: false,
  };
}
