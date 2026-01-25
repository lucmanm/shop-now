export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto min-w-full flex-1 overflow-hidden ">
      <div className="flex min-h-screen flex-col items-center justify-between ">
        {children}
      </div>
    </div>
  );
}
