import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h2 className="font-bold">Company Dashboard</h2>
        <p className="mt-2 text-sm">Logged in as {session.user?.email}</p>
      </aside>

      <main className="flex-1 p-8 bg-gray-100">
        {children}
      </main>
    </div>
  );
}
