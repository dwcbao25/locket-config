/***********************************************
* Locket Gold Unlocker (RevenueCat Mock)
* Viết lại rõ ràng từ script đã làm rối của Mít
***********************************************/

var body = $response.body;
var obj = {};

try {
    obj = JSON.parse(body);
} catch (e) {
    obj = {};
}

if (!obj || typeof obj !== "object") {
    obj = {};
}

// Cập nhật thông tin thời gian thực
obj.state = "UPDATE";
obj.templateVersion = String(Date.now());
obj.Attention = "Chúc mừng bạn! Đã mở khóa Locket Gold thành công!";

// Khởi tạo cấu trúc subscriber nếu chưa có
obj.subscriber = obj.subscriber || {};
obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
obj.subscriber.entitlements = obj.subscriber.entitlements || {};
obj.subscriber.other_purchases = obj.subscriber.other_purchases || {};

// Thông tin gói VIP giả lập (RevenueCat Payload)
var locketGoldPackage = {
    "auto_resume_date": null,
    "display_name": "Locket Gold",
    "is_sandbox": false,
    "ownership_type": "PURCHASED",
    "billing_issues_detected_at": null,
    "management_url": "https://apps.apple.com/manage/subscriptions",
    "period_type": "active",
    "price": { "amount": 0, "currency": "USD" },
    "expires_date": "2099-09-09T10:10:15Z",
    "grace_period_expires_date": null,
    "refunded_at": null,
    "unsubscribe_detected_at": null,
    "original_purchase_date": "2008-12-25T10:10:15Z",
    "purchase_date": "2008-12-25T10:10:15Z",
    "store": "app_store",
    "store_transaction_id": "mimihiep08724193"
};

// Danh sách các key đăng ký và quyền lợi cần tiêm vào
var subKeys = [
    "locket_gold", "gold", "pro", "premium", 
    "locket_gold_yearly", "locket_gold_monthly", 
    "camera_filters", "filters", "ai_filters"
];

// Tiêm dữ liệu vào mục subscriptions và entitlements
subKeys.forEach(function(key) {
    obj.subscriber.subscriptions[key] = locketGoldPackage;
    obj.subscriber.entitlements[key] = locketGoldPackage;
});

// Cập nhật request date tránh bị cache cũ
obj.request_date = obj.request_date || "2026-11-08T00:00:00Z";
obj.request_date_ms = obj.request_date_ms || Date.now();

// Trả về kết quả sau khi rewrite
$done({
    status: 200,
    headers: Object.assign({}, $response && $response.headers || {}, {
        "content-type": "application/json; charset=utf-8"
    }),
    body: JSON.stringify(obj)
});
