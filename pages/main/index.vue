
<template>
	<div>
		<h1>main</h1>
		<nuxt-link to="/sub">Вернуться на sub</nuxt-link>
		<form action="">
			<label for="name"">name</label>
			<input :value="name" @change="saveName" type="text" id="name">

			<label for="surname">surname</label>
			<input v-model="sur" type="text" id="surname">

			<label for="date">date</label>
			<input v-model="date" type="date" id="date">
		</form>
	</div>
</template>

<script>
	
	import { mapState } from 'vuex';
	export default{
		computed: {
			...mapState({
				name: state => state.name
			}),
			sur: {
				get () {
					return this.$store.state.surname
				},
				set (value) {
					this.$store.commit('updateSurname', value)
				}
			},
			date: {
				get () {
					return this.$store.state.date
				},
				set (value) {
					this.$store.commit('updateDate', value)
				}
			}
		},
		// without v-model
		methods: {
			saveName(e) {
				this.$store.commit('saveName', e.target.value)
			}
		}

	}
</script>

<style>

</style>