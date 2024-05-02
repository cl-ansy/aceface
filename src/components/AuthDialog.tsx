import { useState } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { Button } from "@/components/ui/Button";
import { LoginForm } from "@/components/forms/LoginForm";
import { RegisterForm } from "@/components/forms/RegisterForm";

export function AuthDialog() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Log in</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {isLogin && (
          <>
            <DialogHeader className="pt-4">
              <DialogTitle>Log in</DialogTitle>
              <DialogDescription>
                Log in to your existing AceFace account
              </DialogDescription>
            </DialogHeader>
            <LoginForm />
            <DialogFooter className="pt-4">
              New to AceFace?{" "}
              <Button
                onClick={() => setIsLogin(false)}
                variant="link"
                size="inline">
                Create an account
              </Button>
            </DialogFooter>
          </>
        )}
        {!isLogin && (
          <>
            <DialogHeader className="pt-4">
              <DialogTitle>Create account</DialogTitle>
              <DialogDescription>
                Create a new AceFace account
              </DialogDescription>
            </DialogHeader>
            <RegisterForm />
            <DialogFooter className="pt-4">
              Already have an account?{" "}
              <Button
                onClick={() => setIsLogin(true)}
                variant="link"
                size="inline">
                Log in
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
