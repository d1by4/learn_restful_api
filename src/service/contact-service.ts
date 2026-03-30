import { prismaClient } from "../application/database";
import { ContactResponse, CreateContactRequest, toContacResponse } from "../model/contact-model";
import { ContactValidation } from "../validation/contact-validation";
import { Validation } from "../validation/validation";
import { User } from "../../generated/prisma";
import { logger } from "../application/logging";

export class ContactService {
  static async create(user: User, request: CreateContactRequest): Promise<ContactResponse> {
    const createRequest = Validation.validate(ContactValidation.CREATE, request);

    const record = {
      ...createRequest,
      ...{ username: user.username },
    };

    const contact = await prismaClient.contact.create({
      data: record,
    });

    return toContacResponse(contact);
  }

  static async get
}
