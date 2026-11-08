(function () {
  const SERVER_URL = "https://workers.dev";

  // Mảng ánh xạ mã sticker của Locket sang tên hiệu ứng AI tương ứng
  const stickerMapping = {
    stk_rose_flower: "rose_flower",
    rose_flower: "rose_flower",
    stk_shrek_ogre: "shrek_ogre",
    shrek_ogre: "shrek_ogre",
    stk_superhero_cape: "superhero_cape",
    superhero_cape: "superhero_cape",
    stk_spooky_ghost: "spooky_ghost",
    spooky_ghost: "spooky_ghost",
    stk_pirate_hat: "pirate_hat",
    pirate_hat: "pirate_hat",
    stk_volcano_lava: "volcano_lava",
    volcano_lava: "volcano_lava",
    stk_rain_storm: "rain_storm",
    rain_storm: "rain_storm",
    stk_fortnite_llama: "fortnite_llama",
    fortnite_llama: "fortnite_llama",
    stk_watercolor_art: "watercolor_art",
    watercolor_art: "watercolor_art",
    stk_golden_hour: "golden_hour",
    golden_hour: "golden_hour",
    stk_jungle_leaf: "jungle_leaf",
    jungle_leaf: "jungle_leaf",
    stk_cute_zombie: "cute_zombie",
    cute_zombie: "cute_zombie",
    stk_fireworks: "fireworks",
    fireworks: "fireworks",
    stk_new_year_2026: "new_year_2026",
    new_year_2026: "new_year_2026",
    stk_harry_potter: "harry_potter",
    harry_potter: "harry_potter",
    stk_minecraft: "minecraft",
    minecraft: "minecraft",
    stk_fire_flame: "fire_flame",
    fire_flame: "fire_flame",
    stk_giant_spider: "giant_spider",
    giant_spider: "giant_spider",
    stk_ocean_underwater: "ocean_underwater",
    ocean_underwater: "ocean_underwater",
    stk_ufo_alien: "ufo_alien",
    ufo_alien: "ufo_alien",
    stk_dio_disco: "disco_lights",
    disco: "disco_lights",
    stk_dio_pm2: "locket",
    stk_dio_cash: "cash_money",
    cash: "cash_money",
    stk_dio_wedding: "wedding",
    wedding: "wedding",
    stk_dio_cowboy: "cowboy_cowgirl",
    cowboy: "cowboy_cowgirl",
    stk_dio_looksmaxing: "looks_maxxing",
    looksmaxing: "looks_maxxing",
    stk_dio_orange_wig: "okay_wig",
    orange_wig: "okay_wig",
    stk_dio_bleached_hair: "blonde_bleached",
    bleached_hair: "blonde_bleached",
    stk_dio_bob: "bob_cut",
    bob: "bob_cut",
    stk_dio_bearded: "beard",
    bearded: "beard",
    stk_dio_bearded_holiday: "bearded",
    stk_dio_sweat_hearts: "sweet_hearts",
    sweat_hearts: "sweet_hearts",
    stk_dio_elf: "elf_cutout",
    elf: "elf_cutout",
    stk_dio_santa: "santa_cutout",
    santa: "santa_cutout",
    stk_dio_easter_bunny: "easter_bunney_cutout",
    easter_bunny: "easter_bunney_cutout",
    stk_dio_easter_chick: "easter_chick_cutout",
    easter_chick: "easter_chick_cutout",
    stk_dio_toothless: "toothless",
    toothless: "toothless",
    stk_dio_bye_brows: "bye_brows",
    bye_brows: "bye_brows",
    stk_dio_bowling_ball: "bowling_ball",
    bowling_ball: "bowling_ball",
    stk_dio_buns: "buns",
    buns: "buns",
    stk_dio_tatted: "tatted",
    tatted: "tatted",
    stk_dio_mohawk: "mohawk",
    mohawk: "mohawk",
    stk_dio_braces: "braces",
    braces: "braces",
    stk_dio_slimed: "slimed",
    slimed: "slimed",
    stk_dio_princess: "princess",
    princess: "princess",
    stk_dio_happy_birthday: "happy_birthday",
    happy_birthday: "happy_birthday",
    stk_dio_cutesy: "cutesy",
    cutesy: "cutesy",
    stk_dio_sticker_face: "sticker_face",
    sticker_face: "sticker_face",
    stk_dio_flower_crown: "flower_crown",
    flower_crown: "flower_crown",
    stk_dio_love_bug: "love_bug",
    love_bug: "love_bug",
    stk_dio_giraffe: "giraffe",
    giraffe: "giraffe",
    stk_dio_clown: "clown",
    clown: "clown",
    stk_dio_leprechaun: "leprechaun",
    leprechaun: "leprechaun",
    stk_dio_lucky_face: "lucky_face",
    lucky_face: "lucky_face",
    stk_dio_frosty: "frosty",
    frosty: "frosty",
    stk_dio_influencer: "influencer",
    influencer: "influencer"
  };

  // Danh sách các câu lệnh Prompt AI mẫu tương ứng với từng filter
  const aiPrompts = {
    rose_flower: "Show the person in the photo with the exact same pose and background, but have them with a single rose in their mouth. If no person is present in the input, do not add anything to the output.",
    stk_rose_flower: "Show the person in the photo with the exact same pose and background, but have them with a single rose in their mouth. If no person is present in the input, do not add anything to the output.",
    shrek_ogre: "Show the person in the photo with the exact same pose and background, but transform them into Shrek with rounded ears, and rustic clothing while preserving the pose. Keep their hairstyle, but make it look natural in the Shrek style.",
    stk_shrek_ogre: "Show the person in the photo with the exact same pose and background, but transform them into Shrek with rounded ears, and rustic clothing while preserving the pose. Keep their hairstyle, but make it look natural in the Shrek style.",
    superhero_cape: "Show the person in the photo with the exact same pose and background, but suit them up like a superhero in a blue and red outfit with a flowing cape while keeping their pose and framing identical.",
    stk_superhero_cape: "Show the person in the photo with the exact same pose and background, but suit them up like a superhero in a blue and red outfit with a flowing cape while keeping their pose and framing identical.",
    spooky_ghost: "Show the person in the photo with the exact same pose, expression, and background, but subtly insert a realistic-looking ghost somewhere in the background. If no person is present, do not add any people to the output.",
    stk_spooky_ghost: "Show the person in the photo with the exact same pose, expression, and background, but subtly insert a realistic-looking ghost somewhere in the background. If no person is present, do not add any people to the output.",
    pirate_hat: "Show the person in the photo with the exact same pose and background, but dress them like a pirate from Pirates of the Caribbean while keeping their pose and facial expression identical.",
    stk_pirate_hat: "Show the person in the photo with the exact same pose and background, but dress them like a pirate from Pirates of the Caribbean while keeping their pose and facial expression identical.",
    volcano_lava: "Show the person in the photo with the exact same pose, background, and facial expression, but replace the ground with molten lava, glowing magma cracks, and volcanic sparks while keeping them rooted to the spot. If no face is present, do not show any people in the output, only ever show people who were in the original input image.",
    stk_volcano_lava: "Show the person in the photo with the exact same pose, background, and facial expression, but replace the ground with molten lava, glowing magma cracks, and volcanic sparks while keeping them rooted to the spot. If no face is present, do not show any people in the output, only ever show people who were in the original input image.",
    rain_storm: "Retain the exact pose, facial features, distance, and background from the original image. Dress the subject as a character from the Wuthering Heights movie...\n\nFor Men: Dress them in the Jacob Elordi style...\n\nFor Women: Dress them in the Margot Robbie style...",
    stk_rain_storm: "Retain the exact pose, facial features, distance, and background from the original image. Dress the subject as a character from the Wuthering Heights movie...\n\nFor Men: Dress them in the Jacob Elordi style...\n\nFor Women: Dress them in the Margot Robbie style...",
    fortnite_llama: "Show the person in the photo with the exact same pose, expression, and background, but make the entire scene look like it was rendered inside a video game, similar to the style of Fortnite. Show no extra overlays or text on top of the photo. If no person is present, do not add any people to the output.",
    stk_fortnite_llama: "Show the person in the photo with the exact same pose, expression, and background, but make the entire scene look like it was rendered inside a video game, similar to the style of Fortnite. Show no extra overlays or text on top of the photo. If no person is present, do not add any people to the output.",
    watercolor_art: "Show the person in the photo with the exact same pose, expression, and background, but render the entire scene as a watercolor painting with flowing brush strokes. If no person is present, do not add any people to the output.",
    stk_watercolor_art: "Show the person in the photo with the exact same pose, expression, and background, but render the entire scene as a watercolor painting with flowing brush strokes. If no person is present, do not add any people to the output.",
    golden_hour: "Show the person in the photo with the exact same pose, expression, and background, but make the scene look like it was captured during peak golden hour with warm sunlight and long shadows. If no person is present, do not add any people to the output.",
    stk_golden_hour: "Show the person in the photo with the exact same pose, expression, and background, but make the scene look like it was captured during peak golden hour with warm sunlight and long shadows. If no person is present, do not add any people to the output.",
    jungle_leaf: "Show the person in the photo with the exact same pose, background, and facial expression, but with their background surroundings overgrown with plants in a seamless way. The person and their background should remain in the same positions. If no face is present, do not show any people in the output, only ever show people who were in the original input image.",
    stk_jungle_leaf: "Show the person in the photo with the exact same pose, background, and facial expression, but with their background surroundings overgrown with plants in a seamless way. The person and their background should remain in the same positions. If no face is present, do not show any people in the output, only ever show people who were in the original input image.",
cute_zombie: "Show the person in the photo with the exact same pose and background, but turn them into a zombie while keeping their pose and expression identical.",
stk_cute_zombie: "Show the person in the photo with the exact same pose and background, but turn them into a zombie while keeping their pose and expression identical.",
fireworks: "Show the person in the photo with the exact same pose and background, but fill the scene with fireworks exploding in the night sky and reflecting colorful light onto the subject. Ensure the person is in the exact same pose and positioning within the frame. If no face is present, do not show any people in the output, only ever show people who were in the original input image.",
stk_fireworks: "Show the person in the photo with the exact same pose and background, but fill the scene with fireworks exploding in the night sky and reflecting colorful light onto the subject. Ensure the person is in the exact same pose and positioning within the frame. If no face is present, do not show any people in the output, only ever show people who were in the original input image.",
new_year_2026: "Show the person in the photo with the exact same pose and background, but have them wearing decorative glasses that say Happy New Year 2026. Ensure the person is in the exact same pose and positioning within the frame. If no face is present, do not show any people in the output, only ever show people who were in the original input image.",
stk_new_year_2026: "Show the person in the photo with the exact same pose and background, but have them wearing decorative glasses that say Happy New Year 2026. Ensure the person is in the exact same pose and positioning within the frame. If no face is present, do not show any people in the output, only ever show people who were in the original input image.",
harry_potter: "Show the person in the photo with the exact same pose and background, but show them as a character from Harry Potter wearing a robe of one of the four houes. Keep the pose and framing identical and do not change the background.",
stk_harry_potter: "Show the person in the photo with the exact same pose and background, but show them as a character from Harry Potter wearing a robe of one of the four houes. Keep the pose and framing identical and do not change the background.",
minecraft: "Show the person in the photo with the exact same pose, expression, and background, but make everything in the scene look like it was created from Minecraft-style blocks and show people as Minecraft characters. If no person is present, do not add any people to the output.",
stk_minecraft: "Show the person in the photo with the exact same pose, expression, and background, but make everything in the scene look like it was created from Minecraft-style blocks and show people as Minecraft characters. If no person is present, do not add any people to the output.",
fire_flame: "Show the persons in the photo with the exact same pose and background, but with a dramatic theatrical flame effect appearing just in front of the subject's face, as if they are performing a fantasy fire-breathing act, captured with a modern iPhone camera look...",
stk_fire_flame: "Show the persons in the photo with the exact same pose and background, but with a dramatic theatrical flame effect appearing just in front of the subject's face, as if they are performing a fantasy fire-breathing act, captured with a modern iPhone camera look...",
giant_spider: "Show the person in the photo with the exact same pose, expression, and background, but place a realistic spider perched on them somewhere, such as their shoulder or head. If no person is present, do not add any people to the output.",
stk_giant_spider: "Show the person in the photo with the exact same pose, expression, and background, but place a realistic spider perched on them somewhere, such as their shoulder or head. If no person is present, do not add any people to the output.",
ocean_underwater: "Show the person in the photo with the exact same pose, background, and facial expression, but as if them and their surrounding environment was underwater. If no face is present, do not show any people in the output, only ever show people who were in the original input image.",
stk_ocean_underwater: "Show the person in the photo with the exact same pose, background, and facial expression, but as if them and their surrounding environment was underwater. If no face is present, do not show any people in the output, only ever show people who were in the original input image.",
ufo_alien: "Show the person in the photo with the exact same pose and background, but show a subtle UFO hovering in the sky or an alien somewhere hidden somewhere in the user's background. If no face is present, do not show any people in the output, only ever show people who were in the original input image.",
stk_ufo_alien: "Show the person in the photo with the exact same pose and background, but show a subtle UFO hovering in the sky or an alien somewhere hidden somewhere in the user's background. If no face is present, do not show any people in the output, only ever show people who were in the original input image.",
disco_lights: "Show the persons in the photo with the exact same pose and background, but with disco-style lighting effects cast across the scene, captured with a modern iPhone camera look...",
// FIX BIẾN INFLUENCER: Thay đổi nháy kép thành nháy đơn để tránh lỗi cú pháp hỏng code
influencer: "Show the persons in the photo with the exact same pose and background, but with a hyperbolic 'influencer' makeup look applied to the face, captured with a modern iPhone camera look...",
princess: "Show the person in the photo with the exact same pose and background, but portray them as a prince charming or a beautiful princess from a fairytale.",
looks_maxxing: "Show the persons in the photo with the exact same pose and background, but with a full, full-length beard added to the face, captured with a modern iPhone camera look...",
beard: "Show the persons in the photo with the exact same pose and background, but with a full, full-length beard added to the face, captured with a modern iPhone camera look...",
slimed: "Show the persons in the photo with the exact same pose and background, but with thick green Nickelodeon-style slime being poured and splashing throughout the scene, captured with a modern iPhone camera look...",
cowboy_cowgirl: "Show the persons in the photo with the exact same pose and background, but with subjects dressed in Western attire appropriate to each person, captured with a modern iPhone camera look...",
clown: "Show the persons in the photo with the exact same pose and background, but styled as clowns, captured with a modern iPhone camera look...",
tatted: "Show the persons in the photo with the exact same pose and background, but with face tattoos applied, captured with a modern iPhone camera look...",
bye_brows: "Show the persons in the photo with the exact same pose and background, but with only the eyebrow hair removed.",
bowling_ball: "Show the persons in the photo with the exact same pose and background, but with a completely bald head.",
blonde_bleached: "Show the persons in the photo with the exact same pose and background, but with a buzzed and bleached hairstyle.",
bob_cut: "Show the persons in the photo with the exact same pose and background, but with their hair cut into a bob hairstyle, captured with a modern iPhone camera look...",
mohawk: "Show the persons in the photo with the exact same pose and background, but with a mohawk hairstyle featuring shaved sides and a raised center strip, captured with a modern iPhone camera look...",
braces: "Show the persons in the photo with the exact same pose and background, but with multicolored braces visible on their teeth, captured with a modern iPhone camera look...",
flower_crown: "Show the persons in the photo with the exact same pose and background, but wearing a mixed wildflower crown.",
giraffe: "Show the persons in the photo with the exact same pose and background, but with the subject wearing a giraffe costume, captured with a modern iPhone camera look...",
leprechaun: "Show the person in the photo with the exact same pose, framing, expression, and background, but dress them in leprechaun costume...",
lucky_face: "Show the person in the photo with the exact same pose and background, but add cute, subtle freckles concentrated across the bridge of the nose and upper cheeks...",
elf_cutout: "Show the person in the photo with the exact same pose and background, but dressed up as an Elf. Ensure the person is in the exact same pose and positioning within the frame. If no face is present, do not show any people in the output, only ever show people who were in the original input image.",
santa_cutout: "Show the person in the photo with the exact same pose and background, but dressed up as Santa Claus. Ensure the person is in the exact same pose and positioning within the frame. If no face is present, do not show any people in the output, only ever show people who were in the original input image.",
easter_chick_cutout: "Show the persons in the photo with the exact same pose and background, but put them in a bright yellow Easter chick costume...",
photobooth: "Show the persons in the photo with the exact same pose and background, captured with a Korean photobooth 4-cut aesthetic, vintage soft lighting, clear facial features, 8k resolution, modern iPhone camera look.",
photobooth_4cut: "Show the persons in the photo with the exact same pose and background, captured with a Korean photobooth 4-cut aesthetic, vintage soft lighting, clear facial features, 8k resolution, modern iPhone camera look.",
photobooth_cute: "Show the persons in the photo with the exact same pose and background, captured with a cute pastel aesthetic, soft lighting, 8k resolution, modern iPhone camera look.",
pb_strawberry: "Show the persons in the photo with the exact same pose and background, captured with a cute pastel strawberry photobooth aesthetic, soft lighting, 8k resolution, modern iPhone camera look.",
pb_vintage: "Show the persons in the photo with the exact same pose and background, captured with vintage 90s film aesthetic, warm nostalgic lighting, 8k resolution, modern iPhone camera look.",
pb_galaxy: "Show the persons in the photo with the exact same pose and background, captured with dreamy galaxy stars lighting, soft ambient glow, 8k resolution, modern iPhone camera look.",
pb_holo_4cut: "Show the persons in the photo with the exact same pose and background, captured with holographic Y2K aesthetic, iridescent chrome shine, 8k resolution, modern iPhone camera look.",
pb_scrapbook_ripped_4cut: "Show the persons in the photo with the exact same pose and background, captured with scrapbook vintage paper aesthetic, warm film texture, 8k resolution, modern iPhone camera look.",
pb_ripped_paper_4cut: "Show the persons in the photo with the exact same pose and background, captured with artistic ripped paper collage aesthetic, soft shadows, 8k resolution, modern iPhone camera look.",
pb_denim_ripped_2x2: "Show the persons in the photo with the exact same pose and background, captured with stylish 90s denim aesthetic, cool tone lighting, 8k resolution, modern iPhone camera look.",
frame_classic_pb: "Show the persons in the photo with the exact same pose and background, captured with classic black and white film photobooth aesthetic, dramatic soft lighting, 8k resolution, modern iPhone camera look."
};
// Hàm đọc dữ liệu cấu hình lưu trữ trong hệ thống proxy
function readPersistentStore(key) {
try {
if (typeof $persistentStore !== "undefined") return $persistentStore.read(key) || "";
if (typeof $prefs !== "undefined") return $prefs.valueForKey(key) || "";
} catch (e) {}
return "";
}
// Hàm ghi cấu hình vào bộ nhớ proxy
function writePersistentStore(key, value) {
try {
if (typeof $persistentStore !== "undefined") $persistentStore.write(String(value), key);
else if (typeof $prefs !== "undefined") $prefs.setValueForKey(String(value), key);
} catch (e) {}
}
function isPhotoboothStyle(effectName) {
if (!effectName) return false;
const lowerName = String(effectName).toLowerCase();
if (lowerName.startsWith("pb_single_") || lowerName.startsWith("khung_")) return false;
return /photobooth_4cut|photobooth_cute|pb_holo_4cut|pb_scrapbook_ripped_4cut|pb_ripped_paper_4cut|pb_denim_ripped_2x2|frame_classic_pb|frame_berry_days|frame_happy_snap|frame_sky_diary|pb_strawberry|pb_vintage|pb_galaxy|photoboot|4cut/i.test(lowerName);
}
function isSingleFrameOrCommentSticker(effectName) {
if (!effectName) return false;
if (isPhotoboothStyle(effectName)) return false;
const lowerName = String(effectName).toLowerCase();
return /^khung_|^frame_|pb_single_|cmt_locket|custom_frame|sticker_b_nh_lu_n/i.test(lowerName);
}
function mockSuccessResponse(targetUrl) {
return {
status: 200,
headers: { "Content-Type": "application/json; charset=utf-8", "Access-Control-Allow-Origin": "*" },
body: JSON.stringify({
result: {
outputUrl: targetUrl, output_url: targetUrl, url: targetUrl, imageUrl: targetUrl, image_url: targetUrl, status: 200,
data: { outputUrl: targetUrl, output_url: targetUrl, url: targetUrl, imageUrl: targetUrl, image_url: targetUrl }
}
})
};
}
function overrideImageUrls(responseObj, targetUrl) {
if (!responseObj || typeof responseObj !== "object") return;
const imageFields = ["outputUrl", "output_url", "url", "imageUrl", "image_url"];
const searchObjects = [responseObj, responseObj.result, responseObj.result && responseObj.result.data, responseObj.data];
for (let i = 0; i < searchObjects.length; i++) {
const currentObj = searchObjects[i];
if (currentObj && typeof currentObj === "object") {
for (let j = 0; j < imageFields.length; j++) {
if (currentObj[imageFields[j]] !== undefined) currentObj[imageFields[j]] = targetUrl;
}
}
}
if (!responseObj.result) responseObj.result = {};
responseObj.result.outputUrl = targetUrl;
responseObj.result.output_url = targetUrl;
responseObj.result.url = targetUrl;
responseObj.result.imageUrl = targetUrl;
responseObj.result.image_url = targetUrl;
responseObj.result.status = 200;
if (responseObj.result.data) {
responseObj.result.data.outputUrl = targetUrl;
responseObj.result.data.output_url = targetUrl;
responseObj.result.data.url = targetUrl;
responseObj.result.data.imageUrl = targetUrl;
responseObj.result.data.image_url = targetUrl;
}
}
// === PHẦN CHÍNH: KIỂM SOÁT GÓI TIN MẠNG ===
if (typeof $response === "undefined") {
try {
if (!$request) return $done({});
// FIX FIX CHÍNH: Thay thế "workers.dev" lỗi bằng link máy chủ đầy đủ của bạn
const proxyRedirectUrl = "spring-sky-609d.dwcbaocuteee.workers.dev";
let modifiedHeaders = Object.assign({}, $request && $request.headers || {});
modifiedHeaders.Host = "spring-sky-609d.dwcbaocuteee.workers.dev";
modifiedHeaders.host = "spring-sky-609d.dwcbaocuteee.workers.dev";
modifiedHeaders["X-Module-Origin"] = "Locket_YouTube";
return $done({ url: proxyRedirectUrl, headers: modifiedHeaders });
} catch (error) {
return $done({});
}
}
try {
if (typeof $response !== "undefined" && $response.body) {
let responseData = {};
try { responseData = JSON.parse($response.body); } catch (e) { responseData = {}; }
delete responseData.error;
delete responseData.errors;
if (responseData.result) {
delete responseData.result.error;
delete responseData.result.errors;
}
return $done({
status: 200,
headers: { "Content-Type": "application/json; charset=utf-8", "Access-Control-Allow-Origin": "*" },
body: JSON.stringify(responseData)
});
}
} catch (error) {}
return $done({});
})();
