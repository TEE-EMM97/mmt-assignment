<template>
  <form method="post" @submit.stop.prevent="addMember">
    <v-text-field
      v-model="name"
      :counter="10"
      label="Name"
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    />
    <v-text-field
      v-model="areaOfConcern"
      :error-messages="areaOfConcernErr"
      label="Area of Concern"
      required
      @input="$v.areaOfConcern.$touch()"
      @blur="$v.areaOfConcern.$touch()"
    />
    <v-textarea
      v-model="whyIsConcern"
      :error-messages="whyIsConcernErr"
      :counter="50"
      label="Why Is It Concern"
      required
      no-resize
      @input="$v.whyIsConcern.$touch()"
      @blur="$v.whyIsConcern.$touch()"
    />
    <v-checkbox
      v-model="remainAnon"
      label="Do you agree?"
      @change="$v.remainAnon.$touch()"
      @blur="$v.remainAnon.$touch()"
    />

    <v-btn class="btn-row" @click.prevent="addMember">
      submit
    </v-btn>
    <v-btn class="btn-row" @click="clear">
      clear
    </v-btn>
    <!--NuxtLink to="/thank-you">
      Thank you
    </NuxtLink-->

    <v-simple-table fixed-header class="summary">
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
          <tr v-for="member in members" :key="member.id" :item="member">
            <td>{{ member.name }}</td>
            <td>{{ member.areaOfConcern }}</td>
            <td>{{ member.whyIsConcern }}</td>
            <td>{{ member.remainAnon }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </form>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required, maxLength } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  validations: {
    name: {
      maxLength: maxLength(10)
    },
    areaOfConcern: {
      required
    },
    whyIsConcern: {
      required,
      maxLength: maxLength(50)
    },
    remainAnon: {
      checked (val) {
        return val || !val
      }
    }
  },

  fetch ({ store }) {
    store.commit('addMember')
  },

  data () {
    return {
      name: '',
      areaOfConcern: '',
      whyIsConcern: '',
      remainAnon: false
    }
  },

  computed: {
    ...mapState({
      members: state => state.members
    }),
    areaOfConcernErr () {
      const errors = []
      if (!this.$v.areaOfConcern.$dirty) { return errors }
      !this.$v.areaOfConcern.required && errors.push('Area of Concern is required')
      return errors
    },
    whyIsConcernErr () {
      const errors = []
      if (!this.$v.whyIsConcern.$dirty) { return errors }
      !this.$v.whyIsConcern.required && errors.push('Why It Is a Concern is required')
      !this.$v.whyIsConcern.maxLength && errors.push('Name must be at most 50 characters long')
      return errors
    }
  },

  methods: {
    ...mapMutations({
      addUser: 'addUser'
    }),

    addMember () {
      this.$v.$touch()
      const user = {
        name: this.name,
        areaOfConcern: this.areaOfConcern,
        whyIsConcern: this.whyIsConcern,
        remainAnon: this.remainAnon
      }
      if (!this.$v.$invalid) {
        this.addUser(user)
        this.$store.commit('addMember')
      }
      console.log(`${this.name}`)
    },

    /* changeRoute (id) {
      this.$route.push('/thank-you')
    }, */

    clear () {
      this.$v.$reset()
      this.name = ''
      this.areaOfConcern = ''
      this.whyIsConcern = ''
      this.remainAnon = false
    }
  }
}
</script>

<style>
  .summary {
    margin-top:100px;
  }

  .v-messages__message {
    color: #e74c3c;
  }
</style>
