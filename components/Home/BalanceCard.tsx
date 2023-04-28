import Image from 'next/image';

const BalanceCard = () => {
	return (
		<div className="h-28 w-40 p-2 flex flex-col justify-between relative bg-white shadow-custom shadow-lightShadow rounded-2xl dark:bg-black dark:shadow-darkShadow md:h-40 md:w-64 md:p-5 lg:h-32 lg:w-full lg:p-3 xl:h-36 2xl:h-48 2xl:w-80 2xl:p-5">
			<div>
				<h3 className="text-xs font-extralight text-slate-400 md:text-base lg:mb-1 lg:text-xs 2xl:text-sm ">
					Available balance
				</h3>
				<h3 className="text-lg tracking-widest md:text-2xl lg:text-xl lg:tracking-wider xl:text-2xl 2xl:text-3xl 2xl:font-medium 2xl:tracking-wider">
					$ 11,128
				</h3>
			</div>
			<div className="flex justify-between items-center text-xs md:text-base lg:text-xs xl:text-sm 2xl:text-base">
				<div>*****0417</div>
				<div className="w-8 md:w-12 lg:w-8 xl:w-10 2xl:w-14">
					<Image
						src="/CardIcon.png"
						alt=""
						height={1000}
						width={1000}
						priority={true}
						className="h-auto w-full"
					/>
				</div>
			</div>
		</div>
	);
};

export default BalanceCard;
