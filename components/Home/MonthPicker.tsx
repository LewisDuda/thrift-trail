// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import DatePicker from 'react-mobile-datepicker';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
// import { Month_To_Number, Month_To_Month } from '../Util';

// interface MonthPickerProps {
// 	time: any;
// 	setTime: any;
// }

// const MonthPicker = ({ time, setTime }: MonthPickerProps) => {
// 	const router = useRouter();
// 	const rootPath = '/' + router.pathname.split('/')[1] + '/';

// 	const [isOpen, setIsOpen] = useState(false);
// 	const [dateDisplay, setDateDisplay] = useState('');
// 	const handleToggle = (nextIsOpen: typeof isOpen) => {
// 		setIsOpen(nextIsOpen);
// 	};

// 	const handleSelect = (nextTime: typeof time) => {
// 		setTime(nextTime);
// 		setIsOpen(false);
// 	};

// 	const handleAddMonth = () => {
// 		const date = new Date(time);
// 		let newTime;

// 		if (date.getMonth() === 11) {
// 			date.setMonth(0);
// 			newTime = date;
// 			return setTime(newTime);
// 		}
// 		date.setMonth(date.getMonth() + 1);
// 		newTime = date;
// 		setTime(newTime);
// 	};

// 	const handleSubMonth = () => {
// 		const date = new Date(time);
// 		let newTime;

// 		if (date.getMonth() === 0) {
// 			date.setMonth(11);
// 			newTime = date;
// 			return setTime(newTime);
// 		}
// 		date.setMonth(date.getMonth() - 1);
// 		newTime = date;
// 		setTime(newTime);
// 	};

// 	useEffect(() => {
// 		const processDate = String(time).split(' ')[3] + ' / ' + Month_To_Number(String(time).split(' ')[1]);
// 		setDateDisplay(processDate);

// 		router.push(rootPath + Month_To_Month(String(time).split(' ')[1]));
// 	}, [time]);

// 	const dateConfig = {
// 		year: {
// 			format: 'YYYY',
// 			caption: 'Year',
// 			step: 1,
// 		},
// 		month: {
// 			format: 'M',
// 			caption: 'Mon',
// 			step: 1,
// 		},
// 	};

// 	return (
// 		<>
// 			<FontAwesomeIcon className="h-5 w-5" icon={faCaretLeft} onClick={handleSubMonth} />
// 			<p onClick={() => handleToggle(true)}>{dateDisplay}</p>
// 			<FontAwesomeIcon className="h-5 w-5" icon={faCaretRight} onClick={handleAddMonth} />
// 			<DatePicker
// 				showHeader={false}
// 				value={time}
// 				isOpen={isOpen}
// 				confirmText={'Done'}
// 				cancelText={'Cancel'}
// 				onSelect={handleSelect}
// 				onCancel={() => handleToggle(false)}
// 				dateConfig={dateConfig}
// 				min={new Date(2023, 0, 1)}
// 				max={new Date(2024, 0, 1)}
// 			/>
// 		</>
// 	);
// };

// export default MonthPicker;

import { useState, useEffect, forwardRef } from 'react';
import { useRouter } from 'next/router';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Month_To_Number, Month_To_Month } from '../Util';

interface MonthPickerProps {
	time: any;
	setTime: any;
}

const MonthPicker = ({ time, setTime }: MonthPickerProps) => {
	const router = useRouter();
	const rootPath = '/' + router.pathname.split('/')[1] + '/';
	const [dateDisplay, setDateDisplay] = useState('');

	const CustomInput = forwardRef(({ onClick }: any, ref: any) => (
		<p className="w-max" onClick={onClick} ref={ref}>
			{dateDisplay}
		</p>
	));

	CustomInput.displayName = 'CustomInput';

	const handleAddMonth = () => {
		const date = new Date(time);
		let newTime;

		if (date.getMonth() === 11) {
			date.setMonth(0);
			newTime = date;
			return setTime(newTime);
		}
		date.setMonth(date.getMonth() + 1);
		newTime = date;
		setTime(newTime);
	};

	const handleSubMonth = () => {
		const date = new Date(time);
		let newTime;

		if (date.getMonth() === 0) {
			date.setMonth(11);
			newTime = date;
			return setTime(newTime);
		}
		date.setMonth(date.getMonth() - 1);
		newTime = date;
		setTime(newTime);
	};

	useEffect(() => {
		const processDate = String(time).split(' ')[3] + ' / ' + Month_To_Number(String(time).split(' ')[1]);
		setDateDisplay(processDate);

		router.push(rootPath + Month_To_Month(String(time).split(' ')[1]));
	}, [time]);
	return (
		<>
			<FontAwesomeIcon className="h-5 w-5" icon={faCaretLeft} onClick={handleSubMonth} />
			<div>
				<DatePicker
					selected={time}
					showMonthYearPicker
					onChange={(nextTime) => setTime(nextTime)}
					customInput={<CustomInput />}
				/>
			</div>
			<FontAwesomeIcon className="h-5 w-5" icon={faCaretRight} onClick={handleAddMonth} />
		</>
	);
};
export default MonthPicker;
