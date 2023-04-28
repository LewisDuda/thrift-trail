import Image from 'next/image';

const IncomeNspending = () => {
	return (
		<>
			<div className="h-20 w-3/4 flex items-center bg-slate-100 shadow-custom shadow-lightShadow rounded-2xl overflow-hidden dark:bg-dark-secondary dark:shadow-darkShadow md:h-28 lg:h-20 xl:h-24">
				<Image src={'/UpwardTrend.webp'} alt="" width={1000} height={1000} className="w-2/6 px-3" />
				<div className="h-full w-3/6 flex flex-col justify-center items-center font-semibold gap-1">
					<p className="text-xs text-slate-500 md:text-lg lg:text-xs 2xl:text-sm">Icomes</p>
					<p className="text-xl tracking-wider md:text-2xl lg:text-xl 2xl:text-2xl">$15,000</p>
				</div>
				<div className="h-full w-1/6 bg-success rounded-r-2xl"></div>
			</div>
			<div className="h-20 w-3/4 flex items-center bg-slate-100 shadow-custom shadow-lightShadow rounded-2xl overflow-hidden dark:bg-dark-secondary dark:shadow-darkShadow md:h-28 lg:h-20 xl:h-24">
				<Image src={'/DownTrend.webp'} alt="" width={100} height={100} className="w-2/6 px-3" />
				<div className="h-full w-3/6 flex flex-col justify-center items-center font-semibold gap-1">
					<p className="text-xs text-slate-500 md:text-lg lg:text-xs 2xl:text-sm">Spendings</p>
					<p className="text-xl tracking-wider md:text-2xl lg:text-xl 2xl:text-2xl">$15,000</p>
				</div>
				<div className="h-full w-1/6 bg-alert rounded-r-2xl"></div>
			</div>
		</>
	);
};

export default IncomeNspending;
