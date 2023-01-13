<template>
  <div>
    <b-card no-body class="timetoboost-card">
      <div class="left">
        <div class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="64"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
        </div>
        <div class="content">
          <h5 class="title">It's the best time to boost</h5>
          <div class="description">
            Push your profile to the top during rush hour
          </div>
        </div>
      </div>
      <b-button class="boostnow-btn" @click="$router.push('/app/powerups')"
        >Boost Now</b-button
      >
    </b-card>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
}

.timetoboost-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fbf5eb;
  padding: 1rem;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
}

.timetoboost-card .left {
  display: flex;
  gap: 1rem;
}

.timetoboost-card .left div {
  display: flex;
  flex-direction: column;
}

.boostnow-btn {
  outline: none;
  border: none;
  background-color: #0f1415;
  border-radius: 10px;
}
</style>
