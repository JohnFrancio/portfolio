import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from "three"

export function SpaceShip({ scrollProgress, ...props }) {
    console.log("Scroll Progress:", scrollProgress);

  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./src/assets/models/spaceship/source/model.gltf')
  const { actions } = useAnimations(animations, group)
    useFrame((state) => {
        const t = state.clock.getElapsedTime();

        if (!group.current && isNaN(scrollProgress)) {
            return;
        }

        //onscroll move
        group.current.position.z = THREE.MathUtils.lerp(0, -10, scrollProgress);
        group.current.rotation.x = THREE.MathUtils.lerp(0, Math.PI / 8, scrollProgress);
 

        // // // up and down 
        // group.current.position.y = THREE.MathUtils.lerp(
        //     group.current.position.y,
        //     Math.sin(t) * 0.1, // Adjust the amplitude (0.2) for smoother movement
        //     0.1
        // );

        // // //left and right
        // group.current.position.x = THREE.MathUtils.lerp(
        //     group.current.position.x,
        //     Math.sin(t / 2) / 2,
        //     0.1
        // );

        // Rotation effect for a dynamic feel
        // group.current.rotation.x = THREE.MathUtils.lerp(
        //     group.current.rotation.x,
        //     Math.cos(t / 10) / 10 + 0.25,
        //     0.1
        // );
        // group.current.rotation.y = THREE.MathUtils.lerp(
        //     group.current.rotation.y,
        //     Math.sin(t / 10) / 4,
        //     0.1
        // );
        // group.current.rotation.z = THREE.MathUtils.lerp(
        //     group.current.rotation.z,
        //     Math.sin(t / 10) / 10,
        //     0.1
        // );
    });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="blockbench_export">
        <group>
          <group name="spaceship" position={[0.125, -2.75, -5]} scale={[1, 1, 1]}>
            <group name="Body" position={[-0.188, -0.75, 0]}>
              <group name="bone5" position={[0, 0.438, 0]}>
                <group name="bone2" position={[0.625, 0, -0.5]}>
                  <mesh
                    name="cuboid"
                    castShadow
                    receiveShadow
                    geometry={nodes.cuboid.geometry}
                    material={nodes.cuboid.material}
                  />
                  <mesh
                    name="cuboid_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.cuboid_1.geometry}
                    material={nodes.cuboid_1.material}
                    position={[0, 0, 1]}
                  />
                </group>
                <mesh
                  name="cuboid_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.cuboid_2.geometry}
                  material={nodes.cuboid_2.material}
                  position={[-0.625, 0.313, 0]}
                />
                <mesh
                  name="cuboid_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.cuboid_3.geometry}
                  material={nodes.cuboid_3.material}
                  position={[-1.094, 0.375, -0.294]}
                />
                <mesh
                  name="cuboid_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.cuboid_4.geometry}
                  material={nodes.cuboid_4.material}
                  position={[0, -0.375, 0]}
                />
                <mesh
                  name="cuboid_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.cuboid_5.geometry}
                  material={nodes.cuboid_5.material}
                  position={[-1.094, 0.375, 0.294]}
                />
              </group>
              <group name="Engine1" position={[-1.375, 0.781, -0.375]}>
                <mesh
                  name="cuboid_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.cuboid_6.geometry}
                  material={nodes.cuboid_6.material}
                  position={[-0.125, -0.344, 0]}
                />
                <mesh
                  name="cylinder"
                  castShadow
                  receiveShadow
                  geometry={nodes.cylinder.geometry}
                  material={nodes.cylinder.material}
                  rotation={[0, 0, Math.PI / 2]}
                />
                <mesh
                  name="cylinder_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.cylinder_1.geometry}
                  material={nodes.cylinder_1.material}
                  position={[0, -0.188, 0]}
                  rotation={[0, 0, Math.PI / 2]}
                />
              </group>
              <group name="Engine2" position={[-1.375, 0.781, 0.375]}>
                <mesh
                  name="cylinder_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.cylinder_2.geometry}
                  material={nodes.cylinder_2.material}
                  position={[0, -0.188, 0]}
                  rotation={[0, 0, Math.PI / 2]}
                />
                <mesh
                  name="cylinder_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.cylinder_3.geometry}
                  material={nodes.cylinder_3.material}
                  rotation={[0, 0, Math.PI / 2]}
                />
                <mesh
                  name="cuboid_7"
                  castShadow
                  receiveShadow
                  geometry={nodes.cuboid_7.geometry}
                  material={nodes.cuboid_7.material}
                  position={[-0.125, -0.344, 0]}
                />
              </group>
              <mesh
                name="body"
                castShadow
                receiveShadow
                geometry={nodes.body.geometry}
                material={nodes.body.material}
                position={[0, 0.438, 0]}
              />
            </group>
            <group name="Otherparts" position={[-0.188, -0.75, 0]}>
              <mesh
                name="cuboid_8"
                castShadow
                receiveShadow
                geometry={nodes.cuboid_8.geometry}
                material={nodes.cuboid_8.material}
                position={[-1.938, 0.438, -0.563]}
              />
              <mesh
                name="cuboid_9"
                castShadow
                receiveShadow
                geometry={nodes.cuboid_9.geometry}
                material={nodes.cuboid_9.material}
                position={[-1, 0.719, -0.5]}
              />
              <mesh
                name="cuboid_10"
                castShadow
                receiveShadow
                geometry={nodes.cuboid_10.geometry}
                material={nodes.cuboid_10.material}
                position={[-1.188, 0.625, -0.969]}
                rotation={[-0.131, 0, 0.006]}
              />
              <mesh
                name="cuboid_11"
                castShadow
                receiveShadow
                geometry={nodes.cuboid_11.geometry}
                material={nodes.cuboid_11.material}
                position={[-1.188, 0.625, 0.969]}
                rotation={[0.131, 0, 0.006]}
              />
              <mesh
                name="cuboid_12"
                castShadow
                receiveShadow
                geometry={nodes.cuboid_12.geometry}
                material={nodes.cuboid_12.material}
                position={[-1.938, 0.438, 0.563]}
              />
              <mesh
                name="cuboid_13"
                castShadow
                receiveShadow
                geometry={nodes.cuboid_13.geometry}
                material={nodes.cuboid_13.material}
                position={[-1, 0.719, 0.5]}
              />
            </group>
            <group name="Wing" position={[-0.188, -0.75, 0]}>
              <group name="wingengine">
                <mesh
                  name="cuboid_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.cuboid_14.geometry}
                  material={nodes.cuboid_14.material}
                  position={[-1.125, 0.438, -0.813]}
                />
                <mesh
                  name="cylinder_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.cylinder_4.geometry}
                  material={nodes.cylinder_4.material}
                  position={[-1.25, 0.688, -0.813]}
                  rotation={[0, 0, Math.PI / 2]}
                />
                <mesh
                  name="cylinder_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.cylinder_5.geometry}
                  material={nodes.cylinder_5.material}
                  position={[-1.25, 0.688, 0.813]}
                  rotation={[0, 0, Math.PI / 2]}
                />
                <mesh
                  name="cuboid_15"
                  castShadow
                  receiveShadow
                  geometry={nodes.cuboid_15.geometry}
                  material={nodes.cuboid_15.material}
                  position={[-1.125, 0.438, 0.813]}
                />
              </group>
              <mesh
                name="wing_1"
                castShadow
                receiveShadow
                geometry={nodes.wing_1.geometry}
                material={nodes.wing_1.material}
                position={[-1.188, 0.438, -1.969]}
              />
              <mesh
                name="wing_3"
                castShadow
                receiveShadow
                geometry={nodes.wing_3.geometry}
                material={nodes.wing_3.material}
                position={[-0.219, 0.438, -1.156]}
              />
              <mesh
                name="wing_2"
                castShadow
                receiveShadow
                geometry={nodes.wing_2.geometry}
                material={nodes.wing_2.material}
                position={[-1.188, 0.438, 1.969]}
              />
              <mesh
                name="wing_4"
                castShadow
                receiveShadow
                geometry={nodes.wing_4.geometry}
                material={nodes.wing_4.material}
                position={[-0.219, 0.438, 1.156]}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/model.gltf')