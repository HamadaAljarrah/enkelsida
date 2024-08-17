import { users } from '../../../data/users';

export default function UserPage({ params }: { params: { id: string } }) {

  const user = users.find(user => user.id === params.id);
  if (!user) {
    return <h1>User not found</h1>;
  }

  return (
    <div>
      <h1>User ID: {user.id}</h1>
      <p>Name: {user.name}</p>
    </div>
  );
}