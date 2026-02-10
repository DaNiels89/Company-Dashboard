'use client';

import { signIn, useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Redirect if already logged in
  useEffect(() => {
    if (session) {
      router.replace('/dashboard')
    }
  }, [session, router]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError('Invalid email or password');
    } else {
      window.location.href = '/dashboard';
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded bg-white p-8 shadow"
      >
        <h1 className="text-2xl font-bold">Login</h1>

        <div className="mt-4">
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded border px-3 py-2"
            required
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded border px-3 py-2"
            required
          />
        </div>

        {error && (
          <p className="mt-4 text-sm text-red-600">{error}</p>
        )}

        <button
          type="submit"
          className="mt-6 w-full rounded bg-black px-4 py-2 text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
}
