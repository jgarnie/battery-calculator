'use client';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';

export const OptionsSelection = () => {
  return (
    <div>
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]"
      >
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">City</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Highway</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle isEnd />
        <ResizablePanel defaultSize={25} onResize={(e) => console.log('hi', e)}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Secondary</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};
