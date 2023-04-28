import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBills, faLaptop, faStore, faRectangleAd } from '@fortawesome/free-solid-svg-icons';

const Incomes = () => {
	return (
		<>
			<h3 className="w-full text-xl font-semibold md:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl">Incomes</h3>
			<div className="w-full flex items-center overflow-hidden gap-5 md:w-1/2 md:-mx-2 lg:px-0 lg:h-1/2 lg:w-1/2 2xl:gap-7">
				<div className="h-16 w-16 flex justify-center items-center bg-slate-100 shadow-custom shadow-lightShadow overflow-hidden rounded-2xl dark:bg-dark-secondary dark:shadow-darkShadow md:h-20 md:w-20 lg:h-14 lg:w-14 xl:h-16 xl:w-16 2xl:h-20 2xl:w-20">
					<FontAwesomeIcon icon={faMoneyBills} className="h-1/3 w-1/3" />
				</div>
				<div className="h-full flex flex-col justify-center font-semibold gap-1 md:gap-2 lg:gap-1">
					<h3 className="text-slate-500 md:text-lg lg:text-sm xl:text-base">Salary</h3>
					<h3 className="text-lg tracking-wider md:text-2xl lg:tracking-wide lg:text-base xl:text-lg 2xl:text-2xl">
						$13,000
					</h3>
				</div>
			</div>
			<div className="w-full flex items-center overflow-hidden gap-5 md:w-1/2 md:-mx-2 lg:h-1/2 lg:w-1/2 2xl:gap-7">
				<div className="h-16 w-16 flex justify-center items-center bg-slate-100 shadow-custom shadow-lightShadow overflow-hidden rounded-2xl dark:bg-dark-secondary dark:shadow-darkShadow md:h-20 md:w-20 lg:h-14 lg:w-14 xl:h-16 xl:w-16 2xl:h-20 2xl:w-20">
					<FontAwesomeIcon icon={faLaptop} className="h-1/3 w-1/3" />
				</div>
				<div className="h-full flex flex-col justify-center font-semibold gap-1 md:gap-2 lg:gap-1">
					<h3 className="text-slate-500 md:text-lg lg:text-sm xl:text-base">E-commerce</h3>
					<h3 className="text-lg tracking-wider md:text-2xl lg:tracking-wide lg:text-base xl:text-lg 2xl:text-2xl">
						$13,000
					</h3>
				</div>
			</div>
			<div className="w-full flex items-center overflow-hidden gap-5 md:w-1/2 md:-mx-2 lg:h-1/2 lg:w-1/2 2xl:gap-7">
				<div className="h-16 w-16 flex justify-center items-center bg-slate-100 shadow-custom shadow-lightShadow overflow-hidden rounded-2xl dark:bg-dark-secondary dark:shadow-darkShadow md:h-20 md:w-20 lg:h-14 lg:w-14 xl:h-16 xl:w-16 2xl:h-20 2xl:w-20">
					<FontAwesomeIcon icon={faStore} className="h-1/3 w-1/3" />
				</div>
				<div className="h-full flex flex-col justify-center font-semibold gap-1 md:gap-2 lg:gap-1">
					<h3 className="text-slate-500 md:text-lg lg:text-sm xl:text-base">My Shop</h3>
					<h3 className="text-lg tracking-wider md:text-2xl lg:tracking-wide lg:text-base xl:text-lg 2xl:text-2xl">
						$13,000
					</h3>
				</div>
			</div>
			<div className="w-full flex items-center overflow-hidden gap-5 md:w-1/2 md:-mx-2 lg:h-1/2 lg:w-1/2 2xl:gap-7">
				<div className="h-16 w-16 flex justify-center items-center bg-slate-100 shadow-custom shadow-lightShadow overflow-hidden rounded-2xl dark:bg-dark-secondary dark:shadow-darkShadow md:h-20 md:w-20 lg:h-14 lg:w-14 xl:h-16 xl:w-16 2xl:h-20 2xl:w-20">
					<FontAwesomeIcon icon={faRectangleAd} className="h-1/3 w-1/3" />
				</div>
				<div className="h-full flex flex-col justify-center font-semibold gap-1 md:gap-2 lg:gap-1">
					<h3 className="text-slate-500 md:text-lg lg:text-sm xl:text-base">Google Adsence</h3>
					<h3 className="text-lg tracking-wider md:text-2xl lg:tracking-wide lg:text-base xl:text-lg 2xl:text-2xl">
						$13,000
					</h3>
				</div>
			</div>
		</>
	);
};

export default Incomes;
