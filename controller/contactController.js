const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json({ contacts });
});

const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("contact not found");
  }
  res.status(200).json(contact);
});

const createContact = asyncHandler(async (req, res) => {
  //console.log("the request body is:", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id: req.user.id,
  }); // u either put the name, phone, email or just simply req.body inside the create method{}
  res.status(201).json(contact);
});

const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("contact not found");
  }

  /*if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("user dont have permission to update contact");
  }*/
  const updatecontact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatecontact);
});

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("contact not found");
  }

  /* if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("user dont have permission to delete contact");
  }*/
  const deletecontact = await Contact.findByIdAndDelete(req.params.id);
  res.status(200).json(deletecontact);
});

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
