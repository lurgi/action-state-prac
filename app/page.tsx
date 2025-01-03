"use client";

import { useActionState } from "react";
import { login } from "./action/login";

export default function Home() {
  const [state, formAction] = useActionState(login, {
    data: undefined,
    error: undefined,
  });

  const { data, error } = state;

  return (
    <div className="grid place-items-center h-screen">
      <form className="w-96" action={formAction}>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input name="email" type="email" placeholder="Email" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input name="password" type="password" placeholder="Password" className="input input-bordered w-full" />
        </label>
        <div className="label">
          <button className="btn btn-primary w-full">Login</button>
        </div>

        <div className="toast toast-bottom toast-center">
          {error && (
            <div role="alert" className="alert alert-error">
              <span>Error! {error.message}</span>
            </div>
          )}

          {data && (
            <div role="alert" className="alert alert-success">
              <span>{data.message}</span>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
