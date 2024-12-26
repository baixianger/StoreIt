import React from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import MobileNavigation from "@/components/MobileNavigation";
import {getCurrentUser} from "@/lib/actions/user.actions";
import {redirect} from "next/navigation";
import { Toaster } from "@/components/ui/toaster"

const Layout = async ({children}:{children:React.ReactNode}) => {
  try {
    const currentUser = await getCurrentUser();
    if(!currentUser) return redirect("/sign-in");
    return (
      <main className="flex h-screen">
        <Sidebar {...currentUser} />
        <section className="flex h-full flex-1 flex-col">
          <MobileNavigation {...currentUser}/>
          <Header userId={currentUser.$id} accountId={currentUser.accountId}/>
          <div className="main-content">{children}</div>
        </section>
        <Toaster/>
      </main>
    )
  } catch (error) {
    console.log(error, "No session, redirecting to sign-up");
    return redirect("/sign-up");
  }
  // 这里有个网站的逻辑bug，如果用户直接打开这个页面，会导致调用currentUser内部的createSessionClient时报错，
  // 因为还没有登陆，没有session更何况获取用户了
}

export default Layout