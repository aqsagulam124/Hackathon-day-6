"use client"
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const router = useRouter();

  const handlePayment = () => {
    alert("Thank you for your purchase! Payment processing will begin shortly.");
    router.push("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="max-w-md w-full p-6 rounded-2xl shadow-lg bg-white">
        <CardHeader className="text-center mb-4">
          <h1 className="text-2xl font-bold">Checkout</h1>
          <p className="text-sm text-gray-500">Please review your details below</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <Input type="text" placeholder="John Doe" className="mt-1 w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <Input type="email" placeholder="example@example.com" className="mt-1 w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Shipping Address</label>
              <Input type="text" placeholder="123 Street, City, Country" className="mt-1 w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Card Details</label>
              <Input type="text" placeholder="XXXX XXXX XXXX XXXX" className="mt-1 w-full" />
            </div>
          </div>
          <Button
            onClick={handlePayment}
            className="w-full mt-6 bg-orange-300 hover:bg-orange-300 text-black"
          >
            Proceed to Payment
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CheckoutPage;
