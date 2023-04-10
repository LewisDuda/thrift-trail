import WaterPoolBall from '@/components/WaterPoolBall';
import { useState } from 'react';

export default function Home() {
	const [value, setValue] = useState(50);
	return (
		<div>
			<WaterPoolBall value={value} />
			{/* <h1 className="text-3xl font-bold underline">Hello world thrift-trail!</h1>; */}
		</div>
	);
}
