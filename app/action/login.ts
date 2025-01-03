"use server";

interface LoginReturn {
  data?: {
    email: string;
    password: string;
    message: "success";
  };
  error?: {
    message: "fail";
  };
}

const wait = async (s = 1500) => new Promise((r) => setTimeout(r, s));

export async function login(currentState: LoginReturn, formData: FormData): Promise<LoginReturn> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  await wait();

  if (email !== "lurgi@gamil.com" || password !== "qwer1234") {
    return {
      error: {
        message: "fail",
      },
    };
  }

  return {
    data: {
      email,
      password,
      message: "success",
    },
  };
}
