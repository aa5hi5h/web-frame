"use client"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ArrowBigDown, ArrowBigUp, ChevronLeft, CircleUser, Menu, MessageSquareMore } from "lucide-react"
import Sidebar from "../components/Sidebar"
import FollowCard from "../components/FollowCard"
import { Button } from "@/components/ui/button"
import TextareaAutosize from "react-textarea-autosize"


const TwitterDetail = () => {
    return (
        <div className="p-6">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
                <div className="md:hidden col-span-3">
                <div className="flex md:hidden mr-8">
                    <Sheet>
                       <SheetTrigger asChild><Menu /></SheetTrigger>
                            <SheetContent className="space-y-4" side={"left"}>
                                <SheetTitle className="text-3xl font-bold tracking-tight cursor-pointer">Logo</SheetTitle>
                                <SheetTitle>Home</SheetTitle>
                                <SheetTitle>Notification</SheetTitle>
                                <SheetTitle>Profile</SheetTitle>
                                <SheetTitle>Logout</SheetTitle>
                            </SheetContent>
                        </Sheet>
        </div>
                </div>
                <div className="hidden col-span-1 md:flex">
                    <Sidebar />
                </div>
                <div className="col-span-3 flex flex-col  mt-[1.3rem] lg:mt-[1rem] w-full">
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight flex gap-x-1 items-center "><ChevronLeft size={32} />Back</h2>
                <div className="flex flex-col space-y-4 mt-[0.8rem] p-4">
                <span className="flex items gap-x-1">
                        <CircleUser size={36} className="opacity-60" />
                        <span className="flex flex-col">
                            <h3 className="text-xl font-semibold tracking-tight">Username</h3>
                            <p className="text-lg py-[0.3rem] text-slate-500 font-medium">Reply comment goes here</p>
                            <div className="flex items-center mt-[0.3rem] gap-x-8">
                                <ArrowBigUp size={26} className="opacity-80 hover:opacity-100" />
                                <ArrowBigDown size={26} className="opacity-80 hover:opacity-100" />
                                <MessageSquareMore size={26} className="opacity-80 hover:opacity-100" />
                            </div>
                        </span>
                    </span>
                <TextareaAutosize placeholder="Type here to reply..." className="appearance-none p-4 resize-none border-[1px] border-slate-200 rounded-lg shadow-sm outline-none focus:border-slate-500 " minRows={3} />
                <Button className="ml-auto">Reply</Button>
                <div className="flex flex-col space-y-4">
                    <span className="flex gap-x-1">
                        <CircleUser size={32} className="opacity-60" />
                        <span className="flex flex-col">
                            <h3 className="text-xl font-semibold tracking-tight">Username</h3>
                            <p className="text-lg py-[0.3rem] text-slate-500 font-medium">Reply comment goes here</p>
                            <div className="flex items-center mt-[0.3rem] gap-x-8">
                                <ArrowBigUp size={26} className="opacity-80 hover:opacity-100" />
                                <ArrowBigDown size={26} className="opacity-80 hover:opacity-100" />
                                <MessageSquareMore size={26} className="opacity-80 hover:opacity-100" />
                            </div>
                            <hr className="w-[75vh] my-[0.8rem]  h-[1px] border-gray-400 " />
                        </span>
                    </span>
                    <span className="flex gap-x-1">
                        <CircleUser size={32} className="opacity-60" />
                        <span className="flex flex-col">
                            <h3 className="text-xl font-semibold tracking-tight">Username</h3>
                            <p className="text-lg py-[0.3rem] text-slate-500 font-medium">Reply comment goes here</p>
                            <div className="flex items-center mt-[0.3rem] gap-x-8">
                                <ArrowBigUp size={26} className="opacity-80 hover:opacity-100" />
                                <ArrowBigDown size={26} className="opacity-80 hover:opacity-100" />
                                <MessageSquareMore size={26} className="opacity-80 hover:opacity-100" />
                            </div>
                            <hr className="w-[75vh] my-[0.8rem]  h-[1px] border-gray-400 " />
                        </span>
                    </span>
                    <span className="flex gap-x-1">
                        <CircleUser size={32} className="opacity-60" />
                        <span className="flex flex-col">
                            <h3 className="text-xl font-semibold tracking-tight">Username</h3>
                            <p className="text-lg py-[0.3rem] text-slate-500 font-medium">Reply comment goes here</p>
                            <div className="flex items-center mt-[0.3rem] gap-x-8">
                                <ArrowBigUp size={26} className="opacity-80 hover:opacity-100" />
                                <ArrowBigDown size={26} className="opacity-80 hover:opacity-100" />
                                <MessageSquareMore size={26} className="opacity-80 hover:opacity-100" />
                            </div>
                            <hr className="w-[75vh] my-[0.8rem]  h-[1px] border-gray-400 " />
                        </span>
                    </span>
                </div>
                </div>

            </div>
                <div className="hidden col-span-1 lg:flex">
                    <FollowCard />
                </div>
            </div>
        </div>
    )
}

export default TwitterDetail