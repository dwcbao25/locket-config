var obj = JSON.parse($response.body);
obj.Attention = "Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";

var emmit = {
  "display_name": "Locket Gold",
  "ownership_type": "PURCHASED",
  "period_type": "normal",
  "expires_date": "9999-01-09T10:10:14Z",
  "original_purchase_date": "2009-12-25T00:00:00Z", // Đã đổi thành ngày sinh nhật của bạn 🥳
  "purchase_date": "2009-12-25T00:00:00Z",          // Đồng bộ chu kỳ theo ngày sinh của bạn
  "store": "app_store",
  "product_identifier": "locket_1600_1y",
  "is_sandbox": false
};

if (obj.subscriber) {
  obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
  obj.subscriber.entitlements = obj.subscriber.entitlements || {};
  obj.subscriber.subscriptions["locket_1600_1y"] = emmit;
  obj.subscriber.entitlements["gold"] = emmit;
}

$done({ body: JSON.stringify(obj) });