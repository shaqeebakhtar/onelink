import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Plus } from 'lucide-react';
import AddNewLinkForm from './add-new-link-form';

const AddNewLinkButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-10">
          <Plus className="w-4 h-4 mr-2" />
          Add new link
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-[580px] rounded-2xl md:rounded-2xl p-0 overflow-hidden">
        <AddNewLinkForm />
      </DialogContent>
    </Dialog>
  );
};

export default AddNewLinkButton;
