"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = require("express");
const contacts_1 = require("../controllers/contacts");
const router = (0, express_1.Router)();
router.use(body_parser_1.default.json());
router.get('/contacts/', contacts_1.getContacts);
router.post('/contacts/', contacts_1.addContact);
router.put('/contacts/:id', contacts_1.updateContact);
router.delete('/contacts/:id', contacts_1.deleteContact);
exports.default = router;
