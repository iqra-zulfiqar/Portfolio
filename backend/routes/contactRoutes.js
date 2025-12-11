import express from "express";
import { Contact } from "../models/contactModel.js";

const router = express.Router();

// POST - Create new contact message
router.post("/", async (request, response) => {
  try {
    // Validate required fields
    if (
      !request.body.name ||
      !request.body.email ||
      !request.body.subject ||
      !request.body.message
    ) {
      return response.status(400).send({
        message: "Send all required fields: name, email, subject, message",
      });
    }

    const newContact = {
      name: request.body.name,
      email: request.body.email,
      subject: request.body.subject,
      message: request.body.message,
    };

    const contact = await Contact.create(newContact);

    return response.status(201).send(contact);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// GET - Get all contact messages
router.get("/", async (request, response) => {
  try {
    const contacts = await Contact.find({}).sort({ createdAt: -1 });

    return response.status(200).json({
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// GET - Get single contact message by ID
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const contact = await Contact.findById(id);

    if (!contact) {
      return response.status(404).json({ message: "Contact not found" });
    }

    return response.status(200).json(contact);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// DELETE - Delete contact message
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Contact.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Contact not found" });
    }

    return response.status(200).send({ message: "Contact deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;