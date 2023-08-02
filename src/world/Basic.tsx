import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import { Scene, Engine } from 'react-babylonjs'
import React, { FC } from 'react'
import MyBox from './model/Box';
const Basic: FC = () => {
	return (
		<div style={{ flex: 1, display: 'flex' }}>
			<Engine
				antialias
				adaptToDeviceRatio
				canvasId="babylon-js"
				renderOptions={{
					whenVisibleOnly: true,
				}}
			>
				<Scene>
					<freeCamera
						name="camera1"
						position={new Vector3(0, 5, -10)}
						setTarget={[Vector3.Zero()]}
					/>
					<hemisphericLight
						name="light1"
						intensity={0.7}
						direction={new Vector3(0, 1, 0)}
					/>
					<ground name="ground" width={6} height={6} />
					<MyBox name="hello" position={new Vector3(0, 3, 0)}></MyBox>
				</Scene>
			</Engine>
		</div>
	)
}

export default Basic;


