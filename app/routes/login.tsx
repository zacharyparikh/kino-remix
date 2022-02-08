import { Form } from 'remix';

export default function Login() {
  return (
    <div>
      <Form>
        <input type="text" name="username" />
        <input type="text" name="password" />
      </Form>
    </div>
  );
}
