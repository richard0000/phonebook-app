"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContact = exports.updateContact = exports.addContact = exports.getContacts = void 0;
const contact_1 = __importDefault(require("../../models/contact"));
const getContacts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contacts = yield contact_1.default.find();
        res.status(200).json({ contacts });
    }
    catch (error) {
        throw error;
    }
});
exports.getContacts = getContacts;
const addContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const contact = new contact_1.default({
            name: body.name,
            number: body.number,
        });
        const newContact = yield contact.save();
        const allContacts = yield contact_1.default.find();
        res
            .status(201)
            .json({
            message: 'Contact added',
            contact: newContact,
            contacts: allContacts,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.addContact = addContact;
const updateContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updateContact = yield contact_1.default.findByIdAndUpdate({ _id: id }, body);
        const allContacts = yield contact_1.default.find();
        res.status(200).json({
            message: 'Contact updated',
            contact: updateContact,
            contacts: allContacts,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updateContact = updateContact;
const deleteContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedContact = yield contact_1.default.findByIdAndRemove(req.params.id);
        const allContacts = yield contact_1.default.find();
        res.status(200).json({
            message: 'Contact deleted',
            contact: deletedContact,
            contacts: allContacts,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteContact = deleteContact;
