export const changeName = (newName) => ({
        type: "CHANGENAME",
        payload: newName
})

export const increment = () => ({
        type: "INCREMENT"
})

export const deleteUser = () => ({
        type: "DELETE"
})

export const changeEmail = (newEmail) => ({
        type: "CHANGEEMAIL",
        payload: newEmail
})