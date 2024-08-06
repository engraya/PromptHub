import SiteFooter from "@/components/footer/site-footer";
import NavigationBar from "@components/NavigationBar";
import Provider from "@components/Provider";
import { getSession } from "next-auth/react"; // Import getSession

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
    // Fetch the session here
    const session = await getSession();
  return (
    <>
    <Provider session={session}>
    <div className="flex min-h-screen flex-col">
      <NavigationBar/>
      <main className="flex-1 app overflow-x-hidden lg:top-2 px-2 md:px-0">
        {children}
      </main>
      <SiteFooter />
    </div>

    </Provider>

    </>
  
  );
}
