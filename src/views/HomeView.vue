<template>
	<div class="container grid-lg my-2 py-2 text-dark">
		<div class="card">
			<div class="card-header">
				<h4 class="text-center">Exibindo as Moedas</h4>
			</div>
			<div class="card-body">
				<Moeda :quotes="quotes"/>
			</div>
		</div>
	</div>
</template>

<script>
import Moeda from '@/components/Moeda.vue'
import api from '@/servidor/api.js'
import { onMounted, reactive, toRefs } from 'vue'

export default {
	name: 'HomeView',
	components: {
		Moeda,
	},

	// Expor os dados da API no nosso component
	setup() {
		const data = reactive ({ // dados reativos
			quotes: {},
		});

		onMounted( async() => {
			const response = await api.all();
			data.quotes = response.data;
		});

		return { ...toRefs(data) }
	}
}
</script>

<style>
	
</style>
