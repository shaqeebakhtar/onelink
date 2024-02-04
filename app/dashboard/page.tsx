import { Button } from '@/components/ui/button';
import LinksContainer from './_components/links-container';
import PreviewContainer from './_components/preview-container';
import { Plus } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="h-[calc(100vh-65px)] flex">
      <div className="w-full mr-[540px]">
        <div className="max-w-screen-md mx-auto">
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
