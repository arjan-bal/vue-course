<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="progress">
        <div
          class="progress-bar"
          :style="{ width: progress + '%' }"
          role="progressbar"
          aria-valuenow="60"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["progress"],
};
</script>
