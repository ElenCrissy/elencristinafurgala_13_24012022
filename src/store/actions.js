export const IN_PROGRESS = { type : "in progress" }

export const SUCCESS = (token) => ({
    type : "success",
    payload : {...token}
})

export const REJECTED = { type : "rejected" }