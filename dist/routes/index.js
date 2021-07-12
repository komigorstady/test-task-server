"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const imgController_1 = __importDefault(require("../controllers/imgController"));
const router = express_1.Router();
router.post('image/dog/upload', imgController_1.default.dogUpload);
router.get('images/dog/list', imgController_1.default.dogList);
exports.default = router;
