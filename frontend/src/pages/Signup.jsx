import React from "react";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { toast } from "sonner";

const Signup = () => {
  return (
    <>
      <div className="h-fit px-16 py-10 w-full pt-[100px] bg-[#151515] text-white flex flex-col gap-10">
        <h1 className="text-4xl font-bold ">Sign Up</h1>
        <div className="flex justify-around self-start gap-8 w-2/3 mt-2 flex-col">
          <div className="flex flex-col sm:flex-row gap-6">
            <Input placeholder="Name" />
            <Input placeholder="Middle Name" />
            <Input placeholder="Last Name" />
          </div>
          <div className="flex flex-col sm:flex-row  gap-6">
            <Input type="email" placeholder="Email" />
            <div className="flex items-center relative">
              <Input placeholder="Username"/>
              <CiSearch className="text-white h-full rounded-md w-9 p-2 absolute self-center right-0 hover:bg-[#2c2c2c]" />
            </div>
            <Input placeholder="OTP" />
          </div>
          <div className="flex flex-col sm:flex-row  gap-6">
            <Input placeholder="City" />
            <Input placeholder="State" />
            <Input placeholder="Country" />
          </div>
          <div className="flex flex-col sm:flex-row  gap-6 self-start">
            <Input type="password" placeholder="Set Password"></Input>
            <Input type="password" placeholder="Confirm Password"></Input>
          </div>
        </div>
        <div className="flex flex-col self-center">
          <Button
            className="dark font-bold text-lg"
            onClick={() => toast.success("Account created Successfully")}
          >
            SignUp
          </Button>
          <p className="text-lg">
            Already have an account ?
            <Drawer>
              <DrawerTrigger>
                <Button className="dark text-lg" variant="link">
                  Login
                </Button>
              </DrawerTrigger>
              <DrawerContent className='flex items-center'>
                
                  <h1 className="text-3xl font-bold">Login</h1>
                  <input className="outline-none border-[1px] border-black px-2 h-10 w-[70%] sm:w-[25%] m-4 rounded-md " type='text' placeholder="Enter Username"></input>
                  <input className=" outline-none border-[1px] border-black px-2 h-10 w-[70%] sm:w-[25%] m-4 rounded-md" type='password' placeholder="Enter Password"></input>
             
                <DrawerFooter className="flex flex-row sm:flex-col py-5">
                  <Button>Login</Button>
                  <DrawerClose>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
