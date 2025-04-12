<script lang="ts">
    import { T, useTask } from "@threlte/core";
    let cameraRotation = $state({ x: 0, y: 0, z: 0 });
    let cameraPosition = $state({ x: 0, y: 0, z: 9 });
    const radius = 5;

    let spotLightAngle = $state(Math.PI / 6);

    let mainShapePos = $state({ x: 0, y: 0, z: 0 });
    let torusKnotRotation = $state({ x: 0, y: 0, z: 0 });
    let smallShapeRotation = $state(0);
    let time = $state(0);

    const smallShapesCount = 50;
    const smallShapes = Array(smallShapesCount)
        .fill(0)
        .map((_, i) => ({
            id: i,
            x: (Math.random() - 0.5) * 15,
            z: (Math.random() - 0.5) * 15,
            y: -1.5 + Math.random() * 3,
            scale: 0.1 + Math.random() * 0.4,
            speedFactor: 0.5 + Math.random() * 1.5
        }));

    $effect(() => {
        useTask((delta) => {
            const dt = delta * 60;
            time += delta * 1.8;

            cameraRotation.y += 0.008 * dt;
            cameraRotation.z = Math.sin(time * 0.5) * 0.15;

            cameraPosition.x = Math.sin(cameraRotation.y) * radius;
            cameraPosition.z = Math.cos(cameraRotation.y) * radius;
            cameraPosition.y = Math.sin(time * 0.8) * 2.5;

            spotLightAngle = Math.PI / 8 + ((Math.sin(time * 1.1) + 1) / 2) * (Math.PI / 5);
            mainShapePos.x = Math.sin(time * 1.1) * 2.5;
            mainShapePos.y = Math.cos(time * 1.3) * 1.5 + 0.5;
            mainShapePos.z = Math.cos(time * 0.9) * 2.5;

            torusKnotRotation.x += 0.03 * dt;
            torusKnotRotation.y += 0.04 * dt;

            smallShapeRotation += 0.05 * dt;
        });
    });
</script>

<svelte:window />

<T.PerspectiveCamera
    position={[cameraPosition.x, cameraPosition.y, cameraPosition.z]}
    rotation={[cameraRotation.x, cameraRotation.y, cameraRotation.z]}
    fov={75}
    makeDefault
/>

<T.DirectionalLight position={[10, 5, 8]} intensity={0.8} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
<T.AmbientLight intensity={0.6} />

<T.SpotLight
    position={[0, 10, 0]}
    target.position={[mainShapePos.x, mainShapePos.y, mainShapePos.z]}
    angle={spotLightAngle}
    penumbra={0.3}
    intensity={1.5}
    castShadow
    color="#aaffff"
    distance={30}
    decay={1}
/>

<T.Group>
    <T.Mesh position={[mainShapePos.x, mainShapePos.y, mainShapePos.z]} castShadow receiveShadow>
        <T.SphereGeometry args={[1.2, 64, 64]} />
        <T.MeshStandardMaterial color="#ff8800" metalness={0.9} roughness={0.05} envMapIntensity={1.0} />
    </T.Mesh>

    <T.Mesh
        position={[-mainShapePos.x * 0.8, -mainShapePos.y * 0.6, -mainShapePos.z * 0.8]}
        rotation={[torusKnotRotation.x, torusKnotRotation.y, torusKnotRotation.z]}
        castShadow
        receiveShadow
    >
        <T.TorusKnotGeometry args={[0.9, 0.2, 150, 20]} />
        <T.MeshStandardMaterial color="#8844ff" metalness={0.95} roughness={0.1} envMapIntensity={1.0} />
    </T.Mesh>

    {#each smallShapes as shape (shape.id)}
        <T.Mesh
            position={[shape.x, shape.y, shape.z]}
            rotation.x={smallShapeRotation * shape.speedFactor * (shape.id % 2 === 0 ? 1 : -1.2)}
            rotation.y={smallShapeRotation * shape.speedFactor * (shape.id % 3 === 0 ? -1.1 : 1)}
            rotation.z={smallShapeRotation * shape.speedFactor * 0.8}
            scale={shape.scale}
            castShadow
            receiveShadow
        >
            <T.IcosahedronGeometry args={[0.6, 0]} />
            <T.MeshStandardMaterial
                color={"#ffffff"}
                metalness={0.8}
                roughness={0.2}
                envMapIntensity={0.8}
                emissive="#ff8800"
                emissiveIntensity={0.1}
            />
        </T.Mesh>
    {/each}

    <T.Mesh rotation.x={-Math.PI / 2} position.y={-3.5} receiveShadow>
        <T.PlaneGeometry args={[50, 50]} />
        <T.MeshStandardMaterial color="#a6a6aa" metalness={0.95} roughness={0.2} envMapIntensity={0.8} />
    </T.Mesh>
</T.Group>
