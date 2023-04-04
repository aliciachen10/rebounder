// import { Alert, AlertIcon } from "@chakra-ui/alert"
import React, { useEffect, useState } from "react"
// import { useInsertUserChatLogMutation } from "/@/graphql/generated/types"
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client";

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

  const [firstname, setFirstname] = useState(steps?.firstname.value || "")
  const [lastname, setLastname] = useState(steps?.lastname.value || "")
  const [submit, setSubmit] = useState(steps?.submit.value || "")

  useEffect(() => {
    setFirstname(steps?.firstname.value || "")
  }, [steps?.firstname.value])

  useEffect(() => {
    setLastname(steps?.lastname.value || "")
  }, [steps?.lastname.value])

  useEffect(() => {
    setSubmit(steps?.submit.value || "")
  }, [steps?.submit.value])

  useEffect(() => {
    if (submit !== "y") {
      return
    }

    console.log("submitting", firstname, lastname)
    addChatLog({variables: {chat: {firstname, lastname}, user_id: "0e797243-064c-4b2a-b657-ce833c172a06"}});
    // insert_chat_log({
    //   variables: {
    //     chat: {
    //       firstname,
    //       lastname
    //     }
    //   }
    // })
  }, [addChatLog, submit, firstname, lastname])

  if (addChatLogResult.loading) {
    return <div>Submitting...</div>
  }

  if (addChatLogResult.error) {
    return <div>Error: {`${addChatLogResult.error}`} </div>
  }

  return (
    // <Alert status="success">
    //   <AlertIcon />
    <>
      Thank you! Your data was submitted successfully!
    </>
    // </Alert>
  )
}

export default Post;