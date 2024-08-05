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
exports.handleStkPush = void 0;
const axios_1 = __importDefault(require("axios"));
const timestamp_1 = require("../utils/timestamp");
const handleStkPush = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { phone, amount } = req.body;
    const BUSINESS_SHORT_CODE = process.env.MPESA_BUSINESS_SHORT_CODE;
    const password = Buffer.from(BUSINESS_SHORT_CODE + process.env.MPESA_PASS_KEY + timestamp_1.timestamp).toString("base64");
    const payload = {
        BusinessShortCode: BUSINESS_SHORT_CODE,
        Password: password,
        Timestamp: timestamp_1.timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: amount,
        PartyA: phone,
        PartyB: process.env.MPESA_BUSINESS_SHORT_CODE,
        PhoneNumber: phone,
        CallBackURL: "https://wangaevans.com/",
        AccountReference: "BuySasa online shop",
        TransactionDesc: "Payment",
    };
    try {
        const response = yield axios_1.default.post("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", payload, {
            headers: {
                Authorization: `Bearer ${req.token}`,
            },
        });
        res.status(201).json({
            message: true,
            data: response.data,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Failed",
            error: error.message,
        });
    }
});
exports.handleStkPush = handleStkPush;
