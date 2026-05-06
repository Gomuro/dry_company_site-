import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string({ required_error: "Indica tu nombre" })
    .min(2, "El nombre es demasiado corto")
    .max(120, "El nombre es demasiado largo"),
  phone: z
    .string({ required_error: "Indica un teléfono" })
    .min(9, "Teléfono no válido")
    .max(32, "Teléfono no válido"),
  email: z
    .string({ required_error: "Indica un email" })
    .email("Email no válido")
    .max(254, "Email no válido"),
  city: z
    .string({ required_error: "Indica ciudad o zona" })
    .min(2, "Ciudad o zona demasiado corta")
    .max(120, "Ciudad o zona demasiado larga"),
  message: z
    .string({ required_error: "Describe brevemente el problema" })
    .min(10, "Añade un poco más de detalle")
    .max(4000, "Mensaje demasiado largo"),
  consent: z.boolean().refine((value) => value === true, {
    message: "Debes aceptar la política de datos",
  }),
});

export type ContactInput = z.infer<typeof contactSchema>;
