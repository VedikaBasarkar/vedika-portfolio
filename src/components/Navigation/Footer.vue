<template>
  <div class="text-gray-100 text-sm py-10">
    <footer>
      <div
        class="
          container
          w-full
          flex flex-col
          md:flex-row
          items-center
          justify-center
          md:justify-between
        "
      >
        <div class="w-full flex flex-row justify-center md:w-2/5 my-3 md:my-0">
          <g-image
            class="w-56 md:w-full"
            src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1635195566/Vitwit%20Website/vitwit_logo/footer_vitwit_logo.svg"
          />
        </div>
        <div
          class="
            w-full
            md:w-1/5
            my-3
            flex flex-row
            justify-center
            md:flex-col
            px-0
            md:px-4
          "
        >
          <div class="flex flex-row justify-start md:justify-center">
            <!-- map redirection -->
            <a href="https://g.page/vitwit?share" target="_blank">
              <g-image
                class="ml-2 md:m-1 h-10 md:h-14"
                src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1635195491/Vitwit%20Website/icons/location_icon.svg"
              />
            </a>
            <!-- call redirection -->
            <a href="tel:+918500192539" target="_blank">
              <g-image
                class="ml-2 md:m-1 h-10 md:h-14"
                src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1635195491/Vitwit%20Website/icons/contact_logo.svg"
              />
            </a>
          </div>
          <div class="flex flex-row justify-start md:justify-center">
            <!-- whatsapp redirection -->
            <a
              href="https://wa.me/918500192539?text=Hello%20Vitwit"
              target="_blank"
            >
              <g-image
                class="ml-2 md:m-1 h-10 md:h-14"
                src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1635195491/Vitwit%20Website/icons/whatsapp_logo.svg"
              />
            </a>
            <!-- mail redirection -->
            <a href="mailto:contact@vitwit.com" target="_blank">
              <g-image
                class="ml-2 md:m-1 h-10 md:h-14"
                src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1635195490/Vitwit%20Website/icons/email_logo.svg"
              />
            </a>
          </div>
        </div>
        <div
          class="
            w-full
            md:w-2/5
            my-3
            text-center
            md:text-left
            text-xs
            md:text-base
            font-thin
          "
        >
          <p class="text-white mb-2">
            Copyright © {{ new Date().getFullYear() }} Vitwit. All Rights
            Reserved.
          </p>
          <p class="text-gray-400 cursor-pointer">
            Privacy Policy - Terms &amp; Conditions
          </p>
          <p>
            Designed & Developed By
            <a href="https://www.ortigan.com/" target="__blank"
              ><span class="italic font-semibold">Ortigan</span></a
            >
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>