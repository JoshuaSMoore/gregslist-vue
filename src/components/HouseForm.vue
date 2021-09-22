<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="levels" class="">Levels:</label>
      <input v-model="editable.levels"
             type="number"
             class="form-control"
             name="levels"
             id="levels"
      >
    </div>
    <div class="form-group">
      <label for="price" class="">Price:</label>
      <input v-model="editable.price"
             type="number"
             class="form-control"
             name="price"
             id="price"
             min="0"
             max="9999999"
      >
    </div>
    <div class="form-group">
      <label for="bedrooms" class="">Bedrooms:</label>
      <input v-model="editable.bedrooms" type="rooms" class="form-control" name="bedrooms" id="bedrooms">
    </div>
    <div class="form-group">
      <label for="bathrooms" class="">Bathrooms:</label>
      <input v-model="editable.bathrooms" type="bathrooms" class="form-control" name="bathrooms" id="bathrooms">
    </div>
    <div class="form-group">
      <label for="year" class="">year built:</label>
      <input v-model="editable.year" type="year" class="form-control" name="year" id="year">
    </div>
    <div class="form-group">
      <label for="description" class="">description:</label>
      <textarea v-model="editable.description"
                type="text"
                class="form-control"
                name="description"
                id="description"
                rows="5"
      ></textarea>
    </div>
    <div class="form-group">
      <label for="img" class="">img:</label>
      <input v-model="editable.imgUrl"
             type="url"
             class="form-control"
             name="img"
             id="img"
             required
      >
    </div>
    <div class="d-flex justify-content-between my-3">
      <button type="button" data-bs-dismiss="modal" aria-label="Close" class="btn text-dark lighten-20 text-uppercase selectable">
        <b>
          cancel
        </b>
      </button>
      <button type="submit" class="btn text-primary text-uppercase selectable">
        <b>
          submit
        </b>
      </button>
    </div>
  </form>
</template>

<script>
import { watchEffect } from '@vue/runtime-core'
import { House } from '../models/House.js'
import { housesService } from '../services/HousesService.js'
import Pop from '../utils/Pop.js'
import { ref } from '@vue/reactivity'
export default {
  props: {
    house: { type: House, default: () => new House() }
  },
  setup(props) {
    const editable = ref({})

    watchEffect(() => {
      editable.value = { ...props.house }
    })
    return {
      editable,
      async handleSubmit() {
        try {
          if (editable.value.id) {
            await housesService.editHouse(editable.value)
          } else {
            await housesService.createHouse(editable.value)
          }
          editable.value = {}
        } catch (error) {
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>

<style>

</style>
