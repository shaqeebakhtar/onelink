'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { DialogHeader, DialogTitle } from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';
import { ImageIcon, Trash2 } from 'lucide-react';
import { UIEvent, useCallback, useState } from 'react';

const formSchema = z.object({
  url: z
    .string({ required_error: 'URL cannot be empty' })
    .url({ message: 'The URL seems to be invalid' }),
  title: z.string().min(2, { message: 'Title must be atleast 2 character(s)' }),
  layout: z.enum(['compact', 'highlight']),
});

const AddNewLinkForm = () => {
  const [atBottom, setAtBottom] = useState(true);
  const handleScroll = useCallback((event: UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
    if (Math.abs(scrollHeight - scrollTop - clientHeight) < 5) {
      setAtBottom(true);
    } else {
      setAtBottom(false);
    }
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: '',
      title: '',
      layout: 'compact',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div
      className="scrollbar-hide overflow-auto h-full max-h-[90vh]"
      onScroll={handleScroll}
    >
      <DialogHeader className="sticky border-b top-0 left-0 right-0 bg-white px-6 py-6 md:px-10 md:pt-10">
        <DialogTitle className="text-left">Add a new link</DialogTitle>
      </DialogHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="px-6 pb-6 pt-6 md:px-10 md:pb-8 space-y-5 h-full">
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem className="space-y-0.5">
                  <FormLabel>URL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://example.com/link-in-bio"
                      {...field}
                      className="h-10"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="space-y-0.5">
                  <FormLabel>Link Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="This is an example title"
                      {...field}
                      className="h-10"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-4">
              <div className="grid place-items-center bg-gray-50 border rounded-md w-32 aspect-square">
                <ImageIcon
                  className="w-8 h-8 text-gray-400"
                  strokeWidth={1.5}
                />
              </div>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="space-y-0.5 w-1/2">
                    <FormLabel>Set Thumbnail</FormLabel>
                    <FormControl>
                      <div className="flex flex-col space-y-2">
                        <Input {...field} type="file" className="h-10 hidden" />
                        <Button type="button" className="w-full">
                          Change
                        </Button>
                        <Button type="button" variant={'outline'}>
                          <Trash2 className="text-gray-500 w-4 h-4 mr-2" />
                          Remove
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="layout"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Link Layout</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex gap-2 justify-between"
                    >
                      <div className="flex-1">
                        <RadioGroupItem
                          value="compact"
                          id="compact"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="compact"
                          className="flex items-center justify-between h-full rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <div className="grid grid-rows-4 place-items-center h-full">
                            <div className="row-span-3">{/* <Image/> */}</div>
                            <p>Compact</p>
                          </div>
                        </Label>
                      </div>
                      <div className="flex-1">
                        <RadioGroupItem
                          value="highlight"
                          id="highlight"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="highlight"
                          className="flex items-center justify-between h-full rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <div className="grid grid-rows-4 place-items-center h-full">
                            <div className="row-span-3">{/* <Image/> */}</div>
                            <p>Highlight</p>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div
            className={cn(
              'sticky border-t bottom-0 z-10 bg-white px-6 md:px-10 py-8',
              !atBottom && 'shadow-[0_-24px_40px_-12px_rgba(0,0,0,0.1)]'
            )}
          >
            <Button className="w-full h-10" type="submit">
              Add link
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddNewLinkForm;
