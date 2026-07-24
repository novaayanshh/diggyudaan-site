import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message is too short"),
});

export type ContactFormInput = z.infer<typeof ContactSchema>;

/**
 * Sends a contact form submission to hello@digyudaan.com via Resend.
 *
 * Setup required (one-time):
 * 1. Create a free account at https://resend.com
 * 2. Verify a sending domain (e.g. digyudaan.com) under Resend > Domains
 *    (until verified, Resend only lets you send to the account's own email)
 * 3. Create an API key under Resend > API Keys.
 * 4. In Vercel: Project Settings > Environment Variables, add
 *    RESEND_API_KEY = <your key>, then redeploy.
 * 5. Once your domain is verified, change the "from" address below to
 *    something like "DigyUdaan Website <noreply@digyudaan.com>".
 */
export const submitContactForm = createServerFn({ method: "POST" })
  .validator((data: unknown) => ContactSchema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      throw new Error("Email service is not configured yet.");
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "DigyUdaan Website <onboarding@resend.dev>",
        to: ["hello@digyudaan.com"],
        reply_to: data.email,
        subject: `New enquiry from ${data.name}`,
        text: [
          `Name: ${data.name}`,
          `Email: ${data.email}`,
          `Phone: ${data.phone || "-"}`,
          "",
          "Message:",
          data.message,
        ].join("\n"),
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Resend error:", errText);
      throw new Error("Failed to send email. Please try again later.");
    }

    return { success: true as const };
  });