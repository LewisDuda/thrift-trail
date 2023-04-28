import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHouse,
	faArrowTrendUp,
	faArrowRightArrowLeft,
	faPlus,
	faArrowTrendDown,
	faGear,
	faCoins,
} from '@fortawesome/free-solid-svg-icons';

const MobilePanel = () => {
	const router = useRouter();
	const path = router.asPath;
	const month = path.split('/')[2];

	function isNavActive(params: string) {
		const rootPath = '/' + path.split('/')[1]; // 只取第一個路徑 ex: /home/jun -> /home
		return rootPath === params ? true : false;
	}
	return (
		<>
			<Link
				className={
					isNavActive('/home')
						? 'flex flex-col justify-center items-center text-dark-secondary dark:text-dark-secondary'
						: 'flex flex-col justify-center items-center text-slate-400 dark:text-light-tertiary'
				}
				href={`/home/${month}`}
			>
				<FontAwesomeIcon className="h-5 w-5 md:h-8 md:w-8" icon={faHouse} />
				<p>Home</p>
			</Link>
			<Link
				href={`/incomes/${month}`}
				className={
					isNavActive('/incomes')
						? 'flex flex-col justify-center items-center text-dark-secondary dark:text-dark-secondary'
						: 'flex flex-col justify-center items-center text-slate-400 dark:text-light-tertiary'
				}
			>
				<FontAwesomeIcon className="h-5 w-5 md:h-8 md:w-8" icon={faArrowRightArrowLeft} />
				<p className="">Accounts</p>
			</Link>
			<div className="flex flex-col justify-center items-center">
				<FontAwesomeIcon className="h-5 w-5 md:h-8 md:w-8 text-dark-secondary" icon={faPlus} />
				<p className="text-dark-secondary">New</p>
			</div>
			<Link
				href={`/assets/${month}`}
				className={
					isNavActive('/assets')
						? 'flex flex-col justify-center items-center text-dark-secondary dark:text-dark-secondary'
						: 'flex flex-col justify-center items-center text-slate-400 dark:text-light-tertiary'
				}
			>
				<FontAwesomeIcon className="h-5 w-5 md:h-8 md:w-8" icon={faCoins} />
				<p>Assets</p>
			</Link>
			<Link
				href={`/settings`}
				className={
					path === '/settings'
						? 'flex flex-col justify-center items-center text-dark-secondary dark:text-dark-secondary'
						: 'flex flex-col justify-center items-center text-slate-400 dark:text-light-tertiary'
				}
			>
				<FontAwesomeIcon className="h-5 w-5 md:h-8 md:w-8" icon={faGear} />
				<p>Settings</p>
			</Link>
		</>
	);
};

export default MobilePanel;
