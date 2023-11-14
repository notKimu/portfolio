<script lang="ts">
    import { isWindowOpen } from "$lib";
    // Components
    import Window from "../components/Window.svelte";
    // Window content modules
    import Ideology from "../components/categories/Ideology.svelte";
    import Wip from "../components/categories/Wip.svelte";
    // Styles
    import "../globals.css";
    import "../styles/kwind.css";
    import "../styles/boxes.css";
    // Images (THANKS VERCEL)
    import kimuPfp from "../assets/img/kimu_git.webp"
    import rust from  "../assets/svg/rust.svg"
    import go from "../assets/svg/go.svg"
    import ts from "../assets/svg/typescript.svg"
    import js from "../assets/svg/javascript.svg"
    import svelte from "../assets/svg/svelte.svg"
    import blueprint from "../assets/svg/blueprint.svg"
    import constellation from "../assets/svg/endless-constellation.svg"

    type WindowData = {
        title:   string;
        content: any;
    }
    let windowData: WindowData;

    const openWindow = (data: WindowData) => {
        windowData = { title: data.title, content: data.content };
        isWindowOpen.set(true);
        document.body.classList.add("overflow-hidden");
    }
</script>

<!-- Head -->
<svelte:head>
    <title>Kimu | Portfolio</title>
</svelte:head>


<!-- Howdy! -->
<main class="grid g-x">
    <!-- Name uwu -->
    <div>
        <h1 class="bigtitle"><b class="invert-text">キム&lt;</b>🌱<b class="invert-text">&gt;</b></h1>
        <h3 class="invert-text">"The dumb software engineer"</h3>
    </div>

    <!-- Presentation -->
    <div class="profile-socials category flex g-x p-x">
        <div class="profile-data flex g-x">
            <img class="profile-pic br-x" src={kimuPfp} alt="Github Profile" />
            <div class="profile-text">
                <h1>Kimu</h1>
                <ul>
                    <li>Junior software engineer</li>
                    <li>Fullstack && Scripter</li>
                    <li>Rubius developer -w-</li>
                    <li>Svelte enjoyer</li>
                </ul>
            </div>
        </div>

        <div class="socials box m-left-auto flex col j-between">
            <a class="social-icon" href="https://twitter.com/notK1mu">
                <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 248 204"><path fill="#1d9bf0" d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"/></svg>
            </a>
            <a class="social-icon" href="https://github.com/notKimu">
                <svg class="social-icon" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-140.000000, -7559.000000)" fill="#FFFFFF"><g transform="translate(56.000000, 160.000000)"><path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"></path></g></g></g></svg>
            </a>

            <a class="social-icon" href="https://discord.gg/NfeXrQdXdE">
                <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36"><path fill="#5865f2" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/></svg>
            </a>
        </div>
    </div>

    <!-- About me and languages -->
    <div class="readme category grid g-x">
        <div class="readme__text box flex col g-m">
            <h1>README.md</h1>

            <details class="mobile-show">
                <summary>About me!</summary>
                <div class="details__content">
                    <h4>
                        Heya! I am Kimu, an 18 year old smol software engineer that likes 
                        building fullstack and desktop apps aswell as some scripts.
                        <br />
                        My favourite language is Rust followed by Go and TypeScript 
                        (makes JS less trashy), I want to learn some other languages like 
                        C++ / C, Haskell and more, but for now I have enough with them.
                        <br /><br />
        
                        My main hobby is programming (surprise) but I also enjoy taking photos, 
                        image and video editing (4 years in Photoshop heh), 3D modelling and 
                        listening to music all day.
                        <br /><br />
        
                        I always loved coding and computers in general, but I never had the 
                        oportunity to do it until a year ago.
                        <br />
                        Currently I am studying for a <span>technical degree in computer networks</span>, 
                        but most of what I know (mainly coding) is self-studied and will probably 
                        stay that way.
                        <br /><br />
        
                        Im quite independant and like doing most things by myself, as I obsess with 
                        everything I do and like to polish it to the extreme my way.
                        <br />
                        That said, I also enjoy working with other people and I am lokig forward to it
                        as I want to learn from others and build things with others.
                        <br /><br />
                        
                        Oh, and I love matcha tea c:
                    </h4>
                </div>
            </details>
            
            <h4 class="desktop-show">
                Heya! I am Kimu, an 18 year old smol software engineer that likes 
                building fullstack and desktop apps aswell as some scripts.
                <br />
                My favourite language is Rust followed by Go and TypeScript 
                (makes JS less trashy), I want to learn some other languages like 
                C++ / C, Haskell and more, but for now I have enough with them.
                <br /><br />

                My main hobby is programming (surprise) but I also enjoy taking photos, 
                image and video editing (4 years in Photoshop heh), 3D modelling and 
                listening to music all day.
                <br /><br />

                I always loved coding and computers in general, but I never had the 
                oportunity to do it until a year ago.
                <br />
                Currently I am studying for a <span>technical degree in computer networks</span>, 
                but most of what I know (mainly coding) is self-studied and will probably 
                stay that way.
                <br /><br />

                Im quite independant and like doing most things by myself, as I obsess with 
                everything I do and like to polish it to the extreme my way.
                <br />
                That said, I also enjoy working with other people and I am lokig forward to it
                as I want to learn from others and build things with others.
                <br /><br />
                
                Oh, and I love matcha tea c:
            </h4>
        </div>
        <div class="readme__langs box flex col j-between g-x">
            <img src={rust}   alt="The Rust Programming Language icon" class="outline" />
            <img src={go}     alt="Go Programming Language icon" />
            <img src={js}     alt="JavaScript icon" />
            <img src={ts}     alt="TypeScript icon" />
            <img src={svelte} alt="Svelte frontend framework icon" />
        </div>
    </div>

    <!-- Blueprint -->
    <div class="blueprint category grid g-x overflow-hidden">
        <h1>Blueprint</h1>
        <div class="grid columns-2 g-m">
            <button
                on:click={() => { openWindow({ title: "Ideology", content: Ideology }) }}
                class="method button-panel"
            >Ideology</button>
            <button
                on:click={() => { openWindow({ title: "Work in progress", content: Wip }) }}
                class="method button-panel"
            >Planning</button>
        </div>

        <img
            class="absolute bg-image"
            src={blueprint}
            alt="A blueprint grid"
        />
    </div>

    <!-- Projects -->
    <div class="projects category grid g-x overflow-hidden">
        <h1>Projects</h1>
        <div class="grid columns-2 g-m">
            <button
                on:click={() => { openWindow({ title: "Work in progress", content: Wip }) }}
                class="project button-panel"
            >WebApps</button>
            <button
                on:click={() => { openWindow({ title: "Work in progress", content: Wip }) }}
                class="project button-panel"
            >Bots</button>
            <button
                on:click={() => { openWindow({ title: "Work in progress", content: Wip }) }}
                class="project button-panel"
            >Apps</button>
            <button
                on:click={() => { openWindow({ title: "Work in progress", content: Wip }) }}
                class="project button-panel"
            >Scripts</button>
        </div>

        <img
            class="absolute bg-image"
            src={constellation} 
            alt="A package icon"
        />
    </div>
</main>

{#if $isWindowOpen}
    <Window data={windowData} />
{/if}

<style>
    .profile-pic {
        height: clamp(8rem, 15dvw, 20rem);
        width:  clamp(8rem, 15dvw, 20rem);
    }
    .social-icon { height: 2rem; width:  2rem; }

    .readme { grid-template-columns: 1fr 5rem; }
    .readme__langs { overflow-x: scroll; }

    .bg-image {
        width:        100%;
        top:          -20%;
        left:         -20%;
        
        mask:         radial-gradient(circle at top left, #ffffff8e 0%, transparent 70%);
        -webkit-mask: radial-gradient(circle at top left, #ffffff8e 0%, transparent 70%);

        z-index:      -1;
    }
    .category:hover .bg-image {
        top:  0%;
        left: 0%;
    }


    /**RESPONSIVE */
    @media screen and (max-width: 728px) {
        .profile-socials { flex-direction: column; }
        .socials { width: 100%; flex-direction: row; }

        .readme {
            display: flex;
            flex-direction: column;
        }
        .readme__langs { height: 6rem; flex-direction: row; }
        .readme__langs img {
            height:     auto;
            width:      100%;
            object-fit: contain;
        }
    }

    @media screen and (max-width: 500px) {
        .profile-data { flex-direction: column; }

        .columns-2 { grid-template-columns: repeat(1, 1fr); }
    }
</style>