const LOGOS = [
  { id: 1, file: "castle_001_minimalist_black_white.png", label: "Minimalist Black White" },
  { id: 2, file: "castle_002_minimalist_navy.png", label: "Minimalist Navy" },
  { id: 3, file: "castle_003_geometric_charcoal.png", label: "Geometric Charcoal" },
  { id: 4, file: "castle_004_neon_cyan_purple.png", label: "Neon Cyan Purple" },
  { id: 5, file: "castle_005_neon_gradient_pink_blue.png", label: "Neon Gradient Pink Blue" },
  { id: 6, file: "castle_006_pastel_lavender_mint.png", label: "Pastel Lavender Mint" },
  { id: 7, file: "castle_007_pastel_peach_rose.png", label: "Pastel Peach Rose" },
  { id: 8, file: "castle_008_pastel_sky_blue.png", label: "Pastel Sky Blue" },
  { id: 9, file: "castle_009_shield_castle_blue.png", label: "Shield Castle Blue" },
  { id: 10, file: "castle_010_shield_castle_green.png", label: "Shield Castle Green" },
  { id: 11, file: "castle_011_line_art_emerald.png", label: "Line Art Emerald" },
  { id: 12, file: "castle_012_flat_orange.png", label: "Flat Orange" },
  { id: 13, file: "castle_013_flat_burgundy.png", label: "Flat Burgundy" },
  { id: 14, file: "castle_014_flat_gold.png", label: "Flat Gold" },
  { id: 15, file: "castle_015_flat_teal.png", label: "Flat Teal" },
  { id: 16, file: "castle_016_duotone_coral_navy.png", label: "Duotone Coral Navy" },
  { id: 17, file: "castle_017_duotone_yellow_purple.png", label: "Duotone Yellow Purple" },
  { id: 18, file: "castle_018_duotone_lime_pink.png", label: "Duotone Lime Pink" },
  { id: 19, file: "castle_019_gradient_blue_indigo.png", label: "Gradient Blue Indigo" },
  { id: 20, file: "castle_020_gradient_sunset.png", label: "Gradient Sunset" },
  { id: 21, file: "castle_021_gradient_green_teal.png", label: "Gradient Green Teal" },
  { id: 22, file: "castle_022_gradient_pink_gold.png", label: "Gradient Pink Gold" },
  { id: 23, file: "castle_023_ultra_minimal_lines.png", label: "Ultra Minimal Lines" },
  { id: 24, file: "castle_024_isometric_blue_gray.png", label: "Isometric Blue Gray" },
  { id: 25, file: "castle_025_isometric_purple.png", label: "Isometric Purple" },
  { id: 26, file: "castle_026_badge_circle_navy.png", label: "Badge Circle Navy" },
  { id: 27, file: "castle_027_badge_circle_green.png", label: "Badge Circle Green" },
  { id: 28, file: "castle_028_hexagon_blue.png", label: "Hexagon Blue" },
  { id: 29, file: "castle_029_diamond_purple.png", label: "Diamond Purple" },
  { id: 30, file: "castle_030_app_icon_blue.png", label: "App Icon Blue" },
  { id: 31, file: "castle_031_app_icon_dark_cyan.png", label: "App Icon Dark Cyan" },
  { id: 32, file: "castle_032_app_icon_purple_gradient.png", label: "App Icon Purple Gradient" },
  { id: 33, file: "castle_033_app_icon_coral.png", label: "App Icon Coral" },
  { id: 34, file: "castle_034_app_icon_green.png", label: "App Icon Green" },
  { id: 35, file: "castle_035_dot_grid_navy.png", label: "Dot Grid Navy" },
  { id: 36, file: "castle_036_earthy_terracotta.png", label: "Earthy Terracotta" },
  { id: 37, file: "castle_037_slate_gray.png", label: "Slate Gray" },
  { id: 38, file: "castle_038_watercolor_blue_purple.png", label: "Watercolor Blue Purple" },
  { id: 39, file: "castle_039_watercolor_amber.png", label: "Watercolor Amber" },
  { id: 40, file: "castle_040_outline_orange.png", label: "Outline Orange" },
  { id: 41, file: "castle_041_outline_neon_green_black.png", label: "Outline Neon Green Black" },
  { id: 42, file: "castle_042_retro_70s_earthy.png", label: "Retro 70s Earthy" },
  { id: 43, file: "castle_043_retro_80s_arcade.png", label: "Retro 80s Arcade" },
  { id: 44, file: "castle_044_retro_90s_cartoon.png", label: "Retro 90s Cartoon" },
  { id: 45, file: "castle_045_medieval_manuscript.png", label: "Medieval Manuscript" },
  { id: 46, file: "castle_046_japanese_brushstroke.png", label: "Japanese Brushstroke" },
  { id: 47, file: "castle_047_swiss_modernist.png", label: "Swiss Modernist" },
  { id: 48, file: "castle_048_deconstructed_abstract.png", label: "Deconstructed Abstract" },
  { id: 49, file: "castle_049_negative_space.png", label: "Negative Space" },
  { id: 50, file: "castle_050_origami_blue.png", label: "Origami Blue" },
  { id: 51, file: "castle_051_lowpoly_purple_pink.png", label: "Lowpoly Purple Pink" },
  { id: 52, file: "castle_052_lowpoly_teal.png", label: "Lowpoly Teal" },
  { id: 53, file: "castle_053_circuit_board_tech.png", label: "Circuit Board Tech" },
  { id: 54, file: "castle_054_binary_code_navy.png", label: "Binary Code Navy" },
  { id: 55, file: "castle_055_cartoon_primary_colors.png", label: "Cartoon Primary Colors" },
  { id: 56, file: "castle_056_chibi_kawaii.png", label: "Chibi Kawaii" },
  { id: 57, file: "castle_057_illustrated_storybook.png", label: "Illustrated Storybook" },
  { id: 58, file: "castle_058_sandcastle_bucket.png", label: "Sandcastle Bucket" },
  { id: 59, file: "castle_059_sandbox_wooden_box.png", label: "Sandbox Wooden Box" },
  { id: 60, file: "castle_060_cloud_castle.png", label: "Cloud Castle" },
  { id: 61, file: "castle_061_castle_vault_safe.png", label: "Castle Vault Safe" },
  { id: 62, file: "castle_062_castle_phone_app.png", label: "Castle Phone App" },
  { id: 63, file: "castle_063_castle_bubble_shield.png", label: "Castle Bubble Shield" },
  { id: 64, file: "castle_064_castle_data_blocks.png", label: "Castle Data Blocks" },
  { id: 65, file: "castle_065_castle_mountain.png", label: "Castle Mountain" },
  { id: 66, file: "castle_066_castle_reflection.png", label: "Castle Reflection" },
  { id: 67, file: "castle_067_castle_letter_C.png", label: "Castle Letter C" },
  { id: 68, file: "castle_068_castle_sunrise.png", label: "Castle Sunrise" },
  { id: 69, file: "castle_069_castle_crown_royal.png", label: "Castle Crown Royal" },
  { id: 70, file: "castle_070_castle_lightning.png", label: "Castle Lightning" },
  { id: 71, file: "castle_071_castle_stars_magic.png", label: "Castle Stars Magic" },
  { id: 72, file: "castle_072_castle_rocket.png", label: "Castle Rocket" },
  { id: 73, file: "castle_073_castle_tree_eco.png", label: "Castle Tree Eco" },
  { id: 74, file: "castle_074_castle_lock.png", label: "Castle Lock" },
  { id: 75, file: "castle_075_castle_fingerprint.png", label: "Castle Fingerprint" },
  { id: 76, file: "castle_076_rose_gold.png", label: "Rose Gold" },
  { id: 77, file: "castle_077_chrome_metallic.png", label: "Chrome Metallic" },
  { id: 78, file: "castle_078_matte_black.png", label: "Matte Black" },
  { id: 79, file: "castle_079_lilac_cream_premium.png", label: "Lilac Cream Premium" },
  { id: 80, file: "castle_080_cyberpunk_yellow_green.png", label: "Cyberpunk Yellow Green" },
  { id: 81, file: "castle_081_dark_gold_enterprise.png", label: "Dark Gold Enterprise" },
  { id: 82, file: "castle_082_dark_silver_enterprise.png", label: "Dark Silver Enterprise" },
  { id: 83, file: "castle_083_dark_mode_white.png", label: "Dark Mode White" },
  { id: 84, file: "castle_084_dark_purple_lavender.png", label: "Dark Purple Lavender" },
  { id: 85, file: "castle_085_dark_wine_rose_gold.png", label: "Dark Wine Rose Gold" },
  { id: 86, file: "castle_086_bold_stamp_black.png", label: "Bold Stamp Black" },
  { id: 87, file: "castle_087_rubber_stamp_navy.png", label: "Rubber Stamp Navy" },
  { id: 88, file: "castle_088_engraved_etching.png", label: "Engraved Etching" },
  { id: 89, file: "castle_089_letterpress_green.png", label: "Letterpress Green" },
  { id: 90, file: "castle_090_woodblock_print.png", label: "Woodblock Print" },
  { id: 91, file: "castle_091_stencil_spray.png", label: "Stencil Spray" },
  { id: 92, file: "castle_092_sticker_style_blue.png", label: "Sticker Style Blue" },
  { id: 93, file: "castle_093_enamel_pin.png", label: "Enamel Pin" },
  { id: 94, file: "castle_094_vintage_travel_stamp.png", label: "Vintage Travel Stamp" },
  { id: 95, file: "castle_095_embossed_gold_cream.png", label: "Embossed Gold Cream" },
  { id: 96, file: "castle_096_neon_sign_photo.png", label: "Neon Sign Photo" },
  { id: 97, file: "castle_097_pixel_art_16bit.png", label: "Pixel Art 16bit" },
  { id: 98, file: "castle_098_pixel_8bit_nes.png", label: "Pixel 8bit Nes" },
  { id: 99, file: "castle_099_voxel_3d.png", label: "Voxel 3d" },
  { id: 100, file: "castle_100_3d_marble_white.png", label: "3d Marble White" },
  { id: 101, file: "castle_101_3d_matte_gray.png", label: "3d Matte Gray" },
  { id: 102, file: "castle_102_3d_glass_crystal.png", label: "3d Glass Crystal" },
  { id: 103, file: "castle_103_3d_gold_metallic.png", label: "3d Gold Metallic" },
  { id: 104, file: "castle_104_abstract_geometric_mark.png", label: "Abstract Geometric Mark" },
  { id: 105, file: "castle_105_abstract_arch_towers.png", label: "Abstract Arch Towers" },
  { id: 106, file: "castle_106_abstract_three_towers.png", label: "Abstract Three Towers" },
  { id: 107, file: "castle_107_ai_neural_castle.png", label: "Ai Neural Castle" },
  { id: 108, file: "castle_108_holographic_iridescent.png", label: "Holographic Iridescent" },
  { id: 109, file: "castle_109_castle_dna_biotech.png", label: "Castle Dna Biotech" },
  { id: 110, file: "castle_110_castle_cloud_servers.png", label: "Castle Cloud Servers" },
  { id: 111, file: "castle_111_illustrated_moat_drawbridge.png", label: "Illustrated Moat Drawbridge" },
  { id: 112, file: "castle_112_castle_hot_air_balloon.png", label: "Castle Hot Air Balloon" },
  { id: 113, file: "castle_113_castle_garden_flowers.png", label: "Castle Garden Flowers" },
  { id: 114, file: "castle_114_castle_rainbow.png", label: "Castle Rainbow" },
  { id: 115, file: "castle_115_castle_snow_globe.png", label: "Castle Snow Globe" },
  { id: 116, file: "castle_116_castle_birdseye_plan.png", label: "Castle Birdseye Plan" },
  { id: 117, file: "castle_117_castle_tessellation.png", label: "Castle Tessellation" },
  { id: 118, file: "castle_118_golden_ratio_castle.png", label: "Golden Ratio Castle" },
  { id: 119, file: "castle_119_zen_enso_castle.png", label: "Zen Enso Castle" },
  { id: 120, file: "castle_120_ghost_translucent.png", label: "Ghost Translucent" },
  { id: 121, file: "castle_121_castle_confetti_party.png", label: "Castle Confetti Party" },
  { id: 122, file: "castle_122_castle_cliff_panoramic.png", label: "Castle Cliff Panoramic" },
  { id: 123, file: "castle_123_castle_keyhole.png", label: "Castle Keyhole" },
  { id: 124, file: "castle_124_castle_lock_hybrid.png", label: "Castle Lock Hybrid" },
  { id: 125, file: "castle_125_heraldic_crest_red_gold.png", label: "Heraldic Crest Red Gold" },
  { id: 126, file: "castle_126_celtic_knotwork.png", label: "Celtic Knotwork" },
  { id: 127, file: "castle_127_castle_compass.png", label: "Castle Compass" },
  { id: 128, file: "castle_128_castle_anchor_nautical.png", label: "Castle Anchor Nautical" },
  { id: 129, file: "castle_129_castle_constellation.png", label: "Castle Constellation" },
  { id: 130, file: "castle_130_typographic_castle.png", label: "Typographic Castle" },
  { id: 131, file: "castle_131_stacked_wordmark_navy.png", label: "Stacked Wordmark Navy" },
  { id: 132, file: "castle_132_horizontal_monospace.png", label: "Horizontal Monospace" },
  { id: 133, file: "castle_133_wordmark_A_tower.png", label: "Wordmark A Tower" },
  { id: 134, file: "castle_134_wordmark_fortress_O_gate.png", label: "Wordmark Fortress O Gate" },
  { id: 135, file: "castle_135_icon_type_integration.png", label: "Icon Type Integration" },
  { id: 136, file: "castle_136_castle_speech_bubble.png", label: "Castle Speech Bubble" },
  { id: 137, file: "castle_137_castle_map_pin.png", label: "Castle Map Pin" },
  { id: 138, file: "castle_138_stained_glass.png", label: "Stained Glass" },
  { id: 139, file: "castle_139_art_nouveau.png", label: "Art Nouveau" },
  { id: 140, file: "castle_140_constructivist_soviet.png", label: "Constructivist Soviet" },
  { id: 141, file: "castle_141_bauhaus_primary.png", label: "Bauhaus Primary" },
  { id: 142, file: "castle_142_art_deco_gold_black.png", label: "Art Deco Gold Black" },
  { id: 143, file: "castle_143_pop_art_halftone.png", label: "Pop Art Halftone" },
  { id: 144, file: "castle_144_scandinavian_nordic.png", label: "Scandinavian Nordic" },
  { id: 145, file: "castle_145_folk_art_mexican.png", label: "Folk Art Mexican" },
  { id: 146, file: "castle_146_mughal_miniature.png", label: "Mughal Miniature" },
  { id: 147, file: "castle_147_ukiyo_e_woodblock.png", label: "Ukiyo E Woodblock" },
  { id: 148, file: "castle_148_patriotic_usa.png", label: "Patriotic Usa" },
  { id: 149, file: "castle_149_moonlit_gothic.png", label: "Moonlit Gothic" },
  { id: 150, file: "castle_150_autumn_fall.png", label: "Autumn Fall" },
  { id: 151, file: "castle_151_miami_vice_retro.png", label: "Miami Vice Retro" },
  { id: 152, file: "castle_152_vaporwave.png", label: "Vaporwave" },
  { id: 153, file: "castle_153_cottagecore.png", label: "Cottagecore" },
  { id: 154, file: "castle_154_dark_academia.png", label: "Dark Academia" },
  { id: 155, file: "castle_155_solarpunk_eco.png", label: "Solarpunk Eco" },
  { id: 156, file: "castle_156_brutalist_concrete.png", label: "Brutalist Concrete" },
  { id: 157, file: "castle_157_deconstructivist.png", label: "Deconstructivist" },
  { id: 158, file: "castle_158_memphis_postmodern.png", label: "Memphis Postmodern" },
  { id: 159, file: "castle_159_psychedelic_60s.png", label: "Psychedelic 60s" },
  { id: 160, file: "castle_160_steampunk_brass.png", label: "Steampunk Brass" },
  { id: 161, file: "castle_161_gaming_esports_purple.png", label: "Gaming Esports Purple" },
  { id: 162, file: "castle_162_sports_team_navy.png", label: "Sports Team Navy" },
  { id: 163, file: "castle_163_education_graduation.png", label: "Education Graduation" },
  { id: 164, file: "castle_164_healthcare_medical.png", label: "Healthcare Medical" },
  { id: 165, file: "castle_165_real_estate_luxury.png", label: "Real Estate Luxury" },
  { id: 166, file: "castle_166_restaurant_bistro.png", label: "Restaurant Bistro" },
  { id: 167, file: "castle_167_travel_tourism.png", label: "Travel Tourism" },
  { id: 168, file: "castle_168_music_entertainment.png", label: "Music Entertainment" },
  { id: 169, file: "castle_169_finance_banking.png", label: "Finance Banking" },
  { id: 170, file: "castle_170_nonprofit_charity.png", label: "Nonprofit Charity" },
  { id: 171, file: "castle_171_castle_wifi.png", label: "Castle Wifi" },
  { id: 172, file: "castle_172_castle_bluetooth.png", label: "Castle Bluetooth" },
  { id: 173, file: "castle_173_castle_checkmark.png", label: "Castle Checkmark" },
  { id: 174, file: "castle_174_castle_progress_spinner.png", label: "Castle Progress Spinner" },
  { id: 175, file: "castle_175_castle_shield_plus.png", label: "Castle Shield Plus" },
  { id: 176, file: "castle_176_castle_play_button.png", label: "Castle Play Button" },
  { id: 177, file: "castle_177_castle_settings_gear.png", label: "Castle Settings Gear" },
  { id: 178, file: "castle_178_castle_api_plugin.png", label: "Castle Api Plugin" },
  { id: 179, file: "castle_179_castle_terminal.png", label: "Castle Terminal" },
  { id: 180, file: "castle_180_notion_style_warm.png", label: "Notion Style Warm" },
  { id: 181, file: "castle_181_linear_style_purple.png", label: "Linear Style Purple" },
  { id: 182, file: "castle_182_stripe_style_blue.png", label: "Stripe Style Blue" },
  { id: 183, file: "castle_183_vercel_style_black.png", label: "Vercel Style Black" },
  { id: 184, file: "castle_184_figma_style_colorful.png", label: "Figma Style Colorful" },
  { id: 185, file: "castle_185_duolingo_style_green.png", label: "Duolingo Style Green" },
  { id: 186, file: "castle_186_slack_style_multicolor.png", label: "Slack Style Multicolor" },
  { id: 187, file: "castle_187_discord_style_blurple.png", label: "Discord Style Blurple" },
  { id: 188, file: "castle_188_github_style_dark.png", label: "Github Style Dark" },
  { id: 189, file: "castle_189_apple_style_minimal.png", label: "Apple Style Minimal" },
  { id: 190, file: "castle_190_google_style_four_colors.png", label: "Google Style Four Colors" },
  { id: 191, file: "castle_191_spring_cherry_blossom.png", label: "Spring Cherry Blossom" },
  { id: 192, file: "castle_192_summer_tropical.png", label: "Summer Tropical" },
  { id: 193, file: "castle_193_winter_ice_crystal.png", label: "Winter Ice Crystal" },
  { id: 194, file: "castle_194_rainy_cozy.png", label: "Rainy Cozy" },
  { id: 195, file: "castle_195_desert_moroccan.png", label: "Desert Moroccan" },
  { id: 196, file: "castle_196_jungle_emerald.png", label: "Jungle Emerald" },
  { id: 197, file: "castle_197_arctic_polar.png", label: "Arctic Polar" },
  { id: 198, file: "castle_198_volcano_island.png", label: "Volcano Island" },
  { id: 199, file: "castle_199_underwater_marine.png", label: "Underwater Marine" },
  { id: 200, file: "castle_200_sky_floating_castle.png", label: "Sky Floating Castle" },
  { id: 201, file: "castle_201_mars_castle.png", label: "Mars Castle" },
  { id: 202, file: "castle_202_space_station_orbit.png", label: "Space Station Orbit" },
  { id: 203, file: "castle_203_metaverse_digital.png", label: "Metaverse Digital" },
  { id: 204, file: "castle_204_ar_hologram.png", label: "Ar Hologram" },
  { id: 205, file: "castle_205_time_lapse_motion.png", label: "Time Lapse Motion" },
  { id: 206, file: "castle_206_castle_books.png", label: "Castle Books" },
  { id: 207, file: "castle_207_castle_puzzle_pieces.png", label: "Castle Puzzle Pieces" },
  { id: 208, file: "castle_208_castle_pencil_sketch.png", label: "Castle Pencil Sketch" },
  { id: 209, file: "castle_209_castle_coins_wealth.png", label: "Castle Coins Wealth" },
  { id: 210, file: "castle_210_castle_smartphones.png", label: "Castle Smartphones" },
  { id: 211, file: "castle_211_1bit_mac_icon.png", label: "1bit Mac Icon" },
  { id: 212, file: "castle_212_windows95_style.png", label: "Windows95 Style" },
  { id: 213, file: "castle_213_embroidery_patch.png", label: "Embroidery Patch" },
  { id: 214, file: "castle_214_tattoo_flash.png", label: "Tattoo Flash" },
  { id: 215, file: "castle_215_graffiti_brick.png", label: "Graffiti Brick" },
  { id: 216, file: "castle_216_neon_art_installation.png", label: "Neon Art Installation" },
  { id: 217, file: "castle_217_fortune_strip.png", label: "Fortune Strip" },
  { id: 218, file: "castle_218_wood_carved.png", label: "Wood Carved" },
  { id: 219, file: "castle_219_ceramic_delft.png", label: "Ceramic Delft" },
  { id: 220, file: "castle_220_wax_seal.png", label: "Wax Seal" },
  { id: 221, file: "castle_221_ice_cream_castle.png", label: "Ice Cream Castle" },
  { id: 222, file: "castle_222_lego_bricks.png", label: "Lego Bricks" },
  { id: 223, file: "castle_223_shipping_containers.png", label: "Shipping Containers" },
  { id: 224, file: "castle_224_server_racks.png", label: "Server Racks" },
  { id: 225, file: "castle_225_social_media_icons.png", label: "Social Media Icons" },
  { id: 226, file: "castle_226_castle_owl.png", label: "Castle Owl" },
  { id: 227, file: "castle_227_castle_dragon.png", label: "Castle Dragon" },
  { id: 228, file: "castle_228_castle_chess_knight.png", label: "Castle Chess Knight" },
  { id: 229, file: "castle_229_rook_chess_piece.png", label: "Rook Chess Piece" },
  { id: 230, file: "castle_230_flag_pole.png", label: "Flag Pole" },
  { id: 231, file: "castle_231_house_castle_hybrid.png", label: "House Castle Hybrid" },
  { id: 232, file: "castle_232_castle_heart_gateway.png", label: "Castle Heart Gateway" },
  { id: 233, file: "castle_233_castle_open_book.png", label: "Castle Open Book" },
  { id: 234, file: "castle_234_castle_magnifying_glass.png", label: "Castle Magnifying Glass" },
  { id: 235, file: "castle_235_castle_torch.png", label: "Castle Torch" },
  { id: 236, file: "castle_236_castle_infinity.png", label: "Castle Infinity" },
  { id: 237, file: "castle_237_castle_diamond_gem.png", label: "Castle Diamond Gem" },
  { id: 238, file: "castle_238_castle_globe.png", label: "Castle Globe" },
  { id: 239, file: "castle_239_castle_trophy.png", label: "Castle Trophy" },
  { id: 240, file: "castle_240_castle_laurel_wreath.png", label: "Castle Laurel Wreath" },
  { id: 241, file: "castle_241_castle_shield_center.png", label: "Castle Shield Center" },
  { id: 242, file: "castle_242_castle_biometric.png", label: "Castle Biometric" },
  { id: 243, file: "castle_243_castle_qr_code.png", label: "Castle Qr Code" },
  { id: 244, file: "castle_244_castle_padlock.png", label: "Castle Padlock" },
  { id: 245, file: "castle_245_castle_eye.png", label: "Castle Eye" },
  { id: 246, file: "castle_246_castle_camera.png", label: "Castle Camera" },
  { id: 247, file: "castle_247_castle_microphone.png", label: "Castle Microphone" },
  { id: 248, file: "castle_248_castle_headphones.png", label: "Castle Headphones" },
  { id: 249, file: "castle_249_castle_paintbrush.png", label: "Castle Paintbrush" },
  { id: 250, file: "castle_250_castle_keyboard.png", label: "Castle Keyboard" },
  { id: 251, file: "castle_251_crystal_gem_castle.png", label: "Crystal Gem Castle" },
  { id: 252, file: "castle_252_stone_texture_realistic.png", label: "Stone Texture Realistic" },
  { id: 253, file: "castle_253_chalk_blackboard.png", label: "Chalk Blackboard" },
  { id: 254, file: "castle_254_graph_paper_blueprint.png", label: "Graph Paper Blueprint" },
  { id: 255, file: "castle_255_blueprint_technical.png", label: "Blueprint Technical" },
  { id: 256, file: "castle_256_architectural_elevation.png", label: "Architectural Elevation" },
  { id: 257, file: "castle_257_silhouette_amber_wellness.png", label: "Silhouette Amber Wellness" },
  { id: 258, file: "castle_258_zen_garden.png", label: "Zen Garden" },
  { id: 259, file: "castle_259_castle_in_bottle.png", label: "Castle In Bottle" },
  { id: 260, file: "castle_260_long_shadow_blue.png", label: "Long Shadow Blue" },
  { id: 261, file: "castle_261_material_design_style.png", label: "Material Design Style" },
  { id: 262, file: "castle_262_neumorphism_soft.png", label: "Neumorphism Soft" },
  { id: 263, file: "castle_263_glassmorphism_frosted.png", label: "Glassmorphism Frosted" },
  { id: 264, file: "castle_264_claymorphism_puffy.png", label: "Claymorphism Puffy" },
  { id: 265, file: "castle_265_ascii_art.png", label: "Ascii Art" },
  { id: 266, file: "castle_266_wireframe_3d.png", label: "Wireframe 3d" },
  { id: 267, file: "castle_267_exploded_view.png", label: "Exploded View" },
  { id: 268, file: "castle_268_thermal_infrared.png", label: "Thermal Infrared" },
  { id: 269, file: "castle_269_sonar_radar.png", label: "Sonar Radar" },
  { id: 270, file: "castle_270_golden_hour_glow.png", label: "Golden Hour Glow" },
  { id: 271, file: "castle_271_dusk_twilight.png", label: "Dusk Twilight" },
  { id: 272, file: "castle_272_storm_lightning_dramatic.png", label: "Storm Lightning Dramatic" },
  { id: 273, file: "castle_273_foggy_mysterious.png", label: "Foggy Mysterious" },
  { id: 274, file: "castle_274_aurora_borealis.png", label: "Aurora Borealis" },
  { id: 275, file: "castle_275_mosaic_tile.png", label: "Mosaic Tile" },
  { id: 276, file: "castle_276_pointillist_dots.png", label: "Pointillist Dots" },
  { id: 277, file: "castle_277_crosshatch_pen_ink.png", label: "Crosshatch Pen Ink" },
  { id: 278, file: "castle_278_impasto_acrylic.png", label: "Impasto Acrylic" },
  { id: 279, file: "castle_279_oil_painting_classical.png", label: "Oil Painting Classical" },
  { id: 280, file: "castle_280_chinese_ink_wash.png", label: "Chinese Ink Wash" },
  { id: 281, file: "castle_281_favicon_tiny.png", label: "Favicon Tiny" },
  { id: 282, file: "castle_282_avatar_circular.png", label: "Avatar Circular" },
  { id: 283, file: "castle_283_dark_mode_oled.png", label: "Dark Mode Oled" },
  { id: 284, file: "castle_284_light_mode_clean.png", label: "Light Mode Clean" },
  { id: 285, file: "castle_285_print_ready_cmyk.png", label: "Print Ready Cmyk" },
  { id: 286, file: "castle_286_knockout_outline_white.png", label: "Knockout Outline White" },
  { id: 287, file: "castle_287_watermark_transparent.png", label: "Watermark Transparent" },
  { id: 288, file: "castle_288_billboard_bold.png", label: "Billboard Bold" },
  { id: 289, file: "castle_289_business_card_tiny.png", label: "Business Card Tiny" },
  { id: 290, file: "castle_290_full_color_brand.png", label: "Full Color Brand" },
  { id: 291, file: "castle_291_amazon_style_orange.png", label: "Amazon Style Orange" },
  { id: 292, file: "castle_292_netflix_style_red.png", label: "Netflix Style Red" },
  { id: 293, file: "castle_293_spotify_style_green.png", label: "Spotify Style Green" },
  { id: 294, file: "castle_294_twitter_x_style_clean.png", label: "Twitter X Style Clean" },
  { id: 295, file: "castle_295_meta_style_blue.png", label: "Meta Style Blue" },
  { id: 296, file: "castle_296_tiktok_style_offset.png", label: "Tiktok Style Offset" },
  { id: 297, file: "castle_297_airbnb_style_coral.png", label: "Airbnb Style Coral" },
  { id: 298, file: "castle_298_uber_style_black.png", label: "Uber Style Black" },
  { id: 299, file: "castle_299_dropbox_style_blue.png", label: "Dropbox Style Blue" },
  { id: 300, file: "castle_300_adobe_style_red.png", label: "Adobe Style Red" },
  { id: 301, file: "castle_301_asymmetric_dynamic.png", label: "Asymmetric Dynamic" },
  { id: 302, file: "castle_302_maze_castle.png", label: "Maze Castle" },
  { id: 303, file: "castle_303_negative_space_circle.png", label: "Negative Space Circle" },
  { id: 304, file: "castle_304_abstract_battlements.png", label: "Abstract Battlements" },
  { id: 305, file: "castle_305_motion_speed_lines.png", label: "Motion Speed Lines" },
  { id: 306, file: "castle_306_globe_tower_dome.png", label: "Globe Tower Dome" },
  { id: 307, file: "castle_307_under_construction.png", label: "Under Construction" },
  { id: 308, file: "castle_308_exploding_burst.png", label: "Exploding Burst" },
  { id: 309, file: "castle_309_data_chart_castle.png", label: "Data Chart Castle" },
  { id: 310, file: "castle_310_bar_graph_towers.png", label: "Bar Graph Towers" },
  { id: 311, file: "castle_311_origami_crane_style.png", label: "Origami Crane Style" },
  { id: 312, file: "castle_312_castle_sprout_growth.png", label: "Castle Sprout Growth" },
  { id: 313, file: "castle_313_materializing_particles.png", label: "Materializing Particles" },
  { id: 314, file: "castle_314_skeleton_loading.png", label: "Skeleton Loading" },
  { id: 315, file: "castle_315_qr_castle_code.png", label: "Qr Castle Code" },
  { id: 316, file: "castle_316_multicolor_data_towers.png", label: "Multicolor Data Towers" },
  { id: 317, file: "castle_317_rising_from_phone.png", label: "Rising From Phone" },
  { id: 318, file: "castle_318_shadow_only.png", label: "Shadow Only" },
  { id: 319, file: "castle_319_inverted_castle.png", label: "Inverted Castle" },
  { id: 320, file: "castle_320_electric_sparks.png", label: "Electric Sparks" },
  { id: 321, file: "castle_321_mandala_symmetry.png", label: "Mandala Symmetry" },
  { id: 322, file: "castle_322_handwritten_script.png", label: "Handwritten Script" },
  { id: 323, file: "castle_323_binary_matrix.png", label: "Binary Matrix" },
  { id: 324, file: "castle_324_music_notation_walls.png", label: "Music Notation Walls" },
  { id: 325, file: "castle_325_periodic_table_castle.png", label: "Periodic Table Castle" },
  { id: 326, file: "castle_326_ultramarine_single.png", label: "Ultramarine Single" },
  { id: 327, file: "castle_327_forest_green_single.png", label: "Forest Green Single" },
  { id: 328, file: "castle_328_coral_red_single.png", label: "Coral Red Single" },
  { id: 329, file: "castle_329_sunshine_yellow_single.png", label: "Sunshine Yellow Single" },
  { id: 330, file: "castle_330_plum_purple_single.png", label: "Plum Purple Single" },
  { id: 331, file: "castle_331_charcoal_black_single.png", label: "Charcoal Black Single" },
  { id: 332, file: "castle_332_white_on_gray.png", label: "White On Gray" },
  { id: 333, file: "castle_333_torn_paper_reveal.png", label: "Torn Paper Reveal" },
  { id: 334, file: "castle_334_paper_collage.png", label: "Paper Collage" },
  { id: 335, file: "castle_335_halftone_offset_print.png", label: "Halftone Offset Print" },
  { id: 336, file: "castle_336_podcast_microphone.png", label: "Podcast Microphone" },
  { id: 337, file: "castle_337_newsletter_email.png", label: "Newsletter Email" },
  { id: 338, file: "castle_338_web3_crypto.png", label: "Web3 Crypto" },
  { id: 339, file: "castle_339_mental_health_calm.png", label: "Mental Health Calm" },
  { id: 340, file: "castle_340_kids_learning.png", label: "Kids Learning" },
  { id: 341, file: "castle_341_seniors_accessible.png", label: "Seniors Accessible" },
  { id: 342, file: "castle_342_accessibility_inclusive.png", label: "Accessibility Inclusive" },
  { id: 343, file: "castle_343_colorblind_safe.png", label: "Colorblind Safe" },
  { id: 344, file: "castle_344_low_vision_bold.png", label: "Low Vision Bold" },
  { id: 345, file: "castle_345_dual_mode_grayscale.png", label: "Dual Mode Grayscale" },
  { id: 346, file: "castle_346_pride_rainbow_gradient.png", label: "Pride Rainbow Gradient" },
  { id: 347, file: "castle_347_micro_icon_16px.png", label: "Micro Icon 16px" },
  { id: 348, file: "castle_348_icon_32px.png", label: "Icon 32px" },
  { id: 349, file: "castle_349_app_store_512px.png", label: "App Store 512px" },
  { id: 350, file: "castle_350_launch_sparkle.png", label: "Launch Sparkle" },
  { id: 351, file: "castle_351_brand_lockup.png", label: "Brand Lockup" },
  { id: 352, file: "castle_352_monospace_text_logo.png", label: "Monospace Text Logo" },
  { id: 353, file: "castle_353_anthropomorphic_face.png", label: "Anthropomorphic Face" },
  { id: 354, file: "castle_354_spinner_loading.png", label: "Spinner Loading" },
  { id: 355, file: "castle_355_heartbeat_ekg.png", label: "Heartbeat Ekg" },
  { id: 356, file: "castle_356_ultra_wide_horizontal.png", label: "Ultra Wide Horizontal" },
  { id: 357, file: "castle_357_tall_vertical_portrait.png", label: "Tall Vertical Portrait" },
  { id: 358, file: "castle_358_perspective_3quarter.png", label: "Perspective 3quarter" },
  { id: 359, file: "castle_359_extreme_close_zoom.png", label: "Extreme Close Zoom" },
  { id: 360, file: "castle_360_overhead_birdseye.png", label: "Overhead Birdseye" },
  { id: 361, file: "castle_361_film_grain_analog.png", label: "Film Grain Analog" },
  { id: 362, file: "castle_362_hero_final.png", label: "Hero Final" },
  { id: 363, file: "castle_363_celebration_365.png", label: "Celebration 365" },
  { id: 364, file: "castle_364_hybrid_synthesis.png", label: "Hybrid Synthesis" },
  { id: 365, file: "castle_365_the_perfect_final.png", label: "The Perfect Final" },
  { id: 366, file: "castle_366_sandbox_neon_cyan.png", label: "Sandbox Neon Cyan" },
  { id: 367, file: "castle_367_sandbox_desert_sand.png", label: "Sandbox Desert Sand" },
  { id: 368, file: "castle_368_sandbox_secure_green.png", label: "Sandbox Secure Green" },
  { id: 369, file: "castle_369_sandbox_cloud_sky.png", label: "Sandbox Cloud Sky" },
  { id: 370, file: "castle_370_sandbox_pixel_retro.png", label: "Sandbox Pixel Retro" },
  { id: 371, file: "castle_371_sandbox_shield_gold.png", label: "Sandbox Shield Gold" },
  { id: 372, file: "castle_372_sandbox_holographic.png", label: "Sandbox Holographic" },
  { id: 373, file: "castle_373_sandbox_line_mono.png", label: "Sandbox Line Mono" },
  { id: 374, file: "castle_374_sandbox_vaporwave.png", label: "Sandbox Vaporwave" },
  { id: 375, file: "castle_375_sandbox_isometric_pastel.png", label: "Sandbox Isometric Pastel" },
  { id: 376, file: "castle_376_sandbox_glitch.png", label: "Sandbox Glitch" },
  { id: 377, file: "castle_377_sandbox_circuit.png", label: "Sandbox Circuit Board" },
  { id: 378, file: "castle_378_sandbox_watercolor.png", label: "Sandbox Watercolor" },
  { id: 379, file: "castle_379_sandbox_hexagon_space.png", label: "Sandbox Hexagon Space" },
  { id: 380, file: "castle_380_sandbox_duotone_coral_teal.png", label: "Sandbox Duotone Coral Teal" },
  { id: 381, file: "castle_381_sandbox_sandcastle_beach.png", label: "Sandbox Sandcastle Beach" },
  { id: 382, file: "castle_382_sandbox_stencil_graffiti.png", label: "Sandbox Stencil Graffiti" },
  { id: 383, file: "castle_383_sandbox_minimal_purple.png", label: "Sandbox Minimal Purple" },
  { id: 384, file: "castle_384_sandbox_puzzle_pieces.png", label: "Sandbox Puzzle Pieces" },
  { id: 385, file: "castle_385_sandbox_chrome_laser.png", label: "Sandbox Chrome Laser" },
  { id: 386, file: "castle_386_sandbox_kawaii_mascot.png", label: "Sandbox Kawaii Mascot" },
  { id: 387, file: "castle_387_sandbox_viking_longship.png", label: "Sandbox Viking Longship" },
  { id: 388, file: "castle_388_sandbox_galaxy_fill.png", label: "Sandbox Galaxy Fill" },
  { id: 389, file: "castle_389_sandbox_vintage_badge.png", label: "Sandbox Vintage Badge" },
  { id: 390, file: "castle_390_sandbox_fire_flame.png", label: "Sandbox Fire Flame" },
  { id: 391, file: "castle_391_sandbox_chalk_blackboard.png", label: "Sandbox Chalk Blackboard" },
  { id: 392, file: "castle_392_sandbox_ui_windows.png", label: "Sandbox UI Windows" },
  { id: 393, file: "castle_393_sandbox_lowpoly_3d.png", label: "Sandbox Low-Poly 3D" },
  { id: 394, file: "castle_394_sandbox_golden_sunrise.png", label: "Sandbox Golden Sunrise" },
  { id: 395, file: "castle_395_sandbox_typographic_se.png", label: "Sandbox Typographic SE" },
  { id: 396, file: "castle_396_sw_sith_red.png", label: "SW Sith Red" },
  { id: 397, file: "castle_397_sw_jedi_temple.png", label: "SW Jedi Temple" },
  { id: 398, file: "castle_398_sw_imperial_grey.png", label: "SW Imperial Grey" },
  { id: 399, file: "castle_399_sw_naboo_amber.png", label: "SW Naboo Amber" },
  { id: 400, file: "castle_400_sw_rebel_orange.png", label: "SW Rebel Orange" },
  { id: 401, file: "castle_401_sw_mandalorian_steel.png", label: "SW Mandalorian Steel" },
  { id: 402, file: "castle_402_sw_death_star_charcoal.png", label: "SW Death Star Charcoal" },
  { id: 403, file: "castle_403_sw_tatooine_sienna.png", label: "SW Tatooine Sienna" },
  { id: 404, file: "castle_404_sw_coruscant_cobalt.png", label: "SW Coruscant Cobalt" },
  { id: 405, file: "castle_405_sw_dagobah_teal.png", label: "SW Dagobah Teal" },
  { id: 406, file: "castle_406_sw_hoth_ice_blue.png", label: "SW Hoth Ice Blue" },
  { id: 407, file: "castle_407_sw_endor_brown.png", label: "SW Endor Brown" },
  { id: 408, file: "castle_408_sw_bounty_purple.png", label: "SW Bounty Hunter Purple" },
  { id: 409, file: "castle_409_sw_mon_cala_teal.png", label: "SW Mon Calamari Teal" },
  { id: 410, file: "castle_410_sw_mustafar_lava.png", label: "SW Mustafar Lava" },
  { id: 411, file: "castle_411_sw_sith_eternal_purple.png", label: "SW Sith Eternal Purple" },
  { id: 412, file: "castle_412_sw_cloud_city_pink.png", label: "SW Cloud City Pink" },
  { id: 413, file: "castle_413_sw_kashyyyk_jade.png", label: "SW Kashyyyk Jade" },
  { id: 414, file: "castle_414_sw_republic_indigo.png", label: "SW Republic Indigo" },
  { id: 415, file: "castle_415_sw_droid_factory_copper.png", label: "SW Droid Factory Copper" },
  { id: 416, file: "castle_416_sw_tatooine_sand.png", label: "SW Tatooine Sand" },
  { id: 417, file: "castle_417_dune_arrakis_spice.png", label: "Dune Arrakis Spice" },
  { id: 418, file: "castle_418_dune_atreides_blue.png", label: "Dune Atreides Blue" },
  { id: 419, file: "castle_419_dune_harkonnen_black.png", label: "Dune Harkonnen Black" },
  { id: 420, file: "castle_420_dune_fremen_sietch.png", label: "Dune Fremen Sietch" },
  { id: 421, file: "castle_421_dune_emperor_silver.png", label: "Dune Emperor Silver" },
  { id: 422, file: "castle_422_dune_bene_gesserit_violet.png", label: "Dune Bene Gesserit Violet" },
  { id: 423, file: "castle_423_dune_guild_teal.png", label: "Dune Guild Navigator Teal" },
  { id: 424, file: "castle_424_dune_sandworm_russet.png", label: "Dune Sandworm Russet" },
  { id: 425, file: "castle_425_dune_spice_gold.png", label: "Dune Spice Gold" },
  { id: 426, file: "castle_426_dune_tleilaxu_green.png", label: "Dune Tleilaxu Green" },
  { id: 427, file: "castle_427_dune_ixian_chrome.png", label: "Dune Ixian Chrome" },
  { id: 428, file: "castle_428_dune_muaddib_crimson.png", label: "Dune Muaddib Crimson" },
  { id: 429, file: "castle_429_dune_chani_rose.png", label: "Dune Chani Rose" },
  { id: 430, file: "castle_430_dune_god_emperor_ivory.png", label: "Dune God Emperor Ivory" },
  { id: 431, file: "castle_431_moat_classic_navy.png", label: "Moat Classic Navy" },
  { id: 432, file: "castle_432_moat_drawbridge_up_crimson.png", label: "Moat Drawbridge Up Crimson" },
  { id: 433, file: "castle_433_moat_swan_sage.png", label: "Moat Swan Sage" },
  { id: 434, file: "castle_434_moat_aerial_teal.png", label: "Moat Aerial Teal" },
  { id: 435, file: "castle_435_moat_croc_amber.png", label: "Moat Croc Amber" },
  { id: 436, file: "castle_436_moat_reflection_purple.png", label: "Moat Reflection Purple" },
  { id: 437, file: "castle_437_moat_siege_charcoal.png", label: "Moat Siege Charcoal" },
  { id: 438, file: "castle_438_moat_lily_emerald.png", label: "Moat Lily Emerald" },
  { id: 439, file: "castle_439_moat_minimal_slate.png", label: "Moat Minimal Slate" },
  { id: 440, file: "castle_440_moat_heraldic_burgundy.png", label: "Moat Heraldic Burgundy" },
  { id: 441, file: "castle_441_got_winterfell_grey.png", label: "GoT Winterfell" },
  { id: 442, file: "castle_442_got_red_keep_crimson.png", label: "GoT Red Keep" },
  { id: 443, file: "castle_443_got_eyrie_blue.png", label: "GoT The Eyrie" },
  { id: 444, file: "castle_444_got_dragonstone_charcoal.png", label: "GoT Dragonstone" },
  { id: 445, file: "castle_445_got_casterly_rock_gold.png", label: "GoT Casterly Rock" },
  { id: 446, file: "castle_446_got_harrenhal_black.png", label: "GoT Harrenhal" },
  { id: 447, file: "castle_447_got_storms_end_teal.png", label: "GoT Storm's End" },
  { id: 448, file: "castle_448_got_highgarden_green.png", label: "GoT Highgarden" },
  { id: 449, file: "castle_449_got_the_wall_ice.png", label: "GoT The Wall" },
  { id: 450, file: "castle_450_got_pyke_slate.png", label: "GoT Pyke" },
  { id: 451, file: "castle_451_got_sunspear_amber.png", label: "GoT Sunspear" },
  { id: 452, file: "castle_452_got_twins_violet.png", label: "GoT The Twins" },
  { id: 453, file: "castle_453_fairy_cinderella_blue.png", label: "Fairy Tale: Cinderella" },
  { id: 454, file: "castle_454_fairy_sleeping_beauty_pink.png", label: "Fairy Tale: Sleeping Beauty" },
  { id: 455, file: "castle_455_fairy_beast_castle_purple.png", label: "Fairy Tale: Beast's Castle" },
  { id: 456, file: "castle_456_fairy_snow_white_red.png", label: "Fairy Tale: Snow White" },
  { id: 457, file: "castle_457_fairy_rapunzel_gold.png", label: "Fairy Tale: Rapunzel's Tower" },
  { id: 458, file: "castle_458_fairy_elsa_ice_palace_cyan.png", label: "Fairy Tale: Ice Crystal Palace" },
  { id: 459, file: "castle_459_fairy_atlantica_seagreen.png", label: "Fairy Tale: Atlantica" },
  { id: 460, file: "castle_460_fairy_agrabah_gold.png", label: "Fairy Tale: Palace of Agrabah" },
  { id: 461, file: "castle_461_fairy_gingerbread_red.png", label: "Fairy Tale: Gingerbread Castle" },
  { id: 462, file: "castle_462_fairy_maleficent_violet.png", label: "Fairy Tale: Maleficent's Castle" },
  { id: 463, file: "castle_463_fairy_beanstalk_giant_green.png", label: "Fairy Tale: Giant's Sky Castle" },
  { id: 464, file: "castle_464_fairy_mulan_imperial_red.png", label: "Fairy Tale: Imperial Palace" },
  { id: 465, file: "castle_465_fairy_frog_prince_teal.png", label: "Fairy Tale: Bayou Palace" },
  { id: 466, file: "castle_466_fairy_three_pigs_brick.png", label: "Fairy Tale: Brick Castle" },
  { id: 467, file: "castle_467_fairy_puss_boots_copper.png", label: "Fairy Tale: Marquis Castle" },
  { id: 468, file: "castle_468_fairy_thumbelina_lavender.png", label: "Fairy Tale: Thumbelina's Kingdom" },
  { id: 469, file: "castle_469_fairy_snow_queen_silver.png", label: "Fairy Tale: Snow Queen's Fortress" },
  { id: 470, file: "castle_470_fairy_ali_baba_amber.png", label: "Fairy Tale: Ali Baba's Cave" },
  { id: 471, file: "castle_471_fairy_camelot_royal_blue.png", label: "Fairy Tale: Camelot" },
  { id: 472, file: "castle_472_fairy_emerald_city_green.png", label: "Fairy Tale: Emerald City" },
];

// ===== SUPABASE CONFIG =====
const SUPABASE_URL = 'https://mrnccntqmkxjazznejfc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ybmNjbnRxbWt4amF6em5lamZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyMDA3NTksImV4cCI6MjA5MDc3Njc1OX0.T6oFTtYiFTsx6ojuogpZFXAS7tN5-dPzwvmY5V2xFGI';
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Session ID — fresh each page load (avoids localStorage sandbox issues)
const SESSION_ID = crypto.randomUUID();

// ===== STATE =====
let votes = {}; // { id: { up: 0, down: 0, userVote: null } }
let sortMode = 'votes';
let searchQuery = '';
let lightboxId = null;
let filteredIds = [];
let voteInFlight = new Set(); // prevent double-clicks

// Init vote state for all logos
LOGOS.forEach(l => { votes[l.id] = { up: 0, down: 0, userVote: null }; });

// ===== SUPABASE LOAD =====
async function loadVotesFromSupabase() {
  try {
    // Load aggregate counts
    const { data: aggData, error: aggErr } = await sb
      .from('castle_votes')
      .select('logo_id, up_votes, down_votes');

    if (aggErr) throw aggErr;

    aggData.forEach(row => {
      if (votes[row.logo_id]) {
        votes[row.logo_id].up = row.up_votes || 0;
        votes[row.logo_id].down = row.down_votes || 0;
      }
    });

    // Load this session's votes
    const { data: userVoteData, error: userErr } = await sb
      .from('castle_user_votes')
      .select('logo_id, direction')
      .eq('session_id', SESSION_ID);

    if (userErr) throw userErr;

    userVoteData.forEach(row => {
      if (votes[row.logo_id]) {
        votes[row.logo_id].userVote = row.direction;
      }
    });

  } catch (err) {
    console.warn('Supabase load error (falling back to local):', err.message);
  }

  render();
  updateStats();
}

// ===== SUPABASE VOTE =====
async function persistVote(id, dir, wasVote) {
  // wasVote = the userVote state BEFORE this click (passed from castVote)
  const isSameDir = wasVote === dir;

  try {
    if (isSameDir) {
      // Toggle off: delete user vote row, decrement count
      await sb
        .from('castle_user_votes')
        .delete()
        .eq('logo_id', id)
        .eq('session_id', SESSION_ID);

      await sb.rpc('adjust_votes', { p_logo_id: id, p_up_delta: dir === 'up' ? -1 : 0, p_down_delta: dir === 'down' ? -1 : 0 });

    } else {
      // Upsert user vote (insert or update direction)
      await sb
        .from('castle_user_votes')
        .upsert(
          { logo_id: id, session_id: SESSION_ID, direction: dir },
          { onConflict: 'logo_id,session_id' }
        );

      // Adjust counts: +1 for new dir, -1 for old dir if existed
      const upDelta = (dir === 'up' ? 1 : 0) + (wasVote === 'up' ? -1 : 0);
      const downDelta = (dir === 'down' ? 1 : 0) + (wasVote === 'down' ? -1 : 0);

      await sb.rpc('adjust_votes', { p_logo_id: id, p_up_delta: upDelta, p_down_delta: downDelta });
    }
  } catch (err) {
    console.warn('Supabase vote error:', err.message);
  }
}

// ===== VOTE HELPERS =====
function getScore(id) {
  const v = votes[id];
  return v.up - v.down;
}

function getControversy(id) {
  const v = votes[id];
  const total = v.up + v.down;
  if (total === 0) return 0;
  const ratio = Math.min(v.up, v.down) / Math.max(v.up, v.down);
  return total * ratio;
}

function castVote(id, dir) {
  if (voteInFlight.has(id)) return; // debounce
  voteInFlight.add(id);

  const v = votes[id];
  const wasVote = v.userVote; // capture BEFORE mutation

  if (v.userVote === dir) {
    // toggle off
    v[dir]--;
    v.userVote = null;
  } else {
    if (v.userVote) { v[v.userVote]--; }
    v[dir]++;
    v.userVote = dir;
  }
  updateStats();

  // Persist to Supabase — pass wasVote so persistVote knows the pre-click state
  persistVote(id, dir, wasVote).finally(() => voteInFlight.delete(id));
}

// ===== SORT & FILTER =====
function getSortedFiltered() {
  let list = LOGOS.filter(l =>
    !searchQuery || l.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (sortMode === 'votes') {
    list.sort((a, b) => {
      const sd = getScore(b.id) - getScore(a.id);
      if (sd !== 0) return sd;
      return a.id - b.id;
    });
  } else if (sortMode === 'newest') {
    list.sort((a, b) => b.id - a.id);
  } else if (sortMode === 'controversial') {
    list.sort((a, b) => getControversy(b.id) - getControversy(a.id));
  }

  return list;
}

// ===== RENDER =====
function render() {
  const list = getSortedFiltered();
  filteredIds = list.map(l => l.id);
  const grid = document.getElementById('logo-grid');
  const noResults = document.getElementById('no-results');

  if (list.length === 0) {
    grid.innerHTML = '';
    noResults.hidden = false;
    return;
  }
  noResults.hidden = true;

  // Build all cards at once for performance
  const fragment = document.createDocumentFragment();
  list.forEach((logo, idx) => {
    const existing = document.getElementById(`card-${logo.id}`);
    if (existing) {
      // Update in place (just score + vote state)
      updateCard(logo.id);
      fragment.appendChild(existing);
    } else {
      fragment.appendChild(createCard(logo, idx));
    }
  });
  grid.innerHTML = '';
  grid.appendChild(fragment);

  // Apply rank badges
  list.forEach((logo, idx) => {
    const card = document.getElementById(`card-${logo.id}`);
    if (!card) return;
    card.classList.remove('rank-1', 'rank-2', 'rank-3');
    const badge = card.querySelector('.rank-badge');
    if (sortMode === 'votes') {
      const score = getScore(logo.id);
      if (score > 0) {
        if (idx === 0) { card.classList.add('rank-1'); if (badge) badge.textContent = '🥇 #1'; }
        else if (idx === 1) { card.classList.add('rank-2'); if (badge) badge.textContent = '🥈 #2'; }
        else if (idx === 2) { card.classList.add('rank-3'); if (badge) badge.textContent = '🥉 #3'; }
        else if (badge) badge.textContent = `#${idx + 1}`;
      } else {
        if (badge) badge.textContent = `#${idx + 1}`;
      }
    } else {
      if (badge) badge.textContent = `#${idx + 1}`;
    }
  });

  // Re-render any AI edit/created cards that were wiped by grid.innerHTML = ''
  if (typeof renderEditCards === 'function') renderEditCards();
  if (typeof renderCreatedCards === 'function') renderCreatedCards();
}

function renderCreatedCards() {
  Object.values(editCards)
    .filter(e => e.isCreated && e.status === 'done' && e.imageDataUrl)
    .forEach(renderCreatedCard);
}

function createCard(logo, idx) {
  const v = votes[logo.id];
  const score = getScore(logo.id);
  const card = document.createElement('article');
  card.className = 'logo-card';
  card.id = `card-${logo.id}`;
  card.setAttribute('role', 'listitem');
  card.setAttribute('aria-label', `Logo ${logo.id}: ${logo.label}`);

  card.innerHTML = `
    <span class="rank-badge">#${idx + 1}</span>
    <div class="logo-img-wrap">
      <img class="logo-img" src="https://raw.githubusercontent.com/opencolin/365-castle-logos/master/logos/${logo.file}" alt="${logo.label} castle logo" loading="lazy" decoding="async" />
      <span class="logo-num">${String(logo.id).padStart(3,'0')}</span>
    </div>
    <div class="logo-body">
      <p class="logo-label">${logo.label}</p>
      <div class="vote-row">
        <button class="vote-btn vote-up${v.userVote === 'up' ? ' voted' : ''}" data-id="${logo.id}" data-dir="up" aria-label="Upvote ${logo.label}" aria-pressed="${v.userVote === 'up'}">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
          ${v.up}
        </button>
        <span class="score${score > 0 ? ' positive' : score < 0 ? ' negative' : ''}">${score > 0 ? '+' : ''}${score}</span>
        <button class="vote-btn vote-down${v.userVote === 'down' ? ' voted' : ''}" data-id="${logo.id}" data-dir="down" aria-label="Downvote ${logo.label}" aria-pressed="${v.userVote === 'down'}">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
          ${v.down}
        </button>
      </div>
    </div>
  `;

  // Click image to open lightbox
  card.querySelector('.logo-img-wrap').addEventListener('click', (e) => {
    e.stopPropagation();
    openLightbox(logo.id);
  });

  // Vote buttons
  card.querySelectorAll('.vote-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      const dir = btn.dataset.dir;
      castVote(id, dir);
      btn.classList.add('pulse');
      btn.addEventListener('animationend', () => btn.classList.remove('pulse'), { once: true });
      updateCard(id);
      updateStats();
      if (sortMode === 'votes') {
        // Re-sort after short delay
        setTimeout(() => render(), 300);
      }
    });
  });

  // Edit button
  const logoBody = card.querySelector('.logo-body');
  const editBtn = document.createElement('button');
  editBtn.className = 'edit-btn';
  editBtn.dataset.logoId = logo.id;
  editBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg> Edit`;
  editBtn.addEventListener('click', e => {
    e.stopPropagation();
    const imgUrl = `https://raw.githubusercontent.com/opencolin/365-castle-logos/master/logos/${logo.file}`;
    openEditModal(logo.id, imgUrl);
  });
  logoBody.appendChild(editBtn);

  return card;
}

function updateCard(id) {
  const card = document.getElementById(`card-${id}`);
  if (!card) return;
  const v = votes[id];
  const score = getScore(id);

  const upBtn = card.querySelector('.vote-up');
  const downBtn = card.querySelector('.vote-down');
  const scoreEl = card.querySelector('.score');

  if (upBtn) {
    upBtn.classList.toggle('voted', v.userVote === 'up');
    upBtn.setAttribute('aria-pressed', v.userVote === 'up');
    upBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 19V5M5 12l7-7 7 7"/></svg>${v.up}`;
  }
  if (downBtn) {
    downBtn.classList.toggle('voted', v.userVote === 'down');
    downBtn.setAttribute('aria-pressed', v.userVote === 'down');
    downBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>${v.down}`;
  }
  if (scoreEl) {
    scoreEl.textContent = (score > 0 ? '+' : '') + score;
    scoreEl.className = 'score' + (score > 0 ? ' positive' : score < 0 ? ' negative' : '');
  }
}

// ===== STATS =====
function updateStats() {
  const totalVotes = Object.values(votes).reduce((s, v) => s + v.up + v.down, 0);
  const votedCount = Object.values(votes).filter(v => v.userVote).length;

  document.getElementById('stat-votes').textContent = totalVotes;
  document.getElementById('stat-voted').textContent = votedCount;

  // Leader
  const topScore = Math.max(...LOGOS.map(l => getScore(l.id)));
  if (topScore > 0) {
    const leader = LOGOS.find(l => getScore(l.id) === topScore);
    if (leader) document.getElementById('stat-leader').textContent = `#${leader.id} ${leader.label}`;
  } else {
    document.getElementById('stat-leader').textContent = '—';
  }
}

// ===== LIGHTBOX =====
function openLightbox(id) {
  lightboxId = id;
  const logo = LOGOS.find(l => l.id === id);
  if (!logo) return;

  document.getElementById('lightbox').hidden = false;
  document.getElementById('lightbox-backdrop').classList.add('open');
  document.body.style.overflow = 'hidden';

  updateLightbox();
  document.getElementById('lightbox').focus();
}

function updateLightbox() {
  if (!lightboxId) return;
  const logo = LOGOS.find(l => l.id === lightboxId);
  if (!logo) return;
  const v = votes[logo.id];
  const score = getScore(logo.id);

  document.getElementById('lightbox-img').src = `https://raw.githubusercontent.com/opencolin/365-castle-logos/master/logos/${logo.file}`;
  document.getElementById('lightbox-img').alt = `${logo.label} castle logo`;
  document.getElementById('lightbox-num').textContent = `#${String(logo.id).padStart(3,'0')} of 365`;
  document.getElementById('lightbox-title').textContent = logo.label;

  const upBtn = document.getElementById('lb-upvote');
  const downBtn = document.getElementById('lb-downvote');
  const scoreEl = document.getElementById('lb-score');

  upBtn.className = 'vote-btn vote-up large' + (v.userVote === 'up' ? ' voted' : '');
  upBtn.setAttribute('aria-pressed', v.userVote === 'up');
  document.getElementById('lb-up-count').textContent = v.up;

  downBtn.className = 'vote-btn vote-down large' + (v.userVote === 'down' ? ' voted' : '');
  downBtn.setAttribute('aria-pressed', v.userVote === 'down');
  document.getElementById('lb-down-count').textContent = v.down;

  scoreEl.textContent = (score > 0 ? '+' : '') + score;
  scoreEl.className = 'score-display' + (score > 0 ? ' positive' : score < 0 ? ' negative' : '');

  // Nav buttons
  const pos = filteredIds.indexOf(lightboxId);
  document.getElementById('lb-prev').disabled = pos <= 0;
  document.getElementById('lb-next').disabled = pos >= filteredIds.length - 1;
}

function closeLightbox() {
  lightboxId = null;
  document.getElementById('lightbox').hidden = true;
  document.getElementById('lightbox-backdrop').classList.remove('open');
  document.body.style.overflow = '';
}

// ===== EVENT LISTENERS =====

// Sort tabs
document.querySelectorAll('.sort-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.sort-tab').forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    sortMode = tab.dataset.sort;
    render();
  });
});

// Search
document.querySelector('.search-input').addEventListener('input', (e) => {
  searchQuery = e.target.value;
  render();
});

// All Castles button — clears search and resets sort to show everything
document.getElementById('all-castles-btn').addEventListener('click', () => {
  searchQuery = '';
  document.querySelector('.search-input').value = '';
  document.getElementById('all-castles-btn').textContent = `All Castles (${LOGOS.length})`;
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dark mode toggle
(function () {
  const t = document.querySelector('[data-theme-toggle]');
  const r = document.documentElement;
  let d = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  r.setAttribute('data-theme', d);
  t.innerHTML = d === 'dark'
    ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
    : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  t.addEventListener('click', () => {
    d = d === 'dark' ? 'light' : 'dark';
    r.setAttribute('data-theme', d);
    t.setAttribute('aria-label', 'Switch to ' + (d === 'dark' ? 'light' : 'dark') + ' mode');
    t.innerHTML = d === 'dark'
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  });
})();

// Lightbox controls
document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
document.getElementById('lightbox-backdrop').addEventListener('click', closeLightbox);

document.getElementById('lb-upvote').addEventListener('click', () => {
  if (!lightboxId) return;
  castVote(lightboxId, 'up');
  updateCard(lightboxId);
  updateLightbox();
  if (sortMode === 'votes') setTimeout(() => render(), 300);
});

document.getElementById('lb-downvote').addEventListener('click', () => {
  if (!lightboxId) return;
  castVote(lightboxId, 'down');
  updateCard(lightboxId);
  updateLightbox();
  if (sortMode === 'votes') setTimeout(() => render(), 300);
});

document.getElementById('lb-prev').addEventListener('click', () => {
  const pos = filteredIds.indexOf(lightboxId);
  if (pos > 0) { lightboxId = filteredIds[pos - 1]; updateLightbox(); }
});

document.getElementById('lb-next').addEventListener('click', () => {
  const pos = filteredIds.indexOf(lightboxId);
  if (pos < filteredIds.length - 1) { lightboxId = filteredIds[pos + 1]; updateLightbox(); }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (lightboxId !== null) {
    if (e.key === 'Escape') { closeLightbox(); return; }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      const pos = filteredIds.indexOf(lightboxId);
      if (pos > 0) { lightboxId = filteredIds[pos - 1]; updateLightbox(); }
      return;
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      const pos = filteredIds.indexOf(lightboxId);
      if (pos < filteredIds.length - 1) { lightboxId = filteredIds[pos + 1]; updateLightbox(); }
      return;
    }
    if (e.key === 'u' || e.key === 'U') {
      castVote(lightboxId, 'up');
      updateCard(lightboxId);
      updateLightbox();
    }
    if (e.key === 'd' || e.key === 'D') {
      castVote(lightboxId, 'down');
      updateCard(lightboxId);
      updateLightbox();
    }
  }
});

// =====================================================================
// ===== AI EDIT FEATURE =====
// =====================================================================

const VERCEL_EDIT_API = '/api/edit';

// In-memory store for AI-edited cards: { editId -> { parentId, prompt, imageDataUrl, up, down, userVote } }
let editCards = {};

// Poll handles: { editId -> intervalId }
let editPolls = {};

// ===== INIT =====
// Show a placeholder render immediately, then load real data from Supabase
document.getElementById('stat-total').textContent = LOGOS.length;
document.getElementById('all-castles-btn').textContent = `All Castles (${LOGOS.length})`;
render();
updateStats();
loadVotesFromSupabase();

// ===== LOAD EXISTING EDITS FROM SUPABASE =====
async function loadEditsFromSupabase() {
  try {
    const { data, error } = await sb
      .from('castle_edits')
      .select('id, parent_logo_id, prompt, image_data_url, up_votes, down_votes, status, created_at')
      .eq('status', 'done')
      .order('created_at', { ascending: false });

    if (error) throw error;

    // Load user votes for these edits
    const editIds = data.map(e => e.id);
    let userVoteMap = {};
    if (editIds.length > 0) {
      const { data: uvData } = await sb
        .from('castle_edit_user_votes')
        .select('edit_id, direction')
        .eq('session_id', SESSION_ID)
        .in('edit_id', editIds);
      (uvData || []).forEach(r => { userVoteMap[r.edit_id] = r.direction; });
    }

    data.forEach(e => {
      editCards[e.id] = {
        id: e.id,
        parentId: e.parent_logo_id,
        prompt: e.prompt,
        imageDataUrl: e.image_data_url,
        up: e.up_votes || 0,
        down: e.down_votes || 0,
        userVote: userVoteMap[e.id] || null,
        status: 'done',
      };
    });

    if (data.length > 0) renderEditCards();
  } catch (err) {
    console.warn('Failed to load edits:', err);
  }
}

// ===== RENDER EDIT CARDS =====
function renderEditCards() {
  const grid = document.getElementById('logo-grid');
  Object.values(editCards).forEach(edit => {
    const existingCard = document.getElementById(`edit-card-${edit.id}`);
    if (existingCard) {
      updateEditCard(edit.id);
      return;
    }
    if (edit.status !== 'done' || !edit.imageDataUrl) return;
    const card = createEditCard(edit);
    // Insert after the parent card if possible
    const parentCard = document.getElementById(`card-${edit.parentId}`);
    if (parentCard && parentCard.nextSibling) {
      grid.insertBefore(card, parentCard.nextSibling);
    } else {
      grid.appendChild(card);
    }
  });
}

function createEditCard(edit) {
  const score = edit.up - edit.down;
  const card = document.createElement('article');
  card.className = 'logo-card';
  card.id = `edit-card-${edit.id}`;
  card.setAttribute('role', 'listitem');
  card.setAttribute('aria-label', `AI Edit of logo ${edit.parentId}`);
  card.style.position = 'relative';

  const parentLogo = LOGOS.find(l => l.id === edit.parentId);
  const parentLabel = parentLogo ? parentLogo.label : `Logo #${edit.parentId}`;

  card.innerHTML = `
    <span class="ai-badge">✦ AI Edit</span>
    <div class="logo-img-wrap" style="cursor:pointer">
      <img class="logo-img" src="${edit.imageDataUrl}" alt="AI edit of ${parentLabel}" loading="lazy" />
    </div>
    <div class="logo-body">
      <p class="logo-label">${parentLabel}</p>
      <p class="edit-prompt-tag" title="${edit.prompt}">"${edit.prompt}"</p>
      <div class="vote-row">
        <button class="vote-btn vote-up${edit.userVote === 'up' ? ' voted' : ''}" data-edit-id="${edit.id}" data-dir="up" aria-label="Upvote edit">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
          ${edit.up}
        </button>
        <span class="score${score > 0 ? ' positive' : score < 0 ? ' negative' : ''}">${score > 0 ? '+' : ''}${score}</span>
        <button class="vote-btn vote-down${edit.userVote === 'down' ? ' voted' : ''}" data-edit-id="${edit.id}" data-dir="down" aria-label="Downvote edit">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
          ${edit.down}
        </button>
      </div>
      <button class="edit-btn" data-logo-id="${edit.parentId}">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
        Edit again
      </button>
    </div>
  `;

  // Vote buttons
  card.querySelectorAll('.vote-btn[data-edit-id]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      castEditVote(edit.id, btn.dataset.dir);
      btn.classList.add('pulse');
      btn.addEventListener('animationend', () => btn.classList.remove('pulse'), { once: true });
    });
  });

  // Edit again button
  card.querySelector('.edit-btn').addEventListener('click', e => {
    e.stopPropagation();
    openEditModal(parseInt(btn.dataset.logoId), edit.imageDataUrl);
  });

  // Lightbox on image click
  card.querySelector('.logo-img-wrap').addEventListener('click', () => {
    openEditLightbox(edit);
  });

  return card;
}

function updateEditCard(editId) {
  const edit = editCards[editId];
  if (!edit) return;
  const card = document.getElementById(`edit-card-${editId}`);
  if (!card) return;
  const score = edit.up - edit.down;
  const upBtn = card.querySelector('.vote-up');
  const downBtn = card.querySelector('.vote-down');
  const scoreEl = card.querySelector('.score');
  if (upBtn) {
    upBtn.classList.toggle('voted', edit.userVote === 'up');
    upBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 19V5M5 12l7-7 7 7"/></svg>${edit.up}`;
  }
  if (downBtn) {
    downBtn.classList.toggle('voted', edit.userVote === 'down');
    downBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>${edit.down}`;
  }
  if (scoreEl) {
    scoreEl.textContent = (score > 0 ? '+' : '') + score;
    scoreEl.className = 'score' + (score > 0 ? ' positive' : score < 0 ? ' negative' : '');
  }
}

// ===== EDIT VOTING =====
async function castEditVote(editId, dir) {
  const edit = editCards[editId];
  if (!edit) return;
  const wasVote = edit.userVote;
  const isSameDir = wasVote === dir;

  // Optimistic update
  if (isSameDir) {
    edit[dir]--;
    edit.userVote = null;
  } else {
    if (wasVote) edit[wasVote]--;
    edit[dir]++;
    edit.userVote = dir;
  }
  updateEditCard(editId);

  // Persist
  try {
    if (isSameDir) {
      await sb.from('castle_edit_user_votes').delete()
        .eq('edit_id', editId).eq('session_id', SESSION_ID);
      await sb.rpc('adjust_edit_votes', {
        p_edit_id: editId,
        p_up_delta: dir === 'up' ? -1 : 0,
        p_down_delta: dir === 'down' ? -1 : 0,
      });
    } else {
      await sb.from('castle_edit_user_votes').upsert(
        { edit_id: editId, session_id: SESSION_ID, direction: dir },
        { onConflict: 'edit_id,session_id' }
      );
      const upDelta = (dir === 'up' ? 1 : 0) + (wasVote === 'up' ? -1 : 0);
      const downDelta = (dir === 'down' ? 1 : 0) + (wasVote === 'down' ? -1 : 0);
      await sb.rpc('adjust_edit_votes', {
        p_edit_id: editId,
        p_up_delta: upDelta,
        p_down_delta: downDelta,
      });
    }
  } catch (err) {
    console.warn('Edit vote persist error:', err);
  }
}

// ===== EDIT LIGHTBOX (simple alert-style for edited images) =====
function openEditLightbox(edit) {
  // Reuse the main lightbox for preview
  const parentLogo = LOGOS.find(l => l.id === edit.parentId);
  document.getElementById('lightbox-img').src = edit.imageDataUrl;
  document.getElementById('lightbox-img').alt = `AI edit`;
  document.getElementById('lightbox-num').textContent = `✦ AI Edit`;
  document.getElementById('lightbox-title').textContent = parentLogo ? parentLogo.label : `Logo #${edit.parentId}`;
  document.getElementById('lb-up-count').textContent = edit.up;
  document.getElementById('lb-down-count').textContent = edit.down;
  document.getElementById('lb-score').textContent = (edit.up - edit.down > 0 ? '+' : '') + (edit.up - edit.down);
  document.getElementById('lb-prev').disabled = true;
  document.getElementById('lb-next').disabled = true;
  document.getElementById('lightbox').hidden = false;
  document.getElementById('lightbox-backdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
  lightboxId = null; // signal it's an edit lightbox
}

// ===== EDIT MODAL =====
let editModalLogoId = null;
let editModalImageUrl = null;

function openEditModal(logoId, imageUrl) {
  editModalLogoId = logoId;
  editModalImageUrl = imageUrl;

  const logo = LOGOS.find(l => l.id === logoId);
  document.getElementById('edit-modal-preview').src = imageUrl;
  document.getElementById('edit-modal-preview').alt = logo ? logo.label : '';
  document.getElementById('edit-modal-logo-name').textContent = logo ? `#${logo.id} — ${logo.label}` : '';
  document.getElementById('edit-prompt-input').value = '';
  document.getElementById('edit-status').hidden = true;
  document.getElementById('edit-status').textContent = '';
  document.getElementById('edit-generate-btn').disabled = false;

  document.getElementById('edit-modal').hidden = false;
  document.getElementById('edit-modal-backdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('edit-prompt-input').focus();
}

function closeEditModal() {
  document.getElementById('edit-modal').hidden = true;
  document.getElementById('edit-modal-backdrop').classList.remove('open');
  document.body.style.overflow = '';
  editModalLogoId = null;
  editModalImageUrl = null;
}

async function submitEdit() {
  const prompt = document.getElementById('edit-prompt-input').value.trim();
  if (!prompt) {
    document.getElementById('edit-prompt-input').focus();
    return;
  }

  const btn = document.getElementById('edit-generate-btn');
  const statusEl = document.getElementById('edit-status');
  btn.disabled = true;
  statusEl.hidden = false;
  statusEl.className = 'edit-status';
  statusEl.innerHTML = '<span class="spinner"></span> Queuing edit…';

  try {
    const res = await fetch(VERCEL_EDIT_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        parentLogoId: editModalLogoId,
        sessionId: SESSION_ID,
        prompt,
        imageUrl: editModalImageUrl,
      }),
    });

    statusEl.innerHTML = '<span class="spinner"></span> Generating with nano banana pro… (may take ~30s)';

    const data = await res.json();
    if (!res.ok || data.error) throw new Error(data.error || 'Generation failed');

    const jobId = data.jobId;

    if (data.status === 'done') {
      // API returned synchronously — fetch the full row from Supabase and render
      closeEditModal();
      const { data: row } = await sb
        .from('castle_edits')
        .select('id, parent_logo_id, prompt, image_data_url, up_votes, down_votes, status')
        .eq('id', jobId)
        .single();
      if (row && row.image_data_url) {
        editCards[row.id] = {
          id: row.id,
          parentId: row.parent_logo_id,
          prompt: row.prompt,
          imageDataUrl: row.image_data_url,
          up: row.up_votes || 0,
          down: row.down_votes || 0,
          userVote: null,
          status: 'done',
        };
        renderEditCards();
      }
    } else {
      // Fallback: add pending card and poll (shouldn't normally happen)
      addPendingEditCard(jobId, editModalLogoId, prompt);
      closeEditModal();
      pollEditJob(jobId);
    }

  } catch (err) {
    statusEl.className = 'edit-status error';
    statusEl.innerHTML = `✕ ${err.message}`;
    btn.disabled = false;
  }
}

function addPendingEditCard(jobId, logoId, prompt) {
  const grid = document.getElementById('logo-grid');
  const card = document.createElement('article');
  card.className = 'logo-card pending-edit';
  card.id = `pending-card-${jobId}`;
  card.setAttribute('role', 'listitem');
  card.style.position = 'relative';

  const parentLogo = LOGOS.find(l => l.id === logoId);
  const parentLabel = parentLogo ? parentLogo.label : `Logo #${logoId}`;
  const parentImgUrl = parentLogo
    ? `https://raw.githubusercontent.com/opencolin/365-castle-logos/master/logos/${parentLogo.file}`
    : '';

  card.innerHTML = `
    <span class="ai-badge">✦ Generating…</span>
    <div class="logo-img-wrap">
      <img class="logo-img" src="${parentImgUrl}" alt="Generating…" style="opacity:0.3" />
    </div>
    <div class="logo-body">
      <p class="logo-label">${parentLabel}</p>
      <p class="edit-prompt-tag">"${prompt}"</p>
      <div style="display:flex;align-items:center;gap:0.4rem;margin-top:0.5rem;font-size:var(--text-xs);color:var(--color-text-muted)">
        <span class="spinner"></span> nano banana pro is cooking…
      </div>
    </div>
  `;

  // Insert right after parent card
  const parentCard = document.getElementById(`card-${logoId}`);
  if (parentCard && parentCard.nextSibling) {
    grid.insertBefore(card, parentCard.nextSibling);
  } else {
    grid.prepend(card);
  }
}

function pollEditJob(jobId) {
  let attempts = 0;
  const maxAttempts = 60; // 3 min max

  const intervalId = setInterval(async () => {
    attempts++;
    if (attempts > maxAttempts) {
      clearInterval(intervalId);
      removePendingCard(jobId);
      return;
    }

    try {
      const { data, error } = await sb
        .from('castle_edits')
        .select('id, parent_logo_id, prompt, image_data_url, up_votes, down_votes, status, error_msg')
        .eq('id', jobId)
        .single();

      if (error) throw error;

      if (data.status === 'done' && data.image_data_url) {
        clearInterval(intervalId);
        removePendingCard(jobId);

        // Add to editCards and render
        editCards[data.id] = {
          id: data.id,
          parentId: data.parent_logo_id,
          prompt: data.prompt,
          imageDataUrl: data.image_data_url,
          up: data.up_votes || 0,
          down: data.down_votes || 0,
          userVote: null,
          status: 'done',
        };
        renderEditCards();

      } else if (data.status === 'error') {
        clearInterval(intervalId);
        removePendingCard(jobId, data.error_msg);
      }
    } catch (err) {
      console.warn('Poll error:', err);
    }
  }, 3000);

  editPolls[jobId] = intervalId;
}

function removePendingCard(jobId, errorMsg) {
  const card = document.getElementById(`pending-card-${jobId}`);
  if (!card) return;
  if (errorMsg) {
    card.querySelector('.logo-body').innerHTML += `<p style="color:var(--color-down);font-size:var(--text-xs);margin-top:0.4rem">✕ ${errorMsg}</p>`;
    card.classList.remove('pending-edit');
    setTimeout(() => card.remove(), 5000);
  } else {
    card.remove();
  }
}

// ===== EDIT MODAL EVENT LISTENERS =====
document.getElementById('edit-modal-close').addEventListener('click', closeEditModal);
document.getElementById('edit-modal-backdrop').addEventListener('click', closeEditModal);
document.getElementById('edit-generate-btn').addEventListener('click', submitEdit);
document.getElementById('edit-prompt-input').addEventListener('keydown', e => {
  if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) submitEdit();
});

// Quick prompt buttons — edit modal
document.querySelectorAll('#edit-modal .edit-quick-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('edit-prompt-input').value = btn.dataset.prompt;
    document.getElementById('edit-prompt-input').focus();
  });
});

// Close edit modal on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !document.getElementById('edit-modal').hidden) closeEditModal();
  if (e.key === 'Escape' && !document.getElementById('create-modal').hidden) closeCreateModal();
});

// ===== CREATE NEW FEATURE =====
const VERCEL_CREATE_API = '/api/create';

function openCreateModal() {
  const DEFAULT_PROMPT = 'Flat single-color castle logo for SANDBOX EVERYTHING, neon cyan on white background, clean vector silhouette style, no gradients';
  document.getElementById('create-prompt-input').value = DEFAULT_PROMPT;
  document.getElementById('create-status').hidden = true;
  document.getElementById('create-generate-btn').disabled = false;
  document.getElementById('create-modal').hidden = false;
  document.getElementById('create-modal-backdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
  const ta = document.getElementById('create-prompt-input');
  ta.focus();
  ta.select();
}

function closeCreateModal() {
  document.getElementById('create-modal').hidden = true;
  document.getElementById('create-modal-backdrop').classList.remove('open');
  document.body.style.overflow = '';
}

async function submitCreate() {
  const prompt = document.getElementById('create-prompt-input').value.trim();
  if (!prompt) {
    document.getElementById('create-prompt-input').focus();
    return;
  }

  const btn = document.getElementById('create-generate-btn');
  const statusEl = document.getElementById('create-status');
  btn.disabled = true;
  statusEl.hidden = false;
  statusEl.className = 'edit-status';
  statusEl.innerHTML = '<span class="spinner"></span> Generating with nano banana pro… (may take ~30s)';

  try {
    const res = await fetch(VERCEL_CREATE_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId: SESSION_ID, prompt }),
    });

    const data = await res.json();
    if (!res.ok || data.error) throw new Error(data.error || 'Generation failed');

    const jobId = data.jobId;

    // Fetch the full row from Supabase and render as a standalone created card
    const { data: row } = await sb
      .from('castle_edits')
      .select('id, parent_logo_id, prompt, image_data_url, up_votes, down_votes, status')
      .eq('id', jobId)
      .single();

    closeCreateModal();

    if (row && row.image_data_url) {
      editCards[row.id] = {
        id: row.id,
        parentId: row.parent_logo_id || null,
        prompt: row.prompt,
        imageDataUrl: row.image_data_url,
        up: row.up_votes || 0,
        down: row.down_votes || 0,
        userVote: null,
        status: 'done',
        isCreated: true,
      };
      renderCreatedCard(editCards[row.id]);
    }
  } catch (err) {
    statusEl.className = 'edit-status error';
    statusEl.innerHTML = `✕ ${err.message}`;
    btn.disabled = false;
  }
}

function renderCreatedCard(edit) {
  // Created cards go at the very top of the grid
  const existingCard = document.getElementById(`edit-card-${edit.id}`);
  if (existingCard) return;

  const card = createEditCard(edit);
  // Override the AI badge text for created cards
  const badge = card.querySelector('.ai-badge');
  if (badge) badge.textContent = '✦ Created';

  const grid = document.getElementById('logo-grid');
  grid.prepend(card);
}

// Quick prompt buttons — create modal
document.querySelectorAll('#create-modal .edit-quick-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('create-prompt-input').value = btn.dataset.createPrompt;
    document.getElementById('create-prompt-input').focus();
  });
});

document.getElementById('create-new-btn').addEventListener('click', openCreateModal);
document.getElementById('create-modal-close').addEventListener('click', closeCreateModal);
document.getElementById('create-modal-backdrop').addEventListener('click', closeCreateModal);
document.getElementById('create-generate-btn').addEventListener('click', submitCreate);
document.getElementById('create-prompt-input').addEventListener('keydown', e => {
  if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) submitCreate();
});

// Also load created-type edits (parent_logo_id IS NULL) on init
async function loadCreatedFromSupabase() {
  try {
    const { data } = await sb
      .from('castle_edits')
      .select('id, parent_logo_id, prompt, image_data_url, up_votes, down_votes, status')
      .eq('status', 'done')
      .is('parent_logo_id', null)
      .order('created_at', { ascending: false });

    (data || []).forEach(e => {
      if (!e.image_data_url) return;
      editCards[e.id] = {
        id: e.id,
        parentId: null,
        prompt: e.prompt,
        imageDataUrl: e.image_data_url,
        up: e.up_votes || 0,
        down: e.down_votes || 0,
        userVote: null,
        status: 'done',
        isCreated: true,
      };
    });

    // Render after LOGOS grid is populated
    if (Object.values(editCards).some(e => e.isCreated)) {
      Object.values(editCards).filter(e => e.isCreated).forEach(renderCreatedCard);
    }
  } catch (err) {
    console.warn('Failed to load created logos:', err);
  }
}

// ===== LOAD EDITS ON INIT =====
loadEditsFromSupabase();
loadCreatedFromSupabase();
