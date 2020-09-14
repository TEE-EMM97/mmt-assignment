<template>
  <v-simple-table fixed-header height="300px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Area Of Concern
          </th>
          <th class="text-left">
            Why Is It Concern
          </th>
          <th class="text-left">
            Remain Anonymous
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <!--td>{{ $store.state.addUser.name }}</td-->
          <!--td>{{ user.areaOfConcern }}</td>
          <td>{{ user.whyIsConcern }}</td>
          <td>{{ user.remainAnon }}</td>
          <td>{{ getUserById.name }}</td-->
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {

  head () {
    return {
      title: 'Thank You! | Tevon McCrea MMT',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Thank you for your info.'
        }
      ]
    }
  }
}
</script>

<style>

</style>
