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

const SpinningBox = (props) => {
	// access Babylon scene objects with same React hook as regular DOM elements
	const boxRef = useRef(null)

	const [clicked, setClicked] = useState(false)
	useClick(() =>
		console.log("why click me ...?");



	setClicked((clicked) => !clicked), boxRef)

	const [hovered, setHovered] = useState(false)
	useHover(
		() => setHovered(true),
		() => setHovered(false),
		boxRef
	)

	// This will rotate the box on every Babylon frame.
	const rpm = 5
	useBeforeRender((scene) => {
		if (boxRef.current) {
			// Delta time smoothes the animation.
			var deltaTimeInMillis = scene.getEngine().getDeltaTime()
			boxRef.current.rotation.y +=
				(rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000)
		}
	})

	return (
		<box
			name={props.name}
			ref={boxRef}
			size={2}
			position={props.position}
			scaling={clicked ? BiggerScale : DefaultScale}
		>
			<standardMaterial
				name={`${props.name}-mat`}
				diffuseColor={hovered ? props.hoveredColor : props.color}
				specularColor={Color3.Black()}
			/>
		</box>
	)
}