// import { Alert, AlertIcon } from "@chakra-ui/alert"
import React, { useEffect, useState } from "react"
import { useInsertUserChatLogMutation } from "/@/graphql/generated/types"

export const Post = ({ steps }) => {
  const [insertChatLog, insertChatLogResult] = useInsertUserChatLogMutation()

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
    insertChatLog({
      variables: {
        chat: {
          firstname,
          lastname
        }
      }
    })
  }, [insertChatLog, submit, firstname, lastname])

  if (insertChatLogResult.loading) {
    return <div>Submitting...</div>
  }

  if (insertChatLogResult.error) {
    return <div>Error: {`${insertChatLogResult.error}`} </div>
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
