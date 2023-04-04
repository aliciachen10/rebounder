// import { Alert, AlertIcon } from "@chakra-ui/alert"
import React, { useEffect, useState } from "react"
// import { useInsertUserChatLogMutation } from "/@/graphql/generated/types"
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client";
import nhost from '../../nhostClient'

const ADD_CHAT = gql `
    mutation($chat: jsonb, $user_id: uuid) {
        insert_chat_log_one(object: {chat: $chat, user_id: $user_id}) {
        chat
        row_id
        time_added
        user_id
        }
    }
    `;

const Post = ({ steps }) => {
    console.log(steps)
  const [addChatLog, addChatLogResult] = useMutation(ADD_CHAT);
//   const [insertChatLog, insertChatLogResult] = useInsertUserChatLogMutation()
  const [a1, setA1] = useState(steps?.a1.value)
  const [a2, setA2] = useState(steps?.a2.value)
  const [a3, setA3] = useState(steps?.a3.value)
  const [a4, setA4] = useState(steps?.a4.value)
  const [a5, setA5] = useState(steps?.a5.value)
  const [a6, setA6] = useState(steps?.a6.value)
  const [a7, setA7] = useState(steps?.a7.value)
  const [a8, setA8] = useState(steps?.a8.value)
  const [a9, setA9] = useState(steps?.a9.value)
  const [a10, setA10] = useState(steps?.a10.value)
  const [a11, setA11] = useState(steps?.a11.value)
  const [a12, setA12] = useState(steps?.a12.value)
  const [a13, setA13] = useState(steps?.a13.value)
  const [a14, setA14] = useState(steps?.a14.value)
  const [a15, setA15] = useState(steps?.a15.value)
  const [a16, setA16] = useState(steps?.a16.value)
  const [a17, setA17] = useState(steps?.a17.value)
  const [a18, setA18] = useState(steps?.a18.value)
  const [a19, setA19] = useState(steps?.a19.value)
  const [a20, setA20] = useState(steps?.a20.value)
  const [totalScore, setTotalScore] = useState(0)
//   const [firstname, setFirstname] = useState(steps?.firstname.value || "")
//   const [lastname, setLastname] = useState(steps?.lastname.value || "")
//   const [submit, setSubmit] = useState(steps?.submit.value || "")

  let current_session_user_id = nhost.auth.getUser().id
  
  useEffect(() => {
    setA1(steps?.a1.value)
  }, [steps?.a1.value])

  useEffect(() => {
    setA2(steps?.a2.value)
  }, [steps?.a2.value])

  useEffect(() => {
    setA3(steps?.a3.value)
  }, [steps?.a3.value])

  useEffect(() => {
    setA4(steps?.a4.value)
  }, [steps?.a4.value])

  useEffect(() => {
    setA5(steps?.a5.value)
  }, [steps?.a5.value])
  
  useEffect(() => {
    setA6(steps?.a6.value)
  }, [steps?.a6.value])

  useEffect(() => {
    setA7(steps?.a7.value)
  }, [steps?.a7.value])

  useEffect(() => {
    setA8(steps?.a8.value)
  }, [steps?.a8.value])

  useEffect(() => {
    setA9(steps?.a9.value)
  }, [steps?.a9.value])

  useEffect(() => {
    setA10(steps?.a10.value)
  }, [steps?.a10.value])

  useEffect(() => {
    setA11(steps?.a11.value)
  }, [steps?.a11.value])

  useEffect(() => {
    setA12(steps?.a12.value)
  }, [steps?.a12.value])

  useEffect(() => {
    setA13(steps?.a13.value)
  }, [steps?.a13.value])

  useEffect(() => {
    setA14(steps?.a14.value)
  }, [steps?.a14.value])

  useEffect(() => {
    setA15(steps?.a15.value)
  }, [steps?.a15.value])

  useEffect(() => {
    setA16(steps?.a16.value)
  }, [steps?.a16.value])

  useEffect(() => {
    setA17(steps?.a17.value)
  }, [steps?.a17.value])

  useEffect(() => {
    setA18(steps?.a18.value)
  }, [steps?.a18.value])

  useEffect(() => {
    setA19(steps?.a19.value)
  }, [steps?.a19.value])

  useEffect(() => {
    setA20(steps?.a20.value)
  }, [steps?.a20.value])

  useEffect(() => {
    setTotalScore(
        steps?.a1.value + 
        steps?.a2.value + 
        steps?.a3.value + 
        steps?.a4.value + 
        steps?.a5.value + 
        steps?.a6.value + 
        steps?.a7.value + 
        steps?.a8.value + 
        steps?.a9.value + 
        steps?.a10.value + 
        steps?.a11.value + 
        steps?.a12.value + 
        steps?.a13.value + 
        steps?.a14.value + 
        steps?.a15.value + 
        steps?.a16.value + 
        steps?.a17.value + 
        steps?.a18.value + 
        steps?.a19.value +
        steps?.a20.value)
  }, [steps?.a20.value])

//   useEffect(() => {
//     setFirstname(steps?.firstname.value || "")
//   }, [steps?.firstname.value])

//   useEffect(() => {
//     setLastname(steps?.lastname.value || "")
//   }, [steps?.lastname.value])

//   useEffect(() => {
//     setSubmit(steps?.submit.value || "")
//   }, [steps?.submit.value])

//   useEffect(() => {
//     if (submit !== "y") {
//       return
//     }

//     console.log("submitting", firstname, lastname)

    

//     //TO DO: need to grab the user id through a graphql query to database by maybe signin email or some other session variable? check hasura console 
//     addChatLog({variables: {chat: {firstname, lastname}, user_id: current_session_user_id}});
//   }, [addChatLog, submit, firstname, lastname])

  useEffect(() => {
    // const total_score = a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10 + a11 + a12 + a13 + a14 + a15 + a16 + a17 + a18 + a19 + a20
    //TO DO: need to grab the user id through a graphql query to database by maybe signin email or some other session variable? check hasura console 
    addChatLog({variables: {chat: {a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20}, user_id: current_session_user_id}});
  }, [steps?.a20.value])

//   if (addChatLogResult.loading) {
//     return <div>Submitting...</div>
//   }

//   if (addChatLogResult.error) {
//     return <div>Error: {`${addChatLogResult.error}`} </div>
//   }
 

  return (
    // <Alert status="success">
    //   <AlertIcon />
    <>
      Thank you for completing the questionnaire! Your score is {totalScore}. 
      {totalScore > 31 ? "This means you may have post-traumatic stress disorder. Please see a provider for a full diagnosis." : "This means it's possible that if you have any symptoms, it's likely you do not have post-traumatic stress disorder."}
    </>
    // </Alert>
  )
}

export default Post;