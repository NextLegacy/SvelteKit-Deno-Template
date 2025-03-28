<svelte:head>
    <script>
        (() => {
            document.documentElement.classList.toggle("dark", localStorage.getItem("lightDark") === "dark");
            document.documentElement.classList.add(`theme-${localStorage.getItem("theme")}`, true);
        })();
    </script>
</svelte:head>
