PennController.ResetPrefix(null)

Sequence(randomize("experimental-trial"), "send", "completion_screen")

Template("design.csv", variable =>
    newTrial("experimental-trial",

        newTimer("break", 1000)
            .start()
            .wait()
        ,

        newImage("target", variable.png)
          .size("25vw","auto")
            .center()
          .print()
        ,
        
        newText("blank", " ")
          .center()
          .hidden()
        ,

        newText("sentence", variable.sentence)
          .center()
          .print()
        ,

        newScale("pronoun", "He", "She", "It")
        .labelsPosition("right")
        .button()
        .center()
        .print()
        .wait()
        ,
    )
)



// Send results manually
SendResults("send")

// Completion screen
newTrial("completion_screen",
    newText("thanks", "Thank you for participating! You may now exit the window.")
        .center()
        .print()
    ,
    newButton("wait", "")
        .wait()
)