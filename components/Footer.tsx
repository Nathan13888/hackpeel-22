import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-3 p-4 bg-gray-100">
      <div className="flex justify-center items-center gap-3">
        <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} hack::peel. All Rights Reserved.</p>
        <p className="text-gray-300 text-sm">|</p>
        <p className="text-gray-500 text-sm">Made by robots</p>
      </div>

      <hr className="mx-16 md:mx-32 lg:mx-64" />

      <div className="flex justify-center items-center gap-3">
        <Link href="/about">
          <a className="text-blue-500 hover:text-blue-700 duration-200">
            About Us
          </a>
        </Link>

        <p className="text-gray-300 text-sm">|</p>

        <Link href="/contacts">
          <a className="text-blue-500 hover:text-blue-700 duration-200">
            Contact Us
          </a>
        </Link>
      </div>
    </footer>
  );
}