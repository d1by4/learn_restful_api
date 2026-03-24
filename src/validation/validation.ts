// import { ZodType } from "zod";

// export class Validation {
//   static validate<T>(schema: ZodType, data: T): T {
//     return schema.parse(data);
//   }
// }
import { z } from "zod";

export class Validation {
  static validate<T extends z.ZodTypeAny>(schema: T, data: unknown): z.infer<T> {
    return schema.parse(data);
  }
}
