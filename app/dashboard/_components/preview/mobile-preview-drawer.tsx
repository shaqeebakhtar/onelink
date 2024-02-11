import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { Eye } from 'lucide-react';

const MobilePreviewDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="fixed left-1/2 -translate-x-1/2 bottom-8">
          <Button className="shadow rounded-full px-5 h-11 bg-gray-200 text-foreground hover:bg-primary hover:text-primary-foreground">
            <Eye className="w-5 h-5 mr-2" strokeWidth={1.5} />
            <span className="text-base font-medium">Preview</span>
          </Button>
        </div>
      </DrawerTrigger>
      <DrawerContent className="h-[calc(100vh-32px)]">
        <div className="grid place-items-center px-2 py-3 w-full h-full overflow-hidden">
          <iframe
            className="w-full h-full border-none rounded-2xl"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
            title="Preview"
          ></iframe>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobilePreviewDrawer;
