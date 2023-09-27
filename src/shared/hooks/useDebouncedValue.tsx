import { useEffect, useState } from 'react';

export const useDebouncedValue = (input: string = '', time: number = 500): string => {
	const [debouncedValue, setDebouncedValue] = useState<string>(input);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setDebouncedValue(input);
		}, time);

		return () => {
			clearTimeout(timeout);
		};
	}, [input]);

	return debouncedValue;
};
