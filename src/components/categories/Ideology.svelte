<div class="flex col g-x">
    <h1>Ideology</h1>
    <h3>
        For me, programs are more than a solution to a problem or 
        a shiny tool to showcase.
        <br /><br />

        I like thinking that programming is like nurturing a child, 
        you have to take care of everything, not over protect it, but 
        also give it enough attention.
        <br />
        One day, it will walk by itself and do all kinds of amazing things, 
        but for now, enjoy the process c:
    </h3>
    
    <h3>
        With the emotional stuff aside, I have a clear thought process 
        on what an app <i>should</i> do and be, I divide it in two categories:
    </h3>

    <!-- Categories -->
    <div class="flex col g-m">
        <!-- Users -->
        <details>
            <summary>Users</summary>
            <div class="details__content flex col g-x">
                <h3>
                    For me, the most important thing is the people that will 
                    trust and give an opportunity to my app.
                    <br /><br />

                    I want to give them a good experience, make them feel that 
                    this app was made with love and care, and not a rushed developer 
                    that needs its Twitter likes.
                    <br />
                    Let's explore what makes a good user experience for me...
                </h3>

                <div class="ideas flex col g-m">
                    <div class="idea">
                        <h3>Solidiy</h3>
                        <h4>
                            An app need to feel solid, everything should fit 
                            in it's place and feel <i>well-thought</i>, not a 
                            bunch of ideas pasted with flexbox.
                        </h4>
                    </div>
    
                    <div class="idea">
                        <h3>Snapiness</h3>
                        <h4>
                            You don't like waiting for a web to load, nor your users.
                            <br />
                            I feel I kinda own something to my users, making my app as 
                            smooth as possible and comfortable to use is the less I can 
                            do.
                            <br /><br />

                            Also, slow apps just won't attract new users.
                        </h4>
                    </div>
    
                    <div class="idea">
                        <h3>Personality</h3>
                        <h4>
                            As you may have noticed, I am not a very formal person.
                            <br /><br />

                            I don't like that my work seems made by a soulless being, 
                            we all like some fun, out of the ordinary (but still professional) 
                            things on the app we use.
                            <br />
                            Don't be boring!
                        </h4>
                    </div>
                </div>
            </div>
        </details>

        <!-- Developers -->
        <details>
            <summary>Developers</summary>
            <div class="details__content flex col g-m">
                <h3>
                    And of course, what would be the app without 
                    it's developers!
                    <br /><br />

                    Maintaining a big app is difficult by itself, 
                    but even more if your code is goinf to be readed and 
                    worked on by more people, so having a <i>clean</i> 
                    codebase is essential.
                    <br /><br />

                    I haven't tried working on a big project with many people 
                    as of now, but I have some insight on what makes an app 
                    scalable:
                </h3>

                <div class="ideas flex col g-m">
                    <div class="flex col g-m">
                        <div class="idea">
                            <h3>DRY</h3>
                            <h4>
                                "Don't Repeat Yourself", the name says it all.
                                <br /><br />

                                Having to re-write your code over and over is error 
                                prone and not very time efficient heh, but even worse 
                                if someone has to follow your trail and clean it up 
                                for you.
                            </h4>
                        </div>
                    </div>
    
                    <div class="flex col g-m">
                        <div class="idea">
                            <h3>Naming</h3>
                            <h4>
                                I still don't get why people used to 
                                name their variables "i, j, v" but is 
                                dumb.
                                <br /><br />

                                Meaningful names are very important 
                                for the people that will read you code in 
                                the future, no one is charging you for the 
                                name's length.
                            </h4>
                        </div>
                    </div>
    
                    <div class="flex col g-m">
                        <div class="idea">
                            <h3>Organization</h3>
                            <h4>
                                File structure (and the project planning) should 
                                be talked and designed <i>before</i> getting working 
                                on the project.
                                <br /><br />

                                Everyone should know where to find files and where 
                                to save them, a project will be much easier to get done 
                                if all was planned and talked from the beggining.
                            </h4>
                        </div>
                    </div>

                    <div class="flex col g-m">
                        <div class="idea">
                            <h3>Consistency</h3>
                            <h4>
                                And lastly, a project needs a consistent way 
                                of doing things.
                                <br /><br />

                                It's normal to change the way things are done 
                                with time as everything evolves, but the code 
                                <i>should</i> be re-factored accordingly.
                                <br />
                                It's a nightmare having to "swith" your thinking 
                                process when you switch from one file to another.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </details>
    </div>
</div>

<style>
    .idea {
        display:          grid;
        gap:              .4rem;

        background-color: var(--color-bg);
        border-radius:    var(--inner-border-radius);
        overflow:         hidden;
    }
    .idea > h3 {
        background-color: var(--color-accent);
        padding:          .5rem;
    }
    .idea > h4 {
        padding: 0 .6rem .6rem .6rem;
    }
</style>