<template>
  <div style="position: relative" class="w-full">
    <ValidationObserver
      v-slot="{ invalid }"
      ref="form"
      @submit.prevent="submit"
    >
      <form class="overflow-y-hidden w-full">
        <!-- Name of candidate -->
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

        <!-- Email of candidate -->
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

        <!-- Contact of candidate -->
        <div class="my-6">
          <ValidationProvider rules="required|digits:10" v-slot="{ errors }">
            <input
              class="block w-full textarea text-md px-4 py-2"
              type="number"
              name="contact"
              placeholder="Enter your contact number"
              v-model="contact"
            />
            <div class="text-red-300 font-base text-xs h-2 pt-1">
              {{ errors[0] }}
            </div>
          </ValidationProvider>
        </div>

        <!-- enter profile -->
        <div class="my-6">
          <ValidationProvider rules="" v-slot="{ errors }">
            <input
              class="block w-full textarea text-md px-4 py-2"
              type="text"
              name="profile"
              placeholder="Enter profile you're applying"
              v-model="profile"
            />
            <div class="text-red-300 font-base text-xs h-2 pt-1">
              {{ errors[0] }}
            </div>
          </ValidationProvider>
        </div>

        <div class="my-6">
          <!-- upload resume -->
          <ValidationProvider rules="required" v-slot="{ errors }">
            <input
              class="block w-full textarea text-md px-4 py-2 custom-file-input"
              type="file"
              name="resume"
              placeholder="Upload you resume"
              @change="getFile"
            />
            <div class="text-red-300 font-base text-xs h-2 pt-1">
              {{ errors[0] }}
            </div>
          </ValidationProvider>
        </div>

        <!-- Type of job (internship / full time) -->
        <div class="my-6 flex flex-row flex-wrap">
          <div class="w-full md:w-2/3">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <div class="w-full flex flex-row ml-0 md:py-3">
                <input
                  type="radio"
                  id="internship"
                  value="internship"
                  name="radio"
                  v-model="jobtype"
                />
                <label for="internship">Internship</label>
                <input
                  type="radio"
                  id="fullTime"
                  value="fullTime"
                  name="radio"
                  checked="checked"
                  v-model="jobtype"
                />
                <label for="fullTime">Full Time</label>
              </div>
              <div class="text-red-300 font-base text-xs h-2 pt-1">
                {{ errors[0] }}
              </div>
            </ValidationProvider>
          </div>
          <div class="w-full md:w-1/3">
            <button
              :disabled="invalid"
              class="rounded-md"
              :class="
                invalid
                  ? 'flex w-full text-md px-3 py-2 bg-gray-300 text-dark focus:outline-none focus:shadow-outline cursor-not-allowed'
                  : 'flex w-full text-md px-4 py-2 bg-secondary text-dark focus:outline-none focus:shadow-outline hover:bg-secondaryDark'
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
      contact: "",
      jobtype: "",
      profile: "",
      resume: "",
      supportedFileTypes: ["application/pdf"],
    };
  },
  methods: {
    getFile(e) {
      this.resume = e.target.files[0];
      let size = (this.resume.size / (1024 * 1024)).toFixed(2);
      if (size > 2) {
        this.$vs.notification({
          square: true,
          duration: 8000,
          color: "danger",
          position: "bottom-center",
          title: " Some Error Occured",
          text: `Image ${this.resume.name} is too large. Max size is 2MB`,
        });
        this.resume = "";
      } else if (!this.supportedFileTypes.includes(this.resume.type)) {
        this.$vs.notification({
          square: true,
          duration: 8000,
          color: "danger",
          position: "bottom-center",
          title: " Some Error Occured",
          text: `Image ${this.resume.name} is not a valid image file. Please upload images of format: .pdf below size 2MB`,
        });
        this.resume = "";
      }
    },
    submit() {
      this.loading = true;
      var form = new FormData();
      var body = {
        name: this.name,
        email: this.email,
        contact: this.contact,
        jobtype: this.jobtype,
        profile: this.profile,
      }
      form.append("subject", "New career enquiry is here");
      form.append("body", JSON.stringify(body));
      form.append("attachments[]", this.resume);
      axios
        .post("https://formail-api.ortigan.dev/api/send", form, {
          headers: {
            "Content-Type": "multipart/form-data",
            "X-Requested-With": "XMLHttpRequest",
            apikey: "9DDAjSGvoJFAxOCS",
          },
        })
        .then((res) => {
          this.loading = false;
          this.$vs.notification({
            square: true,
            duration: 10000,
            color: "success",
            position: "bottom-center",
            title: "🌟 Resume Submitted Successfully",
            text: `👏 Thank you for contacting! Our representative will contact you on the provided details.`,
          });
          this.$router.push("/");
          this.clearFields();
        })
        .catch((err) => {
          this.loading = false;
          this.$vs.notification({
            square: true,
            duration: 10000,
            color: "danger",
            position: "bottom-center",
            title: " Some Error Occured",
            text: `Some error occcured. Please try again`,
          });
        });
    },
    clearFields() {
      this.name =
        this.email =
        this.contact =
        this.jobtype =
        this.profile =
        this.resume =
          null;
      this.$nextTick(() => {
        this.$refs.form.reset();
      });
    },
  },
};
</script>
<style scoped>
.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}
.custom-file-input::before {
  content: url(https://res.cloudinary.com/vitwit-technologies/image/upload/v1636453391/Vitwit%20Website/icons/Vector_2_ta5p4r.svg);
  /* place-content: inherit; */
  display: inline-block;
  border: none;
  outline: none;
  white-space: nowrap;
  cursor: pointer;
  color: #e5e7eb;
  font-size: 10px;
}
.custom-file-input:hover::before {
  border-color: black;
}
.custom-file-input:active::before {
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
}
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

/* Radio button css */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
}

[type="radio"]:checked,
[type="radio"]:not(:checked) {
  position: absolute;
  left: -9999px;
}
[type="radio"]:checked + label,
[type="radio"]:not(:checked) + label {
  position: relative;
  padding: 0px 30px;
  cursor: pointer;
  line-height: 16px;
  display: inline-block;
  color: #e5e7eb;
}
[type="radio"]:checked + label:before,
[type="radio"]:not(:checked) + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 18px;
  height: 18px;
  /* border: 1px solid #ddd; */
  border-radius: 100%;
  background: #99f3bd;
}
[type="radio"]:checked + label:after,
[type="radio"]:not(:checked) + label:after {
  content: "";
  width: 14px;
  height: 14px;
  background: #99f3bd;
  border: 2px solid #000;
  position: absolute;
  top: 2px;
  left: 2px;
  border-radius: 100%;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
[type="radio"]:not(:checked) + label:after {
  opacity: 0;
  -webkit-transform: scale(0);
  transform: scale(0);
}
[type="radio"]:checked + label:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}
</style>
