import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "./Button";

interface ContactFormProps {
  productOptions: string[];
}

export function ContactForm({ productOptions }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "f6645a68-35b9-456e-b19f-fe8c3940857b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Submission failed. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center py-12 text-center">
        <CheckCircle className="h-16 w-16 text-teal" />
        <h3 className="mt-4 font-display text-xl font-bold text-navy">
          Thank You!
        </h3>
        <p className="mt-2 text-navy/60">
          Your message has been sent. We&apos;ll get back to you
          within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-navy/70"
          >
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-xl border border-navy/10 bg-white px-4 py-3 text-navy transition-colors focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-navy/70"
          >
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-navy/10 bg-white px-4 py-3 text-navy transition-colors focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-sm font-medium text-navy/70"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-xl border border-navy/10 bg-white px-4 py-3 text-navy transition-colors focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="mb-1.5 block text-sm font-medium text-navy/70"
          >
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="w-full rounded-xl border border-navy/10 bg-white px-4 py-3 text-navy transition-colors focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
            placeholder="Your company"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="product"
          className="mb-1.5 block text-sm font-medium text-navy/70"
        >
          Product Interest
        </label>
        <select
          id="product"
          name="product"
          className="w-full rounded-xl border border-navy/10 bg-white px-4 py-3 text-navy transition-colors focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
        >
          <option value="">Select a product</option>
          {productOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-navy/70"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-none rounded-xl border border-navy/10 bg-white px-4 py-3 text-navy transition-colors focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
          placeholder="Tell us about your project requirements..."
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-xl bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle className="h-5 w-5 shrink-0" />
          {errorMessage}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        className="w-full sm:w-auto"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Send Message"}
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
