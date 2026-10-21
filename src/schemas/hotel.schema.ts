import z from "zod";

const hotelSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  city: z.string().min(1, { message: "City is required" }),
  country: z.string().min(1, { message: "Country is required" }),
});

const hotelUpdateSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }).optional(),
  address: z.string().min(1, { message: "Address is required" }).optional(),
  city: z.string().min(1, { message: "City is required" }).optional(),
  country: z.string().min(1, { message: "Country is required" }).optional(),
});

export { hotelSchema, hotelUpdateSchema };
