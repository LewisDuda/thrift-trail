const Assets = () => {
	return (
		<>
			<div className="w-full font-semibold mb-3 text-xl md:mb-8 md:text-3xl lg:mb-3 lg:text-base xl:text-xl 2xl:text-2xl">
				Assets <hr className="w-8 md:w-14 md:mt-1 lg:w-5 xl:w-7 2xl:w-10 2xl:mt-1" />
			</div>
			<div className="flex flex-wrap gap-8 md:gap-14 lg:gap-10">
				<div className="w-1/3">
					<h3 className="font-semibold md:text-2xl lg:text-xs lg:font-semibold xl:text-sm 2xl:text-base">
						Cash
					</h3>
					<h3 className="text-lg md:text-3xl lg:text-sm font-medium lg:font-medium xl:text-base 2xl:text-xl">
						$300,000
					</h3>
				</div>
				<div className="w-1/3">
					<h3 className="font-semibold md:text-2xl lg:text-xs lg:font-semibold xl:text-sm 2xl:text-base">
						Gold
					</h3>
					<h3 className="text-lg md:text-3xl lg:text-sm font-medium lg:font-medium xl:text-base 2xl:text-xl">
						$300,000
					</h3>
				</div>
				<div className="w-1/3">
					<h3 className="font-semibold md:text-2xl lg:text-xs lg:font-semibold xl:text-sm 2xl:text-base">
						Stock
					</h3>
					<h3 className="text-lg md:text-3xl lg:text-sm font-medium lg:font-medium xl:text-base 2xl:text-xl">
						$300,000
					</h3>
				</div>
				<div className="w-1/3">
					<h3 className="font-semibold md:text-2xl lg:text-xs lg:font-semibold xl:text-sm 2xl:text-base">
						Land
					</h3>
					<h3 className="text-lg md:text-3xl lg:text-sm font-medium lg:font-medium xl:text-base 2xl:text-xl">
						$300,000
					</h3>
				</div>
			</div>
		</>
	);
};

export default Assets;
