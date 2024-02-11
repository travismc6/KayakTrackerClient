"use client";

import { Button } from "flowbite-react";
import React from "react";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return <Button onClick={() => signOut({ callbackUrl: "/" })}>Logout</Button>;
}
