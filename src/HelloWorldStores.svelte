<template lang="pug">
	MaterialApp(theme="dark")
		h1 Hello {name}!
		p With stores this time.
		HelloWorldStoresDisplay
		button(on:click!="{() => {$count++}}") Click to go from {$count} to {countPlusOne}
		div.d-flex.justify-space-around
			Avatar.primary-color(size='36px') 36
			Avatar.blue.white-text 48
			Avatar.red.white-text(size='62px') 62
</template>

<script>
	import { MaterialApp } from 'svelte-materialify';
	import { count } from './store.js'
	import HelloWorldStoresDisplay from './HelloWorldStoresDisplay.svelte'
	import Avatar from 'svelte-materialify/src/components/Avatar';
	export let name;

	$: countPlusOne = $count + 1;

</script>

<style>
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100
	}
</style>
