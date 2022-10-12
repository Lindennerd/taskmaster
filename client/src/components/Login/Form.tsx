export function LoginForm() {
  function onSubmit() {}

  return (
    <div>
      <form onSubmit={(e) => onSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>

        <button>Log In</button>
      </form>
    </div>
  );
}
