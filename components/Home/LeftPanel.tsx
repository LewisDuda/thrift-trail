import WaterPoolBall from '@/components/WaterPoolBall';
import { signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import ThemeSwitch from '@/components/ThemeSwitch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { PanelNav, Calendar } from '@/components/Home';

interface LeftPanelProps {
	userImage: string;
	ballValue: number;
}

const LeftPanel = ({ userImage, ballValue }: LeftPanelProps) => {
	return (
		<>
			<WaterPoolBall value={ballValue} />
			{/* Panel Nav */}
			<div className="flex flex-col justify-center items-center px-5 gap-4 text-sm xl:text-base 2xl:text-lg">
				<PanelNav />
			</div>
			{/* Panel Calendar */}
			<div className="flex flex-col justify-center items-center mt-auto mb-6 gap-2 text-sm xl:mb-8 xl:text-base 2xl:mb-10 2xl:text-lg 2xl:gap-1 2xl:font-medium">
				<Calendar />
			</div>
			{/* Panel Footer */}
			<div className="flex justify-around self-stretch gap-2 px-2 2xl:px-5 2xl:gap-3">
				<div className="h-8 w-8 xl:h-10 xl:w-10 2xl:h-14 2xl:w-14">
					<Image
						className="h-full w-full rounded-xl"
						src={userImage}
						alt=""
						height={1000}
						width={1000}
						priority={true}
					/>
				</div>
				<div className="h-4 w-4 xl:h-5 xl:w-5 self-end ml-auto cursor-pointer 2xl:h-6 2xl:w-6">
					<FontAwesomeIcon className="h-full w-full" icon={faPlus} />
				</div>
				<div className="h-4 w-4 xl:h-5 xl:w-5 self-end cursor-pointer 2xl:h-6 2xl:w-6">
					<ThemeSwitch />
				</div>
				<div className="h-4 w-4 xl:h-5 xl:w-5 self-end cursor-pointer 2xl:h-6 2xl:w-6">
					<FontAwesomeIcon
						className="h-full w-full"
						icon={faArrowRightFromBracket}
						onClick={() => signOut()}
					/>
				</div>
			</div>
			{/* Panel Copyright */}
			<div className="flex justify-center items-center pt-5 text-xs font-thin xl:pt-6 2xl:pt-8 2xl:text-sm 2xl:font-extralight">
				<p>Copyright &copy; Lewis 2023.</p>
			</div>
		</>
	);
};

export default LeftPanel;
