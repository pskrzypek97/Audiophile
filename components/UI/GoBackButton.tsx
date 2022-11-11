import { useRouter } from 'next/router';

const GoBackButton = () => {
	const router = useRouter();

	return (
		<>
			<a className="btn btn--back" onClick={() => router.back()}>
				<span data-content="Go Back">Go Back</span>
			</a>
		</>
	);
};

export default GoBackButton;
