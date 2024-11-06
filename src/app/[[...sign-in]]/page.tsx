"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {

    const { isLoaded, isSignedIn, user } = useUser() ;
    const router = useRouter();

    useEffect(() => {
        const role = user?.publicMetadata.role;

        if(role) {
            router.push(`/${role}`)
        }
    }, [user, router])
  return (
    <div className="h-screen flex items-center justify-center bg-skyLight">
      <SignIn.Root>
        <SignIn.Step
          name="start"
          className="bg-white p-12 rounded-md shadow-2xl flex flex-col gap-2"
        >
          <div className="flex flex-col gap-2 items-center justify-center mb-4">
            <h1 className="text-xl font-bold flex items-center gap-2">
              <Image src="/logo.png" alt="school logo" width={24} height={24} />
              School Dashboard
            </h1>
            <h2 className="text-gray-400">Sign in to your account</h2>
          </div>

          <Clerk.GlobalError className="text-sm text-red-400" />
          <Clerk.Field name="identifier" className="flex flex-col gap-2">
            <Clerk.Label className="text-xs text-gray-500">
              Username
            </Clerk.Label>
            <Clerk.Input
              type="text"
              required
              className="p-2 rounded-md ring-1 ring-gray-300"
            />
            <Clerk.FieldError className="text-xs text-red-400" />
          </Clerk.Field>
          <Clerk.Field name="password" className="flex flex-col gap-2">
            <Clerk.Label className="text-xs text-gray-500">
              Password
            </Clerk.Label>
            <Clerk.Input
              type="password"
              required
              className="p-2 rounded-md ring-1 ring-gray-300"
            />
            <Clerk.FieldError className="text-xs text-red-400" />
          </Clerk.Field>
          <SignIn.Action
            submit
            className="bg-blue-400 text-sm text-white py-1 rounded-md mt-4 hover:bg-blue-600"
          >
            Sign In
          </SignIn.Action>
        </SignIn.Step>
      </SignIn.Root>
    </div>
  );
};

export default LoginPage;
