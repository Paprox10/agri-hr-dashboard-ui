
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { LogIn } from "lucide-react";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, we would authenticate with the backend
    // For now, just navigate to the dashboard
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-white rounded-md flex items-center justify-center mx-auto mb-4 border border-gray-200">
            <span className="text-cfarbempco-green-dark font-bold text-2xl">CF</span>
          </div>
          <h1 className="text-2xl font-bold text-cfarbempco-green-dark">CFARBEMPCO HRIS</h1>
          <p className="text-gray-500 mt-2">Human Resource Information System</p>
        </div>

        <Card className="border-cfarbempco-green-light">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl text-center">Log In</CardTitle>
            <CardDescription className="text-center">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="name@cfarbempco.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-gray-300 focus-visible:ring-cfarbempco-green"
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="text-sm text-cfarbempco-green hover:underline">
                    Forgot password?
                  </a>
                </div>
                <Input 
                  id="password" 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-gray-300 focus-visible:ring-cfarbempco-green"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-cfarbempco-green hover:bg-cfarbempco-green-dark"
              >
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center border-t pt-4">
            <p className="text-sm text-gray-500">
              Don't have an account?{" "}
              <Link to="/signup" className="text-cfarbempco-green hover:underline font-medium">
                Sign up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
