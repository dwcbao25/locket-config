
/***********************************************
* Locket Custom Stickers & Photobooth Full Rewrite
* Giải mã và làm sạch từ script bảo mật MinhHiep08
* Dùng cho: Loon / Surge / Quantumult X / Shadowrocket
***********************************************/

const WORKER_BASE_URL = "https://locket-vip.mhiep20077.workers.dev";

// 1. Từ điển chứa toàn bộ Prompt cấu hình hiệu ứng AI Sticker / Photobooth gốc
const photoboothPrompts = {
    "rose_flower": "Show the person in the photo with the exact same pose and background, but have them with a single rose in their mouth. If no person is present in the input, do not add anything to the output.",
    "shrek_ogre": "Show the person in the photo with the exact same pose and background, but transform them into Shrek with rounded ears, and rustic clothing while preserving the pose. Keep their hairstyle, but make it look natural in the Shrek style.",
    "superhero_cape": "Show the person in the photo with the exact same pose and background, but suit them up like a superhero in a blue and red outfit with a flowing cape while keeping their pose and framing identical.",
    "spooky_ghost": "Show the person in the photo with the exact same pose, expression, and background, but subtly insert a realistic-looking ghost somewhere in the background. If no person is present, do not add any people to the output.",
    "pirate_hat": "Show the person in the photo with the exact same pose and background, but dress them like a pirate from Pirates of the Caribbean while keeping their pose and facial expression identical.",
    "volcano_lava": "Show the person in the photo with the exact same pose, background, and facial expression, but replace the ground with molten lava, glowing magma cracks, and volcanic sparks while keeping them rooted to the spot. If no face is present, do not show any people in the output, only ever show people who were in the original input image.",
    "rain_storm": "Retain the exact pose, facial features, distance, and background from the original image. Dress the subject as a character from the Wuthering Heights movie.\n\nFor Men: Dress them in the Jacob Elordi style with matching hair and outfit.\n\nFor Women: Dress them in the Margot Robbie style: A dramatic, historical-inspired red gown with a high-gloss, lacquered red skirt that is extremely voluminous and structured, forming a full bell shape from the waist down if that part is visible in the initial image. The skirt looks stiff and reflective, almost like polished vinyl. The bodice is corset-style, fitted tightly to the torso in the same glossy red material, with thin shoulder straps, a wide scoop rounded neckline, and the dress cinching the waist and creating a structured, corset-inspired silhouette WITHOUT visible boning, lacing or busks, and featuring a sheer billowing white long puffed sleeve shirt worn underneath with a scooped neckline for the white undershirt peeking out from behind the dress.\n\nConstraints: Do not modify the person's physical features, body shape, or positioning. Keep the framing and background 100% unchanged. If no person is present, return the image unaltered. Do not include Jacob Elordi or Margot Robbie themselves in the output image.",
    "fortnite_llama": "Show the person in the photo with the exact same pose, expression, and background, but make the entire scene look like it was rendered inside a video game, similar to the style of Fortnite. Show no extra overlays or text on top of the photo. If no person is present, do not add any people to the output.",
    "watercolor_art": "Show the person in the photo with the exact same pose, expression, and background, but render the entire scene as a watercolor painting with flowing brush strokes. If no person is present, do not add any people to the output.",
    "golden_hour": "Show the person in the photo with the exact same pose, expression, and background, but make the scene look like it was captured during peak golden hour with warm sunlight and long shadows. If no person is present, do not add any people to the output.",
    "jungle_leaf": "Show the person in the photo with the exact same pose, background, and facial expression, but with their background surroundings overgrown with plants in a seamless way. The person and their background should remain in the same positions. If no face is present, do not show any people in the output, only ever show people who were in the original input image.",
    "cute_zombie": "Show the person in the photo with the exact same pose and background, but turn them into a zombie while keeping their pose and expression identical.",
    "fireworks": "Show the person in the photo with the exact same pose and background, but fill the scene with fireworks exploding in the night sky and reflecting colorful light onto the subject. Ensure the person is in the exact same pose and positioning within the frame. If no face is present, do not show any people in the output, only ever show people who were in the original input image.",
    "new_year_2026": "Show the person in the photo with the exact same pose and background, but have them wearing decorative glasses that say Happy New Year 2026. Ensure the person is in the exact same pose and positioning within the frame. If no face is present, do not show any people in the output, only ever show people who were in the original input image.",
    "harry_potter": "Show the person in the photo with the exact same pose and background, but show them as a character from Harry Potter wearing a robe of one of the four houses. Keep the pose and framing identical and do not change the background.",
    "minecraft": "Show the person in the photo with the exact same pose, expression, and background, but make everything in the scene look like it was created from Minecraft-style blocks and show people as Minecraft characters. If no person is present, do not add any people to the output.",
    "fire_flame": "Show the persons in the photo with the exact same pose and background, but with a dramatic theatrical flame effect appearing just in front of the subject's face, as if they are performing a fantasy fire-breathing act, captured with a modern iPhone camera look.\n\nThe flame should appear as a staged visual effect, suspended in front of the mouth area without showing fire originating from inside the body. Keep the effect believable and cinematic, with a bright yellow-white core, orange and red edges, subtle motion blur, and gentle heat distortion in the nearby air.\n\nAdd a soft warm glow on nearby facial features and clothing, consistent with the flame's position, while preserving the original lighting of the scene. Do not show burns, smoke inhalation, injury, pain, damage, or distress. Do not alter the person's face, expression, identity, or pose.\n\nKeep the background, framing, depth of field, and image quality identical to the original, with the flame effect appearing as a safe staged performance element captured in-camera. Do not change the overall composition of the photo, do not add new people to the photo, only show each person in the photo one time.",
    "giant_spider": "Show the person in the photo with the exact same pose, expression, and background, but place a realistic spider perched on them somewhere, such as their shoulder or head. If no person is present, do not add any people to the output.",
    "ocean_underwater": "Show the person in the photo with the exact same pose, background, and facial expression, but as if them and their surrounding environment was underwater. If no face is present, do not show any people in the output, only ever show people who were in the original input image.",
    "ufo_alien": "Show the person in the photo with the exact same pose and background, but show a subtle UFO hovering in the sky or an alien somewhere hidden somewhere in the user's background. If no face is present, do not show any people in the output, only ever show people who were in the original input image.",
    "disco": "Show the persons in the photo with the exact same pose and background, but with disco-style lighting effects cast across the scene, captured with a modern iPhone camera look.\n\nAdd dynamic, multicolored disco light patterns projected onto the subject and background, including soft circular light spots and scattered beams in colors like red, blue, green, and purple. The lights should appear as if coming from an off-camera rotating disco ball or party light, with varying intensity and size across the frame.\n\nEnsure the light spots wrap naturally over the contours of the face, clothing, and environment, slightly warping with surface curvature. Some lights can appear sharper while others are softly diffused depending on depth of field and distance. Include subtle motion blur or variation in brightness to suggest movement without overwhelming the image.\n\nThe lighting should interact realistically with the existing scene, blending with the original light sources rather than replacing them. Maintain proper shadow behavior and avoid flattening the subject.\n\nApply modern iPhone camera characteristics across the entire image: natural HDR, crisp subject detail, balanced highlights and shadows, and slightly vibrant but realistic colors. The disco lights should inherit this same processing so they feel captured in-camera.\n\nDo not alter the person’s face, expression, identity, or pose. Keep the background, framing, depth of field, and image quality exactly the same, with the lighting effect appearing as a natural part of the scene. Do not change the overall composition of the photo, do not add new people to the photo, only show each person in the photo one time.",
    "influencer": "Show the persons in the photo with the exact same pose, expression, and background, but enhance the subject's features with a glamorous editorial look captured with a modern iPhone camera look.\n\nEnhance the facial features subtly: refine cheekbones, jawline, and nose structure with soft contouring and highlighting, and give the skin a smooth, radiant finish with a natural dewy glow, maintaining natural skin texture with pores and tonal variation.\n\nAdd long, voluminous, and lifted eyelashes with clean separation, resembling professional cosmetic mascara, while maintaining the person's original eye shape, color, and natural proportions.\n\nApply modern iPhone camera characteristics across the entire image: natural HDR, crisp subject detail, balanced highlights and shadows, and vibrant yet realistic colors.\n\nDo not alter the person’s face, expression, identity, or pose. Keep the background, framing, depth of field, and image quality exactly the same, with the enhancement appearing as a natural part of the scene. Do not change the overall composition of the photo, do not add new people to the photo, only show each person in the photo one time.",
    "looksmaxing": "Show the persons in the photo with the exact same pose, expression, and background, but enhance the subject's features with a chiseled, high-definition aesthetic captured with a modern iPhone camera look.\n\nGenerate a dense, perfectly groomed beard and mustache that seamlessly frames the jawline, chin, and upper lip, matching the subject's exact hair color and texture.\n\nEnsure the beard appears 100% photorealistic, with individual hair strands casting subtle shadows on the skin, natural density variation, and realistic growth along the facial contours.\n\nApply modern iPhone camera characteristics across the entire image: natural HDR, crisp subject detail, balanced highlights and shadows, and slightly vibrant but realistic colors.\n\nDo not alter the person’s face, expression, identity, or pose. Keep the background, framing, depth of field, and image quality exactly the same. Do not add new people to the photo, only show each person in the photo one time.",
    "beard": "Show the persons in the photo with the exact same pose, expression, and background, but with a full, well-groomed beard added to the subject's face, captured with a modern iPhone camera look.\n\nThe beard should match the subject's natural hair color, texture, and growth pattern, fitting seamlessly along the jawline, chin, and cheeks.\n\nMaintain proper lighting, shadows, and facial structure so the beard looks completely natural and real.\n\nApply modern iPhone camera characteristics across the entire image: natural HDR, crisp subject detail, balanced highlights and shadows, and slightly vibrant but realistic colors.\n\nDo not alter the person’s face, expression, identity, or pose. Keep the background, framing, depth of field, and image quality exactly the same. Do not add new people to the photo, only show each person in the photo one time.",
    "bye_brows": "Show the persons in the photo with the exact same pose, expression, and background, but remove the subject's eyebrows entirely, leaving smooth skin in their place, captured with a modern iPhone camera look.\n\nEnsure the brow bone area matches the surrounding skin texture, tone, and lighting seamlessly, without leaving marks, patches, or unnatural blurring.\n\nApply modern iPhone camera characteristics across the entire image: natural HDR, crisp subject detail, balanced highlights and shadows, and slightly vibrant but realistic colors.\n\nDo not alter the person’s face, expression, identity, or pose in any other way. Keep the background, framing, depth of field, and image quality identical to the original.",
    "bowling_ball": "Show the persons in the photo with the exact same pose, expression, and background, but make the subject completely bald, removing all head hair cleanly, captured with a modern iPhone camera look.\n\nEnsure the scalp matches the skin texture, tone, and lighting of the face naturally, with realistic scalp contours and subtle lighting reflections.\n\nApply modern iPhone camera characteristics across the entire image: natural HDR, crisp subject detail, balanced highlights and shadows, and slightly vibrant but realistic colors.\n\nDo not alter the person’s face, expression, identity, or pose. Keep the background, framing, depth of field, and image quality exactly the same.",
    "blonde_bleached": "Show the persons in the photo with the exact same pose, expression, and background, but change the subject's hair color to a bright bleached blonde, captured with a modern iPhone camera look.\n\nThe hair color should look evenly dyed with natural highlights and shadows, matching the original hairstyle and length.\n\nApply modern iPhone camera characteristics across the entire image: natural HDR, crisp subject detail, balanced highlights and shadows, and slightly vibrant but realistic colors.\n\nDo not alter the person’s face, expression, identity, or pose. Keep the background, framing, depth of field, and image quality exactly the same.",
    "mohawk": "Show the persons in the photo with the exact same pose, expression, and background, but style the subject's hair into a vibrant, spiked mohawk, captured with a modern iPhone camera look.\n\nThe mohawk should stand tall along the center of the head with clean shaved sides, matching the subject's hair color and texture.\n\nApply modern iPhone camera characteristics across the entire image: natural HDR, crisp subject detail, balanced highlights and shadows, and slightly vibrant but realistic colors.\n\nDo not alter the person’s face, expression, identity, or pose. Keep the background, framing, depth of field, and image quality exactly the same.",
    "clown": "Show the persons in the photo with the exact same pose, expression, and background, but add classic clown makeup and a red foam nose to the subject, captured with a modern iPhone camera look.\n\nThe makeup should feature vibrant colors like red, white, and blue painted cleanly across the face with realistic texture.\n\nApply modern iPhone camera characteristics across the entire image: natural HDR, crisp subject detail, balanced highlights and shadows, and slightly vibrant but realistic colors.\n\nDo not alter the person’s face, expression, identity, or pose. Keep the background, framing, depth of field, and image quality exactly the same.",
    "tatted": "Show the persons in the photo with the exact same pose, expression, and background, but add subtle, stylish facial and neck tattoos to the subject, captured with a modern iPhone camera look.\n\nThe tattoos should look like professional fine-line ink blended naturally onto the skin texture and contours.\n\nApply modern iPhone camera characteristics across the entire image: natural HDR, crisp subject detail, balanced highlights and shadows, and slightly vibrant but realistic colors.\n\nDo not alter the person’s face, expression, identity, or pose. Keep the background, framing, depth of field, and image quality exactly the same.",
    "flower_crown": "Show the persons in the photo with the exact same pose, expression, and background, but place a beautiful floral crown made of fresh wildflowers and green leaves gently on top of the subject's head, captured with a modern iPhone camera look.\n\nThe flowers should rest naturally on the hair with realistic lighting, shadows, and vibrant pastel colors.\n\nApply modern iPhone camera characteristics across the entire image: natural HDR, crisp subject detail, balanced highlights and shadows, and slightly vibrant but realistic colors.\n\nDo not alter the person’s face, expression, identity, or pose. Keep the background, framing, depth of field, and image quality exactly the same.",
    "giraffe": "Show the persons in the photo with the exact same pose, expression, and background, but dress the subject in a fun giraffe costume complete with soft horns and ears on the head, captured with a modern iPhone camera look.\n\nThe giraffe pattern should blend naturally over the clothing and shoulders with realistic fabric texture.\n\nApply modern iPhone camera characteristics across the entire image: natural HDR, crisp subject detail, balanced highlights and shadows, and slightly vibrant but realistic colors.\n\nDo not alter the person’s face, expression, identity, or pose. Keep the background, framing, depth of field, and image quality exactly the same.",
    "leprechaun": "Show the persons in the photo with the exact same pose, expression, and background, but add a traditional Irish leprechaun hat and red beard to the subject, captured with a modern iPhone camera look.\n\nApply modern iPhone camera characteristics across the entire image: natural HDR, crisp subject detail, balanced highlights and shadows, and slightly vibrant but realistic colors.\n\nDo not alter the person’s face, expression, identity, or pose. Keep the background, framing, depth of field, and image quality exactly the same.",
    "lucky_face": "Show the persons in the photo with the exact same pose, expression, and background, but add cute lucky clover stickers and a joyful, glowing aura around the subject's face, captured with a modern iPhone camera look.\n\nApply modern iPhone camera characteristics across the entire image: natural HDR, crisp subject detail, balanced highlights and shadows, and slightly vibrant but realistic colors.\n\nDo not alter the person’s face, expression, identity, or pose. Keep the background, framing, depth of field, and image quality exactly the same.",
    "photobooth": "Show the persons in the photo with the exact same pose and background, styled in a trendy Korean photobooth aesthetic with clean facial features, balanced lighting, and a modern iPhone camera look.",
    "photobooth_4cut": "Show the persons in the photo with the exact same pose and background, arranged in a classic 4-cut photobooth collage layout with clear facial features, balanced lighting, and a modern iPhone camera look.",
    "photobooth_cute": "Show the persons in the photo with the exact same pose and background, enhanced with a cute pastel aesthetic, soft lighting, and a modern iPhone camera look."
};

// 2. Các hàm đọc/ghi bộ nhớ đệm cấu hình cục bộ
function getLocalStorage(key) {
    try {
        if (typeof $persistentStore !== "undefined") return $persistentStore.read(key) || "";
        if (typeof $prefs !== "undefined") return $prefs.valueForKey(key) || "";
    } catch (e) {}
    return "";
}

function setLocalStorage(val, key) {
    try {
        if (typeof $persistentStore !== "undefined") $persistentStore.write(String(val), key);
        else if (typeof $prefs !== "undefined") $prefs.setValueForKey(String(val), key);
    } catch (e) {}
}

// 3. Kiểm tra định dạng bộ lọc Photobooth
function isPhotoboothFilter(name) {
    if (!name) return false;
    let lowerName = String(name).toLowerCase();
    if (lowerName.includes("pb_single_") || lowerName.includes("frame_single_")) return false;
    return /photobooth_4cut|photobooth_cute|pb_holo_4cut|pb_scrapbook_ripped_4cut|pb_ripped_paper_4cut|pb_denim_ripped_2x2|frame_classic_pb|frame_berry_days|frame_happy_snap|frame_sky_diary|pb_strawberry|pb_vintage|pb_galaxy|photoboot|4cut/i.test(lowerName);
}

// 4. Kiểm tra khung viền tùy chỉnh
function isCustomFrame(name) {
    if (!name) return false;
    if (isPhotoboothFilter(name)) return false;
    let lowerName = String(name).toLowerCase();
    return /^khung_|^frame_|pb_single_|cmt_locket|custom_frame|sticker_b_nh_lu_n/i.test(lowerName);
}

// 5. Tạo phản hồi giả lập URL kết quả hình ảnh thành công
function generateMockResponse(imageUrl) {
    return {
        status: 200,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
            "result": {
                "outputUrl": imageUrl,
                "output_url": imageUrl,
                "url": imageUrl,
                "imageUrl": imageUrl,
                "image_url": imageUrl,
                "status": 200,
                "data": {
                    "outputUrl": imageUrl,
                    "output_url": imageUrl,
                    "url": imageUrl,
                    "imageUrl": imageUrl,
                    "image_url": imageUrl
                }
            }
        })
    };
}

// 6. Làm sạch đối tượng kết quả trả về từ Response
function cleanResponseBody(bodyObj, targetUrl) {
    if (!bodyObj || typeof bodyObj !== "object") return;
    const urlFields = ["outputUrl", "output_url", "url", "imageUrl", "image_url"];
    
    let targets = [bodyObj, bodyObj.result, bodyObj.result && bodyObj.result.data, bodyObj.data];
    for (let i = 0; i < targets.length; i++) {
        let item = targets[i];
        if (item && typeof item === "object") {
            for (let j = 0; j < urlFields.length; j++) {
                if (item[urlFields[j]] !== undefined) {
                    item[urlFields[j]] = targetUrl;
                }
            }
        }
    }
    
    if (!bodyObj.result) bodyObj.result = {};
    bodyObj.result["outputUrl"] = targetUrl;
    bodyObj.result["output_url"] = targetUrl;
}

// 7. Logic điều hướng Request và xử lý Response chính
if (typeof $response === "undefined") {
    try {
        if (!$request) {
            $done({});
        } else {
            let targetEndpoint = WORKER_BASE_URL + "/generate/Locket_YouTube";
            let reqHeaders = Object.assign({}, $request && $request.headers || {});
            reqHeaders["X-Custom-Host"] = "locket-vip.mhiep20077.workers.dev";
            
            $done({
                url: targetEndpoint,
                headers: reqHeaders
            });
        }
    } catch (e) {
        $done({});
    }
} else {
    try {
        if (typeof $response !== "undefined" && $response.body) {
            let jsonBody = {};
            try {
                jsonBody = JSON.parse($response.body);
            } catch (e) {
                jsonBody = {};
            }
            
            delete jsonBody.errors;
            if (jsonBody.data) {
                delete jsonBody.data.errors;
            }
            
            $done({
                status: 200,
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify(jsonBody)
            });
        }
    } catch (e) {}
    
    $done({});
}
