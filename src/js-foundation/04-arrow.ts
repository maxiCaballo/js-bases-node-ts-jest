interface User {
	id: number;
	name: string;
}
type Callback = (err?: string, user?: User) => void;

const users: User[] = [
	{
		id: 1,
		name: 'John Doe',
	},
	{
		id: 2,
		name: 'Jane Doe',
	},
];

export const getUserById = (id: number, callback: Callback) => {
	const user = users.find((user) => user.id === id);

	if (!user) return callback(`User not found with id: ${id}`);

	callback(undefined, user);
};

// module.exports = {
// 	getUserById,
// };
