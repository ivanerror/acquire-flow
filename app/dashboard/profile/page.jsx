"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ProfilePage() {
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const type = sessionStorage.getItem("userType");
    setUserType(type);
  }, []);

  const SellerProfile = () => (
    <Card>
      <CardHeader>
        <CardTitle>Business Profile</CardTitle>
        <CardDescription>Update your business information here.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="businessName">Business Name</Label>
          <Input id="businessName" defaultValue="SaaS Innovations Inc." />
        </div>
        <div className="space-y-2">
          <Label htmlFor="industry">Industry</Label>
          <Input id="industry" defaultValue="SaaS & Enterprise Software" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="revenue">Annual Revenue</Label>
          <Input id="revenue" defaultValue="$2M - $10M" />
        </div>
      </CardContent>
    </Card>
  );

  const BuyerProfile = () => (
    <Card>
      <CardHeader>
        <CardTitle>Investment Profile</CardTitle>
        <CardDescription>Update your investment preferences here.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="buyerType">Buyer Type</Label>
          <Input id="buyerType" defaultValue="Strategic Buyer" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="capital">Available Capital</Label>
          <Input id="capital" defaultValue="$5M - $10M" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="interests">Industries of Interest</Label>
          <Input id="interests" defaultValue="SaaS, FinTech, HealthTech" />
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold">My Profile</h1>
        <p className="text-slate-500 dark:text-slate-400">Manage your personal and business information.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>This information is private and will not be shared with other users.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" defaultValue="Alex Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" defaultValue="alex.doe@example.com" />
            </div>
          </div>
        </CardContent>
      </Card>

      {userType === "seller" && <SellerProfile />}
      {userType === "buyer" && <BuyerProfile />}

      <div className="flex justify-end">
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}
