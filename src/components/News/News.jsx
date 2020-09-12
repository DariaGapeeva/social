import React from 'react';
import styles from './News.module.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.scss';




const News = (props) => {
	return (
		<div>
			<Tabs>
				<TabList >
					<Tab>Title 1</Tab>
					<Tab>Title 2</Tab>
				</TabList>

				<TabPanel>
					<h2>Any content 1</h2>
				</TabPanel>
				<TabPanel>
					<h2>Any content 2</h2>
				</TabPanel>
			</Tabs>
		</div>
	)
}




export default News;
