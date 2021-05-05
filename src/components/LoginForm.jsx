import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();

		const authObject = {
			'Project-ID': '4f2a4c66-af2e-4a0d-8693-7c6fff411410',
			'User-Name': username,
			'User-Secret': password,
		};

		try {
			await axios.get('https://api.chatengine.io/chats', {
				headers: authObject,
			});

			localStorage.setItem('username', username);
			localStorage.setItem('password', password);

			window.location.reload();
		} catch (error) {
			setError('Oops, incorrect credentials.');
		}
	};

	return (
		<div className='wrapper'>
			<div className='form'>
				<h1 className='title'>Chat Application</h1>
				<form onSubmit={handleSubmit}>
					<input
						className='input'
						placeholder='Username'
						required
						type='text'
						value={username}
						onChange={(event) => setUsername(event.target.value)}
					/>
					<input
						className='input'
						placeholder='Password'
						required
						type='password'
						value={password}
						onChange={(event) => setPassword(event.target.value)}
					/>
					<div align='center'>
						<button className='button' type='submit'>
							<span>Start Chatting</span>
						</button>
					</div>
					<h2 className='error'>{error}</h2>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
