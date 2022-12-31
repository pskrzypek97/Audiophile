import React from 'react';

import Header from '../components/Header/Header';
import Categories from '../components/Categories/Categories';
import Recommend from '../components/Recommend/Recommend';
import Story from '../components/Story/Story';
import HeadComp from '../components/Head/HeadComp';

export default function Home() {
	return (
		<>
			<HeadComp title={'Home'} />
			<Header category={false} />
			<Categories />
			<Recommend />
			<Story />
		</>
	);
}
