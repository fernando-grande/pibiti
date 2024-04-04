import { z } from 'zod'

export const required = z.string({
    required_error: "This input is required",
    invalid_type_error: "This input should be a string"
})

export const generalInfoSchema = z.object({
    authorsName: required.min(1),
    university: required.min(1),
    contactEmail: required.email("Invalid Email")

})