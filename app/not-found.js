import Link from "next/link";
import React from "react";

export default function NotFound() {
	return (
		<div>
			<div className="my-4">404 Error | صفحه مورد نظر پیدا نشد</div>
			<Link
				className="text-gray-400 text-xs hover:text-gray-100 transition duration-300"
				href={"/"}
			>
				{" "}
				بازگشت به صفحه اصلی
			</Link>
		</div>
	);
}
