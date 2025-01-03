"use client";

import { useActionState, useEffect, useState } from "react";
import { login } from "./action/login";

export default function Home() {
  const [state, formAction, isPending] = useActionState(login, {
    email: "",
    password: "",
    message: undefined,
    isError: false,
  });

  const [hasToast, setHasToast] = useState(false);
  const { email, password, message, isError } = state;

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (isPending) {
      setHasToast(true);
    }
    if (!isPending) {
      timer = setTimeout(() => setHasToast(false), 3000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isPending, setHasToast]);

  return (
    <div className="grid place-items-center h-screen">
      <form className="w-96" action={formAction}>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            defaultValue={email}
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            defaultValue={password}
          />
        </label>
        <div className="label">
          <button className="btn btn-primary w-full" disabled={isPending}>
            Login
          </button>
        </div>

        <div className="toast toast-bottom toast-center">
          {hasToast &&
            message &&
            (isError ? (
              <div role="alert" className="alert alert-error">
                <span>Error! {message}</span>
              </div>
            ) : (
              <div role="alert" className="alert alert-success">
                <span>{message}</span>
              </div>
            ))}
        </div>
      </form>
    </div>
  );
}
