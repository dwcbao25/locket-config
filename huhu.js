
const mapping = {
  Locket: ["Gold"]
};
var ua = typeof $request !== "undefined" && $request && $request.headers ? $request.headers["User-Agent"] || $request.headers["user-agent"] || "" : "";
var obj = {};
try {
  obj = JSON.parse($response.body);
} catch (_0x223466) {
  obj = {};
}
if (!obj || typeof obj !== "object") {
  obj = {};
}
obj.Attention = "Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";
var minhhiep08 = {
  auto_resume_date: null,
  display_name: "locket_1600_1y",
  is_sandbox: false,
  ownership_type: "PURCHASED",
  billing_issues_detected_at: null,
  management_url: "https://apps.apple.com/account/subscriptions",
  period_type: "normal",
  price: {
    amount: 399000,
    currency: "VND"
  },
  expires_date: "9999-01-09T10:10:14Z",
  grace_period_expires_date: null,
  refunded_at: null,
  unsubscribe_detected_at: null,
  original_purchase_date: "2008-12-25T10:10:15Z",
  purchase_date: "2008-12-25T10:10:14Z",
  store: "app_store",
  store_transaction_id: "2000001108724193"
};
var locketGold = {
  grace_period_expires_date: null,
  purchase_date: "2008-12-25T10:10:14Z",
  original_purchase_date: "2008-12-25T10:10:15Z",
  product_identifier: "locket_1600_1y",
  product_plan_identifier: "locket_1600_1y",
  ownership_type: "PURCHASED",
  store: "app_store",
  is_sandbox: false,
  unsubscribe_detected_at: null,
  billing_issues_detected_at: null,
  expires_date: "9999-01-09T10:10:14Z"
};
obj.subscriber = obj.subscriber || {};
obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
obj.subscriber.entitlements = obj.subscriber.entitlements || {};
obj.subscriber.non_subscriptions = obj.subscriber.non_subscriptions || {};
obj.subscriber.other_purchases = obj.subscriber.other_purchases || {};
const subKeys = ["locket_1600_1y", "Gold", "gold", "pro", "locket_gold", "Locket Gold", "holiday_effects", "camera_filters", "camera_filter", "filters", "filter", "ai_filters", "ai_filter", "locket_gold_yearly", "gold_yearly"];
subKeys.forEach(function (_0x3e6316) {
  obj.subscriber.subscriptions[_0x3e6316] = minhhiep08;
});
const entKeys = ["Gold", "gold", "pro", "locket_gold", "Locket Gold", "holiday_effects", "camera_filters", "camera_filter", "holiday_filter", "holidays", "effects", "filters", "filter", "ai_filters", "ai_filter", "locket_gold_yearly", "gold_yearly"];
entKeys.forEach(function (_0x4d430c) {
  obj.subscriber.entitlements[_0x4d430c] = locketGold;
});
obj.request_date = obj.request_date || "2026-11-01T00:00:00Z";
obj.request_date_ms = obj.request_date_ms || Date.now();
$done({
  status: 200,
  headers: Object.assign({}, $response && $response.headers || {}, {
    "content-type": "application/json"
  }),
  body: JSON.stringify(obj)
});
