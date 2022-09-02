<template>
    <div>
        <div class="form-group">
            <label class="form-label" for="input-example-1">Cep</label>
            <input 
                class="form-input" 
                type="text" 
                id="input-example-1" 
                placeholder="Digite o cep" 
                v-model="cep">
        </div>
        {{ cep }}
        <div class="form-group" v-if="response !== null">
            <div v-if="index !== 'cep'">
                
                <div v-for="(value, index) in response" :key="index">
                    <p>testeste</p>
                    <!-- <label class="form-label" for="input-example-1">{{index.toUpperCase()}}</label>
                    <input class="form-input" type="text" placeholder="index" v-model="response[index]"> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: { 
        cep: {
		    type: Object,
        },
    },
}

</script>

<style>
    
</style>