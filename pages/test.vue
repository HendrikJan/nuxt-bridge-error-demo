<template>
  <div>
    data:
    <pre>{{ data }}</pre>
  </div>
</template>

<script setup>
const query = `
  {
    academicYear(id: 11) {
      name
    }
    courses(year_id: 11) {
      id
      name
      code
    }
  }
`;

const { pending, data, error } = useLazyFetch('/api/graphql', {
  server: false,
  method: 'POST',
  body: { query },
});
</script>