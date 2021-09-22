<template>
  <div class="mb-4 listing">
    <router-link :to="{name: 'House', params: { houseId: house.id }}">
      <div class="card selectable">
        <img :src="house.img" alt="listing image" class="rounded">
        <div class="card-body">
          <h5 class="d-flex justify-content-between">
            <span>Bedrooms:{{ house.bedrooms }} Levels:{{ house.levels }} - Year Built:{{ house.year }} </span>
            <span> ${{ house.price }} </span>
          </h5>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { House } from '../models/House.js'
import { logger } from '../utils/Logger.js'

export default {
  props: {
    house: { type: House, required: true }
  },
  setup(props) {
    return {
      deleteHouse() {
        logger.log('delete working?')
      }
    }
  }
}
</script>

<style>

</style>
