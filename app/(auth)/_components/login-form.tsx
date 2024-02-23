'use client';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { loginSchema, loginSchemaType } from '@/schemas/login';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff, Loader } from 'lucide-react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const LoginForm = () => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [isLoginLoading, setIsLoginLoading] = useState(false);

  const loginForm = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const router = useRouter();

  async function onSubmit(values: loginSchemaType) {
    if (values.email === '' || values.password === '') {
      return;
    }

    setIsLoginLoading(true);
    const response = await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    setIsLoginLoading(false);

    if (response?.error || !response?.ok) {
      toast.error('Either email or password is incorrect.');
      loginForm.reset;
      return;
    }

    router.push('/dashboard');
  }

  return (
    <>
      <Form {...loginForm}>
        <form onSubmit={loginForm.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={loginForm.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="john@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={loginForm.control}
            name="password"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative flex items-center">
                    <Input
                      placeholder="********"
                      type={isPasswordShow ? 'text' : 'password'}
                      {...field}
                    />
                    <Button
                      type="button"
                      size={'icon'}
                      variant={'ghost'}
                      className="absolute right-1"
                      onClick={() => setIsPasswordShow(!isPasswordShow)}
                    >
                      {isPasswordShow ? (
                        <EyeOff className="w-4 h-4 text-muted-foreground" />
                      ) : (
                        <Eye className="w-4 h-4 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <p className="text-right mt-2 text-sm text-muted-foreground">
            Forgot Password?{' '}
            <Link
              href="/reset-password"
              className="underline underline-offset-4 hover:text-primary"
            >
              Reset
            </Link>
          </p>
          <Button
            type="submit"
            size={'lg'}
            className="w-full"
            disabled={isLoginLoading}
          >
            {isLoginLoading && <Loader className="w-4 h-4 animate-spin mr-2" />}
            Log In
          </Button>
          <p className="text-sm text-muted-foreground">
            Don&apos; have an account?{' '}
            <Link
              href="/register"
              className="underline underline-offset-4 hover:text-primary"
            >
              Register
            </Link>
          </p>
        </form>
      </Form>
    </>
  );
};

export default LoginForm;
