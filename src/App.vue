
<template>
  <div id="app">
    <!-- // STATUS BAR // -->
    <div class="container mx-auto max-w-lg">
      <div class="relative pt-1">
        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-100">
          <div
            style="width:10%; transition: width 0.5s linear"
            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-400"
          ></div>
        </div>
      </div>
    </div>
    <!-- // END STATUS BAR // -->

    <!-- // STEP ONE // -->

    <div v-show="step === 1" class="step">
      <div class="container mx-auto max-w-lg">
        <p class="text-purple-700 text-opacity-100 p-12 text-5xl">Step 1</p>
        <div class="w-full max-w-lg">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="name">First Name</label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Volodiya"
                v-model.trim="formData.firstName"
              />
              <p v-if="$v.formData.firstName.$touch()"></p>
              <p
                v-if="$v.formData.firstName.$error && !$v.formData.firstName.required"
                class="text-red-500 text-xs"
              >Обязательное поле</p>
              <p
                v-if="$v.formData.firstName.$dirty && !$v.formData.firstName.minLength"
                class="text-red-500 text-xs"
              >Здесь должно быть больше 5-и символов</p>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="lastname">Last Name</label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Petrovchenko"
                v-model="formData.lastName"
              />
              <p v-if="$v.formData.lastName.$touch()"></p>
              <p
                v-if="$v.formData.lastName.$error && !$v.formData.lastName.required"
                class="text-red-500 text-xs"
              >Обязательное поле</p>
              <p
                v-if="$v.formData.lastName.$dirty && !$v.formData.lastName.minLength"
                class="text-red-500 text-xs"
              >Здесь должно быть больше 5-и символов</p>
            </div>
            <label class="block text-gray-700 text-sm font-bold mb-2">Birth Day</label>
            <div class="flex flex-wrap mb-12 -mx-3">
              <div class="w-full lg:w-1/3 px-3 mb-6 md:mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="day"></label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="grid-city"
                  placeholder="Day"
                  v-model="formData.birthDate.day"
                  type="number"
                />
                <p v-if="$v.formData.birthDate.day.$touch()"></p>
                <p
                  v-if="$v.formData.birthDate.day.$error && !$v.formData.birthDate.day.between"
                  class="text-red-500 text-xs"
                >Не бывает такого дня )</p>
              </div>
              <div class="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="month"></label>
                <select
                  class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Month"
                  v-model="formData.birthDate.month"
                >
                  <option value hidden>Month</option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
              </div>
              <div class="w-full lg:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="year"></label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="grid-city"
                  type="text"
                  placeholder="Year"
                  v-model="formData.birthDate.year"
                />
                <p v-if="$v.formData.birthDate.year.$touch()"></p>
                <p
                  v-if="$v.formData.birthDate.year.$error && !$v.formData.birthDate.year.between"
                  class="text-red-500 text-xs"
                >Проверь год 😎</p>
              </div>
            </div>
            <div class="mx-auto max-w-lg">
              <button
                @click="nextStep"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >Next →</button>
            </div>
          </form>
          <p class="text-center text-gray-500 text-xs">&copy;2020 Gans Corp. Made with ❤️ on Vue.js.</p>
        </div>
      </div>
    </div>

    <!-- // STEP TWO // -->

    <div v-show="step === 2" class="step">
      <div class="container mx-auto max-w-lg">
        <p class="text-purple-700 text-opacity-100 p-12 text-5xl">Step 2</p>
        <div class="w-full max-w-lg">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Card Number</label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="cardnumber"
                v-mask="'####-####-####-####'"
                v-model="formData.cardNumber"
                type="text"
                placeholder="0000-0000-0000-0000"
              />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="lastname">Card Holder</label>
              <input
                class="uppercase shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Volodiya Petrovchenko"
                v-model="formData.cardHolder"
              />
            </div>

            <div class="flex flex-wrap mb-12 -mx-3">
              <div class="w-full lg:w-1/2 px-3 mb-6 md:mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="day">Expiry Date</label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="grid-city"
                  type="text"
                  placeholder="12/25"
                  v-mask="'## / ##'"
                  v-model="formData.expDate"
                />
              </div>

              <div class="w-full lg:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="year">CVV</label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="grid-city"
                  type="password"
                  placeholder="***"
                  v-mask="'###'"
                  v-model="formData.cvvNumber"
                />
              </div>
            </div>
            <div class="flex items-center justify-between">
              <button
                @click="backStep"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >← Back</button>
              <button
                @click="nextStep"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >Next →</button>
            </div>
          </form>
          <p class="text-center text-gray-500 text-xs">&copy;2020 Gans Corp. Made with ❤️ on Vue.js.</p>
        </div>
      </div>
    </div>

    <!-- // STEP THREE // -->

    <div v-show="step === 3" class="step">
      <div class="container mx-auto max-w-lg">
        <p class="text-purple-700 text-opacity-100 p-12 text-5xl">Step 3</p>
        <div class="w-full max-w-lg">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-8" for="name">Select Your Plan</label>
              <div
                class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
              >
                <input
                  type="radio"
                  name="toggle"
                  id="toggle"
                  class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
v-model="formData.typeAcc"
value="Ultimate"
                />
                <label
                  for="toggle"
                  class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer mb-3"
                ></label>
              </div>
              <label for="toggle" class="text-3xl text-gray-700">Ultimate</label>
            </div>
            <div class="mb-4">
              <div
                class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
              >
                <input
                  type="radio"
                  name="toggle"
                  id="toggle"
                  class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                v-model="formData.typeAcc"
                value="Optimal"
                />
                <label
                  for="toggle"
                  class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer mb-3"
                ></label>
              </div>
              <label for="toggle" class="text-3xl text-gray-700">Optimal</label>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="name"></label>
              <!-- <button
                type="button"
                value="Base"
                class="w-1/2 sm:w-auto md:w-full lg:w-32 xl:w-3/4 bg-teal-400 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full mb-16"
              >Base</button>-->
              <div
                class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
              >
                <input
                  type="radio"
                  name="toggle"
                  id="toggle"
                  class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                v-model="formData.typeAcc"
                value="Base"
                />
                <label
                  for="toggle"
                  class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer mb-3"
                ></label>
              </div>
              <label for="toggle" class="text-3xl text-gray-700">BASE</label>
            </div>
            <div class="flex items-center justify-between">
              <button
                @click="backStep"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >← Back</button>
              <button
                @click.prevent="redirSuccess"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >Register</button>
            </div>
          </form>
          <p class="text-center text-gray-500 text-xs">&copy;2020 Gans Corp. Made with ❤️ on Vue.js.</p>
        </div>
      </div>
    </div>

    <!-- // SUCCESS // -->

    <div v-show="step === 4" class="step">
      <div class="container mx-auto max-w-lg">
        <p class="text-purple-700 text-opacity-100 p-12 text-5xl">Success!</p>
        <div class="w-full max-w-lg">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <img src="@/img/success.png" alt="success" class="mx-auto max-w-lg" />
            </div>
          </form>
          <p class="text-center text-gray-500 text-xs">&copy;2020 Gans Corp. Made with ❤️ on Vue.js.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, between } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  name: "App",
  component: {},
  data() {
    return {
      step: 1,
      formData: {
        cardNumber: "",
        cardHolder: "",
        cvvNumber: "",
        expDate: "",
        typeAcc: "",
        firstName: "",
        lastName: "",
        birthDate: { day: "", month: "", year: "" }
      }
    };
  },
  validations: {
    formData: {
      firstName: { required, minLength: minLength(3) },
      lastName: { required, minLength: minLength(4) },
      birthDate: {
        day: { between: between(1, 31) },
        year: { between: between(1920, 2020) }
      }
    }
  },
  methods: {
    nextStep() {
      this.step++;
    },
    backStep() {
      this.step--;
    },
    redirSuccess() {
this.step++
console.log(this.formData)
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* CHECKBOX TOGGLE SWITCH */
/* @apply rules for documentation, these do not work as inline style */
.toggle-checkbox:checked {
  @apply: right-0 border-green-400;
  right: 0;
  border-color: #68d391;
}
.toggle-checkbox:checked + .toggle-label {
  @apply: bg-green-400;
  background-color: #68d391;
}
</style>
