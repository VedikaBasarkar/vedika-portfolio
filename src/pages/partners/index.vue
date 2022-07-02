<template>
  <div class="bg-dark">
      <MainLayout>
        <div class="absolute top-0 right-0 h-screen hidden md:block">
          <g-image class="h-4/5 bgMaze-stroke opacity-50" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1634025708/Vitwit%20Website/backgrounds/Regular_Page_Headers_oh64cu.svg" />
        </div>
        <div class="pt-24 px-4 lg:container relative text-gray-300">
          <Title>Partners</Title>
          <div class=" text-lg font-thin"><g-link to="/">Home</g-link><span class="text-secondary"> / Partners</span></div>
          <div>
            <div class="flex flex-col md:flex-row my-10">
              <div class="w-full md:w-1/2 md:my-10">
                <g-image
                  class="w-full md:w-3/5"
                  src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1633611949/Vitwit%20Website/partners_logo/akash_network_white.svg"
                ></g-image>
                <div class="text-sm md:text-base font-thin text-justify my-6">Akash Network, the world’s first decentralized and open-source cloud, accelerates deployment, scale, efficiency, and price performance for high-growth industries like blockchain and machine learning/AI.</div>
                <div class="text-sm md:text-base font-thin text-justify mb-6">We provide engineering services and testing support up untill now we have , Contributed to Akash cosmos SDK-based app development and testing, to leaderboard calculations and faucet setup and also contributed to IBC relayer work through Akash.</div>
              </div>
              <div class="w-full md:w-1/2 md:my-10 flex flex-col items-center">
                <div v-for="(a, index) in akashTweets"
                :key="index">
                  <g-link :to="a.url" target="_blank">
                    <g-image :src="a.image" class="md:w-96 rounded-lg border border-secondary my-2" />
                  </g-link>
                </div>
              </div>
            </div>

            <div class="flex flex-col md:flex-row my-10">
              <div class="w-full md:w-1/2 md:my-10">
              <g-image
                  class="h-24 md:h-32"
                  src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1633612820/Vitwit%20Website/partners_logo/regen_network_white.png"
                ></g-image>
                <div class="text-sm md:text-base font-thin text-justify my-6">A Global Marketplace & Contracting Platform for Earth's Ecosystem Assets, Services, and Data. Regen has regen ledger, a distributed ledger for ecology built on top of the cosmos-SDK.<br />Vitwit providing engineering services.</div>
                
              </div>
              <div class="w-full md:w-1/2 md:my-10 flex flex-col items-center">
                <div v-for="(r, index) in regenTweets"
                :key="index">
                  <g-link :to="r.url" target="_blank">
                    <g-image :src="r.image" class="md:w-96 rounded-lg border border-secondary my-2" />
                  </g-link>
                </div>
              </div>
            </div>

            <div class="flex flex-col md:flex-row my-10">
              <div class="w-full md:w-1/2 md:my-10">
                <g-image
                  class="w-full md:w-3/5"
                  src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1634191611/Vitwit%20Website/partners_logo/Polygon_Logo_white_z3syop.svg"
                ></g-image>
                <div class="text-sm md:text-base font-thin text-justify my-6">Polygon is a scaling solution for public blockchains. Based on an adapted implementation of Plasma framework (Plasma MoreVP) - with an account based implementation, Polygon supports all the existing Ethereum tooling along with faster and cheaper transactions.</div>
              </div>
              <div class="w-full md:w-1/2 md:my-10 flex flex-col items-center">
                <div v-for="(p, index) in polygonTweets"
                :key="index">
                  <g-link :to="p.url" target="_blank">
                    <g-image :src="p.image" class="md:w-96 rounded-lg border border-secondary my-2" />
                  </g-link>
                </div>
              </div>
            </div>

            <div class="flex flex-col md:flex-row my-10">
              <div class="w-full md:w-1/2 md:my-10">
                <g-image
                  class="w-full md:w-2/5"
                  src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1634190136/Vitwit%20Website/partners_logo/Chainflow_Logo_white_cym9wg.svg"
                ></g-image>
                <div class="text-sm md:text-base font-thin text-justify my-6"> Building highly available, secure &amp; independent Web3 infrastructure for a better future. Vitwit along with Chainflow developed the Cosmos Validator Mission Control monitoring and alerting dashboard. It is an open-source validator monitoring and alerting dashboard that anyone can use to monitor their Cosmos validator infrastructure.</div>
              </div>
              <div class="w-full md:w-1/2 md:my-10 flex flex-col items-center">
                <div v-for="(c, index) in chainflowTweets"
                :key="index">
                  <g-link :to="c.url" target="_blank">
                    <g-image :src="c.image" class="md:w-96 rounded-lg border border-secondary my-2" />
                  </g-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="my-6 lg:my-12">
          <div class="text-center mb-4 md:mb-16 text-secondary font-medium text-xl md:text-4xl">What our partners say about Vitwit</div>
          <div class="relative">
            <div
              class="
                px-4 lg:container
                grid grid-flow-row grid-cols-1
                lg:grid-cols-3
                gap-4
                lg:gap-6
              "
            >
              <div
                v-for="(p, index) in partners"
                :key="index"
                class="
                  h-auto
                  w-full
                  cursor-pointer
                "
              >
                <PartnersCrad :partner="p"></PartnersCrad>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
  </div>
</template>

<script>
import MainLayout from '../../layouts/Main'
import Title from '../../components/Title/title.vue'
import PartnersCrad from "../../components/Cards/PartnersCrad.vue";

export default {
    components:{
        MainLayout,
        PartnersCrad,
        Title
    },
  data() {
    return {
      partners: [
          {
              id:1,
              name:`Jack Zampolin`,
              title:`Co-Founder Product SOMMELIER`,
              url:`https://twitter.com/jack_zampolin/status/1256321835571896320`,
              content:`The @vitwit_  team has been rocking it and contributing to all layers of the stack: #tendermint, #cosmossdk, and #ibc. Mad props, and look forward to continuing to work with y'all!`
          },
          {
              id:2,
              name:`Gregory Landua`,
              title:`Co-founder Regen Network`,
              url:`https://twitter.com/gregory_landua/status/1255931690402418688`,
              content: `I can also attest. @vitwit_ is one of the best dev teams in the space and we are so proud and grateful to work with them... Excited they are supporting Akash as well.`
          },
          {
              id:3,
              name:`OmniFlix Network`,
              title:`Team OmniFlix Network`,
              url:`https://twitter.com/OmniFlixNetwork/status/1438467922268016643`,
              content: `Spl. thanks to our friends at @vitwit_ / WitVal, who deployed @aneka_io for OmniFlix!
                FlixNet-2 saw a lot:
                - 200+ validators bootstrap a chain in 1min
                - patch to fix the mismatch of IBC versions
                - high storage consumption
                & the best is yet to come!`
          },
          {
              id:4,
              name:`Gregory Landua`,
              title:`Co-founder Regen Network`,
              url:`https://twitter.com/gregory_landua/status/1221208245504790528`,
              content: `Another smooth as silk @regen_network (testnet) upgrade using the cosmosd tool developed by @aaroncraelius and Ethan Frey with the @Vitwit_India and @tendermint_team teams. Thanks to @joe__bowman and the @ChorusOne for the superb leadership and @_anilCSE and the vitwit crew.`
          },
          {
              id:5,
              name:`Persistence One`,
              title:`Team Persistence`,
              url:`https://twitter.com/PersistenceOne/status/1410988512946626560`,
              content:`1/ Ecosystem Week Day 4: Our Third Blockchain Explorer, Powered by @aneka_io, is Now Live! 🚀 🦾Aneka, created by the @vitwit_ team, is heavily utilized in the @cosmos ecosystem and features even more metrics & integrations than our current explorers.`
          },
          {
              id:6,
              name:`Persistence One`,
              title:`Team Persistence`,
              url:`https://twitter.com/PersistenceOne/status/1410988512946626560`,
              content:`2/Chart with upwards trend With Aneka, you can seamlessly access in-depth data on the Persistence blockchain including transactions, validators & addresses. Left-pointing magnifying glassYou can also dive into aspects not featured on other explorers such as wallet address count, $XPRT holdings, governance info and much more!`
          },
          {
              id:7,
              name:`Greg Osuri`,
              title:`Co-Founder & CEO Akash Network`,
              url:`https://twitter.com/gregosuri/status/1415230075666980867`,
              content: `I met @anilcse_ over a PR on GitHub in 2019 and the @vitwit_ team IRL later that winter. Since then, our partnership continues to bring incredible value to @akashnet_ and the broader @cosmos ecosystem. Happy birthday @vitwit_`
          },
          {
              id:8,
              name:`Greg Osuri`,
              title:`Co-Founder & CEO Akash Network`,
              url:`https://twitter.com/gregosuri/status/1232011838339964928`,
              content: `Just had an amazing meeting with the @Vitwit_India team, happy to announce we'll be engaging them to complement our development efforts. Their work with @regen_network is a testament to hard work and talent.`
          },
          {
              id:9,
              name:`Greg Osuri`,
              title:`Co-Founder & CEO Akash Network`,
              url:`https://twitter.com/gregosuri/status/1363854270114758658`,
              content: `@vitwit_’s contributions and commitment to $ATOM ecosystem is super underrated`
          },
      ],
      chainflowTweets: [
        {
          id:1,
          url:`https://twitter.com/ChainflowPOS/status/1384130415296880643`,
          image:`https://res.cloudinary.com/vitwit-technologies/image/upload/v1639428556/Vitwit%20Website/tweets/Chainflow_1.png`
        }
      ],
      regenTweets: [
        { 
          id:1,
          url:`https://twitter.com/regen_network/status/1430173646539079685`,
          image:`https://res.cloudinary.com/vitwit-technologies/image/upload/v1639430099/Vitwit%20Website/tweets/regen_4.png`
        
        },
        {
          id:2,
          url:`https://twitter.com/regen_network/status/1347691688182099972`,
          image:`https://res.cloudinary.com/vitwit-technologies/image/upload/v1639429860/Vitwit%20Website/tweets/regen_2.png`
        },
        // {
        //   id:3,
        //   url:`https://twitter.com/gregory_landua/status/1255931690402418688`,
        //   image:`https://res.cloudinary.com/vitwit-technologies/image/upload/v1639430060/Vitwit%20Website/tweets/regen_3.png`
        // },
        // {
        //   id:4,
        //   url:`https://twitter.com/gregory_landua/status/1221208245504790528`,
        //   image:`https://res.cloudinary.com/vitwit-technologies/image/upload/v1639429717/Vitwit%20Website/tweets/regen_1.png`
        // }
      ],
      akashTweets: [
        { 
          id:1,
          url:`https://twitter.com/akashnet_/status/1309507308888535041`,
          image:`https://res.cloudinary.com/vitwit-technologies/image/upload/v1639428551/Vitwit%20Website/tweets/akash_1.png`
        },
        {
          id:2,
          url:`https://twitter.com/akashnet_/status/1386788676890288130`,
          image:`https://res.cloudinary.com/vitwit-technologies/image/upload/v1639428638/Vitwit%20Website/tweets/akash_2.png`
        },
        // {
        //   id:3,
        //   url:`https://twitter.com/gregosuri/status/1363854270114758658`,
        //   image:`https://res.cloudinary.com/vitwit-technologies/image/upload/v1639429008/Vitwit%20Website/tweets/akash_3.png`
        // }
      ],
      polygonTweets: [
        {
          id: 1,
          url:`https://twitter.com/0xPolygon/status/1338484039691325441`,
          image:`https://res.cloudinary.com/vitwit-technologies/image/upload/v1639430272/Vitwit%20Website/tweets/polygon_1.png`
        },
        {
          id: 2,
          url: `https://twitter.com/_jdkanani/status/1415262124838903815`,
          image: `https://res.cloudinary.com/vitwit-technologies/image/upload/v1639430351/Vitwit%20Website/tweets/polygon_2.png`
        }
      ]
    };
  },
};
</script>

<style>
.customBlurBg {
  backdrop-filter: saturate(2.5) blur(6px);
  background: linear-gradient(
    200deg,
    rgba(66, 67, 70, 0.2) 0%,
    rgba(129, 128, 128, 0.2) 100%
  );
}
</style>