"use client"

import * as z from "zod"

export const formSchema = z.object({
    username: z.string().min(4, {
        message: "Username must be at least 4 characters.",
    }),
    password: z
    .string()
    .min(8)
    .superRefine((value: string, context: any) => {
      if (value === value.toLowerCase()) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Missing a capital letter",
        });
      }

      if (value === value.toUpperCase()) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Missing a lowercase letter",
        });
      }

      if (!/[0-9]/.test(value)) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Missing a number",
        });
      }

      if (!/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value)) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Missing a special character",
        });
      }
    }),
})