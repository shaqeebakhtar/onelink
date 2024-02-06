import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { BarChart, MoreVertical, Pencil, Trash2 } from 'lucide-react';

const LinkCardDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={'icon'} variant={'ghost'} className="px-1.5 w-auto">
          <MoreVertical className="w-5 h-5 text-gray-500" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <DropdownMenuItem className="text-gray-500 cursor-pointer">
          <Pencil className="w-4 h-4 mr-2" />
          <span className="font-medium">Edit</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-gray-500 cursor-pointer">
          <BarChart className="w-4 h-4 mr-2" />
          <span className="font-medium">Analytics</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer text-destructive focus:bg-destructive focus:text-destructive-foreground">
          <Trash2 className="w-4 h-4 mr-2" />
          <span className="font-medium">Delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LinkCardDropdown;
