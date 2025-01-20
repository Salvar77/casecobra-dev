import React from "react";
import type { Dispatch, SetStateAction } from "react";
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { DialogContent } from "@radix-ui/react-dialog";
import Image from "next/image";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { buttonVariants } from "./ui/button";

const LoginModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[99998]" />
      )}
      <DialogContent className="fixed z-[99999] inset-0 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-900"
            aria-label="Zamknij modal"
          >
            ✕
          </button>

          <DialogHeader>
            <div className="relative mx-auto w-24 h-24 mb-4">
              <Image
                src="/snake-1.png"
                alt="zdjęcie węża"
                className="object-contain"
                fill
              />
            </div>
            <DialogTitle className="text-3xl text-center font-bold tracking-tight text-gray-900">
              Zaloguj się by kontynuować
            </DialogTitle>
            <DialogDescription className="text-base text-center py-2">
              <span className="font-medium text-zinc-900">
                Twoje ustawienia zostały zapisane!
              </span>{" "}
              {""}
              Zaloguj się lub stwórz konto by sfinalizować zakup.
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-2 gap-6 divide-x divide-gray-200">
            <LoginLink className={buttonVariants({ variant: "outline" })}>
              Zaloguj się
            </LoginLink>
            <RegisterLink className={buttonVariants({ variant: "default" })}>
              Zarejestruj się
            </RegisterLink>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
