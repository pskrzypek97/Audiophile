import { useRouter } from 'next/router';

const GoBackButton = () => {
	const router = useRouter();

	return (
		<>
			<a className="btn btn--back" onClick={() => router.back()}>
				Go Back
			</a>
		</>
	);
};

export default GoBackButton;
