'use client';

import { Button } from '@/components/ui/button';
import { Check, Copy, Share2 } from 'lucide-react';
import React, { useState } from 'react';

type CopyLinkButtonProps = {
  value: string;
};

const CopyLinkButton = ({ value }: CopyLinkButtonProps) => {
  const [copied, setCopied] = useState(false);
  return (
    <Button
      onClick={(e) => {
        e.stopPropagation();
        setCopied(true);
        navigator.clipboard.writeText(value);
        setTimeout(() => setCopied(false), 3000);
      }}
      variant={'secondary'}
      size={'icon'}
      className="group rounded-full text-gray-500 p-2 h-auto w-auto"
    >
      {copied ? (
        <Check className="w-4 h-4" />
      ) : (
        <>
          <Share2 className="w-3.5 h-3.5 group-hover:hidden" />
          <Copy className="w-3.5 h-3.5 hidden group-hover:block" />
        </>
      )}
    </Button>
  );
};

export default CopyLinkButton;
