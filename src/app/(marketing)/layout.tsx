import SiteFooter from "@/components/footer/site-footer";
import NavigationBar from "@components/NavigationBar";
interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <>
    <div className="flex min-h-screen flex-col">
      <NavigationBar/>
      <main className="flex-1 app overflow-x-hidden lg:top-2 px-2 md:px-0">
        {children}
      </main>
      <SiteFooter />
    </div>
    </>
  
  );
}
