import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";

const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Request body:", body);
    console.log("API Key exists:", !!process.env.RESEND_API_KEY);

    const {
      success: zodSuccess,
      data: zodData,
      error: zodError,
    } = Email.safeParse(body);
    if (!zodSuccess)
      return Response.json({ error: zodError?.message }, { status: 400 });

    // Initialize Resend inside the function to ensure env vars are loaded
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return Response.json({ error: "Email service not configured. Please contact the site administrator." }, { status: 503 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data: resendData, error: resendError } = await resend.emails.send({
      from: "Porfolio <onboarding@resend.dev>",
      to: [config.email],
      subject: "Contact me from portfolio",
      react: EmailTemplate({
        fullName: zodData.fullName,
        email: zodData.email,
        message: zodData.message,
      }),
    });

    if (resendError) {
      console.error("Resend error:", resendError);
      return Response.json({ error: resendError.message || "Failed to send email" }, { status: 500 });
    }

    return Response.json(resendData);
  } catch (error) {
    console.error("Unexpected error:", error);
    return Response.json({ error: error instanceof Error ? error.message : "An unexpected error occurred" }, { status: 500 });
  }
}
