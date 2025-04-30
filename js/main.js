"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DDRFlare = exports.ONGEKIRating = exports.Potential = exports.MaimaiRate = exports.CuratorSkill = exports.MaimaiDXRate = exports.ITGHighestUnbroken = exports.PopnClassPoints = exports.GITADORASkill = exports.WACCARate = exports.Volforce = exports.Jubility = exports.CHUNITHMRating = exports.PoyashiBPI = void 0;
exports.PoyashiBPI = __importStar(require("./algorithms/poyashi-bpi"));
exports.CHUNITHMRating = __importStar(require("./algorithms/chunithm-rating"));
exports.Jubility = __importStar(require("./algorithms/jubility"));
exports.Volforce = __importStar(require("./algorithms/volforce"));
exports.WACCARate = __importStar(require("./algorithms/wacca-rate"));
exports.GITADORASkill = __importStar(require("./algorithms/gitadora-skill"));
exports.PopnClassPoints = __importStar(require("./algorithms/popn-classpoints"));
exports.ITGHighestUnbroken = __importStar(require("./algorithms/itg-highest-unbroken"));
exports.MaimaiDXRate = __importStar(require("./algorithms/maimaidx-rate"));
exports.CuratorSkill = __importStar(require("./algorithms/curator-skill"));
exports.MaimaiRate = __importStar(require("./algorithms/maimai-rate"));
exports.Potential = __importStar(require("./algorithms/potential"));
exports.ONGEKIRating = __importStar(require("./algorithms/ongeki-rating"));
exports.DDRFlare = __importStar(require("./algorithms/ddr-flare"));
//# sourceMappingURL=main.js.map