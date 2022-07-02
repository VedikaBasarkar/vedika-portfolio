<template>
  <div class="bg-white">
      <MainLayout>
        <div class="absolute top-0 right-0 h-screen hidden md:block">
          <!-- <div class="h-3/4 bgMazeImage" />
          <g-image class="h-3/4 bgMaze-filled" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1634025708/Vitwit%20Website/backgrounds/Regular_Page_Headers_to_move_xfhq2b.svg" /> -->
          <g-image class="h-4/5 bgMaze-stroke opacity-50" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1634025708/Vitwit%20Website/backgrounds/Regular_Page_Headers_oh64cu.svg" />
        </div>  
        <section>
            <div class="py-24 px-4 lg:container min-h-screen relative text-gray-300">
              <Title class="flex flex-row flex-wrap"><div class="text-2xl md:text-6xl">Monitoring and <br />Alert Tool</div></Title>
              <div class="text-sm md:text-lg font-thin"><g-link to="/">Home</g-link><g-link to="/services"> / Services</g-link><span class="text-secondary"> / Monitoring and Alert Tool</span></div>
              <div class="flex flex-col md:flex-row my-4 md:my-12">
                <div class="w-full md:w-3/5">
                  <div class="text-lg md:text-xl font-medium my-4">Keep an eye on your validators with our customized services.</div>
                  <div class="text-sm md:text-base font-thin text-justify">For any validator operators, it's a very tedious job to keep checking their validator health and stats continuously.  So, at Vitwit, we have developed a validator monitoring tool with the Grafana dashboard to keep track of health status at the fingertip. <br />Also, we have developed a telegram bot to notify on validator downtime and missed blocks, etc. We are helping other validator operators from the cosmos and other communities with custom monitoring and alert tools.</div>
                  <div class="text-sm md:text-base font-thin text-justify mt-2">Validator Mission Control focuses on providing helpful alerts</div>
                  <div class="flex flex-row flex-wrap w-full">
                    <div class="w-full md:pr-3 md:my-6">
                      <div class="text-sm md:text-base font-thin text-justify">
                        <div class="text-lg md:text-xl font-medium mt-4">Solution</div>
                        <div>Validator Mission Control is single, comprehensive monitoring and alerting dashboard for validator infrastructure. It streamlines validator operations and frees validators from manual status checking. The tool is easy to install and requires minimal configuration, further reducing validator operational overhead.</div>
                        
                        <div class="text-lg md:text-xl font-medium mt-4">Monitoring</div>
                        <div>Monitoring is provided via three customized Grafana dashboards. The dashboards provide consolidated, user-friendly, yet comprehensive views of a validator infrastructure's health.</div>
                        <ul class="list-disc list-outside ml-4">
                          <li>Validator Monitoring Dashboard</li>
                          <li>System Monitoring Dashboard</li>
                          <li>Summary Dashboard</li>
                        </ul>
                        
                        <div class="text-lg md:text-xl font-medium mt-4">Alerting</div>
                        <div >A custom-built alerting module complements the dashboards. The module provides configurable alerting that sends warnings and alarms when the validator systems and/or connectivity within the infrastructure experience issues.<br />The alerts are sent to a Telegram channel or email. Validators can update the code to send the alerts to any other communication channel you prefer.</div>
                        
                        <!-- <div class="text-lg md:text-xl font-medium mt-4">Common Alerts providing through Monitoring Tools</div>
                        <ul class="list-disc list-outside ml-4">
                          <li>When the validator node is DOWN</li>
                          <li>Balance change alerts – When the validator’s balance has dropped below to configured threshold</li>
                          <li>Balance delegation and undelegation alerts</li>
                          <li>Missed Block Alerts</li>
                        </ul>
                        <div class="text-lg md:text-xl font-medium mt-4">Regular status alerts</div>
                        <ul class="list-disc list-outside ml-4">
                          <li>Node health alerts at configured alert timings</li>
                          <li>Validator node status whether validator is voting or not / jailed</li>
                        </ul> -->
                      </div>
                      <g-image class="rounded-lg border border-secondary mt-10" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1640165306/Vitwit%20Website/images/dashboard.png" />
                    </div>

                  </div>
                </div>
                <div class="md:w-2/5 md:pt-10 md:pl-10">
                    <g-image class="hidden md:block md:h-56" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1639310718/Vitwit%20Website/vitwit%20raw%20assets/1._monitoring_sideload_vitwit_ortigan_ertkdz.png" />
                    <div class="w-full">
                      <div class="text-lg md:text-xl font-medium mt-4 mb-2">Types of Alerts</div>
                      <ul class="list-decimal list-outside pl-4 text-sm">
                        <li>Validator node sync status</li>
                        <li>Validator miss a block</li>
                        <li>Change in account balance</li>
                        <li>Transaction alerts - Delegations, Undelegation and Redelegation</li>
                        <li>No. of connected peers (count falls below of num_peers_threshold)</li>
                        <li>Validator “health” status, i.e. whether it's voting or jailed</li>
                      </ul>
                    </div>

                    <div class="w-full">
                      <div class="text-lg md:text-xl font-medium mt-4">Partnered Network</div>
                      <ul class="list-outside list-disc text-sm md:text-base font-thin text-justify pl-4">
                        <li>Akash</li>
                        <li>Regen</li>
                        <li>Polygon</li>
                        <li>Chainflow</li>
                        <li>Solana</li>
                        <li>Oasis</li>
                      </ul>
                    </div>
                  <!-- <g-image class="rounded-lg border border-secondary" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1640165306/Vitwit%20Website/images/dashboard.png" /> -->
                </div>
                <!-- <div class="px-8">

                  <div class="text-lg md:text-xl font-medium mt-4">Types of Alerts</div>
                  <ul>
                    <li>validator node sync status.</li>
                    <li>validator miss a block</li>
                    <li>change in account balance.</li>
                    <li>Transaction alerts - Delegations, Undelegation and Redelegation</li>
                    <li>no. of connected peers (count falls below of num_peers_threshold)</li>
                    <li>validator “health” status, i.e. whether it's voting or jailed.</li>
                  </ul>
                  <div class="text-lg md:text-xl font-medium mt-4">Partnered Network</div>
                  <ul class="list-outside list-disc text-sm md:text-base font-thin text-justify pl-4">
                    <li>Akash</li>
                    <li>Regen</li>
                    <li>Polygon</li>
                    <li>Chainflow</li>
                    <li>Solana</li>
                    <li>Oasis</li>
                  </ul>
                </div> -->
              </div>
            </div>
        </section>
      </MainLayout>
  </div>
</template>

<script>
import MainLayout from '../../../layouts/Main'
import Title from '../../../components/Title/title.vue'
export default {
    components:{
        Title,
        MainLayout
    },
}
</script>

<style>

</style>