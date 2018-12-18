# Flashcards

flashcard app written with Electron and React.  Based on the 'electron-webpack' starter, and 
leitner box.  

The general design is that of a completely functional program, aside from it's initial loaded state,
and its final state on closing.  

Design Questions: 

    -- Should I load persistent data once (the entire database), at the very beginning?  Or only 
    based on what the app needs at any moment? 
        - I will only load it as I need it. 