import Sidebar1 from '../../Components/Sidebar1';
import BottomNav from '../../Components/BottomNav';

export default function MainAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar for Desktop */}
      <Sidebar1 />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 w-full">
        {/* The 'pb-24' is for mobile to prevent overlap with BottomNav.
            The 'md:pb-0' removes that padding on desktop. */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto pb-24 md:pb-0">
          {children}
        </main>

        {/* Bottom Navigation for Mobile */}
        <BottomNav />
      </div>
    </div>
  );
}