import {
  BestDestinations,
  JoinBanner,
  Navbar,
  PopularDestinations,
  RightSidebar,
  Sidebar,
} from "@/components";

export default function HomePage() {
  return (
    <div className="grid grid-rows-[auto] grid-cols-[3rem,1fr] md:grid-cols-[15rem,1fr] xl:grid-cols-[15rem,1fr,20rem]">
      <Sidebar />
      <main className="py-2 md:p-4">
        <div className="p-4 xl:min-h-[calc(100vh-2rem)] bg-slate-50 rounded-xl">
          <Navbar name="Jeremy" />
          {/* contents */}
          <div className="mt-4 flex flex-col gap-6">
            <PopularDestinations />
            <div className="grid grid-cols-1 md:grid-cols-[1fr,15rem] gap-4">
              <BestDestinations />
              <JoinBanner />
            </div>
          </div>
        </div>
      </main>
      <RightSidebar />
    </div>
  );
}
