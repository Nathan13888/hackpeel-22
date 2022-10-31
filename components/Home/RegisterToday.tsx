import Link from "next/link";
import DateCounter from "../DateCounter";

export default function RegisterToday() {
    return (
        <section className="bg-[#0e084f] flex flex-col items-center p-10" id="register-today">
            <DateCounter />
            <Link href="/sign-up">
                <a className='px-6 py-3 text-xl rounded-xl bg-blue-700 text-white hover:bg-white hover:text-blue-700 active:bg-blue-500 active:text-white transition-all duration-300'>Sign Up</a>
            </Link>
        </section>
    )
}