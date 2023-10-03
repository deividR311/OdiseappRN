import { useState } from 'react';

export const useForm = <T extends Object>(initState: T) => {
	const [form, setForm] = useState(initState);

	const handleChange = (value: string, field: keyof T): void => {
		setForm({
			...form,
			[field]: value,
		});
	};

	const onResetForm = (): void => {
		setForm(initState);
	}

	return { form, handleChange, setForm, onResetForm };
};
