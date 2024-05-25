import './App.css';
import {
  createForm,
  email,
  minLength,
  required,
} from '@modular-forms/solid';

type LoginForm = {
  email: string;
  password: string;
};

function App() {
  const [loginForm, { Form, Field }] = createForm<LoginForm>();

  return (
    <Form onSubmit={()=>{}}>
      <div class="flex flex-col gap-4">
        <Field
          name="email"
          validate={[
            required('Please enter your email.'),
            email('The email address is badly formatted.'),
          ]}
        >
          {(field, props) => (
            <input
              {...props}
              type="email"
              required
              placeholder="Email"
            />
          )}
        </Field>
        <Field
          name="password"
          validate={[
            required('Please enter your password.'),
            minLength(8, 'You password must have 8 characters or more.'),
          ]}
        >
          {(field, props) => (
            <input
              {...props}
              type="password"
              required
              placeholder="Password"
            />
          )}
        </Field>
        <button
          onClick={() => open('https://trellis-app.com/forgot-password')}
        >
          Forgot your password?
        </button>
        <div class="flex flex-row justify-between">
          <button onClick={() => history.back()}>
          </button>

          <button type="submit">Log in</button>
        </div>
      </div>
    </Form>
  );

  // return (
  //   <Router>
  //     <Route path="/" component={Startup} />
  //     <Route path="/login" component={Login} />
  //   </Router>
  // );
}

export default App;
