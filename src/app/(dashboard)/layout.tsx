import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-red-50 p-4">
        <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
          <Image
            src="/logo.png"
            alt="School Dashboard Logo"
            height={32}
            width={32}
          />
          <span className="hidden lg:block">School Dash</span>
        </Link>
      </div>
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-blue-200"></div>
    </div>
  );
}