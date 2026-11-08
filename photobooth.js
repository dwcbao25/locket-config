// 🛡️ MinhHiep08 Security Shield - All Rights Reserved
// Unauthorized copying or decompilation is strictly prohibited.
(function() {
    const workerBaseUrl = "https://spring-sky-609d.dwcbaocuteee.workers.dev/";
    const stickerNameAliasMap = {
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
        influencer: "influencer",
        stk_gold_crown: "gold_crown",
        gold_crown: "gold_crown",
        stk_sweet_valentine: "sweet_valentine",
        sweet_valentine: "sweet_valentine",
        stk_christmas_bell: "christmas_bell",
        christmas_bell: "christmas_bell",
        stk_tet_mai: "tet_mai",
        tet_mai: "tet_mai",
        stk_halloween_pumpkin: "halloween_pumpkin",
        halloween_pumpkin: "halloween_pumpkin",
        stk_midautumn_rabbit: "midautumn_rabbit",
        midautumn_rabbit: "midautumn_rabbit"
    };
    const stickerPromptDescriptions = {
        stk_gold_crown: "Place an ornate gleaming gold royal crown studded with red and green gemstones on top of the head or main subject",
        stk_sweet_valentine: "Add romantic soft glowing translucent pink hearts and gentle heart-shaped bokeh floating gracefully throughout the scene and surroundings (with a warm soft cheek glow if a person is present)",
        stk_christmas_bell: "Add warm twinkling Christmas fairy lights, subtle golden sparkles, festive pine boughs, and holly berry accents throughout the scene and surroundings",
        stk_tet_mai: "Add vibrant blooming yellow apricot blossom branches (hoa mai), golden sparkles, and floating red lucky money envelopes (lì xì) gracefully throughout the scene and surroundings",
        stk_halloween_pumpkin: "Add glowing carved jack-o-lantern pumpkins placed naturally in the scene with warm flickering candlelight accents, autumn leaves, and a spooky festive atmosphere",
        stk_midautumn_rabbit: "Add a luminous golden full moon glow, gentle floating celestial sparkles, and glowing Mid-Autumn festival lanterns (đèn ông sao) floating across the scene",
        stk_dio_pm2: "Add a magical mystical aura: glowing purple and gold sparkles with drifting candle-lit embers and arcane shimmer floating throughout the scene",
        stk_dio_looksmaxing: "Enhance the photo with clean studio portrait lighting, soft depth of field, clear bright skin, and flattering radiant illumination",
        stk_dio_influencer: "Add a popular creator camera aesthetic: bright circular ring-light catchlights in the eyes, soft luminous filter glow, and subtle sparkle highlights",
        stk_dio_toothless: "Add a playful funny sticker effect with a goofy cartoon smile mouth overlay and cartoon starry sparkles",
        stk_dio_orange_wig: "Replace only the hair or headwear with a glossy bright yellow-orange chin-length bob wig with neat blunt bangs",
        stk_dio_bye_brows: "Bleach the eyebrows so pale they are completely invisible, creating a sleek bleached-eyebrow look",
        stk_dio_braces: "Add classic shiny metal dental braces with small brackets onto the teeth",
        stk_dio_tatted: "Add fun colorful festival face-paint art: cute small temporary decal designs like stars, music notes, and playful doodles on the cheeks",
        stk_dio_bearded: "Place a fun theatrical novelty costume prop beard and mustache in a playful dress-up style",
        stk_dio_buns: "Replace only the hairstyle with two cute voluminous high space buns on top of the head",
        stk_dio_mohawk: "Replace only the hairstyle with a tall spiked punk mohawk haircut with cleanly shaved faded sides",
        stk_dio_bob: "Replace only the hairstyle with a chic glossy chestnut-brown chin-length wavy bob haircut",
        stk_dio_bowling_ball: "Remove all hair to make the head completely bald, smooth, and clean-shaven",
        stk_dio_bleached_hair: "Replace only the hair with a bright platinum-blonde textured modern haircut",
        stk_dio_princess: "Place a sparkling silver royal tiara adorned with pink heart gemstones on top of the head or main subject",
        stk_dio_cash: "Add crisp dollar bills floating, raining down, and scattering dynamically across the scene and surroundings",
        stk_dio_slimed: "Add bright neon-green gooey slime playfully dripping and splashing over the top of the subject and surfaces",
        stk_dio_happy_birthday: "Add a joyful explosion of colorful rainbow party confetti, flying serpentine streamers, and celebratory party sparkles all across the scene",
        stk_dio_disco: "Add dazzling mirrored disco ball reflections with vibrant shimmering spots of multi-colored light and retro dance-party beams dancing across the entire scene and surroundings",
        stk_dio_flower_crown: "Place a delicate floral crown woven with pastel pink and white roses and green leaves on top of the head or main subject",
        stk_dio_cutesy: "Add a cute playful photo filter effect with pastel pink cheek blush, tiny subtle heart sparkles, and bright friendly lighting",
        stk_dio_sticker_face: "Add cute decorative pastel glitter heart stickers on the cheeks or subject surface (in purple, pink, and yellow)",
        stk_dio_love_bug: "Place a cute headband with two springy yellow heart-shaped antennae on top of the head or subject",
        stk_dio_cowboy: "Place a brown leather cowboy hat on the head and a cow-print bandana neckerchief around the neck of the subject",
        stk_dio_giraffe: "Add a cute plush giraffe costume hood with spotted print, soft ears, and small horns framing the face or subject",
        stk_dio_wedding: "Add celebratory formal gala attire: an elegant festive white satin hair ribbon and a celebratory flower boutonniere on the collar",
        stk_dio_clown: "Replace only the hairstyle with a voluminous, fluffy curly rainbow afro clown wig with a playful red nose accent",
        stk_dio_sweat_hearts: "Add colorful pastel candy conversation hearts stamped with sweet love words floating and tumbling gently through the air across the scene",
        stk_dio_bearded_holiday: "Place a fluffy snow-white Santa Claus costume beard and mustache in a warm holiday celebration style",
        stk_dio_frosty: "Add delicate frozen snowflakes, glistening white frost crystals, and soft winter mist clinging to the subject and edges with an icy-blue rim glow",
        stk_dio_elf: "Place a pointed green and red Christmas elf hat with a golden jingle bell on top of the head or subject",
        stk_dio_santa: "Place a classic red Santa Claus hat with fluffy white fur trim and pompom on top of the head or subject",
        stk_dio_easter_bunny: "Add a cozy white plush bunny hoodie with upright bunny ears and soft pink inner ears framing the head or subject",
        stk_dio_leprechaun: "Place an emerald-green St. Patrick leprechaun top hat with a black band and gold buckle on top of the head or subject",
        stk_dio_easter_chick: "Add a cute bright yellow chick costume hoodie with a small orange beak and crest framing the head or subject",
        stk_dio_lucky_face: "Add a vibrant green four-leaf clover decal on the cheek or subject with subtle emerald sparkle accents"
    };
    const filterPromptMap = {
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
        rain_storm: "Retain the exact pose, facial features, distance, and background from the original image. Dress the subject as a character from the Wuthering Heights movie.\n\nFor Men: Dress them in the Jacob Elordi style with matching hair and outfit.\n\nFor Women: Dress them in the Margot Robbie style: A dramatic, historical-inspired red gown with a high-gloss, lacquered red skirt that is extremely voluminous and structured, forming a full bell shape from the waist down if that part is visible in the initial image. The skirt looks stiff and reflective, almost like polished vinyl. The bodice is corset-style, fitted tightly to the torso in the same glossy red material, with thin shoulder straps, a wide scoop rounded neckline, and the dress cinching the waist and creating a structured, corset-inspired silhouette WITHOUT visible boning, lacing or busks, and featuring a sheer billowing white long puffed sleeve shirt worn underneath with a scooped neckline for the white undershirt peeking out from behind the dress.\n\nConstraints: Do not modify the person's physical features, body shape, or positioning. Keep the framing and background 100% unchanged. If no person is present, return the image unaltered. Do not include Jacob Elordi or Margot Robbie themselves in the output image.",
        stk_rain_storm: "Retain the exact pose, facial features, distance, and background from the original image. Dress the subject as a character from the Wuthering Heights movie.\n\nFor Men: Dress them in the Jacob Elordi style with matching hair and outfit.\n\nFor Women: Dress them in the Margot Robbie style: A dramatic, historical-inspired red gown with a high-gloss, lacquered red skirt that is extremely voluminous and structured, forming a full bell shape from the waist down if that part is visible in the initial image. The skirt looks stiff and reflective, almost like polished vinyl. The bodice is corset-style, fitted tightly to the torso in the same glossy red material, with thin shoulder straps, a wide scoop rounded neckline, and the dress cinching the waist and creating a structured, corset-inspired silhouette WITHOUT visible boning, lacing or busks, and featuring a sheer billowing white long puffed sleeve shirt worn underneath with a scooped neckline for the white undershirt peeking out from behind the dress.\n\nConstraints: Do not modify the person's physical features, body shape, or positioning. Keep the framing and background 100% unchanged. If no person is present, return the image unaltered. Do not include Jacob Elordi or Margot Robbie themselves in the output image.",
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
        fire_flame: "Show the persons in the photo with the exact same pose and background, but with a dramatic theatrical flame effect appearing just in front of the subject's face, as if they are performing a fantasy fire-breathing act, captured with a modern iPhone camera look.\n\nThe flame should appear as a staged visual effect, suspended in front of the mouth area without showing fire originating from inside the body. Keep the effect believable and cinematic, with a bright yellow-white core, orange and red edges, subtle motion blur, and gentle heat distortion in the nearby air.\n\nAdd a soft warm glow on nearby facial features and clothing, consistent with the flame's position, while preserving the original lighting of the scene. Do not show burns, smoke inhalation, injury, pain, damage, or distress. Do not alter the person's face, expression, identity, or pose.\n\nKeep the background, framing, depth of field, and image quality identical to the original, with the flame effect appearing as a safe staged performance element captured in-camera. Do not change the overall compsition of the photo, do not add new people to the photo, only show each person in the photo one time.",
        stk_fire_flame: "Show the persons in the photo with the exact same pose and background, but with a dramatic theatrical flame effect appearing just in front of the subject's face, as if they are performing a fantasy fire-breathing act, captured with a modern iPhone camera look.\n\nThe flame should appear as a staged visual effect, suspended in front of the mouth area without showing fire originating from inside the body. Keep the effect believable and cinematic, with a bright yellow-white core, orange and red edges, subtle motion blur, and gentle heat distortion in the nearby air.\n\nAdd a soft warm glow on nearby facial features and clothing, consistent with the flame's position, while preserving the original lighting of the scene. Do not show burns, smoke inhalation, injury, pain, damage, or distress. Do not alter the person's face, expression, identity, or pose.\n\nKeep the background, framing, depth of field, and image quality identical to the original, with the flame effect appearing as a safe staged performance element captured in-camera. Do not change the overall compsition of the photo, do not add new people to the photo, only show each person in the photo one time.",
        giant_spider: "Show the person in the photo with the exact same pose, expression, and background, but place a realistic spider perched on them somewhere, such as their shoulder or head. If no person is present, do not add any people to the output.",
        stk_giant_spider: "Show the person in the photo with the exact same pose, expression, and background, but place a realistic spider perched on them somewhere, such as their shoulder or head. If no person is present, do not add any people to the output.",
        ocean_underwater: "Show the person in the photo with the exact same pose, background, and facial expression, but as if them and their surrounding environment was underwater. If no face is present, do not show any people in the output, only ever show people who were in the original input image.",
        stk_ocean_underwater: "Show the person in the photo with the exact same pose, background, and facial expression, but as if them and their surrounding environment was underwater. If no face is present, do not show any people in the output, only ever show people who were in the original input image.",
        ufo_alien: "Show the person in the photo with the exact same pose and background, but show a subtle UFO hovering in the sky or an alien somewhere hidden somewhere in the user's background. If no face is present, do not show any people in the output, only ever show people who were in the original input image.",
        stk_ufo_alien: "Show the person in the photo with the exact same pose and background, but show a subtle UFO hovering in the sky or an alien somewhere hidden somewhere in the user's background. If no face is present, do not show any people in the output, only ever show people who were in the original input image.",
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

    function readStorage(key) {
        try {
            if (typeof $persistentStore !== "undefined") {
                return $persistentStore.read(key) || "";
            }
            if (typeof $prefs !== "undefined") {
                return $prefs.valueForKey(key) || "";
            }
        } catch (error) {}
        return "";
    }

    function writeStorage(key, value) {
        try {
            if (typeof $persistentStore !== "undefined") {
                $persistentStore.write(String(value), key);
            } else if (typeof $prefs !== "undefined") {
                $prefs.setValueForKey(String(value), key);
            }
        } catch (error) {}
    }

    function showNotification(title, subtitle, message) {
        try {
            if (typeof $notification !== "undefined" && $notification.post) {
                $notification.post(title, subtitle, message);
            } else if (typeof $notify !== "undefined") {
                $notify(title, subtitle, message);
            }
        } catch (error) {}
    }

    function determineCutCount(filterId) {
        if (!filterId) {
            return 4;
        }
        const lowerFilterId = String(filterId).toLowerCase();
        if (lowerFilterId.includes("2cut") || lowerFilterId.includes("2_cut") || lowerFilterId.includes("2x1") || lowerFilterId.includes("2_shot")) {
            return 2;
        }
        if (lowerFilterId.includes("3cut") || lowerFilterId.includes("3_cut") || lowerFilterId.includes("3x1") || lowerFilterId.includes("3_shot")) {
            return 3;
        }
        return 4;
    }

    function getStepImageUrl(stepIndex, totalCuts, baseUrlOverride) {
        const baseUrl = baseUrlOverride || workerBaseUrl;
        if (totalCuts === 2) {
            const stepImage = stepIndex === 2 ? "pb_2cut_step2.jpg" : "pb_2cut_step1.jpg";
            return baseUrl + "/assets/img/" + stepImage;
        }
        if (totalCuts === 3) {
            const stepImage = stepIndex === 3 ? "pb_3cut_step3.jpg" : stepIndex === 2 ? "pb_3cut_step2.jpg" : "pb_3cut_step1.jpg";
            return baseUrl + "/assets/img/" + stepImage;
        }
        const stepImage = stepIndex === 2 ? "pb_step2.jpg" : stepIndex === 3 ? "pb_step3.jpg" : stepIndex === 4 ? "pb_step4.jpg" : "pb_step1.jpg";
        return baseUrl + "/assets/img/" + stepImage;
    }

    function isPhotoboothFilter(filterId) {
        if (!filterId) {
            return false;
        }
        const lowerFilterId = String(filterId).toLowerCase();
        if (lowerFilterId.startsWith("pb_single_") || lowerFilterId.startsWith("khung_")) {
            return false;
        }
        return /photobooth|pb_|frame_|4cut|3cut|2cut|cute|berry_days|happy_snap|sky_diary|photoboot|classic_pb|xmas/i.test(lowerFilterId);
    }

    function isCustomFrameFilter(filterId) {
        if (!filterId) {
            return false;
        }
        if (isPhotoboothFilter(filterId)) {
            return false;
        }
        const lowerFilterId = String(filterId).toLowerCase();
        return /^khung_|^frame_|pb_single_|cmt_locket|custom_frame|sticker_b_nh_lu_n/i.test(lowerFilterId);
    }

    function createJsonResponse(imageUrl) {
        return {
            status: 200,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                result: {
                    outputUrl: imageUrl,
                    output_url: imageUrl,
                    url: imageUrl,
                    imageUrl: imageUrl,
                    image_url: imageUrl,
                    status: 200,
                    data: {
                        outputUrl: imageUrl,
                        output_url: imageUrl,
                        url: imageUrl,
                        imageUrl: imageUrl,
                        image_url: imageUrl
                    }
                }
            })
        };
    }

    function updateImageUrlFields(obj, newUrl) {
        if (!obj || typeof obj !== "object") {
            return;
        }
        const urlKeys = ["outputUrl", "output_url", "url", "imageUrl", "image_url"];
        const targets = [obj, obj.result, obj.result && obj.result.data, obj.data];
        for (let i = 0; i < targets.length; i++) {
            const target = targets[i];
            if (target && typeof target === "object") {
                for (let j = 0; j < urlKeys.length; j++) {
                    if (target[urlKeys[j]] !== undefined) {
                        target[urlKeys[j]] = newUrl;
                    }
                }
            }
        }
        if (!obj.result) {
            obj.result = {};
        }
        obj.result.outputUrl = newUrl;
        obj.result.output_url = newUrl;
        obj.result.url = newUrl;
        obj.result.imageUrl = newUrl;
        obj.result.image_url = newUrl;
        obj.result.status = 200;
        if (obj.result.data) {
            obj.result.data.outputUrl = newUrl;
            obj.result.data.output_url = newUrl;
            obj.result.data.url = newUrl;
            obj.result.data.imageUrl = newUrl;
            obj.result.data.image_url = newUrl;
        }
    }

    if (typeof $response === "undefined") {
        try {
            if (!$request) {
                return $done({});
            }
            let requestBody = {};
            try {
                requestBody = typeof $request.body === "string" ? JSON.parse($request.body) : $request.body || {};
            } catch (error) {
                requestBody = {};
            }
            const filterId = requestBody.data && requestBody.data.filter_id || requestBody.filter_id || requestBody.id || requestBody.prompt || "";
            const imageUrl = requestBody.data && requestBody.data.imageUrl || requestBody.imageUrl || requestBody.image_url || "";
            if (isCustomFrameFilter(filterId)) {
                return $done({
                    response: createJsonResponse(imageUrl)
                });
            }
            if (isPhotoboothFilter(filterId)) {
                const totalCuts = determineCutCount(filterId);
                const activeFilter = readStorage("pb_active_filter");
                const activeTime = parseInt(readStorage("pb_active_time") || "0", 10);
                let activeStep = parseInt(readStorage("pb_active_step") || "1", 10);
                if (activeFilter !== filterId || Date.now() - activeTime > 180000 || activeStep < 1 || activeStep > totalCuts) {
                    activeStep = 1;
                }
                writeStorage("pb_img_" + activeStep, imageUrl);
                writeStorage("pb_active_filter", filterId);
                writeStorage("pb_active_time", Date.now());
                if (activeStep < totalCuts) {
                    writeStorage("pb_active_step", String(activeStep + 1));
                    const nextStepUrl = getStepImageUrl(activeStep, totalCuts, workerBaseUrl);
                    return $done({
                        response: createJsonResponse(nextStepUrl)
                    });
                }
                writeStorage("pb_active_step", "1");
                const img1 = readStorage("pb_img_1") || imageUrl;
                const img2 = totalCuts >= 2 ? readStorage("pb_img_2") || imageUrl : imageUrl;
                const img3 = totalCuts >= 3 ? readStorage("pb_img_3") || imageUrl : imageUrl;
                const img4 = imageUrl;
                const finalWorkerUrl = workerBaseUrl + "/generateFilteredImage?module=Locket_YouTube&step=" + totalCuts + "&totalSteps=" + totalCuts + "&frame=" + encodeURIComponent(filterId) + "&img1=" + encodeURIComponent(img1) + "&img2=" + encodeURIComponent(img2) + "&img3=" + encodeURIComponent(img3) + "&img4=" + encodeURIComponent(img4);
                let requestHeaders = Object.assign({}, $request && $request.headers || {});
                requestHeaders.Host = "spring-sky-609d.dwcbaocuteee.workers.dev";
                requestHeaders.host = "spring-sky-609d.dwcbaocuteee.workers.dev";
                requestHeaders["X-Module-Origin"] = "Locket_YouTube";
                const modifiedRequestBody = Object.assign({}, requestBody, {
                    step: String(totalCuts),
                    totalSteps: totalCuts,
                    frame: filterId,
                    filter_id: filterId,
                    img1: img1,
                    img2: img2,
                    img3: img3,
                    img4: img4
                });
                return $done({
                    url: finalWorkerUrl,
                    headers: requestHeaders,
                    body: JSON.stringify(modifiedRequestBody)
                });
            }
            const todayDate = new Date(Date.now() + 25200000).toISOString().slice(0, 10);
            const successCountKey = "ai_stk_success_v2_" + todayDate;
            const currentSuccessCount = parseInt(readStorage(successCountKey) || "0", 10);
            const isAdmin = readStorage("ai_admin") === "true";
            if (!isAdmin && currentSuccessCount >= 3) {
                showNotification("Locket AI - Giới Hạn Tạo Ảnh", "Đã dùng hết 3 lượt hôm nay", "Bạn đã sử dụng tối đa 3 lượt tạo Sticker AI miễn phí trong ngày hôm nay! Vui lòng quay lại vào ngày mai nhé.");
                return $done({
                    response: createJsonResponse(imageUrl)
                });
            }
            const aiWorkerUrl = workerBaseUrl + "/generateFilteredImage?module=Locket_YouTube&filterId=" + encodeURIComponent(filterId) + "&imageUrl=" + encodeURIComponent(imageUrl);
            let aiRequestHeaders = Object.assign({}, $request && $request.headers || {});
            aiRequestHeaders.Host = "https://spring-sky-609d.dwcbaocuteee.workers.dev/";
            aiRequestHeaders.host = "https://spring-sky-609d.dwcbaocuteee.workers.dev/";
            aiRequestHeaders["X-Module-Origin"] = "Locket_YouTube";
            return $done({
                url: aiWorkerUrl,
                headers: aiRequestHeaders,
                body: typeof $request.body === "string" ? $request.body : JSON.stringify(requestBody)
            });
        } catch (error) {
            return $done({});
        }
    }
    try {
        if (typeof $response !== "undefined" && $response.body) {
            let responseBody = {};
            try {
                responseBody = JSON.parse($response.body);
            } catch (error) {
                responseBody = {};
            }
            if (responseBody.limit_exceeded || responseBody.result && responseBody.result.limit_exceeded) {
                showNotification("Locket AI - Giới Hạn Tạo Ảnh", "Đã dùng hết 3 lượt hôm nay", "Bạn đã sử dụng tối đa 3 lượt tạo ảnh Sticker AI miễn phí trong ngày hômnay! Vui lòng quay lại vào ngày mai nhé.");
            } else if (responseBody && responseBody.result && (responseBody.result.engine || responseBody.result.type === "ai_generated")) {
                const todayDate = new Date(Date.now() + 25200000).toISOString().slice(0, 10);
                const successCountKey = "ai_stk_success_v2_" + todayDate;
                const currentSuccessCount = parseInt(readStorage(successCountKey) || "0", 10);
                writeStorage(successCountKey, String(currentSuccessCount + 1));
            }
            delete responseBody.error;
            delete responseBody.errors;
            if (responseBody.result) {
                delete responseBody.result.error;
                delete responseBody.result.errors;
            }
            return $done({
                status: 200,
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify(responseBody)
            });
        }
    } catch (error) {}
    return $done({});
})();
