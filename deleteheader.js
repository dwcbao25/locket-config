/***********************************************
* RevenueCat / Locket Cache Stripper Script
* Bản sạch đã giải mã từ script bảo mật MinhHiep08
* Dùng cho: Loon / Surge / Quantumult X / Shadowrocket
***********************************************/

const version = "1.0.0";

// Danh sách các header kiểm tra cache và etag cần loại bỏ
const headersToStrip = [
    "x-revenue-cat-etag",
    "if-none-match",
    "if-modified-since",
    "if-match"
];

// Lấy headers từ request nếu tồn tại
let modifiedHeaders = typeof $request !== "undefined" && $request && $request.headers ? Object.assign({}, $request.headers) : {};

// Kiểm tra và xóa sạch các header cache (không phân biệt chữ hoa/thường)
for (let key of Object.keys(modifiedHeaders)) {
    if (headersToStrip.includes(key.toLowerCase())) {
        modifiedHeaders[key] = "";
        delete modifiedHeaders[key];
    }
}

// Trả về request với headers đã được làm sạch cache
$done({
    "headers": modifiedHeaders
});
