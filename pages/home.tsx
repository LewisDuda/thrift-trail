import WaterPoolBall from '@/components/WaterPoolBall';
import { useState } from 'react';

export default function HomePage() {
	const [value, setValue] = useState(50);
	return (
		<div>
			<WaterPoolBall value={value} />
		</div>
	);
}
