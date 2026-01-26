import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const navItem = [
    {
      href: "/",
      icon: "/add.svg",
      label: "New Task",
      alt: "Add Task",
    },
    {
      href: "/archiver",
      icon: "/archiveBox.svg",
      label: "Archiver",
      alt: "Archiver",
      count: 0,
    },
    {
      href: "/deleted",
      icon: "/trash.svg",
      label: "Trash",
      alt: "Trash",
      count: 0,
    },
  ];

  return (
    <aside className="flex flex-col h-screen min-w-35 p-5 bg-[#272835] shadow-2xl text-[#fef9db]">
      {/* Logo */}
      <div className="flex flex-col items-center gap-2 mb-5">
        <div className="flex justify-center items-center">
          <Image
            src="/logo-2.png"
            height={50}
            width={90}
            alt="logo"
            className=""
          />
        </div>
        {/* <span className="text-md font-light">Task Manager</span> */}
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-3">
        {navItem.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-1 rounded-lg transition-all duration-200 ${
                isActive ? "bg-[#504e56]" : "hover:bg-[#7e7d83]/20"
              }`}
            >
              <div className="p-2 rounded-md">
                <Image
                  src={item.icon}
                  height={15}
                  width={15}
                  alt={item.alt}
                ></Image>
              </div>
              <span className="text-sm font-light">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* User Information */}
      <div className="mt-auto pt-6 border-t border-[#fcf6ca]/20">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-blue-700/30 flex items-center justify-center">
            <span className="font-bold text-blue-500">FK</span>
          </div>
          <div>
            <p className="font-medium">Ferdus Khan</p>
            <p className="text-xs text-zinc-400">frkhan@gmail.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
