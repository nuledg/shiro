import Image from "next/image";
import Link from "next/link";
import Instagram from "./ui/instagram";
import Telegram from "./ui/telegram";
import Whatsapp from "./ui/whatsapp";

export const runtime = "edge";

export default function Home() {
	return (
		<>
			<aside className="mt-18 flex flex-col justify-center items-center align-middle devide-y-2 devide-gray-300">
				<div className="text-gray-400 rtl text-sm">
					برای ثبت سفارش از راه های ارتباطی زیر استفاده کنید
				</div>
				<div className="my-8 flex justify-center items-center align-middle">
					<Telegram />
					<div className="h-[30px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-5 dark:opacity-60 my-auto"></div>
					<Instagram />
					<div className="h-[30px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-5 dark:opacity-60 my-auto"></div>
					<Whatsapp />
				</div>
				<div className="my-2 w-40 mx-auto h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-5 dark:opacity-30"></div>
				<Link
					className="m-8 w-fit mx-auto text-gray-400 rtl text-sm hover:text-white cursor-pointer transition duration-300"
					href="https://t.me/shircotracking"
				>
					دریافت کد رهگیری سفارش
				</Link>
				<div className="my-2 w-40 mx-auto h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-5 dark:opacity-30"></div>
				<Link
					className="mt-8 mb-32 sm:mb-20 w-fit mx-auto text-gray-400 rtl text-sm hover:text-white cursor-pointer transition duration-300"
					href="https://mellipay.ir/mellilink/shircowear/"
				>
					لینک درگاه پرداخت مستقیم
				</Link>
			</aside>
		</>
	);
}
