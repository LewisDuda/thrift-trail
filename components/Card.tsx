// Temporarily don't need to use

// import React, { ReactElement, Component } from 'react';
// import Image from 'next/image';

// interface CardBasicProps {
// 	renderContent: () => ReactElement;
// }

// class CardBasicDesign extends Component<CardBasicProps> {
// 	render() {
// 		return (
// 			<div className=" w-80 h-48 relative bg-white shadow-custom shadow-lightShadow rounded-2xl dark:bg-black dark:shadow-darkShadow">
// 				<div className="text-black dark:text-white">circle</div>
// 				{this.props.renderContent()}
// 			</div>
// 		);
// 	}
// }

// class CardWithIconDesign extends Component {
// 	render() {
// 		return (
// 			<div className="w-14">
// 				<Image src="/CardIcon.png" alt="" height={100} width={100} priority={true} className="h-auto w-full" />
// 			</div>
// 		);
// 	}
// }

// export const Card = () => {
// 	return <CardBasicDesign renderContent={() => <></>} />;
// };

// export const BalanceCard = () => {
// 	return <CardBasicDesign renderContent={() => <CardWithIconDesign />} />;
// };

// // Component 物件導向
// // interface ParentProps {
// // 	title: string;
// // 	renderContent: () => ReactElement;
// // }

// // class ParentComponent extends React.Component<ParentProps> {
// // 	render() {
// // 		return (
// // 			<div>
// // 				<h1>{this.props.title}</h1>
// // 				{this.props.renderContent()}
// // 			</div>
// // 		);
// // 	}
// // }

// // class ChildComponent extends React.Component {
// // 	render() {
// // 		return (
// // 			<div>
// // 				<h2>Child Component</h2>
// // 				<h3>I'm special card</h3>
// // 			</div>
// // 		);
// // 	}
// // }

// // export const SpecailCard = () => {
// // 	return <ParentComponent title="1asd" renderContent={() => <ChildComponent />} />;
// // };
