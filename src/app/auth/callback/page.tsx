"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

export default function AuthCallback() {
  const router = useRouter();
  const { } = useAuth();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // First, try to refresh the auth state
        const response = await fetch('https://server.pgbee.in/auth/me', {
          credentials: 'include',
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Auth callback response:', data);
          
          if (data.ok && data.data) {
            // User is authenticated, redirect based on profile completion
            // Force a page reload to refresh the AuthContext
            window.location.href = '/userDashboard';
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

    // Add a small delay to ensure the page has loaded and cookies are set
    const timer = setTimeout(handleCallback, 2000);

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
