import { Card } from "../UI/Card";

export function LoginForm() {
  function onSubmit() {}

  return (
    <Card title="Log In">
      <form onSubmit={(e) => onSubmit} className="p-2 flex flex-col gap-2">
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="form-control">
          <button>Log In</button>
        </div>
      </form>
    </Card>
  );
}
