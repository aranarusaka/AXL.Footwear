import React from 'react';
import { cn } from '@/utils/cn';

interface PageContainerProps {
  className?: string;
  children: React.ReactNode;
}

export function PageContainer({ className, children }: PageContainerProps) {
  return (
    <div className={cn(
      'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8',
      className
    )}>
      {children}
    </div>
  );
}