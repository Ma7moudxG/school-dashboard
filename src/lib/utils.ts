import { auth } from "@clerk/nextjs/server";

export async function getRole() {
  // Await the auth() function to get the resolved Auth object
  const authObject = await auth();
  
  // Destructure sessionClaims from the resolved object
  const { sessionClaims } = authObject;

  // Extract the role from sessionClaims metadata
  return (sessionClaims?.metadata as { role?: string })?.role;
}