# Flashcards

flashcard app written with Electron and React.  Based on the 'electron-webpack' starter, and 
leitner box.  

The general design is that of a completely functional program, aside from it's initial loaded state,
and its final state on closing.  

I'm going to implement a design based on a mix of MVC and UseCase pattern, so that the ReactComponents are really just 
listening for the clicks, but the actual logic occurs in pure javascript classes that drive the application.  


Design Questions: 

    -- Should I load persistent data once (the entire database), at the very beginning?  Or only 
    based on what the app needs at any moment? 
        - I will only load it as I need it. 

    -- Quizzes are calculated on clicks or on initial load? 


Extra Features: 

    -- if the 'usage' section automatically italicized, that would be cool. 


WHERE I STOPPED (1/2/19) : 
    Just finished styling the Edit window.  