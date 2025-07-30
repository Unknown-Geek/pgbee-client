"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // The backend should handle the OAuth callback and set the session cookie
        // After successful OAuth, check if user is authenticated
        const response = await fetch('https://server.pgbee.in/auth/me', {
          credentials: 'include',
        });

        if (response.ok) {
          const data = await response.json();
          if (data.success) {
            // User is authenticated, redirect to dashboard
            router.push('/userDashboard');
          } else {
            // Authentication failed
            router.push('/login?error=auth_failed');
          }
        } else {
          // Authentication failed
          router.push('/login?error=auth_failed');
        }
      } catch (error) {
        console.error('Auth callback error:', error);
        router.push('/login?error=auth_failed');
      }
    };

    // Add a small delay to ensure the page has loaded
    const timer = setTimeout(handleCallback, 1000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Completing authentication...</h2>
        <p className="text-gray-600">Please wait while we log you in.</p>
      </div>
    </div>
  );
}
