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
  
class SimpleForm extends Component {
  // answers = createAnswerVariables()
  // questions = createQuestionVariables()

  render() {
    return (
      
      <ChatBot 
        steps={[
          {
            id: "1",
            message: "Welcome to Rebound. I'm your personal PTSD and trauma coach. At Rebound, we use evidence-based methods to help you work through difficult and challenging experiences and the processing and experiences that follow. What would you like to do first?",
            trigger: "begin-options"
          },
          {
            id: "begin-options",
            options: [
              {value: 1, label:"Assess the severity of my symptoms", trigger: "pcl-5"}, //trigger: "pcl-5"
              {value: 2, label:"Learn why I should trust you ", trigger: "science"}, //trigger: "science"
              {value: 3, label: "Learn how to calm myself during periods of anxiety or panic", trigger: "grounding"}, //trigger: "grounding"
              {value: 4, label: "Get started reprocessing experiences in an evidence-based fashion", trigger: "reprocessing-0"}, //trigger: "reprocessing"
              {value: 5, label: "test", trigger: "q-firstname"}
            ]
          },
          {
            id: "science",
            message: "We are advocates of evidence-based, research backed ways of processing traumatic memories and educating folks about how to get better. All of the concepts and prompts proposed here are based on research literature conducted by clinical psychologists and trauma researchers.",
            trigger: "science-choices"
          },
          {
            id: "science-choices",
            options: [
              {value: 1, label: "what about how you propose helping folks get better?", trigger: "science-2"},
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
          // {
          //   id:"begin-options", 
          //   options:[
          //   {value:"y", label:"Yes", trigger:"end-message"},
          //   {value:"n", label:"No", trigger:"no-submit"},
          //   ] 
          // },
          // {
          //   id:"begin-options", 
          //   options:[
          //   {value:"y", label:"Yes", end: true},
          //   {value:"n", label:"No", end: true},
          //   ] 
          // },
          {
            id: "reprocessing-0",
            message: "We've prepared a set of writing prompts for you based on empirically validated research. Working through these prompts should allow you to reprocess and reintegrate some of your memories.",
            // end: true
            // trigger: "reprocessing-options"
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
            // end: true,
            trigger: "reprocessing-guidelines-2"
          },
          {
            id: "reprocessing-guidelines-2",
            message: `Also: This is usually effective only when the same traumatic experience is the focus, rather than writing about different ones in each session. Does this generally make sense?`,
            trigger: "reprocessing-sense-check"
          },
          {
            id: "reprocessing-sense-check",
            options: [
              {value: 1, label: "Yes", trigger: "reprocessing-option-prompt"},
              {value: 2, label: "No", trigger: "wet-information"}
            ]
          },
          {
            id: "wet-information",
            message: "If you'd like to learn more about written exposure, we'd recommend the VA website: https://www.ptsd.va.gov/professional/treat/txessentials/written_exposure_therapy.asp", 
            trigger: "reprocessing-option-prompt"
          },
          {
            id: "reprocessing-option-prompt",
            message: "Which day prompt would you like to complete now? We suggest you do them in order, and on subsequent days or sessions.",
            trigger: "reprocessing-options"
          },
          {
            id: "reprocessing-options",
            options: [
              {value: 1, label: "Day 1", trigger: "reprocessing-1"},
              {value: 2, label: "Day 2", trigger: "reprocessing-2"},
              {value: 3, label: "Day 3", trigger: "reprocessing-3"},
              {value: 4, label: "Day 4", trigger: "reprocessing-4"},
              {value: 5, label: "Day 5", trigger: "reprocessing-5"}
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
            message: `Take a minute to appreciate yourself for showing up today and for all of the four days before this one. You did it!
            `,
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
            id: "pcl-5",
            message: "Thanks for mentioning that. We'll walk you through a 20-question survey that will help you understand how severe your symptoms are and whether you may qualify for a diagnosis of PTSD. Note that this is not medical advice and to get a real diagnosis, you'll have to see a provider. We use a questionnaire that has been validated in the trauma research literature by clinical psychologists. Are you ready?",
            trigger: "assess-ready-for-pcl-5"
          },
          {
            id: "assess-ready-for-pcl-5",
            message: "Are you ready?",
            trigger: "pcl-5-readiness"
          },
          {
            id: "pcl-5-readiness",
            options: [
              {value: 1, label: "Yes", trigger: "questionnaire-pre"},
              {value: 2, label: "No, take me back", trigger: "next"}
            ]
          },
          {
            id: "questionnaire-pre",
            message: `Below is a list of problems that people sometimes have in response to a very stressful experience.
            Please read each problem and then select one of the options to indicate how much you have been bothered by
            that problem in the past week.`,
            trigger: "q1"

          },
          {
            id: "q1",
            message: "Repeated, disturbing, and unwanted memories of the stressful experience(s)?",
            trigger: "a1",
          },
          {
            id: "a1",
            options: [
                {value: 0, label: "Not at all", trigger: "q2"},
                {value: 1, label: "A little bit", trigger: "q2"},
                {value: 2, label: "Moderately", trigger: "q2"},
                {value: 3, label: "Quite a bit", trigger: "q2"},
                {value: 4, label: "Extremely", trigger: "q2"}
            ]
          },
          {
            id: "q2",
            message: "Repeated, disturbing dreams of the stressful experience?",
            // end: true,
            trigger: "a2"
          },
          {
            id: "a2",
            options: [
                {value: 0, label: "Not at all", trigger: "q3"},
                {value: 1, label: "A little bit", trigger: "q3"},
                {value: 2, label: "Moderately", trigger: "q3"},
                {value: 3, label: "Quite a bit", trigger: "q3"},
                {value: 4, label: "Extremely", trigger: "q3"}
            ]
          },
          {
            id: "q3",
            message: `Suddenly feeling or acting as if the stressful experience were actually happening again (as if you were actually back there reliving it)?`,
            trigger: "a3"
          },
          {
            id: "a3",
            options: [
                {value: 0, label: "Not at all", trigger: "q4"},
                {value: 1, label: "A little bit", trigger: "q4"},
                {value: 2, label: "Moderately", trigger: "q4"},
                {value: 3, label: "Quite a bit", trigger: "q4"},
                {value: 4, label: "Extremely", trigger: "q4"}
            ]
          },
          {
            id: "q4",
            message: `Feeling very upset when something reminded you of the stressful experience?`,
            trigger: "a4"
          },
          {
            id: "a4",
            options: [
                {value: 0, label: "Not at all", trigger: "q5"},
                {value: 1, label: "A little bit", trigger: "q5"},
                {value: 2, label: "Moderately", trigger: "q5"},
                {value: 3, label: "Quite a bit", trigger: "q5"},
                {value: 4, label: "Extremely", trigger: "q5"}
            ]
          },
          {
            id: "q5",
            message: `Having strong physical reactions when something reminded you of the stressful experience (for example, heart pounding, trouble breathing, sweating)?`,
            trigger: "a5"
          },
          {
            id: "a5",
            options: [
                {value: 0, label: "Not at all", trigger: "q6"},
                {value: 1, label: "A little bit", trigger: "q6"},
                {value: 2, label: "Moderately", trigger: "q6"},
                {value: 3, label: "Quite a bit", trigger: "q6"},
                {value: 4, label: "Extremely", trigger: "q6"}
            ]
          },
          {
            id: "q6",
            message: `Avoiding memories, thoughts, or feelings related to the stressful experience?`,
            trigger: "a6"
          },
          {
            id: "a6",
            options: [
                {value: 0, label: "Not at all", trigger: "q7"},
                {value: 1, label: "A little bit", trigger: "q7"},
                {value: 2, label: "Moderately", trigger: "q7"},
                {value: 3, label: "Quite a bit", trigger: "q7"},
                {value: 4, label: "Extremely", trigger: "q7"}
            ]
          },
          {
            id: "q7",
            message: `Avoiding external reminders of the stressful experience (for example, people, places, conversations, activities, objects, or situations)?`,
            trigger: "a7"
          },
          {
            id: "a7",
            options: [
                {value: 0, label: "Not at all", trigger: "q8"},
                {value: 1, label: "A little bit", trigger: "q8"},
                {value: 2, label: "Moderately", trigger: "q8"},
                {value: 3, label: "Quite a bit", trigger: "q8"},
                {value: 4, label: "Extremely", trigger: "q8"}
            ]
          },
          {
            id: "q8",
            message: `Trouble remembering important parts of the stressful experience?`,
            trigger: "a8"
          },
          {
            id: "a8",
            options: [
                {value: 0, label: "Not at all", trigger: "q9"},
                {value: 1, label: "A little bit", trigger: "q9"},
                {value: 2, label: "Moderately", trigger: "q9"},
                {value: 3, label: "Quite a bit", trigger: "q9"},
                {value: 4, label: "Extremely", trigger: "q9"}
            ]
          },
          {
            id: "q9",
            message: `Having strong negative beliefs about yourself, other people, or the world (for example, having thoughts such as: I am bad, there is something seriously wrong with me, no one can be trusted, the world is completely dangerous)?`,
            trigger: "a9"
          },
          {
            id: "a9",
            options: [
                {value: 0, label: "Not at all", trigger: "q10"},
                {value: 1, label: "A little bit", trigger: "q10"},
                {value: 2, label: "Moderately", trigger: "q10"},
                {value: 3, label: "Quite a bit", trigger: "q10"},
                {value: 4, label: "Extremely", trigger: "q10"}
            ]
          },
          {
            id: "q10",
            message: `Blaming yourself or someone else for the stressful experience or what happened after it?`,
            trigger: "a10"
          },
          {
            id: "a10",
            options: [
                {value: 0, label: "Not at all", trigger: "q11"},
                {value: 1, label: "A little bit", trigger: "q11"},
                {value: 2, label: "Moderately", trigger: "q11"},
                {value: 3, label: "Quite a bit", trigger: "q11"},
                {value: 4, label: "Extremely", trigger: "q11"}
            ]
          },
          {
            id: "q11",
            message: `Having strong negative feelings such as fear, horror, anger, guilt, or shame? `,
            trigger: "a11"
          },
          {
            id: "a11",
            options: [
                {value: 0, label: "Not at all", trigger: "q12"},
                {value: 1, label: "A little bit", trigger: "q12"},
                {value: 2, label: "Moderately", trigger: "q12"},
                {value: 3, label: "Quite a bit", trigger: "q12"},
                {value: 4, label: "Extremely", trigger: "q12"}
            ]
          },
          {
            id: "q12",
            message: `Loss of interest in activities that you used to enjoy?`,
            trigger: "a12"
          },
                    {
            id: "a12",
            options: [
                {value: 0, label: "Not at all", trigger: "q13"},
                {value: 1, label: "A little bit", trigger: "q13"},
                {value: 2, label: "Moderately", trigger: "q13"},
                {value: 3, label: "Quite a bit", trigger: "q13"},
                {value: 4, label: "Extremely", trigger: "q13"}
            ]
          },
          {
            id: "q13",
            message: `Feeling distant or cut off from other people?`,
            trigger: "a13"
          },
          {
            id: "a13",
            options: [
                {value: 0, label: "Not at all", trigger: "q14"},
                {value: 1, label: "A little bit", trigger: "q14"},
                {value: 2, label: "Moderately", trigger: "q14"},
                {value: 3, label: "Quite a bit", trigger: "q14"},
                {value: 4, label: "Extremely", trigger: "q14"}
            ]
          },
          {
            id: "q14",
            message: `Trouble experiencing positive feelings (for example, being unable to feel happiness or have loving feelings for people close to you)?`,
            trigger: "a14"
          },
          {
            id: "a14",
            options: [
                {value: 0, label: "Not at all", trigger: "q15"},
                {value: 1, label: "A little bit", trigger: "q15"},
                {value: 2, label: "Moderately", trigger: "q15"},
                {value: 3, label: "Quite a bit", trigger: "q15"},
                {value: 4, label: "Extremely", trigger: "q15"}
            ]
          },
          {
            id: "q15",
            message: `Irritable behavior, angry outbursts, or acting aggressively?`,
            trigger: "a15"
          },
          {
            id: "a15",
            options: [
                {value: 0, label: "Not at all", trigger: "q16"},
                {value: 1, label: "A little bit", trigger: "q16"},
                {value: 2, label: "Moderately", trigger: "q16"},
                {value: 3, label: "Quite a bit", trigger: "q16"},
                {value: 4, label: "Extremely", trigger: "q16"}
            ]
          },
          {
            id: "q16",
            message: `Taking too many risks or doing things that could cause you harm?`,
            trigger: "a16"
          },
        {
            id: "a16",
            options: [
                {value: 0, label: "Not at all", trigger: "q17"},
                {value: 1, label: "A little bit", trigger: "q17"},
                {value: 2, label: "Moderately", trigger: "q17"},
                {value: 3, label: "Quite a bit", trigger: "q17"},
                {value: 4, label: "Extremely", trigger: "q17"}
            ]
          },
          {
            id: "q17",
            message: `Being “superalert” or watchful or on guard?`,
            trigger: "a17"
          },
          {
            id: "a17",
            options: [
                {value: 0, label: "Not at all", trigger: "q18"},
                {value: 1, label: "A little bit", trigger: "q18"},
                {value: 2, label: "Moderately", trigger: "q18"},
                {value: 3, label: "Quite a bit", trigger: "q18"},
                {value: 4, label: "Extremely", trigger: "q18"}
            ]
          },
          {
            id: "q18",
            message: `Feeling jumpy or easily startled?`,
            trigger: "a18"
          },
          {
            id: "a18",
            options: [
                {value: 0, label: "Not at all", trigger: "q19"},
                {value: 1, label: "A little bit", trigger: "q19"},
                {value: 2, label: "Moderately", trigger: "q19"},
                {value: 3, label: "Quite a bit", trigger: "q19"},
                {value: 4, label: "Extremely", trigger: "q19"}
            ]
          },
          {
            id: "q19",
            message: `Having difficulty concentrating?`,
            trigger: "a19"
          },
          {
            id: "a19",
            options: [
                {value: 0, label: "Not at all", trigger: "q20"},
                {value: 1, label: "A little bit", trigger: "q20"},
                {value: 2, label: "Moderately", trigger: "q20"},
                {value: 3, label: "Quite a bit", trigger: "q20"},
                {value: 4, label: "Extremely", trigger: "q20"}
            ]
          },
          {
            id: "q20",
            message: `Trouble falling or staying asleep?`,
            trigger: "a20"
          },
          {
            id: "a20",
            options: [
                {value: 0, label: "Not at all", trigger: "pcl-5-thank-you"},
                {value: 1, label: "A little bit", trigger: "pcl-5-thank-you"},
                {value: 2, label: "Moderately", trigger: "pcl-5-thank-you"},
                {value: 3, label: "Quite a bit", trigger: "pcl-5-thank-you"},
                {value: 4, label: "Extremely", trigger: "pcl-5-thank-you"}
            ]
          },
        // {
        //     id: "pcl-5-end-message",
        //     // message: "test end",
        //     // end: true,
        //     component: <Post />,
        //     asMessage: true,
        //     trigger: "pcl-5-thank-you",
        // },
          {
            id: "pcl-5-thank-you",
            message: "thank you - your score report will be emailed to you in the next 24 hours. We are working on an auto-score option right now.",
            trigger: "next"

          },
          {
            id: "next",
            message: "what would you like to do next?",
            trigger: "begin-options"
          },
          {
            id: "grounding",
            message: "The first step to trauma recovery is to start from a place of stability. To do that, we’re going to do a short grounding exercise. Are you ready?",
            // end: true,
            trigger: "options-to-return"
          },
          {
            id: "options-to-return",
            options: [
              {value:"y", label:"Yes", 
              // end: true
              trigger:"grounding-1"
            },
              {value:"n", label:"No, take me back to the beginning", 
              // end: true
              trigger:"next"
            },
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

            In fact, anytime you start to feel a fear response, you can use the grounding techniques we’ll teach you to calm down and recenter.
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
              {label: "Just did this", trigger: "grounding-exercise-2"}
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
              {label: "Just did this", trigger: "grounding-exercise-3"}
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
              {label: "Just did this", trigger: "grounding-exercise-4"}
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
              {label: "Just did this", trigger: "grounding-exercise-5"}
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
              {label: "Just did this", trigger: "grounding-conclusion-question"}
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
          },

          {
            id:"q-firstname", 
            message:"What is your first name?", 
            trigger:"firstname",
          },
          {
            id:"firstname", 
            user: true,
            trigger:"q-lastname"
          },
          {
            id:"q-lastname", 
            message:"What is your last name?", 
            trigger:"lastname",
          },
          {
            id:"lastname", 
            user: true,
            trigger:"q-submit"
          },
        //   {
        //     id:"q-email", 
        //     message:"Finally. what is your email?", 
        //     trigger:"email",
        //   },
        //   {
        //     id:"email", 
        //     user: true,
        //     trigger:"q-submit"
        //   },
          {
            id:"q-submit", 
            message:"Do you wish to submit?", 
            trigger:"submit"
          },
          {
            id:"submit", 
            options:[
            {value:"y", label:"Yes", trigger:"end-message"},
            {value:"n", label:"No", trigger:"no-submit"},
            ] 
          },
          {
                  id: "no-submit",
                  message:"Your information was not submitted.", 
                  end: true,
               },
                    {
                  id: "end-message",
                  component: <Post />,
                  asMessage: true,
                  end: true,
               },
        ]}
      />
        
        );
      }

    }

    export default SimpleForm;
