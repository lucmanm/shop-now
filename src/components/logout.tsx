"use client"
import React from 'react'
import { Button } from './ui/button'
import { LogOut } from 'lucide-react';
import { signOut } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

export default function Logout() {

    const router = useRouter()
      const handleLogout = async () => {
    await signOut()
    router.push("/auth/login") // or "/login"
  }

  return (
    <div className="mt-auto px-1">
          <Button
            variant="ghost"
            className="w-full justify-start text-red-600 space-x-2 hover:bg-red-600 hover:text-white cursor-pointer"
            onClick={() => {
              // Implement your logout logic here
              handleLogout()
            }}
          >
            <LogOut/>
            Logout
          </Button>
        </div>
  )
}
