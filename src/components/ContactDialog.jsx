import React, { useState } from "react";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Send } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function ContactDialog({ open, onOpenChange }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form, { timeout: 10000 });
      toast.success("Message sent!", {
        description: "Vilas will get back to you within 24 hours.",
      });
      setForm({ name: "", email: "", message: "" });
      onOpenChange(false);
    } catch (err) {
      const detail =
        err?.response?.data?.detail?.[0]?.msg ||
        err?.response?.data?.detail ||
        "Please try again in a moment.";
      toast.error("Couldn't send message", { description: String(detail) });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">Let's talk</DialogTitle>
          <DialogDescription>
            Tell me a little about your project and I'll reply within 24 hours.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-1">
          <div className="space-y-1.5">
            <Label htmlFor="name" className="text-xs">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-xs">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@company.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="message" className="text-xs">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              placeholder="What are you working on?"
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <DialogFooter className="pt-2">
            <Button
              type="submit"
              disabled={loading}
              className="gap-1.5 rounded-full bg-foreground text-background hover:bg-foreground/90 w-full sm:w-auto"
            >
              {loading ? "Sending…" : "Send message"}
              <Send className="h-3.5 w-3.5" />
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
