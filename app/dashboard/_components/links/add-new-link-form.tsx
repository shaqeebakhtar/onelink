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
import { ImageIcon, Loader, Trash2 } from 'lucide-react';
import { UIEvent, useCallback, useState, useTransition } from 'react';
import { addNewLinkSchema } from '@/validators/add-new-link';
import { getLinkMetaData } from '@/actions/links';
import Image from 'next/image';

const AddNewLinkForm = () => {
  const [isFetching, startTransition] = useTransition();
  const [imageUrl, setImageUrl] = useState('');
  const [atBottom, setAtBottom] = useState(true);
  const handleScroll = useCallback((event: UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
    if (Math.abs(scrollHeight - scrollTop - clientHeight) < 5) {
      setAtBottom(true);
    } else {
      setAtBottom(false);
    }
  }, []);

  const linkForm = useForm<z.infer<typeof addNewLinkSchema>>({
    resolver: zodResolver(addNewLinkSchema),
    defaultValues: {
      url: '',
      title: '',
      thumbnailUrl: '',
      layout: 'compact',
    },
  });

  const onSubmit = (values: z.infer<typeof addNewLinkSchema>) => {
    console.log(values);
  };

  const onLinkChange = () => {
    const urlValidation = z.string().url().safeParse(linkForm.getValues('url'));

    if (!urlValidation.success) {
      return;
    }

    startTransition(async () => {
      const linkMetaData = await getLinkMetaData(urlValidation.data);

      console.log(linkMetaData.title);

      !linkForm.getValues('title') &&
        linkForm.setValue('title', linkMetaData.title);

      setImageUrl(linkMetaData.images[0]);
    });
  };

  return (
    <div
      className="scrollbar-hide overflow-auto h-full max-h-[90vh]"
      onScroll={handleScroll}
    >
      <DialogHeader className="md:sticky border-b top-0 left-0 right-0 bg-white px-6 py-6 md:px-10 md:pt-10">
        <DialogTitle className="text-center md:text-left">
          Add a new link
        </DialogTitle>
      </DialogHeader>

      <Form {...linkForm}>
        <form onSubmit={linkForm.handleSubmit(onSubmit)}>
          <div className="px-6 pb-6 pt-6 md:px-10 md:pb-8 space-y-5 h-full">
            <FormField
              control={linkForm.control}
              name="url"
              render={({ field }) => (
                <FormItem className="space-y-0.5">
                  <FormLabel>URL</FormLabel>
                  <FormControl onChange={onLinkChange}>
                    <Input
                      placeholder="https://example.com/link-in-bio"
                      {...field}
                      className="h-10 text-foreground"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={linkForm.control}
              name="title"
              render={({ field }) => (
                <FormItem className="space-y-0.5">
                  <FormLabel>Link Title</FormLabel>
                  <FormControl>
                    <div className="relative flex items-center">
                      <Input
                        disabled={isFetching}
                        placeholder="This is an example title"
                        {...field}
                        className="h-10 text-foreground"
                      />
                      {isFetching && (
                        <Loader className="absolute right-3 w-4 h-4 animate-spin text-gray-500" />
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-4">
              {!imageUrl ? (
                <div className="grid place-items-center bg-gray-50 border rounded-md w-32 aspect-square">
                  <ImageIcon
                    className="w-8 h-8 text-gray-400"
                    strokeWidth={1.5}
                  />
                </div>
              ) : (
                <div className="border rounded-md w-32 aspect-square overflow-hidden">
                  <Image
                    src={imageUrl}
                    width={320}
                    height={240}
                    alt={''}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <FormField
                control={linkForm.control}
                name="thumbnailUrl"
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
              control={linkForm.control}
              name="layout"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Link Layout</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col md:flex-row gap-2 justify-between"
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
              'sticky border-t bottom-0 z-10 bg-white px-6 md:px-10 py-6 md:py-8',
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
