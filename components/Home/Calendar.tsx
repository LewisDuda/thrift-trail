import Link from 'next/link';
import { useRouter } from 'next/router';

const Calendar = () => {
	const router = useRouter();
	const rootPath = '/' + router.pathname.split('/')[1];
	const path = rootPath + '/' + router.query.month;

	function isNavActive(params: string) {
		return path === rootPath + '/' + params ? true : false;
	}

	return (
		<>
			<div className="flex justify-center items-center gap-4 2xl:gap-10">
				<Link
					href={`${rootPath}/january`}
					className={isNavActive('january') ? 'dark:text-white' : 'text-slate-500 dark:text-light-tertiary'}
				>
					Jan
				</Link>
				<Link
					href={`${rootPath}/febuary`}
					className={isNavActive('febuary') ? 'dark:text-white' : 'text-slate-500 dark:text-light-tertiary'}
				>
					Feb
				</Link>
				<Link
					href={`${rootPath}/march`}
					className={isNavActive('march') ? 'dark:text-white' : 'text-slate-500 dark:text-light-tertiary'}
				>
					Mar
				</Link>
			</div>
			<div className="flex justify-center items-center gap-4 2xl:gap-10">
				<Link
					href={`${rootPath}/april`}
					className={isNavActive('april') ? 'dark:text-white' : 'text-slate-500 dark:text-light-tertiary'}
				>
					Apr
				</Link>
				<Link
					href={`${rootPath}/may`}
					className={isNavActive('may') ? 'dark:text-white' : 'text-slate-500 dark:text-light-tertiary'}
				>
					May
				</Link>
				<Link
					href={`${rootPath}/june`}
					className={isNavActive('june') ? 'dark:text-white' : 'text-slate-500 dark:text-light-tertiary'}
				>
					Jun
				</Link>
			</div>
			<div className="flex justify-center items-center gap-4 2xl:gap-10">
				<Link
					href={`${rootPath}/july`}
					className={isNavActive('july') ? 'dark:text-white' : 'text-slate-500 dark:text-light-tertiary'}
				>
					Jul
				</Link>
				<Link
					href={`${rootPath}/august`}
					className={isNavActive('august') ? 'dark:text-white' : 'text-slate-500 dark:text-light-tertiary'}
				>
					Aug
				</Link>
				<Link
					href={`${rootPath}/september`}
					className={isNavActive('september') ? 'dark:text-white' : 'text-slate-500 dark:text-light-tertiary'}
				>
					Sep
				</Link>
			</div>
			<div className="flex justify-center items-center gap-4 2xl:gap-10">
				<Link
					href={`${rootPath}/october`}
					className={isNavActive('october') ? 'dark:text-white' : 'text-slate-500 dark:text-light-tertiary'}
				>
					Oct
				</Link>
				<Link
					href={`${rootPath}/november`}
					className={isNavActive('november') ? 'dark:text-white' : 'text-slate-500 dark:text-light-tertiary'}
				>
					Nov
				</Link>
				<Link
					href={`${rootPath}/december`}
					className={isNavActive('december') ? 'dark:text-white' : 'text-slate-500 dark:text-light-tertiary'}
				>
					Dec
				</Link>
			</div>
		</>
	);
};

export default Calendar;
