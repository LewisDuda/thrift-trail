import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShapes, faArrowRightArrowLeft, faCoins } from '@fortawesome/free-solid-svg-icons';

const PanelNav = () => {
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
				href={`/home/${month}`}
				className={
					isNavActive('/home')
						? 'flex self-start items-center dark:text-white'
						: 'flex self-start items-center text-slate-500 dark:text-light-tertiary'
				}
			>
				<FontAwesomeIcon className="h-3 w-3 mr-3 2xl:h-4 2xl:w-4" icon={faShapes} />
				Dashboard
			</Link>
			<Link
				href={`/incomes/${month}`}
				className={
					isNavActive('/incomes')
						? 'flex self-start items-center dark:text-white'
						: 'flex self-start items-center text-slate-500 dark:text-light-tertiary'
				}
			>
				<FontAwesomeIcon className="h-3 w-3 mr-3 2xl:h-4 2xl:w-4" icon={faArrowRightArrowLeft} />
				Accounts
			</Link>
			<Link
				href={`/assets/${month}`}
				className={
					isNavActive('/assets')
						? 'flex self-start items-center dark:text-white'
						: 'flex self-start items-center text-slate-500 dark:text-light-tertiary'
				}
			>
				<FontAwesomeIcon className="h-3 w-3 mr-3 2xl:h-4 2xl:w-4" icon={faCoins} />
				Assets
			</Link>
		</>
	);
};

export default PanelNav;
