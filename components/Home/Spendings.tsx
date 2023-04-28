import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faTrainSubway, faBowlFood } from '@fortawesome/free-solid-svg-icons';

const Spendings = () => {
	return (
		<>
			<div className="w-full flex flex-col pb-5 md:pb-6 lg:pb-0">
				<div className="flex justify-between items-center pb-3">
					<h3 className="text-xl font-semibold md:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl">Spendings</h3>
					<h3 className="self-end text-xs font-extralight md:text-base lg:text-xs xl:text-sm">View all</h3>
				</div>
				<hr className="w-full text-slate-300" />
			</div>
			<div className="h-full w-full flex flex-wrap flex-col gap-10 md:flex-row md:justify-around lg:items-center lg:justify-around lg:gap-0">
				<div className="h-40 w-40 flex flex-col p-5 bg-slate-100 shadow-custom shadow-lightShadow rounded-2xl dark:bg-dark-secondary dark:shadow-darkShadow overflow-hidden lg:h-28 lg:w-28 lg:p-3 xl:h-32 xl:w-32 2xl:h-40 2xl:w-40 2xl:p-5">
					<div className="flex flex-col gap-1 font-semibold">
						<h3 className="text-sm text-slate-500 md:text-base lg:text-xs 2xl:text-sm">Housing</h3>
						<h3 className="text-xl tracking-wide md:text-2xl lg:text-base xl:text-lg 2xl:text-xl">
							$13,000
						</h3>
					</div>
					<div className="h-7 w-7 flex justify-center items-center mt-auto shadow-lightShadow rounded-2xl md:h-7 md:w-7 lg:h-5 lg:w-5 xl:h-6 xl:w-6 2xl:h-7 2xl:2-7">
						<FontAwesomeIcon icon={faHouse} className="h-full w-full" />
					</div>
				</div>
				<div className="h-40 w-40 flex flex-col p-5 bg-slate-100 shadow-custom shadow-lightShadow rounded-2xl dark:bg-dark-secondary dark:shadow-darkShadow overflow-hidden lg:h-28 lg:w-28 lg:p-3 xl:h-32 xl:w-32 2xl:h-40 2xl:w-40 2xl:p-5">
					<div className="flex flex-col gap-1 font-semibold">
						<h3 className="text-sm text-slate-500 md:text-base lg:text-xs 2xl:text-sm">Transportaion</h3>
						<h3 className="text-xl tracking-wide md:text-2xl lg:text-base xl:text-lg 2xl:text-xl">
							$13,000
						</h3>
					</div>
					<div className="h-7 w-7 flex justify-center items-center mt-auto shadow-lightShadow rounded-2xl md:h-7 md:w-7 lg:h-5 lg:w-5 xl:h-6 xl:w-6 2xl:h-7 2xl:2-7">
						<FontAwesomeIcon icon={faTrainSubway} className="h-full w-full" />
					</div>
				</div>
				<div className="h-40 w-40 flex flex-col p-5 bg-slate-100 shadow-custom shadow-lightShadow rounded-2xl dark:bg-dark-secondary dark:shadow-darkShadow overflow-hidden lg:h-28 lg:w-28 lg:p-3 xl:h-32 xl:w-32 2xl:h-40 2xl:w-40 2xl:p-5">
					<div className="flex flex-col gap-1 font-semibold">
						<h3 className="text-sm text-slate-500 md:text-base lg:text-xs 2xl:text-sm">Food</h3>
						<h3 className="text-xl tracking-wide md:text-2xl lg:text-base xl:text-lg 2xl:text-xl">
							$13,000
						</h3>
					</div>
					<div className="h-7 w-7 flex justify-center items-center mt-auto shadow-lightShadow rounded-2xl md:h-7 md:w-7 lg:h-5 lg:w-5 xl:h-6 xl:w-6 2xl:h-7 2xl:2-7">
						<FontAwesomeIcon icon={faBowlFood} className="h-full w-full" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Spendings;
