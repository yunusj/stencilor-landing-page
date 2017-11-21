import React, { Component } from 'react'
import AppBlock from "./reusableComponents/AppBlock";
import { XMasonry, XBlock } from "react-xmasonry/dist/index.js";

import ReactGridLayout from "react-grid-layout";
import StylesGridLayout from "../../node_modules/react-grid-layout/css/styles.css";
import StylesResizable from "../../node_modules/react-resizable/css/styles.css";


const appBlocks = [
	{
		brand: '',
		grid: [
			{x: 5,  y: 1},
		],
		shape: 'square'
	},
	{
		brand: '',
		grid: [
			{x: 6,  y: 1},
		],
		shape: 'vRect'
	},
	{
		brand: '',
		grid: [
			{x: 7,  y: 1},
		],
		shape: 'square'
	},
	// row end
	{
		brand: '',
		grid: [
			{x: 4,  y: 2},
		],
		shape: 'bigSquare'
	},
	{
		brand: '',
		grid: [
			{x: 7,  y: 2},
		],
		shape: 'square'
	},
	{
		brand: '',
		grid: [
			{x: 8,  y: 2},
		],
		shape: 'square'
	},

	// row end
	{
		brand: '',
		grid: [
			{x: 3,  y: 3},
		],
		shape: 'square'
	},
	{
		brand: '',
		grid: [
			{x: 7,  y: 3},
		],
		shape: 'bigSquare'
	},
	{
		brand: '',
		grid: [
			{x: 9,  y: 3},
		],
		shape: 'square'
	},
	// row end
	{
		brand: '',
		grid: [
			{x: 2,  y: 4},
		],
		shape: 'vRect'
	},
	{
		brand: '',
		grid: [
			{x: 3,  y: 4},
		],
		shape: 'hRect'
	},
	{
		brand: '',
		grid: [
			{x: 6,  y: 4},
		],
		shape: 'square'
	},
	// row end
	{
		brand: '',
		grid: [
			{x: 3,  y: 5},
		],
		shape: 'square'
	},
	{
		brand: '',
		grid: [
			{x: 4,  y: 5},
		],
		shape: 'square'
	},

	{
		brand: '',
		grid: [
			{x: 6,  y: 5},
		],
		shape: 'browser'
	},
	// row end
	{
		brand: 'youtube',
		grid: [
			{x: 4,  y: 6},
			{x: 6,  y: 6},
		],
		shape: 'square' 
	},
	{
		brand: 'twitter',
		grid: [
			{x: 5,  y: 6},
		],
		shape: 'vRect'
	},
	{
		brand: 'instagram',
		grid: [
			{x: 6,  y: 6},
			{x: 3,  y: 6},
		],
		shape: 'hRect'
	},
	{
		brand: 'google',
		grid: [
			{x: 8,  y: 6},
		],
		shape: 'square'
	},
	// row end
	{
		brand: 'wordpress',
		grid: [
			{x: 3,  y: 7},
		],
		shape: 'bigSquare'
	},
	{
		brand: 'facebook',
		grid: [
			{x: 6,  y: 7},
			{x: 7,  y: 6},
		],
		shape: 'square'
	},
	{
		brand: 'amazon',
		grid: [
			{x: 7,  y: 7},
		],
		shape: 'square'
	},
	// row end
	{
		brand: '',
		grid: [
			{x: 5,  y: 8},
		],
		shape: 'square'
	},
	{
		brand: '',
		grid: [
			{x: 6,  y: 8},
		],
		shape: 'vRect'
	},
	{
		brand: '',
		grid: [
			{x: 7,  y: 8},
		],
		shape: 'square'
	},
];

const shapes = {
	circle: {
		w: 1,
		h: 1
	},
	square: {
		w: 1,
		h: 1
	},
	bigSquare: {
		w: 2,
		h: 2
	},
	hRect: {
		w: 2,
		h: 1
	},
	vRect: {
		w: 1,
		h: 2
	},
	browser: {
		w: 4,
		h: 1
	}
};


export default class AppBlocksContainer extends Component {
	constructor(props) {
		super(props);

		const allLayouts = this.generateLayouts();
		const initialLayout = this.generateLayouts(true);

		this.state = {
			allLayouts: allLayouts,
			layout: initialLayout[0],
		};

		console.log('allLayouts', allLayouts);

		this.updateGrid();
	}

	generateLayouts(initalLayout) {
		var layouts = [[],[]]; // 2 layouts placeholder
		let brandsInitialX = 0;
		if(initalLayout)
		{
			appBlocks.map((appBlock, index)=>{	
	
				appBlock.grid.map((g, i)=>{
					// layouts.push(i);
					layouts[i].push({ 
						i: 'appBlock'+index,
						x: (appBlock.brand=='' || appBlock.shape=='browser')?g.x:4+brandsInitialX, 
						y: (appBlock.brand=='' || appBlock.shape=='browser')?g.y:10, 
						w: shapes[appBlock.shape].w, 
						h: shapes[appBlock.shape].h 
					});
				});

				if(appBlock.brand!='' && appBlock.shape!='browser') {
					brandsInitialX += shapes[appBlock.shape].w;
				}

			});		

			return layouts;
		}

		appBlocks.map((appBlock, index)=>{	
			appBlock.grid.map((g, i)=>{
				layouts[i].push({ 
					i: 'appBlock'+index,
					x: g.x, 
					y: g.y, 
					w: shapes[appBlock.shape].w, 
					h: shapes[appBlock.shape].h 
				});
			});

			if(appBlock.grid.length < 2) {
				layouts[1].push({ 
					i: 'appBlock'+index,
					x: appBlock.grid[0].x, 
					y: appBlock.grid[0].y, 
					w: shapes[appBlock.shape].w, 
					h: shapes[appBlock.shape].h 
				});
			}

		});

		return layouts;
	}

	updateGrid() {
		let i = 0;
		setTimeout(()=>{
			this.updateState(0);

			setInterval(()=>{
				i++;
				// never let i exceed array length
				(this.state.allLayouts.length <= i) ? i = 0 : '';

				this.updateState(i);

			}, 5000);
		}, 2000);

	}

	updateState(i) {
		this.setState((prevState)=>{
			return ({
				layout: this.state.allLayouts[i]
			})
		});
	}

    render() {

    	let width = 2400;
    	let height = width / 11.5;

		return (
			<div className="appBlockBG">
				<div className="isometricContainer">
					<div className="isometric">
				      <ReactGridLayout 
				      	className="layout" 
				      	layout={this.state.layout} 
				      	isDraggable={false}
				      	isResizable={false}
				      	verticalCompact={false}
				      	// margin={[25, 25]}
				      	cols={12} 
				      	rowHeight={height} 
				      	width={width}>
				        {appBlocks.map((listValue, index)=>{
				        	return (
					        	<div key={`appBlock${index}`} >
					        		{listValue.brand=='SPACING'? <div className={`appBlock-spacing`}></div> : <AppBlock brand={ listValue.brand } shape={listValue.shape} />}
					        	</div>
				        	)
				       	}, this)}
				      </ReactGridLayout>
					</div>
				</div>
			</div>
		)
    }
}