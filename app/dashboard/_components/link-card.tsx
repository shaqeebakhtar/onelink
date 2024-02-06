import { Switch } from '@/components/ui/switch';
import { BarChart, GripVertical } from 'lucide-react';
import Link from 'next/link';
import CopyLinkButton from './copy-link-button';
import LinkCardDropdown from './link-card-dropdown';

const LinkCard = () => {
  return (
    <div className="flex items-center rounded-2xl shadow bg-background p-6 pl-2 pb-5 gap-4">
      <div className="cursor-grab">
        <GripVertical
          className="w-5 h-5 text-gray-500 mb-1"
          strokeWidth={1.5}
        />
      </div>
      <div className="w-full space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-sm font-semibold w-full max-w-56 md:max-w-[340px] lg:max-w-[480px] truncate">
              Top Interview 150 - Study Plan - LeetCode
            </p>
            <p className="w-full max-w-56 md:max-w-[340px] lg:max-w-[480px] truncate">
              <Link
                target="_blank"
                href={`https://leetcode.com/studyplan/top-interview-150/`}
                className="text-sm font-medium  text-gray-700 hover:text-primary hover:underline"
              >
                https://leetcode.com/studyplan/top-interview-150/
              </Link>
            </p>
          </div>
          <Switch />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link
              href={`/`}
              className="flex items-center space-x-1 rounded bg-gray-100 px-2 py-0.5 text-gray-500 hover:text-gray-900"
            >
              <BarChart className="w-4 h-4" />
              <span className="text-sm">1 clicks</span>
            </Link>
            <CopyLinkButton value="test-link" />
          </div>
          <LinkCardDropdown />
        </div>
      </div>
    </div>
  );
};

export default LinkCard;
