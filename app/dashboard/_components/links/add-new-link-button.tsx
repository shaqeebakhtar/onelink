'use client';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Plus } from 'lucide-react';
import AddNewLinkForm from './add-new-link-form';
import { useMediaQuery } from 'usehooks-ts';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { useState } from 'react';

const AddNewLinkButton = () => {
  const destopOrTab = useMediaQuery('(min-width: 768px)');
  const [isOpen, setIsOpen] = useState(false);

  if (destopOrTab) {
    return (
      <Dialog onOpenChange={setIsOpen} open={isOpen}>
        <DialogTrigger asChild>
          <Button className="h-10">
            <Plus className="w-4 h-4 mr-2" />
            Add new link
          </Button>
        </DialogTrigger>
        <DialogContent className="w-full max-w-[580px] rounded-2xl md:rounded-2xl p-0 overflow-hidden">
          <AddNewLinkForm setIsOpen={setIsOpen} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button className="h-10">
          <Plus className="w-4 h-4 mr-2" />
          Add new link
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-[calc(100vh-32px)]">
        <AddNewLinkForm setIsOpen={setIsOpen} />
      </DrawerContent>
    </Drawer>
  );
};

export default AddNewLinkButton;
