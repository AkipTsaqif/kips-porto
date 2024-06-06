export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
	<div className="w-svw h-svh">
        {children}
    </div>
  );
}