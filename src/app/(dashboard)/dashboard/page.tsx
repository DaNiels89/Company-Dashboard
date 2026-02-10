'use client';

import { signIn } from 'next-auth/react';

export default function LoginPage() {
  async function handleLogin() {
    await signIn('credentials', {
      email: 'admin@example.com',
      password: 'password',
      callbackUrl: '/dashboard',
    });
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded bg-white p-8 shadow">
        <h1 className="text-2xl font-bold">Login</h1>

        <button
          onClick={handleLogin}
          className="mt-6 w-full rounded bg-black px-4 py-2 text-white"
        >
          Login as demo user
        </button>
      </div>
    </div>
  );
}
