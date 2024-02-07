import { Button } from '@/components/ui/button';
import LinksContainer from './_components/links-container';
import PreviewContainer from './_components/preview-container';
import { Plus } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Onelink | Dashboard - Links',
};

const Dashboard = () => {
  return (
    <div className="h-[calc(100vh-65px)] flex">
      <div className="w-full mr-0 lg:mr-[520px] md:mr-72">
        <div className="max-w-screen-md mx-auto px-3 lg:px-8">
          <div className="h-28 flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Links</h1>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add new link
            </Button>
          </div>
          <LinksContainer />
        </div>
      </div>
      <PreviewContainer />
    </div>
  );
};

export default Dashboard;
