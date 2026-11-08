// 🛡️ MinhHiep08 Security Shield - All Rights Reserved
// Unauthorized copying or decompilation is strictly prohibited.

var obj = {};

try {
    obj = JSON.parse($response.body);
} catch (_0x223466) {
    obj = {};
}

if (!obj || typeof obj !== 'object') {
    obj = {};
}

const mapping = { 'Locket': ['Gold'] };

var ua = typeof $request !== 'undefined' && $request && $request['headers'] ? $request['headers']['user-agent'] || $request['headers']['user-agent'] || '' : '';

obj.Attention = "Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";

var minhhiep08 = {
    'auto_resume_date': null,
    'display_name': 'Locket Gold',
    'is_sandbox': false,
    'ownership_type': 'PURCHASED',
    'billing_issues_detected_at': null,
    'management_url': 'https://apps.apple.com/manage/subscriptions',
    'period_type': 'active',
    'price': {
        'amount': 399000,
        'currency': 'USD'
    },
    'expires_date': '2099-09-09T10:10:15Z',
    'grace_period_expires_date': null,
    'refunded_at': null,
    'unsubscribe_detected_at': null,
    'original_purchase_date': '2005-01-09T10:10:15Z',
    'purchase_date': '2005-01-09T10:10:15Z',
    'store': 'app_store',
    'store_transaction_id': 'mimihiep08724193'
};

var locketGold = {
    'grace_period_expires_date': null,
    'purchase_date': '2008-12-25T10:10:15Z',
    'original_purchase_date': '2008-12-25T10:10:15Z',
    'product_identifier': 'Locket Gold',
    'product_plan_identifier': 'locket_1_year',
    'ownership_type': 'PURCHASED',
    'store': 'app_store',
    'is_sandbox': false,
    'unsubscribe_detected_at': null,
    'billing_issues_detected_at': null,
    'expires_date': '2099-09-09T10:10:15Z'
};

obj['subscriber'] = obj['subscriber'] || {};
obj['subscriber']['subscriptions'] = obj['subscriber']['subscriptions'] || {};
obj['subscriber']['entitlements'] = obj['subscriber']['entitlements'] || {};
obj['subscriber']['other_purchases'] = obj['subscriber']['other_purchases'] || {};

const subKeys = [
    'Locket Gold',
    'gold',
    'pro',
    'premium',
    'locket_gold',
    'Locket Gold',
    'camera_filters',
    'filters',
    'ai_filters',
    'holiday_filters',
    'holiday_filter',
    'ai_filter',
    'filter',
    'locket_gold_yearly',
    'locket_gold_monthly'
];

subKeys['forEach'](function(_0x3e6316) {
    obj['subscriber']['subscriptions'][_0x3e6316] = minhhiep08;
});

const entKeys = [
    'gold',
    'pro',
    'premium',
    'locket_gold',
    'Locket Gold',
    'camera_filters',
    'filters',
    'ai_filters',
    'holiday_filters',
    'ai_filter',
    'filter',
    'locket_gold_yearly',
    'locket_gold_monthly'
];

entKeys['forEach'](function(_0x4d430c) {
    obj['subscriber']['entitlements'][_0x4d430c] = locketGold;
});

obj['request_date'] = obj['request_date'] || "2026-11-08T00:00:00Z";
obj['request_date_ms'] = obj['request_date_ms'] || Date['now']();

$done({
    'status': 200,
    'headers': Object['assign']({}, $response && $response['headers'] || {}, {
        'content-type': 'application/json; charset=utf-8'
    }),
    'body': JSON['stringify'](obj)
});
