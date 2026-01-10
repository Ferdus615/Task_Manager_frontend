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
    <aside className="flex flex-col h-screen min-w-35 p-5 bg-[#101720]">
      {/* Logo */}
      <div className="flex flex-col items-center gap-2 mb-10">
        <div className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            height={30}
            width={30}
            alt="logo"
            className=""
          />
        </div>
        <span className="text-md font-light">ToDoList</span>
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
                isActive ? "bg-blue-500/50" : "hover:bg-blue-800/30"
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
      <div className="mt-auto pt-6 border-t border-blue-800/50">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-blue-700/30 flex items-center justify-center">
            <span className="font-bold text-blue-500">U</span>
          </div>
          <div>
            <p className="font-medium">User Name</p>
            <p className="text-xs text-zinc-400">user@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

// const Sidebar = () => {
//   return (
//     <aside className="flex flex-col h-screen min-w-35 gap-5 p-5 bg-[#101720]">
//       <div className="flex justify-center items-center">
//         <Image src="/logo.svg" height={50} width={40} alt="logo" />
//       </div>
//       <div className="flex flex-col gap-5">
//         <Link
//           href="/"
//           className="text-sm pt-1 flex gap-2 items-center font-extralight cursor-pointer"
//         >
//           <Image src="/add.svg" height={18} width={18} alt="Add task" />
//           <span>New task</span>
//         </Link>
//         <Link
//           href="/archiver"
//           className="text-sm pt-1 flex gap-2 items-center font-extralight cursor-pointer"
//         >
//           <Image src="/archiveBox.svg" height={18} width={18} alt="Archiver" />
//           <span>Archiver</span>
//         </Link>
//         <Link
//           href="/trash"
//           className="text-sm pt-1 flex gap-2 items-center font-extralight cursor-pointer"
//         >
//           <Image src="/trash.svg" height={18} width={18} alt="Trash" />
//           <span>Trash</span>
//         </Link>
//       </div>
//     </aside>
//   );
// };

export default Sidebar;
