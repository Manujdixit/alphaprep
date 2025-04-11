import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Check, Info } from "lucide-react";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";

export interface FormValues {
  name: string;
  email: string;
  classOrExam: string;
  date: Date;
  timeSlot: string;
}

const timeSlots = [
  "4:00 PM - 5:00 PM",
  "5:00 PM - 6:00 PM",
  "6:00 PM - 7:00 PM",
  "7:00 PM - 8:00 PM",
];

const classOptions = [
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
  "Class 11",
  "Class 12",
];

const examOptions = [
  "SAT",
  "ACT",
  "GMAT",
  "GRE",
  "IELTS",
  "TOEFL",
  "JEE Mains",
  "NEET",
];

const BookingForm = () => {
  const [selectedOption, setSelectedOption] = useState<"class" | "exam">(
    "class"
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      classOrExam: "",
    },
    resolver: async (values) => {
      const errors: Record<string, { type: string; message: string }> = {};

      if (!values.name) {
        errors.name = {
          type: "required",
          message: "Please enter your name",
        };
      }

      if (!values.email) {
        errors.email = {
          type: "required",
          message: "Please enter your email address",
        };
      } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
        errors.email = {
          type: "pattern",
          message: "Please enter a valid email address",
        };
      }

      if (!values.classOrExam) {
        errors.classOrExam = {
          type: "required",
          message: "Please select an option",
        };
      }

      if (!values.date) {
        errors.date = {
          type: "required",
          message: "Please select a date",
        };
      }

      if (!values.timeSlot) {
        errors.timeSlot = {
          type: "required",
          message: "Please select a time slot",
        };
      }

      return {
        values,
        errors,
      };
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      // Format the date for Google Sheets
      const formattedDate = format(data.date, "yyyy-MM-dd");

      // Prepare data for Google Sheets
      const formData = {
        name: data.name,
        email: data.email,
        type: selectedOption,
        classOrExam: data.classOrExam,
        date: formattedDate,
        timeSlot: data.timeSlot,
      };

      // Send data to Google Sheets
      const rawResponse = await fetch("/api/bookingForm", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(rawResponse);
      

      toast.success("Demo class booked successfully!", {
        description: `Your ${
          selectedOption === "class" ? "class" : "exam"
        } demo has been scheduled for ${format(data.date, "MMMM d, yyyy")} at ${
          data.timeSlot
        }.`,
      });

      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to book demo class", {
        description:
          "There was an error processing your request. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
      className="glass-card rounded-xl overflow-hidden"
    >
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-edu-blue/10 flex items-center justify-center">
            <CalendarIcon size={16} className="text-edu-blue" />
          </div>
          <h3 className="text-xl font-serif font-medium text-edu-black">
            Book a Free Demo Class
          </h3>
        </div>
        <p className="text-edu-gray text-sm mb-6">
          Experience our teaching firsthand with a complimentary 1-hour session.
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="john.doe@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4 mb-4">
              <Button
                type="button"
                variant={selectedOption === "class" ? "default" : "outline"}
                className={cn(
                  "rounded-lg border shadow-sm",
                  selectedOption === "class"
                    ? "bg-edu-blue  border-edu-blue"
                    : "bg-white text-edu-black/70 border-gray-300 hover:bg-gray-50 hover:text-edu-black"
                )}
                onClick={() => setSelectedOption("class")}
              >
                School Class
              </Button>
              <Button
                type="button"
                variant={selectedOption === "exam" ? "default" : "outline"}
                className={cn(
                  "rounded-lg border shadow-sm",
                  selectedOption === "exam"
                    ? "bg-edu-blue  border-edu-blue"
                    : "bg-white text-edu-black/70 border-gray-300 hover:bg-gray-50 hover:text-edu-black"
                )}
                onClick={() => setSelectedOption("exam")}
              >
                Exam Preparation
              </Button>
            </div>

            <FormField
              control={form.control}
              name="classOrExam"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {selectedOption === "class"
                      ? "Select Your Class"
                      : "Select Exam Type"}
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="rounded-lg">
                        <SelectValue
                          placeholder={
                            selectedOption === "class"
                              ? "Select your class"
                              : "Select exam type"
                          }
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white">
                      {(selectedOption === "class"
                        ? classOptions
                        : examOptions
                      ).map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Select Date</FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal rounded-lg",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto p-0 bg-white"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date() ||
                            date >
                              new Date(
                                new Date().setMonth(new Date().getMonth() + 2)
                              )
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="timeSlot"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Time Slot</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="rounded-lg w-full">
                        <SelectValue placeholder="Select a time slot" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="rounded-lg bg-white">
                      {timeSlots.map((slot) => (
                        <SelectItem
                          key={slot}
                          value={slot}
                          className="cursor-pointer hover:bg-edu-blue/10"
                        >
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="bg-blue-50 rounded-lg p-3 flex items-start gap-2">
              <Info size={16} className="text-edu-blue shrink-0 mt-0.5" />
              <p className="text-edu-gray text-xs">
                After booking, you'll receive a confirmation email with a Zoom
                link for your session. Our teacher will contact you 1 hour
                before the class.
              </p>
            </div>

            <Button
              type="submit"
              className="w-full bg-edu-blue hover:bg-edu-blue/90 rounded-lg py-6 h-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </div>
              ) : (
                "Book Your Free Demo Class"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </motion.div>
  );
};

export default BookingForm;
