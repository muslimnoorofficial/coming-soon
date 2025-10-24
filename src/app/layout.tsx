import '@/app/globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { SidebarProvider } from '@/context/SidebarContext';
import { cn } from '@/lib/utils';
import { Outfit } from 'next/font/google';

export const metadata = {
  title: 'Muslim Noor',
  description: 'Muslim Noor was created to strengthen the connection between Muslims, their mosques, and their daily acts of worship.',
};

// Load the Outfit font from Google and expose its class name. The
// variable option assigns the font to the CSS custom property
// `--font-outfit`, which is referenced throughout our styles.
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Attach the Outfit font className here. The variable (--font-outfit) is set via the `variable` option above. */}
      <body
        className={cn(
          outfit.className,
          'min-h-screen bg-background text-foreground'
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <SidebarProvider>
            <div className="flex min-h-screen">
              <div className="flex flex-col flex-1">
                <main className="flex-1 p-4">{children}</main>
              </div>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}