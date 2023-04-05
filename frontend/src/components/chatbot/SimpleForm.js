import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import Post from "./Post";

  // function createQuestionVariables(){
  //   var questions = [];
  
  //   for (var i = 1; i <= 20; ++i) {

  //     questions[i] = {
  //     id:`q${i}`, 
  //     value: pcl5_questions[i-1],
  //     trigger: `a${i}`
  //   };

  //   }
  
  //   return questions;
  // }

  // function createAnswerVariables(){
  //   var answers = [];
  
  //   for (var i = 1; i <= 20; ++i) {

  //     answers[i] = {
  //     id:`a${i}`, 
  //     options:[
  //     {value:"0", label:"0", trigger:`q${i+1}`},
  //     {value:"1", label:"1", trigger:`q${i+1}`},
  //     {value:"2", label:"2", trigger:`q${i+1}`},
  //     {value:"3", label:"3", trigger:`q${i+1}`},
  //     {value:"4", label:"4", trigger:`q${i+1}`},
  //     ] 
  //   };

  //   }
  
  //   return answers;
  // }

const config ={
    width: "100%",
    height: "500px", 
  };

class SimpleForm extends Component {
  // answers = createAnswerVariables()
  // questions = createQuestionVariables()

  render() {
    return (
      
      <ChatBot 
        steps={[
            {
              id: "1",
              message: "Welcome to Rebound! I'm Rebound Bot, your personal PTSD and trauma coach.",
              trigger: "1-1"
            },
    
    {id: "1-1",
              message: "Rebound helps you heal from trauma safely on your own terms. If you've been through something, we can help. What are you looking for today?",
              trigger: "begin-options"
            },
    
            {
              id: "begin-options",
              options: [
                {value: 1, label: "Do I have PTSD?", trigger: "PTSD"}, //trigger: "PTSD"
                {value: 2, label: "Who are you?", trigger: "science"}, //trigger: "science"
                {value: 3, label: "I'm feeling terrible right now. What should I do?", trigger: "not-emergency"}, //trigger: "grounding"
                {value: 4, label: "I experienced trauma. Can you help me?", trigger: "reprocessing-0"}, //trigger: "reprocessing"
              ]
            },
    // {id: "emergency-check",
    //  message: "Are you are thinking about suicide or considering harming yourself or others, do you have a medical emergency, or do you feel that any other person might be in danger?",
    // trigger: "emergency-check-2"
    // },  
    // {id: "emergency-check-2",
    // options: [
    //   {value: 1, label: "yes", trigger: "emergency"},
    //   {value: 2, label: "no", trigger: "not-emergency"}
    // ]
    // },
    
    // {id: "emergency",
    //  message: "Please call 911 or the equivalent emergency services number in your local area immediately to get help. This program is not designed for use in cases where you feel like the safety of yourself or others is at risk. I’ll always be here for you once things are safe again."
    // },
    
    {id: "not-emergency",
    message: "I can teach you some exercises that might help you feel better in the moment. Sound okay?",
     trigger: "not-emergency-options"
    },
    
    {id: "not-emergency-options",
    options: [
      {value: 1, label: "sure.", trigger: "grounding"},
      {value: 2, label: "no thanks. take me back to the main menu.", trigger: "begin-options"}
    ]
    },
    
    {
              id: "PTSD",
              message: "Have you ever experienced a traumatic event?",
              trigger: "PTSD-choices-1"
            },          
   {
              id: "PTSD-choices-1",
              options: [
                {value: 1, label: "yes, one event", trigger: "yes-trauma"},
                {value: 2, label: "yes, multiple events", trigger: "yes-trauma"},
                {value: 3, label: "no, nothing I can think of", trigger: "no-trauma"},
                {value: 4, label: "what counts as a traumatic event?", trigger: "traumatic-event"}
              ]
            },
    { id: "traumatic-event",
     message: "A traumatic event is when something happens that makes you feel horrified or helpless, or where you are seriously injured or think you might get hurt or die. Car crashes, shootings, assaults, the death of loved ones, and natural disasters are all common examples but really it can be anything that made you feel deeply hurt or terrified. Have you ever experienced something like this?",
     trigger: "PTSD-choices-2"
    },
     { id: "PTSD-choices-2",
              options: [
                {value: 1, label: "yes, one event", trigger: "yes-trauma"},
                {value: 2, label: "yes, multiple events", trigger: "yes-trauma"},
                {value: 3, label: "no, nothing I can think of", trigger: "no-trauma"},
              ]
            },
    
    {id: "no-trauma",
     message: "Thanks for letting us know. Unfortunately, Rebound is designed to help people recover from trauma. If you are experiencing mental health symptoms, we recommend seeking the advice of a therapist and/or physician for support.",
    end: true},
    
    {id: "yes-trauma",
    message: "Thank you for sharing. We're grateful to be on this recovery journey with you. You're also not alone; 83% of Americans have experienced at least one traumatic event.",
     trigger: "yes-trauma-2",
    },
     
    {id: "yes-trauma-2",
    message: "Let's talk about symptoms. In the past month, have you felt: 1. Constantly anxious or superalert? 2. Like you're reliving the traumatic event (or dreaming about it or thinking about it when you don't want to), 3. Like the world isn't a good or safe place? Or like you are somehow at fault for the trauma?, or 4. Numb or detached?,",
    trigger: "symptoms"},
    
    {id: "symptoms",
     options: [
       {value: 1, label: "Yes all of those, often.", trigger: "yes-symptoms"},
       {value: 2, label: "Yes some of those, often.", trigger: "yes-symptoms"},
       { value: 3, label: "Yes some of those, sometimes.", trigger: "yes-symptoms"},
       {value: 3, label: "Yes some of those, but only rarely.", trigger: "yes-symptoms"},
       {value: 4,label: "None of those ever.", trigger: "no-symptoms"}
     ]
    },
    
    {id: "no-symptoms",
     message: "Thank you for letting me know. It looks like you haven't reported experiencing any of the symptoms that traditionally manifest as PTSD. Are you experiencing any other mental health symptoms?",
     trigger: "symptoms-2",
    },
    
    {id: "symptoms-2",
     options: [
       {value: 1, label: "yes", trigger: "yes-symptoms-2"},
       {value: 2, label: "no", trigger: "no-symptoms-2"}
     ]
    },
    
    {id: "yes-symptoms-2",
     message: "I am sorry to hear that, but am very grateful to you for sharing. Based on your responses, the exercises and techniques we provide may not be very useful to you right now, and I want to make sure I don't waste your time. Given that you are experiencing symptoms, we recommend seeking the advice of a therapist and/or physician for support.",
     end: true 
    },
    
    {id: "yes-symptoms",
     message: "Thanks for sharing. Based on your responses, you are reporting experiencing at least some of the symptoms that traditionally manifest as PTSD. I'm a bot, so I don’t provide medical advice, medical care, or an official diagnoses, and any guidance you receive from your therapist, doctor, or other medical professional takes precedence.",
      trigger: "yes-symptoms-3"
    },
    
    {id: "yes-symptoms-3",
     message: "If you're looking to heal from trauma, I can teach you some of the leading techniques that have been clinically shown to get rid of symptoms.",
     trigger: "yes-symptoms-options"
    },
    
    {id: "yes-symptoms-options",
    options: [
      {value: 1, label: "explore techniques for healing from trauma", trigger: "reprocessing-0"},
      {value: 2, label: "help me feel less anxious or less numb right now", trigger: "not-emergency-options"}
    ] 
    },
    
      {id: "no-symptoms-2",
     message: "Great! Based on your responses, the exercises and techniques we provide may not be very useful to you at this time. If you do experience any mental health symptoms in future, we recommend seeking the advice of a therapist and/or physician for support. If you'd like to learn more about PTSD or trauma, check out the National Center for PTSD's work: https://www.ptsd.va.gov/",
     end: true
    },
    
            {
              id: "science",
              message: "Hi! I'm Rebound Bot, and I was created by Raeva Kumar and Alicia Chen, two survivors of trauma. They realized that although 83% of Americans have experienced trauma too, most people who develop symptoms never actually get better! There's a shortage of mental healthcare providers and of the ones who do exist, most of them don't know how to treat trauma.",
              trigger: "science-2"
            },
    {
              id: "science-2",
              message: "At Rebound, we're dedicated to giving you access to tools that actually work. We take the leading evidence-based methods and make them accessible and easy for you to use. Everything you'll see here is based on clinically-proven science conducted by clinical psychologists and trauma researchers.",
              trigger: "science-choices"
            },
            {
              id: "science-choices",
              options: [
                {value: 1, label: "what tools/methods are you talking about?", trigger: "science-2"},
                {value: 2, label: "ok, that makes sense. take me back.", trigger: "next"}
              ]
            },
            {
              id: "science-2",
              message: "We are advocates of a treatment called written exposure therapy. Why? Writing about traumatic or distressing experiences with detail has been shown to improve both psychological and physical health. It has been shown to result in reductions in PTSD symptoms.",
              trigger: "science-what-else"
            },
            {
              id: "science-what-else",
              options: [
                {value: 1, label: "what else?", trigger: "science-3"},
                {value: 2, label: "ok, thanks. Take me back.", trigger: "next"}
              ]
            },
            {
              id: "science-3",
              message: "It’s also been shown to be effective for different types of people with different kinds of trauma (war, interpersonal violence, situational violence), as well as those with varying levels of trauma severity.",
              trigger: "science-what-else-2"
            },
            {
              id: "science-what-else-2",
              options: [
                {value: 1, label: "tell me more", trigger: "science-4"},
                {value: 2, label: "sounds good, take me back.", trigger: "next"}
              ]
            },
            {
              id: "science-4",
              message: "Written exposure therapy has been shown to be as effective as cognitive processing therapy, a more intensive form of PTSD treatment. It’s been effective for folks regardless of age, gender, number of other diagnoses, or depressive symptom severity.",
              trigger: "next"
            },
            {
              id: "reprocessing-0",
              message: "We've prepared a set of writing prompts for you based on empirically validated research. Working through these prompts should allow you to reprocess and reintegrate some of your memories.",
              trigger: "reprocessing-guideline-option"
            },
            {
              id: "reprocessing-guideline-option",
              options: [
                {value: 1, label: "Tell me more", trigger: "reprocessing-guidelines"}, // reprocessing-guidelines
                {value: 2, label: "Take me back", trigger: "next"}
              ]
            },
            {
              id: "reprocessing-guidelines",
              message: `Note: the more you process and express emotion and make meaning from your experience over the course of these exercises, the more likely you are to experience clinically significant symptom improvements.`,
              trigger: "reprocessing-guidelines-2"
            },
            {
              id: "reprocessing-guidelines-2",
              message: `Also: This is usually effective only when the same traumatic experience is the focus, rather than writing about different ones in each session. Does this make sense?`,
              trigger: "reprocessing-sense-check"
            },
            {
              id: "reprocessing-sense-check",
              options: [
                {value: 1, label: "Yes", trigger: "e-check"},
                {value: 2, label: "No", trigger: "wet-information"}
              ]
            },
    
    {id: "e-check",
     message: "If at any point you feel suicidal or have any thoughts of hurting yourself or others, please stop this program and immediately seek assistance by calling 911 or the equivalent emergency services number in your local area. Keep yourself safe!",
     trigger: "reprocessing-option-prompt"
    },
            {
              id: "wet-information",
              message: "If you'd like to learn more about written exposure, we'd recommend the VA website: https://www.ptsd.va.gov/professional/treat/txessentials/written_exposure_therapy.asp", 
              trigger: "reprocessing-option-prompt"
            },
            {
              id: "reprocessing-option-prompt",
              message: "Okay onto the good stuff. Which day prompt would you like to complete now? We suggest you do them in order, max 1 per day.",
              trigger: "reprocessing-options"
            },
            {
              id: "reprocessing-options",
              options: [
                {value: 1, label: "Session 1", trigger: "reprocessing-1"},
                {value: 2, label: "Session 2", trigger: "reprocessing-2"},
                {value: 3, label: "Session 3", trigger: "reprocessing-3"},
                {value: 4, label: "Session 4", trigger: "reprocessing-4"},
                {value: 5, label: "Session 5", trigger: "reprocessing-5"}
              ]
            },
            {
              id: "reprocessing-1",
              message: `For this first session, spend 10 minutes writing about the trauma starting at the beginning. You don’t need to finish the entire story, but spend the time giving a general overview of what happened.
  
              You can do this in the box below, or if you’d prefer, take a piece of paper and write it down on your own.
              
              When you’re done, take a deep breath and hit "I'm finished."`,
              trigger: "writing-submission-box"
            },
            {
              id:"writing-submission-box", 
              user: true,
              trigger:"finished-writing-options"
            },
            {
              id: "reprocessing-2",
              message: `Today, you’ll be diving further into the details of your trauma. The purpose of this is to help your mind craft a better narrative around what happened so it can learn to handle the memory without fear.
              
              For the next 20 minutes, write down the story of your trauma again, either in this box here or in a journal, a Word document, or a piece of paper. Today, try to focus on the details. Write down as much as you remember—what exactly happened, where were you, who was there, how were you feeling, what were you thinking about. Try to be as specific as possible.
              When you're done, take a deep breath and hit "I'm finished."`,
              trigger: "writing-submission-box"
            },
            {
              id: "reprocessing-3",
              message: `Today, you’ll be diving further into the details of your trauma. The purpose of this is to help your mind craft a better narrative around what happened so it can learn to handle the memory without fear.`,
              trigger: "reprocessing-3-1"
            },
            {
              id: "reprocessing-3-1",
              message: "For the next 20 minutes, select a part of the trauma that still upsets you the most and write about that, either in the box below or in a journal, a Word document, or a piece of paper. Once you feel like you’ve written everything you need to about that down, start to write about how the trauma has affected your life. Has it changed your outlook? Your goals, your perspective, or how you see the world around you? How has it affected your relationships with others, both the people who are closest to you and the rest of the world around you? Really let yourself dive deeply and explore all of your thoughts and feelings.",
              trigger: "reprocessing-3-2"
            },
            {
              id: "reprocessing-3-2",
              message: `When you’re done, take a deep breath and hit "I'm finished."`,
              trigger: "writing-submission-box"
            },
            {
              id: "reprocessing-4",
              message: `For our 20-minute writing exercise today, continue to write about the trauma, either in the box we’ll provide in the next section or in a journal, a Word document, or a piece of paper. As with the last session, you can continue to write about a specific part or detail of the trauma that feels the worst when you think about it. And continue to dive further into how the trauma has changed your life. What has changed about you, your life, or how you view the world?`,
              trigger: "reprocessing-4-1"
            },
            {
              id: "reprocessing-4-1",
              message: `As always, try to be as specific as possible. The deeper you are able to explore what happened and how you think and feel about it, the more you will be able to heal.
  
              When you’re done, take a deep breath and hit "I'm finished."`,
              trigger: "writing-submission-box"
            },
            {
              id: "reprocessing-5",
              message: `
              For this final 20-minute writing session, as always, you can use the box we’ll provide in the next section, or a journal, a Word document, or a piece of paper. Continue to write about your thoughts and feelings about the trauma and how it has affected your life. Since it’s the last day of the program, you also can start to “wrap up” your writing if you’d like by exploring the way the trauma is related to your life today or your life in the future.`,
              trigger: "reprocessing-5-1"
            },
            {
              id: "reprocessing-5-1",
              message: `As always, try to be as specific as possible. The deeper you are able to explore what happened and how you think and feel about it, the more you will be able to heal.`,
              trigger: "writing-submission-box"
            },
            {
              id:"finished-writing-options", 
              options:[
              {value:"y", label:"I'm finished", trigger: "reprocessing-session-close"}, // TO DO: EXPAND
              {value:"n", label:"Take me back to the beginning", trigger: "next"},
              ] 
            },
            {
              id: "reprocessing-session-close",
              message: `Take a minute to appreciate yourself for showing up today.`,
              trigger: "reprocessing-session-close-2"
            },
            {
              id: "reprocessing-session-close-2",
              message: "Now take five deep breaths, inhaling through your nose and exhaling through your mouth, and observing your mind and body. Without any judgment, just take this time to check in with yourself.",
              trigger: "finished-breathing"
            },
            {
              id: "finished-breathing",
              options: [
                {value: 1, label: "I'm finished", trigger: "end-feeling-measure"},
                {value: 2, label: "I have feedback about how that went", trigger: "feedback"}
              ]
            },
            {
              id: "end-feeling-measure",
              message: `Before we sign out, let’s check in.
              
                  While you were writing about your trauma today, how anxious or distressed did you feel? On a scale of 0 to 100, with 0 being totally relaxed and 100 being the highest anxiety or distress you’ve ever felt.`,
              trigger: "feeling-submission-box"
            },
            {
              id: "feeling-submission-box",
              user: true,
              trigger: "feeling-thank-you"
            },
            {
              id: "feeling-thank-you",
              message: "Thanks for sharing. Did you enter a number above 80?", // TO DO: AUTOMATE THIS
              trigger: "feeling-80"
            },
            {
              id: "feeling-80",
              options: [
                {value: 1, label: "Yes", trigger: "feeling-grounding-80"},
                {value: 2, label: "No", trigger: "feeling-not-80"}
              ]
            },
            {
              id: "feeling-grounding-80",
              message: "I'm sorry you're not feeling well. Please remember to prioritize your safety, and that if you need to, we'd encourage you to speak to a professional (therapist), and reach out to your support network, or if you are worried about your safety, call 911.",
              trigger: "next"
            },
            {
              id: "feeling-not-80", //TO DO: ADD IN SAFETY PLANNING FOR EACH PERSON 
              message: "Ok, just checking in. If you're not feeling well, we'd still invite you to do a grounding exercise if you need. If you've developed a safety plan (we'll be developing a way you can do that on this site soon), we invite you to default to that.",
              trigger: "next"
            },
            {
              id: "feedback", //TO DO: CHANGE THIS TO GETTING SENT TO THE BACKEND 
              message: "if you have feedback for us, please contact us at our main website: hellorebound.com/contact. We're always looking for ways to improve your experience",
              trigger: "next"
            },
  
  
            {
              id: "next",
              message: "what would you like to do next?",
              trigger: "begin-options"
            },
            {
              id: "grounding",
              message: "A key step in trauma recovery is to start from a place of stability. To help us do that, we’re going to do a short grounding exercise. Are you ready?",
              trigger: "options-to-return"
            },
            {
              id: "options-to-return",
              options: [
                {value:"y", label:"Yes", 
                trigger:"grounding-1"},
                {value:"n", label:"No, take me back to the beginning", 
                trigger:"next"},
              ]
            },
            {
              id: "grounding-1",
              message: "In the wake of trauma, you might experience periods of the day when your fear response is on overdrive, and the rational areas of your brain that think through and challenge that fear are not as active. It might even happen at times that don’t make any sense to you. Many people report feeling hypervigilant in situations that do not relate to their trauma, such as when at home or the gas station. This is because this area of the brain is not rational—it has no understanding of what’s safe and what’s not.",
              trigger: "check-for-questions"
            },
            {
              id: "check-for-questions",
              message: "Make sense so far?",
              trigger: "grounding-sense-check"
            },
            {
              id: "grounding-sense-check",
              options: [
                {value: "y", label: "yes", trigger: "grounding-2"},
                {value: "n", label: "no", trigger: "grounding-resources"}
              ]
            },
            {
              id: "grounding-2",
              message: `A few changes happen to your body when you have a fear response or something triggers your anxiety, and because of them, you might feel several things: 
  
              - Raised heart rate 
              - Sweaty palms 
              - Racing thoughts 
              - Shortness of breath
              - Fear, anxiety, or anger 
              - Or other related symptoms`,
              trigger: "grounding-3" 
            },
            {
              id: "grounding-3",
              message: "Grounding is a therapeutic technique that helps slow that whole process down and keep you focused on the present. It calms the body and activates more cognitive and rational thought processes by switching on your “rest and digest” body systems and turning off the alarm bells.",
              trigger: "grounding-4"
            },
            {
              id: "grounding-4",
              message: `Doing it before engaging in therapeutic activities is critical because it helps you start from a place of calm and centeredness. This is key to helping you feel safe as you engage more directly with your trauma.
  
              In fact, anytime you start to feel a fear response, you can use the grounding technique we’ll teach you to calm down and recenter.
              `,
              trigger: "assess-ready-for-grounding"
            },
            {
              id: "assess-ready-for-grounding",
              message: "are you ready?",
              trigger: "grounding-readiness"
            },
            {
              id: "grounding-readiness",
              options: [
                {value: 1, label: "Yes", trigger: "grounding-exercise"},
                {value: 2, label: "No, take me back", trigger: "next"}
              ]
            },
            {
              id: "grounding-exercise",
              message: "Inhale deeply. Exhale completely. In this exercise, we’ll use your five senses to help ground you.",
              trigger: "grounding-exercise-1"
            },
            {
              id: "grounding-exercise-1",
              message: "Step 1: Acknowledge five things you see around you. It could be your keyboard, to a spot on the floor, to anything else in your surroundings.",
              trigger: "user-completed-grounding-1"
            },
            {
              id: "user-completed-grounding-1",
              options: [
                {label: "okay, done", trigger: "grounding-exercise-2"}
              ]
            },
            {
              id: "grounding-exercise-2",
              message: "Step 2: Touch four things around you. It could be your hair, a table, or the ground under your feet. Notice how those things feel.",
              trigger: "user-completed-grounding-2"
            },
            {
              id: "user-completed-grounding-2",
              options: [
                {label: "done", trigger: "grounding-exercise-3"}
              ]
            },
            {
              id: "grounding-exercise-3",
              message: "Step 3: Listen for three sounds around you. This could be any external sound like a car driving down the street or water running from a faucet. If you can hear your belly rumbling, that counts!",
              trigger: "user-completed-grounding-3"
            },
            {
              id: "user-completed-grounding-3",
              options: [
                {label: "done", trigger: "grounding-exercise-4"}
              ]
            },
            {
              id: "grounding-exercise-4",
              message: "Step 4: Acknowledge two things you can smell. Maybe you are in your office and smell pencil, or maybe you are in your bedroom and smell a pillow. If you need to take a brief walk to find a scent you could smell soap in your bathroom, or nature outside.",
              trigger: "user-completed-grounding-4"
            },
            {
              id: "user-completed-grounding-4",
              options: [
                {label: "done", trigger: "grounding-exercise-5"}
              ]
            },
            {
              id: "grounding-exercise-5",
              message: "Step 5: Acknowledge one thing you can taste. What does the inside of your mouth taste like—gum, coffee, or the sandwich from lunch?",
              trigger: "user-completed-grounding-5"
            },
            {
              id: "user-completed-grounding-5",
              options: [
                {label: "done", trigger: "grounding-conclusion-question"}
              ]
            },
            {
              id: "grounding-conclusion-question",
              message: `Great work. Over time, as you do more grounding exercises, you might start to notice that they have a greater effect on your mood overall. Before continuing, take a second to notice how you feel. What feelings come to mind?`,
              trigger: "grounding-user-feeling"
            },
            {
              id: "grounding-user-feeling",
              user: true,
              trigger: "grounding-thanks"
            },
            {
              id: "grounding-thanks",
              message: "thanks for sharing.",
              trigger: "next"
            },
            {
              id: "grounding-resources",
              message: "learn a bit more about the physiology of trauma response here: https://bostoneveningtherapy.com/the-physiology-of-trauma/",
              trigger: "grounding-next"
            },
            {
              id: "grounding-next",
              message: "What would you like to do next?",
              trigger: "grounding-next-options"
            },
            {
              id: "grounding-next-options",
              options: [
                {value: "cont", label: "continue", trigger: "grounding-2"},
                {value: "beginning", label: "go back to the beginning", trigger: "next"}
              ]
            }
          ]
  }
        {...config}
      />
        
        );
      }

    }

    export default SimpleForm;
