"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import React, {useState} from 'react'
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {verifySecret, sendEmailOTP} from "@/lib/actions/user.actions";


const OtpModal = ({accountId, email}: {accountId:string, email:string}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const [password, setPassword] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault(); // React.FormEvent<HTMLFormElement>类型会产生类型不匹配，换了一个更通用的类型，如 React.SyntheticEvent。
    // 分析：将一个表单提交事件处理函数 (e: React.FormEvent<HTMLFormElement>) => Promise<void> 赋值给了一个按钮的 onClick 事件处理函数。
    // 然而，onClick 事件期望的是 MouseEventHandler<HTMLButtonElement> 类型，而不是 FormEvent<HTMLFormElement>
    setIsloading(true);
    try {
      // Call API to send OTP
      const sessionId = await verifySecret({accountId, password});
      // sessionId通过session的$id属性获取
      if (sessionId) router.push("/");
    } catch (error) {
      console.log("Failed to verify OTP", error);
    }
    setIsloading(false);
  }

  const handleResendOtp = async ( ) => {
    // Call API to resend OTP
    await sendEmailOTP({email});
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="shad-alert-dialog">
        <AlertDialogHeader className="relative flex justify-center">
          <AlertDialogTitle className="h2 text-center">
            Enter Your OTP
            <Image
              src="/assets/icons/close-dark.svg"
              alt=""
              width={20}
              height={20}
              onClick={ ()=> setIsOpen(false)}
              className="otp-close-button"
            />
          </AlertDialogTitle>
          <AlertDialogDescription className="subtitle-2 text-center text-light-100">
            We&apos;ve sent a code to <span className="pl-1 text-brand">{email}</span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <InputOTP maxLength={6} value={password} onChange={setPassword}>
          <InputOTPGroup className="shad-otp">
            <InputOTPSlot index={0} className="shad-otp-slot"/>
            <InputOTPSlot index={1} className="shad-otp-slot"/>
            <InputOTPSlot index={2} className="shad-otp-slot"/>
            <InputOTPSlot index={3} className="shad-otp-slot"/>
            <InputOTPSlot index={4} className="shad-otp-slot"/>
            <InputOTPSlot index={5} className="shad-otp-slot"/>
          </InputOTPGroup>
        </InputOTP>
        <AlertDialogFooter>
          <div className="flex w-full flex-col gap-4">
            <AlertDialogAction
              onClick={ handleSubmit}
              className="shad-submit-btn h-12"
              type="button"
            >
              Submit
              {isLoading && <Image
                src="/assets/icons/loader.svg"
                alt="loader"
                width={24}
                height={24}
                className="ml-2 animate-spin"
              />}
            </AlertDialogAction>
            <div className="subtitle-3 mt-2 text-center">
              Didn't get a code?
              <Button
                type="button"
                variant="link"
                className="pl-1 text-brand"
                onClick={handleResendOtp}
              >
                Click to resend.
              </Button>
            </div>
          </div>

        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

  )
}

export default OtpModal