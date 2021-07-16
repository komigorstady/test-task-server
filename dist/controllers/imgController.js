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
const path_1 = __importDefault(require("path"));
const jimp_1 = __importDefault(require("jimp"));
const uuid_1 = require("uuid");
const imgModel_1 = __importDefault(require("../models/imgModel"));
const apiService_1 = __importDefault(require("../service/apiService"));
const ApiError_1 = __importDefault(require("../errors/ApiError"));
class ImgController {
    // eslint-disable-next-line class-methods-use-this
    dogUpload(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { height, width } = req.body;
                const dogImmage = yield apiService_1.default.getDogApi();
                const fileName = `${uuid_1.v4()}.jpg`;
                const bufImage = yield jimp_1.default.read(dogImmage.url);
                bufImage.resize(width, height).write(path_1.default.resolve(__dirname, '..', 'static', fileName)); //
                const resImage = yield imgModel_1.default.create({ imgName: fileName, width, height });
                return res.json(resImage);
            }
            catch (err) {
                next(ApiError_1.default.badRequest(err.message));
            }
        });
    }
    dogList(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { height, width } = req.query;
            let images;
            if (height && !width) {
                images = yield imgModel_1.default.findAll({ where: { height } });
            }
            if (width && !height) {
                images = yield imgModel_1.default.findAll({ where: { width } });
            }
            if (width && height) {
                images = yield imgModel_1.default.findAll({ where: { width, height } });
            }
            if (!width && !height) {
                images = yield imgModel_1.default.findAll({ where: {} });
            }
            res.json(images);
        });
    }
}
exports.default = new ImgController();
