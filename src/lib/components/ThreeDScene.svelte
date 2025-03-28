<script lang="ts">
    import { T, useTask } from "@threlte/core";

    let cubeRotation = $state({ x: 0, y: 0 });

    $effect(() => {
        useTask((delta) => {
            cubeRotation.x += 0.002 * delta * 60;
            cubeRotation.y += 0.004 * delta * 60;
        });
    });
</script>

<svelte:window />

<T.PerspectiveCamera position={[0, 0, 6]} fov={50} makeDefault />

<T.DirectionalLight position={[10, 10, 5]} intensity={1.5} castShadow />

<T.AmbientLight intensity={0.4} />

<T.Group>
    {#each Array(5) as _, i}
        <T.Mesh
            rotation.x={cubeRotation.x}
            rotation.y={cubeRotation.y + i * 2}
            position.x={Math.sin(i * 2.1) * 2}
            position.y={Math.cos(i * 1.5) * 1.5}
            position.z={Math.sin(i * 0.5 + 1) * 2}
            castShadow
            receiveShadow
        >
            <T.BoxGeometry args={[1, 1, 1]} />
            <T.MeshStandardMaterial color={i === 0 ? "#755df4" : i === 1 ? "#3ac7ee" : "#ee3ac7"} metalness={0.8} roughness={0.2} />
        </T.Mesh>
    {/each}

    <T.Mesh rotation.x={-Math.PI / 2} position.y={-2.5} receiveShadow>
        <T.PlaneGeometry args={[20, 20]} />
        <T.MeshStandardMaterial color="#222233" metalness={0.3} roughness={0.8} />
    </T.Mesh>
</T.Group>
