"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, User, Mail, Phone, Lock, Home, Building2, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const USER_TYPES = [
  { value: "buyer", label: "Buyer", icon: Home, desc: "Looking to buy or rent" },
  { value: "seller", label: "Seller", icon: Building2, desc: "Want to list property" },
  { value: "agent", label: "Agent", icon: Users, desc: "Real estate professional" },
];

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "register">("register");
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState("buyer");

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Decorative */}
      <div
        className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-12 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #005F73 0%, #0A9396 60%, #004a5a 100%)",
        }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white/30 blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-white/20 blur-3xl" />
        </div>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 relative z-10">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white font-bold text-2xl backdrop-blur-sm border border-white/30">
            P
          </div>
          <span className="font-bold text-3xl uppercase tracking-wider text-white">PROPIX</span>
        </Link>

        {/* Center content */}
        <div className="relative z-10 space-y-6">
          <h2 className="text-4xl font-bold text-white leading-snug">
            Your Dream Property <br />
            <span className="text-accent">Starts Here.</span>
          </h2>
          <p className="text-white/80 text-lg leading-relaxed max-w-sm">
            Join thousands of buyers, sellers, and agents on Sri Lanka's most trusted real estate platform.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            {[
              { label: "Properties", value: "12K+" },
              { label: "Happy Clients", value: "8K+" },
              { label: "Expert Agents", value: "500+" },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 text-center">
                <p className="text-white font-bold text-2xl">{s.value}</p>
                <p className="text-white/70 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-white/50 text-sm relative z-10">© 2025 Propix. Premium Real Estate Sri Lanka.</p>
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12 bg-slate-50">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <Link href="/" className="flex items-center gap-2 mb-8 lg:hidden">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">P</div>
            <span className="font-bold text-2xl uppercase tracking-wider text-primary">PROPIX</span>
          </Link>

          {/* Tab Toggle */}
          <div className="flex gap-1 bg-white border border-border rounded-xl p-1 mb-8 shadow-sm">
            {(["register", "login"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setMode(tab)}
                className={`flex-1 py-2.5 rounded-lg text-sm font-semibold capitalize transition-all ${
                  mode === tab
                    ? "bg-primary text-white shadow-md"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {tab === "register" ? "Create Account" : "Sign In"}
              </button>
            ))}
          </div>

          {mode === "register" ? (
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Create Your Account</h1>
                <p className="text-slate-500 text-sm mt-1">Join Propix and find your perfect property.</p>
              </div>

              {/* User Type Selector */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">I am a...</label>
                <div className="grid grid-cols-3 gap-2">
                  {USER_TYPES.map((type) => {
                    const Icon = type.icon;
                    return (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() => setUserType(type.value)}
                        className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border-2 transition-all text-center ${
                          userType === type.value
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-border bg-white text-slate-500 hover:border-slate-300"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="text-xs font-semibold">{type.label}</span>
                        <span className="text-[10px] text-slate-400 leading-tight">{type.desc}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Full Name */}
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input placeholder="Full Name" className="pl-10 h-12 bg-white" required />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input type="email" placeholder="Email Address" className="pl-10 h-12 bg-white" required />
              </div>

              {/* Phone */}
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input type="tel" placeholder="Phone Number (e.g. +94 77 123 4567)" className="pl-10 h-12 bg-white" />
              </div>

              {/* Password */}
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create Password"
                  className="pl-10 pr-10 h-12 bg-white"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {/* Terms */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" required className="mt-1 accent-primary" />
                <span className="text-sm text-slate-500">
                  I agree to Propix&apos;s{" "}
                  <Link href="/terms" className="text-primary hover:underline font-medium">Terms of Service</Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary hover:underline font-medium">Privacy Policy</Link>
                </span>
              </label>

              <Button type="submit" className="w-full h-12 bg-primary hover:bg-secondary text-white font-semibold text-base rounded-xl">
                Create Account
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <p className="text-center text-sm text-slate-500">
                Already have an account?{" "}
                <button type="button" onClick={() => setMode("login")} className="text-primary font-semibold hover:underline">
                  Sign In
                </button>
              </p>
            </form>
          ) : (
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Welcome Back</h1>
                <p className="text-slate-500 text-sm mt-1">Sign in to your Propix account.</p>
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input type="email" placeholder="Email Address" className="pl-10 h-12 bg-white" required />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="pl-10 pr-10 h-12 bg-white"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex justify-end">
                <Link href="/auth/forgot-password" className="text-sm text-primary hover:underline font-medium">
                  Forgot password?
                </Link>
              </div>

              <Button type="submit" className="w-full h-12 bg-primary hover:bg-secondary text-white font-semibold text-base rounded-xl">
                Sign In
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <p className="text-center text-sm text-slate-500">
                Don&apos;t have an account?{" "}
                <button type="button" onClick={() => setMode("register")} className="text-primary font-semibold hover:underline">
                  Create one
                </button>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
