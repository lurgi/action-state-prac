export default function Home() {
  return (
    <div className="grid place-items-center h-screen">
      <form className="w-96">
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
      </form>
    </div>
  );
}
