<template>
	<div class="container grid-lg my-2 py-2 text-dark">
		<div class="card">
			<div class="card-header">
				<h4 class="text-center">Pesquisar Cep</h4>
			</div>
			<div class="card-body">
				<!-- <PesquisarCep :cep="cep" /> -->
				<label class="form-label" for="input-example-1">Cep</label>
				<input 
					class="form-input" 
					type="text" 
					id="input-example-1" 
					placeholder="Digite o cep" 
					maxlength="8"
					v-model="cep">
				<div class="form-group" v-if="response !== null">
					<div v-if="index !== 'cep'">
						<div v-for="(value, index) in response" :key="index">
							<label class="form-label" for="input-example-1">{{index.toUpperCase()}}</label>
							<input class="form-input" type="text" placeholder="index" v-model="response[index]">
						</div>
					</div>
        		</div>
			</div>
		</div>
	</div>
</template>

<script>
import PesquisarCep from '@/components/PesquisarCep.vue'
import axios from 'axios'

export default {
	name: 'Cep',
	components: {
		PesquisarCep,
	},

	data (){
		return {
			cep: null,
			response: null,
			baseUrl: 'https://viacep.com.br/ws/'
		}
	},
	 
	methods: {
		getCep(){
			const url = `${this.baseUrl}${this.cep}/json`
			axios.get(url).then(resp => {
				const data = resp.data
				if (!data.erro) {
					this.response = data
					console.log(data)
				} else {
					alert('Cep não encontrado')
				}
			}).catch(error => {
				console.error(error)
			})
		}
	},

	watch: {
		cep: function (novoCep, velhoCep) {
			if (novoCep.length === 8) {
				this.getCep()
			} else {
				this.response = null
			}
        }
	}
}
</script>
