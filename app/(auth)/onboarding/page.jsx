"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { onboardingQuestions } from "@/lib/data";

export default function OnboardingPage() {
  const [userType, setUserType] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();

  useEffect(() => {
    // Get userType from localStorage
    const storedUserType = localStorage.getItem("userType");
    if (storedUserType) {
      setUserType(storedUserType);
    } else {
      router.push("/"); // Redirect if no userType
    }
  }, [router]);

  if (!userType) {
    return <div>Loading...</div>; // Show loading
  }

  const questions = onboardingQuestions[userType];
  const totalSteps = questions.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;
  const currentQuestion = questions[currentStep];

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Save user type for this session and redirect to dashboard
      sessionStorage.setItem("userType", userType);
      router.push("/dashboard");
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderInput = () => {
    switch (currentQuestion.type) {
      case "text":
      case "number":
        return <Input type={currentQuestion.type} placeholder={currentQuestion.placeholder} />;
      case "textarea":
        return <Textarea placeholder={currentQuestion.placeholder} rows="4" />;
      case "select":
        return (
          <select
            defaultValue=""
            className="flex h-10 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 text-sm"
          >
            <option value="" disabled>
              Select an option
            </option>
            {currentQuestion.options.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        );
      case "radio":
        return (
          <div className="space-y-2">
            {currentQuestion.options.map((o) => (
              <Button key={o} variant="secondary" className="w-full justify-start">
                {o}
              </Button>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-950">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <p className="text-sm font-semibold text-blue-600">
            Step {currentStep + 1} of {totalSteps}
          </p>
          <Progress value={progress} />
        </CardHeader>
        <CardContent>
          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-50">{currentQuestion.question}</h2>
          <div className="mt-4">{renderInput()}</div>
          <div className="flex justify-between items-center mt-8">
            {currentStep > 0 ? (
              <Button variant="ghost" onClick={handleBack}>
                Back
              </Button>
            ) : (
              <div />
            )}
            <Button onClick={handleNext}>{currentStep === totalSteps - 1 ? "Finish" : "Continue"}</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
