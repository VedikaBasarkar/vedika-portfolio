<template>
  <div class="bg-white">
    <MainLayout>
      <div class="absolute top-0 right-0 h-screen hidden md:block">
          <g-image class="h-4/5 bgMaze-stroke opacity-50" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1634025708/Vitwit%20Website/backgrounds/Regular_Page_Headers_oh64cu.svg" />
        </div>
      <!-- <div
        class="
          absolute
          opacity-20
          left-0
          top-0
          h-full
          transform
         translate-x-1/2
          lg:-translate-x-1/2 lg:-translate-y-1/4
        "
      >
        <g-image
          class="min-h-screen w-full"
          src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1634126756/Vitwit%20Website/backgrounds/Blobs-Free/lhs_green_free_wf9rja.svg"
        ></g-image>
      </div> -->
      <section>
        <div
          class="py-16 px-4 lg:container min-h-screen relative text-gray-300"
        >
          <Title>CAREERS</Title>
          <div class="text-lg font-thin">
            <g-link to="/">Home</g-link
            ><span class="text-secondary"> / Careers</span>
          </div>

          <div class="flex flex-col md:flex-row my-8 md:my-16">
            <div class="w-full md:w-3/5">
              <div
                class="
                  text-sm
                  md:text-base
                  lg:text-lg
                  font-thin
                  leading-snug
                  md:leading-8
                  text-justify
                "
              >
                Learning and execution are our core cultural values. Passion is
                our identity, and innovation is our target. Transformation is
                our achievement.
              </div>
              <div
                class="
                  text-sm
                  md:text-base
                  lg:text-lg
                  font-thin
                  leading-snug
                  md:leading-8
                  text-justify
                "
              >
                <span class="font-bold"
                  >“Learn fast, fail fast, and win fast”</span
                >
                is our motto.
              </div>
              <div
                class="
                  text-sm
                  md:text-base
                  lg:text-lg
                  font-thin
                  leading-snug
                  md:leading-8
                  text-justify
                "
              >
                If any of the job openings excites you. Send us your
                applications through careers@vitwit.com
              </div>
            </div>
            <div class="md:flex flex-row justify-center w-full md:w-2/5 hidden">
              <!-- <g-image class="" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1638448525/Vitwit%20Website/vitwit%20raw%20assets/career_illustration_bnzrmd.png" /> -->
            </div>
          </div>

          <!-- career Opportunities -->
          <accordion>
            <!-- blockchain developer -->
            <accordion-item>
              <!-- Clickable Title/header of the accordion -->
              <template slot="accordion-trigger"
                >#1 Blockchain developer</template
              >
              <!-- Accordion content -->
              <template slot="accordion-content">
                <div class="flex flex-col md:flex-row">
                  <div class="w-full md:w-3/5 mb-10">
                    <div class="text-xl md:text-2xl font-medium my-4">
                      Job Description
                    </div>
                    <div
                      class="
                        text-sm
                        md:text-base
                        lg:text-lg
                        font-thin
                        leading-snug
                        md:leading-8
                        text-justify
                      "
                    >
                      We are looking for passionate Blockchain developers who
                      can work on one of the top PoS networks. To contribute to
                      blockchain's core concepts like consensus, governance, and
                      p2p. Good understanding of protocols and implementation
                      details. Strong knowledge of Go lang is required. Any
                      open-source contributions are a plus.
                    </div>
                    <br />
                    <div class="text-xl md:text-2xl font-medium my-4">
                      Prerequsite Requirment
                    </div>
                    <ul
                      class="
                        list-outside list-disc
                        text-sm
                        md:text-base
                        lg:text-lg
                        font-thin
                        leading-snug
                        md:leading-8
                        text-justify
                        pl-4
                      "
                    >
                      <li>
                        Minimum 4 years of software development and
                        infrastructure architecture experience.
                      </li>
                      <li>
                        Experience in leading blockchain development teams, open
                        source technologies.
                      </li>
                      <li>Good knowledge of Cosmos SDK.</li>
                      <li>
                        Hands-on experience developing proof-of-concept and
                        pilots in at least one of the blockchain platforms such
                        as Ethereum.
                      </li>
                      <li>
                        Hands-on experience in using any of the following
                        Node.js, GoLang.
                      </li>
                      <li>
                        Solid understanding of the practical application of
                        agile development methods in an Agile/Lean/Continuous
                        Delivery environment.
                      </li>
                      <li>
                        Understanding of the issues businesses face and
                        experience working with them to create robust, scalable,
                        elegant, flexible and relevant software solutions that
                        truly transform industries.
                      </li>
                      <li>Knowledge of CI/CD is a plus.</li>
                    </ul>
                    <br />
                    <div class="text-xl md:text-2xl font-medium my-4">
                      Your role entitle
                    </div>
                    <ul
                      class="
                        list-outside list-disc
                        text-sm
                        md:text-base
                        lg:text-lg
                        font-thin
                        leading-snug
                        md:leading-8
                        text-justify
                        pl-4
                      "
                    >
                      <li>
                        Work effectively with cross-functional teams including
                        product management to translate requirements to code,
                        with test teams to troubleshoot, isolate issues and
                        provide root cause, ensuring that the software developed
                        is of the highest quality.
                      </li>
                      <li>
                        Develop reusable frameworks/components and
                        Proof-of-Concepts required to accelerate the development
                        process.
                      </li>
                      <li>
                        Take end to end technical ownership of modules, develop
                        and deliver production code.
                      </li>
                    </ul>
                  </div>
                  <div class="w-full md:w-2/5 flex flex-col justify-end mb-10">
                    <g-image
                      class="h-44 hidden md:flex md:my-28"
                      src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1634024951/Vitwit%20Website/careers/block.svg"
                    />
                    <div class="md:ml-16">
                      <div class="my-6">
                        <div class="font-bold">Timings :</div>
                        <div class="text-xl">Regular Shift</div>
                      </div>
                      <div class="my-6">
                        <div class="font-bold">Location :</div>
                        <div class="text-xl">Madhapur, Hyderabad</div>
                      </div>
                      <div class="my-6">
                        <div class="font-bold">Apply Via :</div>
                        <div class="text-xl">
                          <!-- <g-link
                            to="https://angel.co/company/vitwit/jobs"
                            class="italic underline hover:text-secondary"
                            >Angle.co</g-link
                          >&nbsp; |&nbsp; -->
                          <g-link
                            to="https://www.linkedin.com/company/vitwit/jobs/"
                            class="italic underline hover:text-secondary"
                            >LinkedIn</g-link
                          >&nbsp; |&nbsp;
                          <g-link
                            to="https://in.indeed.com/jobs?q=vitwit&l=India"
                            class="italic underline hover:text-secondary"
                            >Indeed</g-link
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </accordion-item>

            <!-- full stack developer -->
            <accordion-item>
              <!-- Clickable Title/header of the accordion -->
              <template slot="accordion-trigger"
                >#2 Full-stack developer</template
              >
              <!-- Accordion content -->
              <template slot="accordion-content">
                <div class="flex flex-col md:flex-row">
                  <div class="w-full md:w-3/5 mb-10">
                    <div class="text-xl md:text-2xl font-medium my-4">
                      Job Description
                    </div>
                    <div
                      class="
                        text-sm
                        md:text-base
                        lg:text-lg
                        font-thin
                        leading-snug
                        md:leading-8
                        text-justify
                      "
                    >
                      We are looking for Full stack developers who are experts
                      in software development, algorithm skills, and
                      object-oriented things. We are looking for the developers
                      who are very passionate to identify and solve the problem
                      with creative and simple solutions.
                    </div>
                    <br />
                    <div class="text-xl md:text-2xl font-medium my-4">
                      Prerequsite Requirment
                    </div>
                    <ul
                      class="
                        list-outside list-disc
                        text-sm
                        md:text-base
                        lg:text-lg
                        font-thin
                        leading-snug
                        md:leading-8
                        text-justify
                        pl-4
                      "
                    >
                      <li>
                        Strong proficiency in Javascript, NodeJS, and ReactJS
                        frameworks.
                      </li>
                      <li>
                        1-2 years experience in Node js, react js, javascript
                      </li>
                      <li>
                        Hands-on experience with dev-ops like grunt, gulp, and
                        Jenkins, etc.
                      </li>
                      <li>
                        Thorough knowledge of software development best
                        practices, including coding standards, code reviews,
                        source control management, build process, continuous
                        integration and continuous delivery.
                      </li>
                    </ul>
                    <br />
                    <div class="text-xl md:text-2xl font-medium my-4">
                      Your role entitle
                    </div>
                    <ul
                      class="
                        list-outside list-disc
                        text-sm
                        md:text-base
                        lg:text-lg
                        font-thin
                        leading-7
                        md:leading-8
                        text-justify
                        pl-4
                      "
                    >
                      <li>
                        Understanding design principles and detailed knowledge
                        of database architectures
                      </li>
                      <li>
                        Designing tools for systems to meet business needs
                      </li>
                      <li>
                        Contributes to best practice system and application
                        design
                      </li>
                      <li>
                        Designing, coding, and testing programs and scripts from
                        the agreed specification
                      </li>
                      <li>
                        Ensuring agreed standards and tools are in place to
                        achieve a well-engineered product
                      </li>
                      <li>
                        Conducting releases to production environments and
                        setting up post-release reviews
                      </li>
                      <li>Analyzing release components</li>
                      <li>
                        Takes part in reviewing own work and leads reviews of
                        colleague’s work (unit testing, code review)
                      </li>
                      <li>
                        Contributing ideas and experience to new development
                        solutions
                      </li>
                      <li>
                        Provide support in development processes and techniques
                      </li>
                      <li>
                        Developing specialist knowledge of database concepts and
                        data modeling techniques.
                      </li>
                      <li>
                        Analyzing data requirements to establish, adapt and
                        maintain data models.
                      </li>
                      <li>
                        Close cooperation with the development team and business
                        to carry out builds and testing
                      </li>
                    </ul>
                  </div>
                  <div class="w-full md:w-2/5 flex flex-col justify-end mb-10">
                    <g-image
                      class="h-44 hidden md:flex md:my-28"
                      src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1634024951/Vitwit%20Website/careers/block.svg"
                    />
                    <div class="md:ml-16">
                      <div class="my-6">
                        <div class="font-bold">Timings :</div>
                        <div class="text-xl">Regular Shift</div>
                      </div>
                      <div class="my-6">
                        <div class="font-bold">Location :</div>
                        <div class="text-xl">Madhapur, Hyderabad</div>
                      </div>
                      <div class="my-6">
                        <div class="font-bold">Apply Via :</div>
                        <div class="text-xl">
                          <!-- <g-link
                            to="https://angel.co/company/vitwit/jobs"
                            class="italic underline hover:text-secondary"
                            >Angle.co</g-link
                          >&nbsp; |&nbsp; -->
                          <g-link
                            to="https://www.linkedin.com/company/vitwit/jobs/"
                            class="italic underline hover:text-secondary"
                            >LinkedIn</g-link
                          >&nbsp; |&nbsp;
                          <g-link
                            to="https://in.indeed.com/jobs?q=vitwit&l=India"
                            class="italic underline hover:text-secondary"
                            >Indeed</g-link
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </accordion-item>

            <!-- Typescript developer -->
            <accordion-item>
              <!-- Clickable Title/header of the accordion -->
              <template slot="accordion-trigger"
                >#3 Typescript developer</template
              >
              <!-- Accordion content -->
              <template slot="accordion-content">
                <div class="flex flex-col md:flex-row">
                  <div class="w-full md:w-3/5 mb-10">
                    <div class="text-xl md:text-2xl font-medium my-4">
                      Job Description
                    </div>
                    <div
                      class="
                        text-sm
                        md:text-base
                        lg:text-lg
                        font-thin
                        leading-7
                        md:leading-8
                        text-justify
                      "
                    >
                      We are looking for a TypeScript Developer to help us in
                      creating the best user experience and UI.
                    </div>
                    <br />
                    <div class="text-xl md:text-2xl font-medium my-4">
                      Prerequsite Requirment
                    </div>
                    <ul
                      class="
                        list-outside list-disc
                        text-sm
                        md:text-base
                        lg:text-lg
                        font-thin
                        leading-7
                        md:leading-8
                        text-justify
                        pl-4
                      "
                    >
                      <li>Bachelor’s or Master's degree in Computer Science</li>
                      <li>
                        Understanding of system administration in Linux
                        environments
                      </li>
                      <li>
                        Strong knowledge of configuration management tools
                      </li>
                      <li>
                        Familiarity with continuous integration tools such as
                        Jenkins, Travis CI, Circle CI
                      </li>
                      <li>
                        Proficiency in scripting languages including Bash,
                        Python, and JavaScript
                      </li>
                      <li>Strong communication and documentation skills</li>
                      <li>
                        An ability to drive to goals and milestones while
                        valuing and maintaining strong attention to detail
                      </li>
                      <li>
                        Excellent judgment, analytical thinking, and
                        problem-solving skills
                      </li>
                      <li>
                        Full understanding of software development lifecycle
                        best practices
                      </li>
                    </ul>
                    <br />
                    <div class="text-xl md:text-2xl font-medium my-4">
                      Your role entitle
                    </div>
                    <ul
                      class="
                        list-outside list-disc
                        text-sm
                        md:text-base
                        lg:text-lg
                        font-thin
                        leading-7
                        md:leading-8
                        text-justify
                        pl-4
                      "
                    >
                      <li>
                        Plan, develop and implement user interface strategy
                      </li>
                      <li>
                        Work with designers and developers to develop modern,
                        intuitive user interfaces for our web properties.
                      </li>
                      <li>
                        Work on design, look, and feel of our web properties
                      </li>
                      <li>Continuously improve the user experience</li>
                      <li>Research user preferences</li>
                      <li>Research new technologies and best practices</li>
                      <li>
                        Work in a team environment with shared code; disciplined
                        use of source code control and process documentation.
                      </li>
                      <li>
                        Improve JS and CSS quality by conducting code analysis,
                        and recommending changes in policies and procedures.
                      </li>
                    </ul>
                  </div>
                  <div class="w-full md:w-2/5 flex flex-col justify-end mb-10">
                    <g-image
                      class="h-44 hidden md:flex md:my-28"
                      src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1634024951/Vitwit%20Website/careers/block.svg"
                    />
                    <div class="md:ml-16">
                      <div class="my-6">
                        <div class="font-bold">Timings :</div>
                        <div class="text-xl">Regular Shift</div>
                      </div>
                      <div class="my-6">
                        <div class="font-bold">Location :</div>
                        <div class="text-xl">Madhapur, Hyderabad</div>
                      </div>
                      <div class="my-6">
                        <div class="font-bold">Apply Via :</div>
                        <div class="text-xl">
                          <!-- <g-link
                            to="https://angel.co/company/vitwit/jobs"
                            class="italic underline hover:text-secondary"
                            >Angle.co</g-link
                          >&nbsp; |&nbsp; -->
                          <g-link
                            to="https://www.linkedin.com/company/vitwit/jobs/"
                            class="italic underline hover:text-secondary"
                            >LinkedIn</g-link
                          >&nbsp; |&nbsp;
                          <g-link
                            to="https://in.indeed.com/jobs?q=vitwit&l=India"
                            class="italic underline hover:text-secondary"
                            >Indeed</g-link
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </accordion-item>

            <!-- Devops developer -->
            <accordion-item>
              <!-- Clickable Title/header of the accordion -->
              <template slot="accordion-trigger"
              >#4 Devops developer</template>
              <!-- Accordion content -->
              <template slot="accordion-content">
                <div class="flex flex-col md:flex-row">
                  <div class="w-full md:w-3/5 mb-10">
                    <div class="text-xl md:text-2xl font-medium my-4">
                      Job Description
                    </div>
                    <div
                      class="
                        text-sm
                        md:text-base
                        lg:text-lg
                        font-thin
                        leading-7
                        md:leading-8
                        text-justify
                      "
                    >
                      We are looking for a hands-on DevOps Engineer who will
                      lead the way for our DevOps environment. The ideal
                      engineer will bring their experiences, best practices, and
                      a collaborative attitude to help drive DevOps initiatives.
                      To be successful, one must effectively communicate with
                      our development and operations team to orchestrate the
                      creation of solutions that can scale.
                    </div>
                    <br />
                    <div class="text-xl md:text-2xl font-medium my-4">
                      Prerequsite Requirment
                    </div>
                    <ul
                      class="
                        list-outside list-disc
                        text-sm
                        md:text-base
                        lg:text-lg
                        font-thin
                        leading-7
                        md:leading-8
                        text-justify
                        pl-4
                      "
                    >
                      <li>Bachelor’s or Master's degree in Computer Science</li>
                      <li>
                        Understanding of system administration in Linux
                        environments
                      </li>
                      <li>
                        Strong knowledge of configuration management tools
                      </li>
                      <li>
                        Familiarity with continuous integration tools such as
                        Jenkins, Travis CI, Circle CI
                      </li>
                      <li>
                        Proficiency in scripting languages including Bash,
                        Python, and JavaScript
                      </li>
                      <li>Strong communication and documentation skills</li>
                      <li>
                        An ability to drive to goals and milestones while
                        valuing and maintaining strong attention to detail
                      </li>
                      <li>
                        Excellent judgment, analytical thinking, and
                        problem-solving skills
                      </li>
                      <li>
                        Full understanding of software development lifecycle
                        best practices
                      </li>
                    </ul>
                    <br />
                    <div class="text-xl md:text-2xl font-medium my-4">
                      Your role entitle
                    </div>
                    <ul
                      class="
                        list-outside list-disc
                        text-sm
                        md:text-base
                        lg:text-lg
                        font-thin
                        leading-7
                        md:leading-8
                        text-justify
                        pl-4
                      "
                    >
                      <li>
                        Build and test code continuously with scripting and
                        programming languages
                      </li>
                      <li>
                        Manage, track and document changes to code with source
                        control tools
                      </li>
                      <li>
                        Deploy applications via automation with configuration
                        management tools
                      </li>
                      <li>
                        Measure performance and environment of application with
                        system & application log tools
                      </li>
                      <li>
                        Deploy and maintain critical applications on
                        cloud-native microservices architecture
                      </li>
                      <li>
                        Implement automation, effective monitoring, and
                        infrastructure-as-code
                      </li>
                      <li>
                        Deploy and maintain CI/CD pipelines across multiple
                        environments
                      </li>
                      <li>
                        Support and work alongside a cross-functional
                        engineering team on the latest technologies
                      </li>
                      <li>
                        Iterate on best practices to increase the quality &
                        velocity of deployments
                      </li>
                      <li>
                        Sustain and improve the process of knowledge sharing
                        throughout the engineering team
                      </li>
                      <li>
                        Have on-call responsibilities in rotation with the
                        engineering team
                      </li>
                    </ul>
                    <br />
                  </div>
                  <div class="w-full md:w-2/5 flex flex-col justify-end mb-10">
                    <g-image
                      class="h-44 hidden md:flex md:my-28"
                      src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1634024951/Vitwit%20Website/careers/block.svg"
                    />
                    <div class="md:ml-16">
                      <div class="my-6">
                        <div class="font-bold">Timings :</div>
                        <div class="text-xl">Regular Shift</div>
                      </div>
                      <div class="my-6">
                        <div class="font-bold">Location :</div>
                        <div class="text-xl">Madhapur, Hyderabad</div>
                      </div>
                      <div class="my-6">
                        <div class="font-bold">Apply Via :</div>
                        <div class="text-xl">
                          <!-- <g-link
                            to="https://angel.co/company/vitwit/jobs"
                            class="italic underline hover:text-secondary"
                            >Angle.co</g-link
                          >&nbsp; |&nbsp; -->
                          <g-link
                            to="https://www.linkedin.com/company/vitwit/jobs/"
                            class="italic underline hover:text-secondary"
                            >LinkedIn</g-link
                          >&nbsp; |&nbsp;
                          <g-link
                            to="https://in.indeed.com/jobs?q=vitwit&l=India"
                            class="italic underline hover:text-secondary"
                            >Indeed</g-link
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </accordion-item>

            <!-- frontend developer -->
            <accordion-item>
              <!-- Clickable Title/header of the accordion -->
              <template slot="accordion-trigger" class="cursor-pointer"
                >#5 Frontend developer</template
              >
              <!-- Accordion content -->
              <template slot="accordion-content">
                <div class="flex flex-col md:flex-row">
                  <div class="w-full md:w-3/5 mb-10">
                    <div class="text-xl md:text-2xl font-medium my-4">
                      Job Description
                    </div>
                    <div
                      class="
                        text-sm
                        md:text-base
                        lg:text-lg
                        font-thin
                        leading-7
                        md:leading-8
                        text-justify
                      "
                    >
                      We are looking for passionate React developers who
                      understand the intricacies and insanity of cross-browser
                      development. People who are capable and willing to play a
                      key part in shaping the future of Agile software
                      development.
                    </div>
                    <br />
                    <div class="text-xl md:text-2xl font-medium my-4">
                      Prerequsite Requirment
                    </div>
                    <ul
                      class="
                        list-outside list-disc
                        text-sm
                        md:text-base
                        lg:text-lg
                        font-thin
                        leading-7
                        md:leading-8
                        text-justify
                        pl-4
                      "
                    >
                      <li>
                        2+ years of experience developing modular front-end
                        components using HTML, CSS, JavaScript, JSON, and
                        microformats.
                      </li>
                      <li>Good familiarity with Redux pattern</li>
                      <li>Good Understanding of VCS like (git, mercurial)</li>
                      <li>
                        Understanding of the difference between an interface, a
                        class, and an object and comprehension of cascaded
                        inheritance, prototype-based inheritance, etc.
                      </li>
                      <li>
                        Create good abstractions that actually get reused.
                      </li>
                      <li>
                        Solid understanding of user-centered design principles
                        If this sounds like the sort of thing you are looking
                        for, we should be talking.
                      </li>
                    </ul>
                    <br />
                    <div class="text-xl md:text-2xl font-medium my-4">
                      Your role entitle
                    </div>
                    <ul
                      class="
                        list-outside list-disc
                        text-sm
                        md:text-base
                        lg:text-lg
                        font-thin
                        leading-7
                        md:leading-8
                        text-justify
                        pl-4
                      "
                    >
                      <li>
                        Work with all kinds of crazy developers, and demanding
                        clients to design and build new features.
                      </li>
                      <li>
                        Pairing with UX designers to build out design concepts
                        and interactive prototypes
                      </li>
                      <li>
                        Pairing with developers to ensure that the presentation
                        layer is implemented in accordance with best above best
                        practices and UX specifications
                      </li>
                      <li>Write good JavaScript code from scratch.</li>
                      <li>
                        Produce clean, semantic HTML and CSS agonizing along the
                        way for pixel perfection. Ensure cross-browser
                        compatibility.
                      </li>
                      <li>
                        Make things shrink, twist, rotate, run across the page,
                        and fade (tastefully).
                      </li>
                      <li>
                        Build simple, blindingly simple interfaces and believe
                        that writing maintainable CSS goes beyond good class
                        names.
                      </li>
                      <li>
                        Believe that disabled and visually challenged users have
                        a right to use the web as easily as everyone else.
                      </li>
                    </ul>
                  </div>
                  <div class="w-full md:w-2/5 flex flex-col justify-end mb-10">
                    <g-image
                      class="h-44 hidden md:flex md:my-28"
                      src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1634024951/Vitwit%20Website/careers/block.svg"
                    />
                    <div class="md:ml-16">
                      <div class="my-6">
                        <div class="font-bold">Timings :</div>
                        <div class="text-xl">Regular Shift</div>
                      </div>
                      <div class="my-6">
                        <div class="font-bold">Location :</div>
                        <div class="text-xl">Madhapur, Hyderabad</div>
                      </div>
                      <div class="my-6">
                        <div class="font-bold">Apply Via :</div>
                        <div class="text-xl">
                          <!-- <g-link
                            to="https://angel.co/company/vitwit/jobs"
                            class="italic underline hover:text-secondary"
                            >Angle.co</g-link
                          >&nbsp; |&nbsp; -->
                          <g-link
                            to="https://www.linkedin.com/company/vitwit/jobs/"
                            class="italic underline hover:text-secondary"
                            >LinkedIn</g-link
                          >&nbsp; |&nbsp;
                          <g-link
                            to="https://in.indeed.com/jobs?q=vitwit&l=India"
                            class="italic underline hover:text-secondary"
                            >Indeed</g-link
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </accordion-item>
          </accordion>
          <div
            class="
              flex flex-col space-y-8 lg:space-y-0 lg:flex-row
              lg:space-x-8
              w-full
              my-10
              customBlurBg
              rounded-md
              relative
              p-2
            "
          >
            <div class="w-full md:w-1/2">
              <div class="text-2xl font-medium">Apply Here</div>
              <CareerForm />
            </div>
            <div class="w-full lg:w-1/2">
              <g-image
                class="p-6"
                src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1638448525/Vitwit%20Website/vitwit%20raw%20assets/career_illustration_bnzrmd.png"
              />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  </div>
</template>

<script>
import MainLayout from "../../layouts/Main";
import Title from "../../components/Title/title.vue";
import Accordion from "../../components/Accordion/Accordion.vue";
import AccordionItem from "../../components/Accordion/Accordion-item.vue";
import CareerForm from "../../components/Forms/careerForm.vue";
export default {
  components: {
    MainLayout,
    Accordion,
    AccordionItem,
    Title,
    CareerForm,
  },
};
</script>
