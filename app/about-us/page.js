import Image from "next/image";

export const runtime = "edge";

export default function Home() {
	return (
		<aside className="mt-18">
			<div className="text-gray-200 rtl"> درباره ی ما </div>
			<div className="w-5/6 md:w-2/3 lg:w-1/3  mx-auto text-justify mt-10 mb-32 sm:mb-10 text-gray-400">
				لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
				از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
				سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
				متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
				درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.
			</div>
		</aside>
	);
}
