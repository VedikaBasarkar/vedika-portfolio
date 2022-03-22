<template>
  <div style="position: relative" class="w-full">
    <ValidationObserver
      v-slot="{ invalid }"
      ref="form"
      @submit.prevent="submit"
    >
      <form class="overflow-y-hidden w-full">
        <div class="my-6">
          <ValidationProvider rules="required" v-slot="{ errors }">
            <input
              class="block w-full textarea text-md px-4 py-2"
              type="text"
              name="name"
              placeholder="Enter your name"
              v-model="name"
            />
            <div class="text-red-300 font-base text-xs h-2 pt-1">
              {{ errors[0] }}
            </div>
          </ValidationProvider>
        </div>
        <div class="my-6">
          <ValidationProvider rules="required|email" v-slot="{ errors }">
            <input
              class="block w-full textarea text-md px-4 py-2"
              type="text"
              name="email"
              placeholder="Enter your email"
              v-model="email"
            />
            <div class="text-red-300 font-base text-xs h-2 pt-1">
              {{ errors[0] }}
            </div>
          </ValidationProvider>
        </div>

        <div class="my-6">
          <ValidationProvider rules="" v-slot="{ errors }">
            <textarea
              style="resize: none"
              name="message"
              v-model="message"
              placeholder="Write your message"
              cols="20"
              rows="6"
              class="w-full textarea text-md px-4 py-2"
            >
            </textarea>
            <div class="text-red-300 font-base text-xs h-2 pt-1">
              {{ errors[0] }}
            </div>
          </ValidationProvider>
        </div>
        <div class="flex justify-center flex-row w-full my-3">
          <button
            :disabled="invalid"
            class="rounded-md"
            :class="
              invalid
                ? 'flex text-md px-3 py-2 bg-gray-300 text-dark focus:outline-none focus:shadow-outline cursor-not-allowed'
                : 'flex text-md px-4 py-2 bg-secondary text-dark focus:outline-none focus:shadow-outline hover:bg-secondaryDark'
            "
            type="submit"
          >
            <p>Submit</p>
            <p v-if="loading" class="ml-2">
              <half-circle-spinner
                :animation-duration="1000"
                :size="20"
                :color="'#fff'"
              />
            </p>
          </button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>
<script>
import axios from "../../axios";

export default {
  data() {
    return {
      loading: false,
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    submit() {
      this.loading = true;
      const data = {
        subject: "Hello, New contact enquiry is here.",
        body: {
          name: this.name,
          email: this.email,
          message: this.message,
        },
      }
        axios.post("https://formail-api.ortigan.dev/api/send", data, {
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            apikey: "9DDAjSGvoJFAxOCS",
          },
        })
        .then((res) => {
          this.loading = false;
          this.$vs.notification({
            square: true,
            duration: 6000,
            color: "success",
            position: "bottom-center",
            title: "🌟 Enquiry Sent Successfully",
            text: `👏 Thank you for contacting! Our representative will contact you on the provided details.`,
          });
          this.$router.push("/");
          this.clearFields();
        })
        .catch((err) => {
          this.loading = false;
          this.$vs.notification({
            square: true,
            duration: 6000,
            color: "danger",
            position: "bottom-center",
            title: " Some Error Occured",
            text: `Some error occcured. Please try again`,
          });
        });
    },
    clearFields() {
      this.name = this.email = this.message = null;
      this.$nextTick(() => {
        this.$refs.form.reset();
      });
    },
  },
};
</script>
<style scoped>
.textarea {
  backdrop-filter: saturate(2.5) blur(6px);
  background: linear-gradient(
    200deg,
    rgba(66, 67, 70, 0.2) 0%,
    rgba(129, 128, 128, 0.2) 100%
  );
  outline: none;
  border-radius: 7px;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
}
</style>
