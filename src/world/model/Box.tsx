import React, { useRef, useState } from 'react'
import {
	Engine,
	Scene,
	useBeforeRender,
	useClick,
	useHover,
} from 'react-babylonjs'
import { Vector3, Color3 } from '@babylonjs/core'

const DefaultScale = new Vector3(1, 1, 1)
const BiggerScale = new Vector3(1.25, 1.25, 1.25)

const MyBox = (props) => {
	// access Babylon scene objects with same React hook as regular DOM elements
	//const boxRef = useRef(null)
	const boxRef = useRef(null);

	useClick(() => {
		console.log("why you click me?") // Always logs 0. How to access the current count here?
	}, boxRef)

	return (
		<box ref={boxRef} name="counter" size={10} >
			<standardMaterial
				name={`${props.name}-mat`}
				diffuseColor={props.color}
				specularColor={Color3.Black()}
			/>
		</box >
	)
}


export default MyBox;
