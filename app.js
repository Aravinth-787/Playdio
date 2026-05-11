/* ═══════════════════════════════════════════
   PLAYDIO – app.js
   ═══════════════════════════════════════════ */

// ── SONG DATA ──────────────────────────────────────────────────────────────
const SONGS = [
  {
    id: 0,
    title: "Aye Mr. Minor",
    artist: "A.R. Rahman Qobuz Web Player",
    album: "Kaaviyathalaivan",
    genre: "tamil",
    image: "images/Vikram.webp",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778315861/Aye_Mr._Minor_From_Kaaviyathalaivan_-_A.R._Rahman_-_Qobuz_Web_Player_jdykvm.flac"
  },
  {
    id: 1,
    title: "Kottai Aanda Arasan",
    artist: "Anirudh / Yuvan",
    album: "Maragatha Naanayam",
    genre: "tamil",
    image: "images/sivakarthikeyan.webp",
    color: "#6600cc",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778315766/44_Kottai_Aanda_Arasan_From_-Maragatha_Naanayam-_lmbs9o.flac"
  },
  {
    id: 2,
    title: "Tasakku Tasakku",
    artist: "Anirudh / Yuvan",
    album: "Vikram Vedha",
    genre: "tamil",
    image: "images/Vijay sethupathi.webp",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778315765/7_Tasakku_Tasakku_From_-Vikram_Vedha-_hejqyb.flac"
  },
  {
    id: 3,
    title: "Vaadi Ne Va",
    artist: "Anirudh / Yuvan",
    album: "Meesaya Murukku",
    genre: "tamil",
    image: "images/Vikram.webp",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778315738/41_Vaadi_Ne_Va_From_-Meesaya_Murukku-_x96pgn.flac"
  },
  {
    id: 4,
    title: "Kadhalikathey",
    artist: "Anirudh / Yuvan",
    album: "Imaikkaa Nodigal",
    genre: "tamil",
    image: "images/Vijay sethupathi.webp",
    color: "#6600cc",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778315731/5_Kadhalikathey_From_-Imaikkaa_Nodigal-_tvyvdk.flac"
  },
  {
    id: 5,
    title: "Sakkarakatti",
    artist: "Anirudh / Yuvan",
    album: "Meesaya Murukku",
    genre: "tamil",
    image: "images/sivakarthikeyan.webp",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778315718/9_Sakkarakatti_From_-Meesaya_Murukku-_ewggy1.flac"
  },
  {
    id: 6,
    title: "Yavvana",
    artist: "Anirudh / Yuvan",
    album: "Sathya",
    genre: "tamil",
    image: "images/sivakarthikeyan.webp",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778315715/14_Yavvana_From_-Sathya-_vsopgh.flac"
  },
  {
    id: 7,
    title: "Kaadhal Veesi",
    artist: "Anirudh / Yuvan",
    album: "Indrajith",
    genre: "tamil",
    image: "images/Ajith.webp",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778315695/39_Kaadhal_Veesi_From_-Indrajith-_wczxil.flac"
  },
  {
    id: 8,
    title: "Sketch Theme",
    artist: "Anirudh / Yuvan",
    album: "Sketch",
    genre: "tamil",
    image: "images/Vikram.webp",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778315694/34_Sketch_Theme_From_-Sketch-_ncocch.flac"
  },
  {
    id: 9,
    title: "Sollathan Nenaikirane",
    artist: "Anirudh / Yuvan",
    album: "Richie",
    genre: "tamil",
    image: "images/Surya.webp",
    color: "#ff0055",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778315676/18_Sollathan_Nenaikirane_From_-Richie-_ajawb8.flac"
  },
  {
    id: 10,
    title: "Vaddi",
    artist: "Anirudh / Yuvan",
    album: "Burma",
    genre: "tamil",
    image: "images/Surya.webp",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778315489/46_Vaddi_From_-Burma-_w6x4cl.flac"
  },
  {
    id: 11,
    title: "Aaruyire",
    artist: "A.R. Rahman Qobuz Web Player",
    album: "Guru",
    genre: "tamil",
    image: "images/Surya.webp",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778315487/Aaruyire_From_Guru_-_A.R._Rahman_-_Qobuz_Web_Player_m7aifi.flac"
  },
  {
    id: 12,
    title: "Neethanae",
    artist: "A.R. Rahman Qobuz Web Player",
    album: "Mersal",
    genre: "tamil",
    image: "images/vijay.webp",
    color: "#ff0055",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778315487/Neethanae_From_Mersal_-_A.R._Rahman_-_Qobuz_Web_Player_cn7rvw.flac"
  },
  {
    id: 13,
    title: "Address Song",
    artist: "Anirudh / Yuvan",
    album: "Meyaadha Maan",
    genre: "tamil",
    image: "images/sivakarthikeyan.webp",
    color: "#7700dd",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778315469/45_Address_Song_From_-Meyaadha_Maan-_rixv2v.flac"
  },
  {
    id: 14,
    title: "Pom Pom Penne",
    artist: "Yuvanshankar Raja",
    album: "Biriyani",
    genre: "tamil",
    image: "images/Ajith.webp",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778315464/Pom_Pom_Penne_From_Biriyani_-_Yuvanshankar_Raja_y60c0k.flac"
  },
  {
    id: 15,
    title: "Idhayam",
    artist: "Yuvanshankar Raja",
    album: "Billa 2",
    genre: "tamil",
    image: "images/Vikram.webp",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778315414/Idhayam_From_Billa_2_-_Yuvanshankar_Raja_iteoxp.flac"
  },
  {
    id: 16,
    title: "Oru Devathai",
    artist: "Yuvanshankar Raja",
    album: "Vaamanan",
    genre: "tamil",
    image: "images/Vijay sethupathi.webp",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778315389/Oru_Devathai_From_Vaamanan_-_Yuvanshankar_Raja_x8ns9w.flac"
  },
  {
    id: 17,
    title: "Mental Manadhil",
    artist: "A.R. Rahman Qobuz Web Player",
    album: "O Kadhal Kanmani",
    genre: "tamil",
    image: "images/sivakarthikeyan.webp",
    color: "#ff0055",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778315347/Mental_Manadhil_From_O_Kadhal_Kanmani_-_A.R._Rahman_-_Qobuz_Web_Player_c8pp9n.flac"
  },
  {
    id: 18,
    title: "Azhagho Azhaghu",
    artist: "Yuvanshankar Raja",
    album: "Samar",
    genre: "tamil",
    image: "images/Surya.webp",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778315327/Azhagho_Azhaghu_From_Samar_-_Yuvanshankar_Raja_dfc65l.flac"
  },
  {
    id: 19,
    title: "VIKRAM Title Track Lyric Kamal Haasan Vijay Sethupathi Lokesh Kanagaraj Anirudh MP3 160K",
    artist: "Anirudh / Yuvan",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Vijay sethupathi.webp",
    color: "#6600cc",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778315326/VIKRAM_Title_Track_Lyric___Kamal_Haasan___Vijay_Sethupathi___Lokesh_Kanagaraj___Anirudh_MP3_160K_e3gau5.mp3"
  },
  {
    id: 20,
    title: "Yathe Yathe Video Song HD 4K Aadukalam Movie Songs 4K 4KTAMIL MP3 320K",
    artist: "Anirudh / Yuvan",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Dhanush.webp",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778315326/Yathe_Yathe_Video_Song_HD_4K___Aadukalam_Movie_Songs_4K___4KTAMIL_MP3_320K_iroti0.mp3"
  },
  {
    id: 21,
    title: "Nee Kavithaigala",
    artist: "Anirudh / Yuvan",
    album: "Maragatha Naanayam",
    genre: "tamil",
    image: "images/Surya.webp",
    color: "#7700dd",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778315289/17_Nee_Kavithaigala_From_-Maragatha_Naanayam-_ldbacq.flac"
  },
  {
    id: 22,
    title: "Vivegam",
    artist: "Kadhalaada Official Song Video Ajith Kumar Anirudh MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Ajith.webp",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778315268/Vivegam_-_Kadhalaada_Official_Song_Video___Ajith_Kumar___Anirudh_MP3_160K_vp26sv.mp3"
  },
  {
    id: 23,
    title: "VIKRAM",
    artist: "Porkanda Singam Lyric Kamal Haasan Vijay Sethupathi Lokesh Kanagaraj Anirudh MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Vijay sethupathi.webp",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778315253/VIKRAM_-_Porkanda_Singam_Lyric___Kamal_Haasan___Vijay_Sethupathi___Lokesh_Kanagaraj___Anirudh_MP3_160K_c4c38s.mp3"
  },
  {
    id: 24,
    title: "Vidaamuyarchi",
    artist: "Pathikichu Ajith Kumar Anirudh Ravichander MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Ajith.webp",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314918/Vidaamuyarchi_-_Pathikichu___Ajith_Kumar___Anirudh_Ravichander_MP3_160K_wkvvn5.mp3"
  },
  {
    id: 25,
    title: "Vedalam",
    artist: "Veera Vinayaka Video Ajith Kumar Anirudh Ravichander Lakshmi Menon MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Ajith.webp",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314906/Vedalam_-_Veera_Vinayaka_Video___Ajith_Kumar___Anirudh_Ravichander___Lakshmi_Menon_MP3_160K_k3h4up.mp3"
  },
  {
    id: 26,
    title: "Vedalam",
    artist: "Aaluma Doluma",
    album: "Extended Mix Video Ajith Kumar Anirudh Badshah MP3 160K",
    genre: "tamil",
    image: "images/Ajith.webp",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314887/Vedalam_-_Aaluma_Doluma_-_Extended_Mix_Video___Ajith_Kumar__Anirudh___Badshah_MP3_160K_s6efgv.mp3"
  },
  {
    id: 27,
    title: "Vanakkam Chennai",
    artist: "Osaka Osaka Video Song Shiva Priya Anand Anirudh Ravichander MP3 160K 1",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Vikram.webp",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314859/Vanakkam_Chennai_-_Osaka_Osaka_Video_Song___Shiva__Priya_Anand___Anirudh_Ravichander_MP3_160K__1_ac4svt.mp3"
  },
  {
    id: 28,
    title: "Vanakkam Chennai",
    artist: "Oh Penne Video Shiva Priya Anand MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Ajith.webp",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314832/Vanakkam_Chennai_-_Oh_Penne_Video___Shiva__Priya_Anand_MP3_160K_yet5kz.mp3"
  },
  {
    id: 29,
    title: "Vanakkam Chennai",
    artist: "Hey Video Shiva Priya Anand MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Ajith.webp",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314815/Vanakkam_Chennai_-_Hey_Video___Shiva__Priya_Anand_MP3_160K_whl29l.mp3"
  },
  {
    id: 30,
    title: "Uyire Un Uyirena Video Song Zero Ashwin Sshivada Anirudh Nivas K Prasanna Kabilan MP3 320K",
    artist: "Anirudh / Yuvan",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Surya.webp",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314790/Uyire_Un_Uyirena_Video_Song___Zero___Ashwin___Sshivada___Anirudh___Nivas_K_Prasanna___Kabilan_MP3_320K_mtwhtb.mp3"
  },
  {
    id: 31,
    title: "Sawadeeka Video Vidaamuyarchi Ajith Kumar Trisha Magizh Thirumeni Anirudh Subaskaran MP3 160K",
    artist: "Anirudh / Yuvan",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Ajith.webp",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314732/Sawadeeka_Video___Vidaamuyarchi___Ajith_Kumar___Trisha___Magizh_Thirumeni___Anirudh___Subaskaran_MP3_160K_ccwyqz.mp3"
  },
  {
    id: 32,
    title: "Vaathi Raid MassTamilan.io",
    artist: "Anirudh / Yuvan",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Ajith.webp",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314731/Vaathi-Raid-MassTamilan.io_su6ryq.mp3"
  },
  {
    id: 33,
    title: "Vaathi Kabaddi MassTamilan.io",
    artist: "Anirudh / Yuvan",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Vijay sethupathi.webp",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314723/Vaathi-Kabaddi-MassTamilan.io_vsdpjr.mp3"
  },
  {
    id: 34,
    title: "Theeratha Vilayattu Pillai",
    artist: "En Jannal Vandha Video Yuvanshankar Raja Vishal MP3 320K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/sivakarthikeyan.webp",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314713/Theeratha_Vilayattu_Pillai_-_En_Jannal_Vandha_Video___Yuvanshankar_Raja___Vishal_MP3_320K_nei1k6.mp3"
  },
  {
    id: 35,
    title: "Thangamagan",
    artist: "Tak Bak Video Anirudh Ravichander Dhanush MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Dhanush.webp",
    color: "#ff0055",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314713/Thangamagan_-_Tak_Bak_Video___Anirudh_Ravichander___Dhanush_MP3_160K_uoafgm.mp3"
  },
  {
    id: 36,
    title: "Thaanaa Serndha Koottam",
    artist: "Sodakku Tamil Video Suriya Anirudh l Keerthi Suresh MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Surya.webp",
    color: "#6600cc",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314708/Thaanaa_Serndha_Koottam_-_Sodakku_Tamil_Video___Suriya___Anirudh_l_Keerthi_Suresh_MP3_160K_wbfdrl.mp3"
  },
  {
    id: 37,
    title: "Ullaallaa Official Video Tamil Petta Video Songs Rajinikanth Anirudh Ravichander MP3 160K",
    artist: "Anirudh / Yuvan",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Surya.webp",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314705/Ullaallaa_Official_Video_Tamil___Petta_Video_Songs___Rajinikanth___Anirudh_Ravichander_MP3_160K_vjj2am.mp3"
  },
  {
    id: 38,
    title: "Two Two Two",
    artist: "Video Song Kaathuvaakula Rendu Kaadhal Vijay Sethupathi Anirudh Vignesh Shivan MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Vijay sethupathi.webp",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314692/Two_Two_Two_-_Video_Song___Kaathuvaakula_Rendu_Kaadhal___Vijay_Sethupathi___Anirudh___Vignesh_Shivan_MP3_160K_oa3hka.mp3"
  },
  {
    id: 39,
    title: "Thangamagan",
    artist: "Oh Oh Song Video Anirudh Ravichander Dhanush Amy Jackson Samantha MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Dhanush.webp",
    color: "#6600cc",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314683/Thangamagan_-_Oh_Oh_Song_Video___Anirudh_Ravichander___Dhanush___Amy_Jackson__Samantha_MP3_160K_evugsj.mp3"
  },
  {
    id: 40,
    title: "Thangamagan",
    artist: "Jodi Nilave Video Song Anirudh Ravichander Dhanush Samantha MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Dhanush.webp",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314677/Thangamagan_-_Jodi_Nilave_Video_Song___Anirudh_Ravichander___Dhanush__Samantha_MP3_160K_ijdduv.mp3"
  },
  {
    id: 41,
    title: "Shoot The Kuruvi Video Song Jil Jung Juk Siddharth Vishal Chandrashekhar Anirudh MP3 160K",
    artist: "Anirudh / Yuvan",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/vijay.webp",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314675/Shoot_The_Kuruvi_Video_Song___Jil_Jung_Juk___Siddharth___Vishal_Chandrashekhar___Anirudh_MP3_160K_fig47p.mp3"
  },
  {
    id: 42,
    title: "Thangamagan",
    artist: "Jodi Nilave Video Song Anirudh Ravichander Dhanush Samantha MP3 160K 1",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Dhanush.webp",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314674/Thangamagan_-_Jodi_Nilave_Video_Song___Anirudh_Ravichander___Dhanush__Samantha_MP3_160K__1_locvbe.mp3"
  },
  {
    id: 43,
    title: "Thangamagan",
    artist: "Enna Solla Video Anirudh Ravichander Dhanush MP3 160K 1",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Dhanush.webp",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314669/Thangamagan_-_Enna_Solla_Video___Anirudh_Ravichander___Dhanush_MP3_160K__1_rz9yfx.mp3"
  },
  {
    id: 44,
    title: "Thangamagan",
    artist: "Enna Solla Video Anirudh Ravichander Dhanush MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Dhanush.webp",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314668/Thangamagan_-_Enna_Solla_Video___Anirudh_Ravichander___Dhanush_MP3_160K_jjnzko.mp3"
  },
  {
    id: 45,
    title: "Thala Forever",
    artist: "Whistle For Dhoni MS DHONI Mashup Anirudh Ravichander Dhoni Anthem MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Ajith.webp",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314662/Thala_Forever_-_Whistle_For_Dhoni___MS_DHONI_Mashup___Anirudh_Ravichander___Dhoni_Anthem_MP3_160K_geizn8.mp3"
  },
  {
    id: 46,
    title: "Shield Fight Theme Kamal Haasan ANIRUDH RAVICHANDER Lokesh Kanagaraj MP3 160K",
    artist: "Anirudh / Yuvan",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/vijay.webp",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314653/Shield_Fight_Theme___Kamal_Haasan___ANIRUDH_RAVICHANDER___Lokesh_Kanagaraj_MP3_160K_brb0wx.mp3"
  },
  {
    id: 47,
    title: "Rum",
    artist: "Kadavulae Vidai Tamil Video Anirudh Ravichander Miya George MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/sivakarthikeyan.webp",
    color: "#ff0055",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314649/Rum_-_Kadavulae_Vidai_Tamil_Video___Anirudh_Ravichander___Miya_George_MP3_160K_eae0k3.mp3"
  },
  {
    id: 48,
    title: "Sindhubaadh BGM No 1 Escape",
    artist: "Anirudh / Yuvan",
    album: "Villain Xtreme High Quality. Vijay Sethupathi Yuvan Shankar Raja MP3 320K",
    genre: "tamil",
    image: "images/Vijay sethupathi.webp",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314642/Sindhubaadh_BGM_No_1_Escape_from_Villain_Xtreme_High_Quality._Vijay_Sethupathi_Yuvan_Shankar_Raja_MP3_320K_jl4rb7.mp3"
  },
  {
    id: 49,
    title: "Ribin Richard X Nihal Sadiq",
    artist: "Chekuthan Kaalame Poyidam MP3 320K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Ajith.webp",
    color: "#ff0055",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314639/Ribin_Richard_X_Nihal_Sadiq_-_Chekuthan___Kaalame_Poyidam_MP3_320K_errm1m.mp3"
  },
  {
    id: 50,
    title: "Scooter Vandi",
    artist: "OG Dass Feat Kash Villanz MP3 320K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Vijay sethupathi.webp",
    color: "#7700dd",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314639/Scooter_Vandi_-_OG_Dass_Feat_Kash_Villanz_MP3_320K_vdmcrz.mp3"
  },
  {
    id: 51,
    title: "Remo",
    artist: "Tamilselvi Video Song Sivakarthikeyan Anirudh Keerthi Suresh MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/sivakarthikeyan.webp",
    color: "#ff0055",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314639/Remo_-_Tamilselvi_Video_Song___Sivakarthikeyan___Anirudh___Keerthi_Suresh_MP3_160K_sucy1z.mp3"
  },
  {
    id: 52,
    title: "Rum",
    artist: "Alladhe Siragiye Official Tamil Song Video Anirudh MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Vikram.webp",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314617/Rum_-_Alladhe_Siragiye_Official_Tamil_Song_Video___Anirudh_MP3_160K_ptm8og.mp3"
  },
  {
    id: 53,
    title: "Rum",
    artist: "Kadavulae Vidai Tamil Video Anirudh Ravichander Miya George MP3 160K 1",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Ajith.webp",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314613/Rum_-_Kadavulae_Vidai_Tamil_Video___Anirudh_Ravichander___Miya_George_MP3_160K__1_ac3scu.mp3"
  },
  {
    id: 54,
    title: "Remo",
    artist: "Sirikkadhey Music Video Anirudh Ravichander Sivakarthikeyan Keerthi Suresh MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/sivakarthikeyan.webp",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314600/Remo_-_Sirikkadhey_Music_Video___Anirudh_Ravichander___Sivakarthikeyan__Keerthi_Suresh_MP3_160K_b0ywds.mp3"
  },
  {
    id: 55,
    title: "Remo",
    artist: "Meesa Beauty Video Song Sivakarthikeyan Anirudh Ravichander Keerthi Suresh MP3 160K 1",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/sivakarthikeyan.webp",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314582/Remo_-_Meesa_Beauty_Video_Song___Sivakarthikeyan___Anirudh_Ravichander___Keerthi_Suresh_MP3_160K__1_octfev.mp3"
  },
  {
    id: 56,
    title: "Remo",
    artist: "Sirikkadhey Video Song Sivakarthikeyan Anirudh Ravichander Keerthi Suresh MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/sivakarthikeyan.webp",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314579/Remo_-_Sirikkadhey_Video_Song___Sivakarthikeyan___Anirudh_Ravichander__Keerthi_Suresh_MP3_160K_kscqjp.mp3"
  },
  {
    id: 57,
    title: "Quit Pannuda MassTamilan.io",
    artist: "Anirudh / Yuvan",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Vikram.webp",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314546/Quit-Pannuda-MassTamilan.io_iobwom.mp3"
  },
  {
    id: 58,
    title: "Naan Kudikka Poren",
    artist: "Ratty Adhiththan feat. SahiSiva Official Music Video Tamil Rap MP3 320K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/vijay.webp",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314541/Naan_Kudikka_Poren_-_Ratty_Adhiththan_feat.__SahiSiva___Official_Music_Video___Tamil_Rap_MP3_320K_hsmqew.mp3"
  },
  {
    id: 59,
    title: "Remo",
    artist: "Meesa Beauty Video Song Sivakarthikeyan Anirudh Ravichander Keerthi Suresh MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/sivakarthikeyan.webp",
    color: "#ff0055",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314541/Remo_-_Meesa_Beauty_Video_Song___Sivakarthikeyan___Anirudh_Ravichander___Keerthi_Suresh_MP3_160K_onlz71.mp3"
  },
  {
    id: 60,
    title: "Polakatum Para Para MassTamilan.io",
    artist: "Anirudh / Yuvan",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/sivakarthikeyan.webp",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314526/Polakatum-Para-Para-MassTamilan.io_fmuu3k.mp3"
  },
  {
    id: 61,
    title: "Remo",
    artist: "Daavuya Tamil Video Sivakarthikeyan Anirudh Ravichander MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/sivakarthikeyan.webp",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314526/Remo_-_Daavuya_Tamil_Video___Sivakarthikeyan___Anirudh_Ravichander_MP3_160K_s6trfu.mp3"
  },
  {
    id: 62,
    title: "Pouraadalaam Full Video Song M.S.Dhoni Tamil Sushant Singh Rajput Kiara Advani MP3 160K",
    artist: "Anirudh / Yuvan",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Vikram.webp",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314508/Pouraadalaam_Full_Video_Song___M.S.Dhoni-Tamil___Sushant_Singh_Rajput__Kiara_Advani_MP3_160K_ux5c6g.mp3"
  },
  {
    id: 63,
    title: "Pathala Pathala Video VIKRAM Kamal Haasan Anirudh Ravichander Lokesh Kanagaraj MP3 160K",
    artist: "Anirudh / Yuvan",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/vijay.webp",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314503/Pathala_Pathala_Video___VIKRAM___Kamal_Haasan___Anirudh_Ravichander___Lokesh_Kanagaraj_MP3_160K_b6u25o.mp3"
  },
  {
    id: 64,
    title: "Pona Pogattum MassTamilan.io",
    artist: "Anirudh / Yuvan",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Ajith.webp",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314496/Pona-Pogattum-MassTamilan.io_qkb5qi.mp3"
  },
  {
    id: 65,
    title: "Petta",
    artist: "Marana Mass Official Video Tamil Rajinikanth Anirudh Ravichander MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Ajith.webp",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314490/Petta_-_Marana_Mass_Official_Video_Tamil___Rajinikanth___Anirudh_Ravichander_MP3_160K_svy6ua.mp3"
  },
  {
    id: 66,
    title: "Minnale",
    artist: "Vaseegara Male Version MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Dhanush.webp",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314485/Minnale_-_Vaseegara_Male_Version_MP3_160K_bocnxs.mp3"
  },
  {
    id: 67,
    title: "Petta",
    artist: "Aaha Kalyanam Official Video",
    album: "Tamil Rajinikanth Trisha Anirudh Ravichander MP3 160K",
    genre: "tamil",
    image: "images/Dhanush.webp",
    color: "#7700dd",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314479/Petta_-_Aaha_Kalyanam_Official_Video_-_Tamil___Rajinikanth__Trisha___Anirudh_Ravichander_MP3_160K_n3mbvo.mp3"
  },
  {
    id: 68,
    title: "Oru Kutti Katha MassTamilan.io",
    artist: "Anirudh / Yuvan",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/sivakarthikeyan.webp",
    color: "#6600cc",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314468/Oru-Kutti-Katha-MassTamilan.io_yr3pnh.mp3"
  },
  {
    id: 69,
    title: "Narasimha Theme From Jailer MP3 160K",
    artist: "Anirudh / Yuvan",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Surya.webp",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314461/Narasimha_Theme_From__Jailer__MP3_160K_jescag.mp3"
  },
  {
    id: 70,
    title: "Open Kandam Star MP3 320K",
    artist: "Anirudh / Yuvan",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/sivakarthikeyan.webp",
    color: "#7700dd",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314440/Open_Kandam_Star_MP3_320K_f6qppb.mp3"
  },
  {
    id: 71,
    title: "Onnume Aagala",
    artist: "Lyric Video Anirudh Vignesh ShivN Maalavika MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/vijay.webp",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314429/Onnume_Aagala_-_Lyric_Video__Anirudh___Vignesh_ShivN___Maalavika_MP3_160K_nhocc1.mp3"
  },
  {
    id: 72,
    title: "Once Upon A Time Video VIKRAM Kamal Haasan Anirudh Ravichander Lokesh Kanagaraj MP3 160K",
    artist: "Anirudh / Yuvan",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/vijay.webp",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314423/Once_Upon_A_Time_Video___VIKRAM___Kamal_Haasan___Anirudh_Ravichander___Lokesh_Kanagaraj_MP3_160K_owfbm6.mp3"
  },
  {
    id: 73,
    title: "Naanum Rowdy Dhaan",
    artist: "Yennai Maatrum Kadhale Video Song Sid Sriram Anirudh Vignesh Shivan MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Vijay sethupathi.webp",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314376/Naanum_Rowdy_Dhaan_-_Yennai_Maatrum_Kadhale___Video_Song___Sid_Sriram__Anirudh___Vignesh_Shivan_MP3_160K_a99fng.mp3"
  },
  {
    id: 74,
    title: "Naanum Rowdy Dhaan",
    artist: "Thangamey Official Video Anirudh Vijay Sethupathi Vignesh Shivan MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Vijay sethupathi.webp",
    color: "#7700dd",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314346/Naanum_Rowdy_Dhaan_-_Thangamey___Official_Video___Anirudh___Vijay_Sethupathi___Vignesh_Shivan_MP3_160K_lm31in.mp3"
  },
  {
    id: 75,
    title: "Meyyana Inbam Official Video Song Easan MP3 320K",
    artist: "Anirudh / Yuvan",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/sivakarthikeyan.webp",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314317/Meyyana_Inbam_Official_Video_Song___Easan_MP3_320K_c0c2p8.mp3"
  },
  {
    id: 76,
    title: "Master the Blaster MassTamilan.io",
    artist: "Anirudh / Yuvan",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/vijay.webp",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314182/Master-the-Blaster-MassTamilan.io_c1xihi.mp3"
  },
  {
    id: 77,
    title: "Manasilaayo Video Vettaiyan Rajinikanth Anirudh Ravichander Manju Warrier T.J. Gnanavel MP3 160K",
    artist: "Anirudh / Yuvan",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/sivakarthikeyan.webp",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314164/Manasilaayo_Video___Vettaiyan___Rajinikanth___Anirudh_Ravichander___Manju_Warrier___T.J._Gnanavel_MP3_160K_wqplez.mp3"
  },
  {
    id: 78,
    title: "Maari",
    artist: "Thappa Dhaan Theriyum Video Dhanush Kajal Agarwal Anirudh MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Dhanush.webp",
    color: "#7700dd",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314135/Maari_-_Thappa_Dhaan_Theriyum_Video___Dhanush__Kajal_Agarwal___Anirudh_MP3_160K_roslie.mp3"
  },
  {
    id: 79,
    title: "Maari",
    artist: "Thappa Dhaan Theriyum Video Dhanush Kajal Agarwal Anirudh MP3 160K 1",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Dhanush.webp",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778314113/Maari_-_Thappa_Dhaan_Theriyum_Video___Dhanush__Kajal_Agarwal___Anirudh_MP3_160K__1_m9rdbb.mp3"
  },
  {
    id: 80,
    title: "Maari",
    artist: "Don u Don u Don u Video Dhanush Kajal Anirudh Super Hit Song MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Dhanush.webp",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312932/Maari_-_Don_u_Don_u_Don_u_Video___Dhanush__Kajal___Anirudh___Super_Hit_Song_MP3_160K_zf68sk.mp3"
  },
  {
    id: 81,
    title: "Maan Karate",
    artist: "Un Vizhigalil Video Anirudh Sivakarthikeyan MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/sivakarthikeyan.webp",
    color: "#ff0055",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312929/Maan_Karate_-_Un_Vizhigalil_Video___Anirudh___Sivakarthikeyan_MP3_160K_qqshrp.mp3"
  },
  {
    id: 82,
    title: "Maari",
    artist: "Oru Vidha Aasai Lyric Dhanush Kajal Agarwal Anirudh MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Dhanush.webp",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312919/Maari_-_Oru_Vidha_Aasai_Lyric___Dhanush__Kajal_Agarwal___Anirudh_MP3_160K_qwxwdw.mp3"
  },
  {
    id: 83,
    title: "Maan Karate",
    artist: "Un Vizhigalil Video Anirudh Sivakarthikeyan MP3 160K 1",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/sivakarthikeyan.webp",
    color: "#7700dd",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312918/Maan_Karate_-_Un_Vizhigalil_Video___Anirudh___Sivakarthikeyan_MP3_160K__1_h63kcj.mp3"
  },
  {
    id: 84,
    title: "Maari",
    artist: "Don u Don u Don u Video Dhanush Kajal Anirudh Super Hit Song MP3 160K 1",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Dhanush.webp",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312916/Maari_-_Don_u_Don_u_Don_u_Video___Dhanush__Kajal___Anirudh___Super_Hit_Song_MP3_160K__1_m4bt2f.mp3"
  },
  {
    id: 85,
    title: "Maan Karate",
    artist: "Un Vizhigalil Video Anirudh Sivakarthikeyan MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/sivakarthikeyan.webp",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312860/Maan_Karate_-_Un_Vizhigalil_Video___Anirudh___Sivakarthikeyan_MP3_160K_j5qhqg.mp3"
  },
  {
    id: 86,
    title: "Maan Karate",
    artist: "Royapuram Peter Video Anirudh Sivakarthikeyan MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/sivakarthikeyan.webp",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312855/Maan_Karate_-_Royapuram_Peter_Video___Anirudh___Sivakarthikeyan_MP3_160K_hwodt2.mp3"
  },
  {
    id: 87,
    title: "Maan Karate",
    artist: "Maanja Video Anirudh Sivakarthikeyan MP3 160K 1",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/sivakarthikeyan.webp",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312852/Maan_Karate_-_Maanja_Video___Anirudh___Sivakarthikeyan_MP3_160K__1_jpvsga.mp3"
  },
  {
    id: 88,
    title: "Maan Karate",
    artist: "Darling Dambakku Video Anirudh Sivakarthikeyan MP3 160K 1",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/sivakarthikeyan.webp",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312852/Maan_Karate_-_Darling_Dambakku_Video___Anirudh___Sivakarthikeyan_MP3_160K__1_yvdrhr.mp3"
  },
  {
    id: 89,
    title: "Lajjavathiye 4 Students HD Video Song HD Audio Bharath Gopika Jassie Gift MP3 320K",
    artist: "Anirudh / Yuvan",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Dhanush.webp",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312849/Lajjavathiye___4_Students_HD_Video_Song_HD_Audio___Bharath_Gopika___Jassie_Gift_MP3_320K_akocfg.mp3"
  },
  {
    id: 90,
    title: "LEO",
    artist: "Naa Ready Song Video Thalapathy Vijay Lokesh Kanagaraj Anirudh Ravichander MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/vijay.webp",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312848/LEO_-_Naa_Ready_Song_Video___Thalapathy_Vijay___Lokesh_Kanagaraj___Anirudh_Ravichander_MP3_160K_gppllp.mp3"
  },
  {
    id: 91,
    title: "Maan Karate",
    artist: "Maanja Video Anirudh Sivakarthikeyan MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/sivakarthikeyan.webp",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312848/Maan_Karate_-_Maanja_Video___Anirudh___Sivakarthikeyan_MP3_160K_ihb8tv.mp3"
  },
  {
    id: 92,
    title: "Love Insurance Kompany",
    artist: "Dheema Video Pradeep Ranganathan Anirudh Ravichander Vignesh Shivan MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Vikram.webp",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312840/Love_Insurance_Kompany_-_Dheema_Video___Pradeep_Ranganathan___Anirudh_Ravichander___Vignesh_Shivan_MP3_160K_we7wd9.mp3"
  },
  {
    id: 93,
    title: "Leo",
    artist: "Badass Video Thalapathy Vijay Anirudh Ravichander MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/vijay.webp",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312838/Leo_-_Badass_Video___Thalapathy_Vijay___Anirudh_Ravichander_MP3_160K_o0fybm.mp3"
  },
  {
    id: 94,
    title: "kokki another version",
    artist: "Anirudh / Yuvan",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Dhanush.webp",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312834/kokki_another_version_vrq7kl.mp4"
  },
  {
    id: 95,
    title: "LEO",
    artist: "Anbenum Video Thalapathy Vijay Lokesh Kanagaraj Anirudh Ravichander MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/vijay.webp",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312831/LEO_-_Anbenum_Video___Thalapathy_Vijay___Lokesh_Kanagaraj___Anirudh_Ravichander_MP3_160K_wjtev2.mp3"
  },
  {
    id: 96,
    title: "LEO",
    artist: "BADASS Rest In Peace Ringtone",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/vijay.webp",
    color: "#7700dd",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312828/LEO_-_BADASS_Rest_In_Peace_Ringtone_xhrmln.mp3"
  },
  {
    id: 97,
    title: "Kannodu Kanbathellam Instagram Trending Version Slowed Reverb Tamil Metal Cover Jailer Jeans MP3 160K",
    artist: "Anirudh / Yuvan",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Vijay sethupathi.webp",
    color: "#ff0055",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312828/Kannodu_Kanbathellam_Instagram_Trending_Version_Slowed_Reverb_Tamil_Metal_Cover_Jailer__Jeans_MP3_160K_gpczol.mp3"
  },
  {
    id: 98,
    title: "Kathanayagan",
    artist: "On Nenappu Lyric Vishnu Vishal Sean Roldan Anirudh MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/sivakarthikeyan.webp",
    color: "#6600cc",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312827/Kathanayagan_-_On_Nenappu_Lyric___Vishnu_Vishal___Sean_Roldan___Anirudh_MP3_160K_eajjds.mp3"
  },
  {
    id: 99,
    title: "Kutti Story MassTamilan.io",
    artist: "Anirudh / Yuvan",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Surya.webp",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312825/Kutti-Story-MassTamilan.io_v99ksl.mp3"
  },
  {
    id: 100,
    title: "King of Kotha",
    artist: "Kalapakkaara Lyric Video Dulquer Salmaan Abhilash Joshiy Jakes Bejoy MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Dhanush.webp",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312823/King_of_Kotha_-_Kalapakkaara_Lyric_Video___Dulquer_Salmaan___Abhilash_Joshiy___Jakes_Bejoy_MP3_160K_uwmxos.mp3"
  },
  {
    id: 101,
    title: "Kiliye Kiliye Guts Come Closer Dj Sekhar S Janaki Full Version MP3 160K",
    artist: "Anirudh / Yuvan",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/vijay.webp",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312819/Kiliye_Kiliye___Guts_Come_Closer___Dj_Sekhar___S_Janaki___Full_Version_MP3_160K_pwq7pm.mp3"
  },
  {
    id: 102,
    title: "Kadhal Kan Kattudhe",
    artist: "Kaaki Sattai Official Video Song Siva Karthikeyan Sri Divya Anirudh MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Ajith.webp",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312817/Kadhal_Kan_Kattudhe_-_Kaaki_Sattai___Official_Video_Song___Siva_Karthikeyan_Sri_Divya___Anirudh_MP3_160K_blm1ha.mp3"
  },
  {
    id: 103,
    title: "Kaathuvaakula Rendu Kaadhal",
    artist: "Rendu Kaadhal Music Video Vijay Sethupathi Anirudh Vignesh Shivan MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Vijay sethupathi.webp",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312814/Kaathuvaakula_Rendu_Kaadhal_-_Rendu_Kaadhal_Music_Video___Vijay_Sethupathi___Anirudh__Vignesh_Shivan_MP3_160K_t6vgjs.mp3"
  },
  {
    id: 104,
    title: "Kaathuvaakula Rendu Kaadhal",
    artist: "Two Two Two Music Video Vijay Sethupathi Anirudh Vignesh Shivan MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Vijay sethupathi.webp",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312813/Kaathuvaakula_Rendu_Kaadhal_-_Two_Two_Two_Music_Video___Vijay_Sethupathi___Anirudh___Vignesh_Shivan_MP3_160K_lf8bcs.mp3"
  },
  {
    id: 105,
    title: "Indian 2",
    artist: "Kadharalz Video Song Kamal Haasan Shankar Anirudh Subaskaran Lyca MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/vijay.webp",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312812/Indian_2_-_Kadharalz_Video_Song___Kamal_Haasan___Shankar___Anirudh___Subaskaran___Lyca_MP3_160K_c0syg0.mp3"
  },
  {
    id: 106,
    title: "Kaathuvaakula Rendu Kaadhal",
    artist: "Dippam Dappam Video Vijay Sethupathi Anirudh MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Vijay sethupathi.webp",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312812/Kaathuvaakula_Rendu_Kaadhal_-_Dippam_Dappam_Video___Vijay_Sethupathi__Anirudh_MP3_160K_vq3oyf.mp3"
  },
  {
    id: 107,
    title: "Jai Bhim",
    artist: "Thala Kodhum Lyric Suriya Sean Roldan Tha. Se. Gnanavel Pradeep Kumar MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Surya.webp",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312809/Jai_Bhim_-_Thala_Kodhum_Lyric___Suriya___Sean_Roldan___Tha._Se._Gnanavel___Pradeep_Kumar_MP3_160K_gotjrp.mp3"
  },
  {
    id: 108,
    title: "Journey MassTamilan.fm mixed",
    artist: "Anirudh / Yuvan",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Surya.webp",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312808/Journey-MassTamilan.fm_mixed_j73z8f.mp3"
  },
  {
    id: 109,
    title: "June Ponal July Katre Bgm Ringtone Download Link MP3 160K",
    artist: "Anirudh / Yuvan",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Vikram.webp",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312804/June_Ponal_July_Katre_Bgm_Ringtone___Download_Link_----_MP3_160K_cgst8o.mp3"
  },
  {
    id: 110,
    title: "Indian 2",
    artist: "Paaraa Lyric Video Kamal Haasan Shankar Anirudh Subaskaran Lyca MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Surya.webp",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312799/Indian_2_-_Paaraa_Lyric_Video___Kamal_Haasan___Shankar___Anirudh___Subaskaran___Lyca_MP3_160K_tuyl85.mp3"
  },
  {
    id: 111,
    title: "I",
    artist: "Mersalaayitten Video A.R. Rahman Vikram Amy Jackson Shankar MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/vijay.webp",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312799/I_-_Mersalaayitten_Video___A.R._Rahman___Vikram__Amy_Jackson___Shankar_MP3_160K_vaapyw.mp3"
  },
  {
    id: 112,
    title: "Hey Mama Video Song Sethupathi Vijay Sethupathi Anirudh ft. Blaaze Nivas K Prasanna MP3 160K",
    artist: "Anirudh / Yuvan",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Vijay sethupathi.webp",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312779/Hey_Mama_Video_Song___Sethupathi___Vijay_Sethupathi___Anirudh_ft._Blaaze___Nivas_K_Prasanna_MP3_160K_oft25x.mp3"
  },
  {
    id: 113,
    title: "Ethir Neechal",
    artist: "Velicha Poove Video Sivakarthikeyan Priya MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/sivakarthikeyan.webp",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312779/Ethir_Neechal_-_Velicha_Poove_Video___Sivakarthikeyan__Priya_MP3_160K_oblkpm.mp3"
  },
  {
    id: 114,
    title: "Ethir Neechal",
    artist: "Nijamellam Video Song Sivakarthikeyan Priya Anirudh Ravichander MP3 160K 1",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/sivakarthikeyan.webp",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312774/Ethir_Neechal_-_Nijamellam_Video_Song___Sivakarthikeyan__Priya___Anirudh_Ravichander_MP3_160K__1_dkpsqg.mp3"
  },
  {
    id: 115,
    title: "Ethir Neechal",
    artist: "Local Boys Video Dhanush Sivakarthikeyan MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Dhanush.webp",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312773/Ethir_Neechal_-_Local_Boys_Video___Dhanush__Sivakarthikeyan_MP3_160K_vi1boj.mp3"
  },
  {
    id: 116,
    title: "Enakena Music Video Love Insurance Kompany Pradeep Ranganathan Anirudh Vignesh Shivan Lalit Kumar MP3 160K",
    artist: "Anirudh / Yuvan",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/sivakarthikeyan.webp",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312770/Enakena_Music_Video__Love_Insurance_Kompany_Pradeep_Ranganathan_Anirudh_Vignesh_Shivan_Lalit_Kumar_MP3_160K_g3r1ss.mp3"
  },
  {
    id: 117,
    title: "Ethir Neechal",
    artist: "Nijamellam Video Song Sivakarthikeyan Priya Anirudh Ravichander MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/sivakarthikeyan.webp",
    color: "#6600cc",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312770/Ethir_Neechal_-_Nijamellam_Video_Song___Sivakarthikeyan__Priya___Anirudh_Ravichander_MP3_160K_c79wnf.mp3"
  },
  {
    id: 118,
    title: "Ethir Neechal",
    artist: "Boomi Enna Suthudhe Video Sivakarthikeyan MP3 160K 1",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/sivakarthikeyan.webp",
    color: "#ff0055",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312765/Ethir_Neechal_-_Boomi_Enna_Suthudhe_Video___Sivakarthikeyan_MP3_160K__1_fvgbi5.mp3"
  },
  {
    id: 119,
    title: "En Idhayathai Thirudi Chendravale Kettavan",
    artist: "Lyrics MP3 320K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Vijay sethupathi.webp",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312749/En_Idhayathai_Thirudi_Chendravale_Kettavan_-_Lyrics_MP3_320K_qrzks5.mp3"
  },
  {
    id: 120,
    title: "Eminem",
    artist: "Without Me Official Music Video MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Vijay sethupathi.webp",
    color: "#6600cc",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312744/Eminem_-_Without_Me_Official_Music_Video_MP3_160K_t4ayqz.mp3"
  },
  {
    id: 121,
    title: "DILBAR Lyrical Satyameva Jayate John Abraham Nora Fatehi Tanishk B Neha Kakkar Dhvani Ikka MP3 320K",
    artist: "Anirudh / Yuvan",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Vikram.webp",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312741/DILBAR_Lyrical___Satyameva_Jayate__John_Abraham__Nora_Fatehi_Tanishk_B__Neha_Kakkar_Dhvani__Ikka_MP3_320K_ixbs6v.mp3"
  },
  {
    id: 122,
    title: "Don",
    artist: "Bae Video Sivakarthikeyan Priyanka Mohan Anirudh Ravichander MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/sivakarthikeyan.webp",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312733/Don_-_Bae_Video___Sivakarthikeyan__Priyanka_Mohan___Anirudh_Ravichander_MP3_160K_ktxgta.mp3"
  },
  {
    id: 123,
    title: "Doctor",
    artist: "Chellamma Video Sivakarthikeyan Anirudh Ravichander Nelson Dilipkumar Jonita Gandhi MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/sivakarthikeyan.webp",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312729/Doctor_-_Chellamma_Video___Sivakarthikeyan___Anirudh_Ravichander___Nelson_Dilipkumar___Jonita_Gandhi_MP3_160K_dmrlwm.mp3"
  },
  {
    id: 124,
    title: "Darkside x Aaja Sanam Madhur Chandni Mein Hum MTVR Mashup Lata Mangeshkar x Neoni Full Version MP3 160K",
    artist: "Anirudh / Yuvan",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Vikram.webp",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312716/Darkside_x_Aaja_Sanam_Madhur_Chandni_Mein_Hum___MTVR_Mashup___Lata_Mangeshkar_x_Neoni___Full_Version_MP3_160K_oedyjq.mp3"
  },
  {
    id: 125,
    title: "Biriyani",
    artist: "Making of Edhirthu Nill Making Video Yuvanshankar Raja MP3 320K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Ajith.webp",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312715/Biriyani_-_Making_of_Edhirthu_Nill_Making_Video___Yuvanshankar_Raja_MP3_320K_n9ecca.mp3"
  },
  {
    id: 126,
    title: "Chekka Chivantha Vaanam",
    artist: "Bhoomi Bhoomi Video Tamil A.R. Rahman Mani Ratnam MP3 320K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Vijay sethupathi.webp",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312715/Chekka_Chivantha_Vaanam_-_Bhoomi_Bhoomi_Video_Tamil___A.R._Rahman___Mani_Ratnam_MP3_320K_qm21xv.mp3"
  },
  {
    id: 127,
    title: "Brodha V",
    artist: "Aathma Raama Music Video MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Vijay sethupathi.webp",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312706/Brodha_V_-_Aathma_Raama_Music_Video_MP3_160K_dogf6f.mp3"
  },
  {
    id: 128,
    title: "Bogan",
    artist: "Damaalu Dumeelu Tamil Lyric Jayam Ravi Hansikha D. Imman MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Dhanush.webp",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312703/Bogan_-_Damaalu_Dumeelu_Tamil_Lyric___Jayam_Ravi__Hansikha___D._Imman_MP3_160K_wyphb4.mp3"
  },
  {
    id: 129,
    title: "Beat of Master Instrumental MassTamilan.io",
    artist: "Anirudh / Yuvan",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/vijay.webp",
    color: "#7700dd",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312697/Beat-of-Master-_Instrumental_-MassTamilan.io_yvqhc7.mp3"
  },
  {
    id: 130,
    title: "Ayalathe Veetile Club Mix feat.Mythili Jecin George Mix Matinee Movie MP3 320K",
    artist: "Anirudh / Yuvan",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/sivakarthikeyan.webp",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312696/Ayalathe_Veetile_Club_Mix_feat.Mythili_Jecin_George_Mix_Matinee_Movie_MP3_320K_cps9ob.mp3"
  },
  {
    id: 131,
    title: "Avalukena",
    artist: "Song Video Anirudh Ravichander Vignesh Shivan MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Vijay sethupathi.webp",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312684/Avalukena_-_Song_Video___Anirudh_Ravichander___Vignesh_Shivan_MP3_160K_ffo2zh.mp3"
  },
  {
    id: 132,
    title: "Andha Kanna Paathaakaa MassTamilan.io",
    artist: "Anirudh / Yuvan",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/sivakarthikeyan.webp",
    color: "#7700dd",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312674/Andha-Kanna-Paathaakaa-MassTamilan.io_ujiiv7.mp3"
  },
  {
    id: 133,
    title: "Adaavadi Music Video LIK Pradeep Ranganathan Anirudh l Vignesh Shivan Krithi Shetty MP3 160K",
    artist: "Anirudh / Yuvan",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/vijay.webp",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312674/Adaavadi_Music_Video___LIK___Pradeep_Ranganathan___Anirudh_l_Vignesh_Shivan___Krithi_Shetty_MP3_160K_uuinst.mp3"
  },
  {
    id: 134,
    title: "Karuppu Vellai",
    artist: "Anirudh / Yuvan",
    album: "Vikram Vedha",
    genre: "tamil",
    image: "images/Vikram.webp",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312668/49_Karuppu_Vellai_From_-Vikram_Vedha-_jdomqs.flac"
  },
  {
    id: 135,
    title: "Aathi 8K 60FPS Video Song Kaththi Vijay Samantha Ruth Prabhu Anirudh Ravichander MP3 160K",
    artist: "Anirudh / Yuvan",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/vijay.webp",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312666/Aathi_8K_60FPS_Video_Song___Kaththi___Vijay___Samantha_Ruth_Prabhu___Anirudh_Ravichander_MP3_160K_tipysc.mp3"
  },
  {
    id: 136,
    title: "Aakko",
    artist: "Enakenna Yaarum Illaye Lyric Anirudh Ravichander MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Ajith.webp",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312663/Aakko_-_Enakenna_Yaarum_Illaye_Lyric___Anirudh_Ravichander_MP3_160K_p2dtqs.mp3"
  },
  {
    id: 137,
    title: "Cent",
    artist: "In Da Club Lyrics MP3 320K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/vijay.webp",
    color: "#ff0055",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312659/50_Cent_-_In_Da_Club_Lyrics_MP3_320K_imnm2o.mp3"
  },
  {
    id: 138,
    title: "Machi Engalukku Ellam",
    artist: "Anirudh / Yuvan",
    album: "Meesaya Murukku",
    genre: "tamil",
    image: "images/Dhanush.webp",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312617/21_Machi_Engalukku_Ellam_From_-Meesaya_Murukku-_zallyd.flac"
  },
  {
    id: 139,
    title: "",
    artist: "Why This Kolaveri Di Making Video Dhanush Shruti Anirudh MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Dhanush.webp",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778312576/3_-_Why_This_Kolaveri_Di_Making_Video___Dhanush__Shruti___Anirudh_MP3_160K_wvlber.mp3"
  },
  {
    id: 140,
    title: "",
    artist: "Idhazhin Oram Video Dhanush Shruti Anirudh MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Dhanush.webp",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778250690/3_-_Idhazhin_Oram_Video___Dhanush__Shruti___Anirudh_MP3_160K_hviwdq.mp3"
  },
  {
    id: 141,
    title: "Kaathalae Kaathalae",
    artist: "Anirudh / Yuvan",
    album: "96",
    genre: "tamil",
    image: "images/sivakarthikeyan.webp",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778250682/1_Kaathalae_Kaathalae_From_-96-_mpvoq1.flac"
  },
  {
    id: 142,
    title: "",
    artist: "KannazhagaVideo Dhanush Shruti Anirudh MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Dhanush.webp",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778250666/3_-_KannazhagaVideo___Dhanush__Shruti___Anirudh_MP3_160K_gh3yri.mp3"
  },
  {
    id: 143,
    title: "",
    artist: "Idhazhin Oram Video Dhanush Shruti Anirudh MP3 160K 1",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Dhanush.webp",
    color: "#7700dd",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778250665/3_-_Idhazhin_Oram_Video___Dhanush__Shruti___Anirudh_MP3_160K__1_osbg5p.mp3"
  },
  {
    id: 144,
    title: "Sheila Ki Jawani Full Song Tees Maar Khan Katrina Kaif Vishal Dadlani Sunidhi Chauhan MP3 320K",
    artist: "Anirudh / Yuvan",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Surya.webp",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778250653/_Sheila_Ki_Jawani__Full_Song___Tees_Maar_Khan___Katrina_Kaif___Vishal_Dadlani__Sunidhi_Chauhan_MP3_320K_ee9v5a.mp3"
  },
  {
    id: 145,
    title: "",
    artist: "Nee Paartha Vizhigal Video Song Dhanush Shruti Anirudh Ravichander MP3 160K",
    album: "Tamil Hits",
    genre: "tamil",
    image: "images/Dhanush.webp",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778250647/3_-_Nee_Paartha_Vizhigal_Video_Song___Dhanush__Shruti___Anirudh_Ravichander_MP3_160K_wj3oor.mp3"
  }
,
  {
    id: 146,
    title: "Yathe Yathe",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778396118/Yathe_Yathe_MP3_160K_fcbxth.mp3"
  },
  {
    id: 147,
    title: "நெஞ்சே நெஞ்சே",
    artist: "8K Video Song   Nenje Nenje   அயன்   Ayan   Suriya   Tamannah   Harris Jayaraj",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#6600cc",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778396107/%E0%AE%A8%E0%AF%86%E0%AE%9E%E0%AF%8D%E0%AE%9A%E0%AF%87_%E0%AE%A8%E0%AF%86%E0%AE%9E%E0%AF%8D%E0%AE%9A%E0%AF%87_-_8K_Video_Song___Nenje_Nenje___%E0%AE%85%E0%AE%AF%E0%AE%A9%E0%AF%8D___Ayan___Suriya___Tamannah___Harris_Jayaraj_MP3_160K_skf0be.mp3"
  },
  {
    id: 148,
    title: "Yelavalele",
    artist: "Video Song   Kingston   GV Prakash Kumar   Divyabharathi   Kamal Prakash   Rockzane",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778396070/Yelavalele_-_Video_Song___Kingston___GV_Prakash_Kumar___Divyabharathi___Kamal_Prakash___Rockzane_MP3_160K_nzwlvq.mp3"
  },
  {
    id: 149,
    title: "Yethi Yethi 8K 4K Video Song   Vaaranam Aayiram   Harris Jayaraj   Suriya",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778396063/Yethi_Yethi_8K_4K_Video_Song___Vaaranam_Aayiram___Harris_Jayaraj___Suriya_MP3_160K_ggkacp.mp3"
  },
  {
    id: 150,
    title: "Yuddham Sei",
    artist: "Kannitheevu Ponna Video   Cheran   Mysskin",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff0055",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778396058/Yuddham_Sei_-_Kannitheevu_Ponna_Video___Cheran___Mysskin_MP3_160K_dbjkj3.mp3"
  },
  {
    id: 151,
    title: "Yennai Arindhaal",
    artist: "Mazhai Vara Pogudhae 8K 4K Video Song   Ajith  Trisha   Harris Jayaraj",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778396023/Yennai_Arindhaal_-_Mazhai_Vara_Pogudhae_8K_4K_Video_Song___Ajith__Trisha___Harris_Jayaraj_MP3_160K_yzpsfo.mp3"
  },
  {
    id: 152,
    title: "Vennilave Vennilave Song   Minsara Kanavu Tamil Movie Songs   Prabhu Deva   Kajol   AR Rahman",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778396016/Vennilave_Vennilave_Song___Minsara_Kanavu_Tamil_Movie_Songs___Prabhu_Deva___Kajol___AR_Rahman_MP3_160K_zgcfcw.mp3"
  },
  {
    id: 153,
    title: "Yean Enakku",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778396012/Yean_Enakku_MP3_160K_opwv2v.mp3"
  },
  {
    id: 154,
    title: "Yaan",
    artist: "Aathangara Orathil 8K 4K Video Song   Jiiva   Harris Jayaraj",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#7700dd",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778396009/Yaan_-_Aathangara_Orathil_8K_4K_Video_Song___Jiiva___Harris_Jayaraj_MP3_160K_x6hihj.mp3"
  },
  {
    id: 155,
    title: "Yaar Indha Saalai Oram",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395985/Yaar_Indha_Saalai_Oram_MP3_160K_ts7lmx.mp3"
  },
  {
    id: 156,
    title: "Yaaro Manadhile",
    artist: "4K Video Song   யாரோ மனதிலே   Dhaam Dhoom   Jayam Ravi   Kangana   Harris Jayaraj",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395982/Yaaro_Manadhile_-_4K_Video_Song___%E0%AE%AF%E0%AE%BE%E0%AE%B0%E0%AF%8B_%E0%AE%AE%E0%AE%A9%E0%AE%A4%E0%AE%BF%E0%AE%B2%E0%AF%87___Dhaam_Dhoom___Jayam_Ravi___Kangana___Harris_Jayaraj_MP3_160K_ghjoax.mp3"
  },
  {
    id: 157,
    title: "Vinnaithaandi Varuvaayaa",
    artist: "Omana Penne Video Song   A.R. Rahman   STR   Trisha   GVM",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#6600cc",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395931/Vinnaithaandi_Varuvaayaa_-_Omana_Penne_Video_Song___A.R._Rahman___STR___Trisha___GVM_MP3_160K_k68fsz.mp3"
  },
  {
    id: 158,
    title: "Velai Illa Pattadhaari  D25  VIP",
    artist: "Udhungada Sangu   Full Video Song",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395905/Velai_Illa_Pattadhaari__D25__VIP_-_Udhungada_Sangu___Full_Video_Song_MP3_160K_btyxw3.mp3"
  },
  {
    id: 159,
    title: "Yaan",
    artist: "Latcham Calorie Video   Harris Jayaraj   Jiiva",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395902/Yaan_-_Latcham_Calorie_Video___Harris_Jayaraj___Jiiva_MP3_160K_dhiypz.mp3"
  },
  {
    id: 160,
    title: "Vinnaithaandi Varuvaayaa",
    artist: "Hosanna Video   Rahman   STR  Trisha",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff0055",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395862/Vinnaithaandi_Varuvaayaa_-_Hosanna_Video___Rahman___STR__Trisha_MP3_160K_mspzr3.mp3"
  },
  {
    id: 161,
    title: "Vizhi Moodi",
    artist: "4K Video Song   விழி மூடி   Ayan   Suriya   Tamannah   KV Anand   Harris Jayaraj",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395826/Vizhi_Moodi_-_4K_Video_Song___%E0%AE%B5%E0%AE%BF%E0%AE%B4%E0%AE%BF_%E0%AE%AE%E0%AF%82%E0%AE%9F%E0%AE%BF___Ayan___Suriya___Tamannah___KV_Anand___Harris_Jayaraj_MP3_160K_ii4wwo.mp3"
  },
  {
    id: 162,
    title: "Vinnaithaandi Varuvaayaa",
    artist: "Mannipaaya Video   A.R. Rahman   STR",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395793/Vinnaithaandi_Varuvaayaa_-_Mannipaaya_Video___A.R._Rahman___STR_MP3_160K_i3lyon.mp3"
  },
  {
    id: 163,
    title: "Vinnaithaandi Varuvaayaa",
    artist: "Aaromale Video   A.R. Rahman",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395789/Vinnaithaandi_Varuvaayaa_-_Aaromale_Video___A.R._Rahman_MP3_160K_ypxlsi.mp3"
  },
  {
    id: 164,
    title: "Vinnaithaandi Varuvaayaa",
    artist: "Anbil Avan Video Song   A.R. Rahman   STR   Trisha",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#7700dd",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395760/Vinnaithaandi_Varuvaayaa_-_Anbil_Avan_Video_Song___A.R._Rahman___STR___Trisha_MP3_160K_gyr7pf.mp3"
  },
  {
    id: 165,
    title: "Vinnaithaandi Varuvaayaa",
    artist: "Kannukkul Kannai Video   A.R. Rahman",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395742/Vinnaithaandi_Varuvaayaa_-_Kannukkul_Kannai_Video___A.R._Rahman_MP3_160K_akrb8r.mp3"
  },
  {
    id: 166,
    title: "Vettaikaaran",
    artist: "Naan Adicha Video Song   Vijay   Anushka Shetty  Vijay Antony",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395709/Vettaikaaran_-_Naan_Adicha_Video_Song___Vijay___Anushka_Shetty__Vijay_Antony_MP3_160K_ohysbf.mp3"
  },
  {
    id: 167,
    title: "Vaaranam Aayiram",
    artist: "Mundhinam 8K 4K Video Song   Harris Jayaraj   Suriya  Simran   Gautham Menon",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#6600cc",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395704/Vaaranam_Aayiram_-_Mundhinam_8K_4K_Video_Song___Harris_Jayaraj___Suriya__Simran___Gautham_Menon_MP3_160K_nqshg1.mp3"
  },
  {
    id: 168,
    title: "Vaaranam Aayiram",
    artist: "Ava Enna 8K 4K Video   Harris Jayaraj   Suriya",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395695/Vaaranam_Aayiram_-_Ava_Enna_8K_4K_Video___Harris_Jayaraj___Suriya_MP3_160K_njxhb4.mp3"
  },
  {
    id: 169,
    title: "Vennilave Song Sad   En Azhagenna Song   Minsara Kanavu Movie   Prabhu Deva   Kajol   AR Rahman",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395695/Vennilave_Song_Sad___En_Azhagenna_Song___Minsara_Kanavu_Movie___Prabhu_Deva___Kajol___AR_Rahman_MP3_160K_tx5q6n.mp3"
  },
  {
    id: 170,
    title: "Varuthapadatha Vaalibar Sangam",
    artist: "Indha Ponnungalae Video",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff0055",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395675/Varuthapadatha_Vaalibar_Sangam_-_Indha_Ponnungalae_Video_MP3_160K_koxsto.mp3"
  },
  {
    id: 171,
    title: "Vaaranam Aayiram",
    artist: "Ava Enna Tamil Lyric   Harris Jayaraj   Suriya",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395671/Vaaranam_Aayiram_-_Ava_Enna_Tamil_Lyric___Harris_Jayaraj___Suriya_MP3_160K_zgtxcl.mp3"
  },
  {
    id: 172,
    title: "Vela Vela",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395645/Vela_Vela_MP3_160K_gm6zcd.mp3"
  },
  {
    id: 173,
    title: "Vaenguzhalil Ezhaindayadi Tamil Video Song",
    artist: "Kantara Chapter 1 Rishab Shetty  Rukmini  Hombale Films",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395640/Vaenguzhalil_Ezhaindayadi_Tamil_Video_Song_-_Kantara_Chapter_1_Rishab_Shetty__Rukmini__Hombale_Films_MP3_160K_rahlv8.mp3"
  },
  {
    id: 174,
    title: "Vadacurry",
    artist: "Nenjukulla Nee Lyric Video   Vivek",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#7700dd",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395628/Vadacurry_-_Nenjukulla_Nee_Lyric_Video___Vivek_-_Mervin___Vijay_Prakash__Diwakar__Ajesh_Ashok_MP3_160K_rkpgoq.mp3"
  },
  {
    id: 175,
    title: "Vaazhkai Official Video Song",
    artist: "Naveena Saraswathi Sabatham",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395626/Vaazhkai_Official_Video_Song_-_Naveena_Saraswathi_Sabatham_MP3_160K_bv0cph.mp3"
  },
  {
    id: 176,
    title: "VAARI JAAVAN Full Video   Dhurandhar The Revenge  Ranveer Singh  Shashwat Sachdev Jyoti N Jasmine S",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "hindi",
    image: "Playdio icon.png",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395599/VAARI_JAAVAN_Full_Video___Dhurandhar_The_Revenge__Ranveer_Singh__Shashwat_Sachdev_Jyoti_N_Jasmine_S_MP3_160K_qucrzt.mp3"
  },
  {
    id: 177,
    title: "Vaaya Naina Lyrical Video   Zebra   Satya Dev  Daali Dhananjaya   Ravi Basrur   Eashvar Karthic",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#6600cc",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395596/Vaaya_Naina_Lyrical_Video___Zebra___Satya_Dev__Daali_Dhananjaya___Ravi_Basrur___Eashvar_Karthic_MP3_160K_hfcww4.mp3"
  },
  {
    id: 178,
    title: "Vaaranam Aayiram",
    artist: "Oh Shanthi Shanthi 8K 4K Video Song   Suriya  Sameera Reddy   Harris Jayaraj",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395577/Vaaranam_Aayiram_-_Oh_Shanthi_Shanthi_8K_4K_Video_Song___Suriya__Sameera_Reddy___Harris_Jayaraj_MP3_160K_vj4tux.mp3"
  },
  {
    id: 179,
    title: "Vaaranam Aayiram",
    artist: "Nenjukkul Peidhidum 8K 4K Video Song   Harris Jayaraj   Suriya",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395567/Vaaranam_Aayiram_-_Nenjukkul_Peidhidum_8K_4K_Video_Song___Harris_Jayaraj___Suriya_MP3_160K_qmfdgt.mp3"
  },
  {
    id: 180,
    title: "Vaaranam Aayiram",
    artist: "Annul Maelae 8K 4K Video Song   Harris Jayaraj   Suriya",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff0055",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395565/Vaaranam_Aayiram_-_Annul_Maelae_8K_4K_Video_Song___Harris_Jayaraj___Suriya_MP3_160K_bcbfn3.mp3"
  },
  {
    id: 181,
    title: "Vaan Engum Nee Minna 8K 4K Video Song   Endrendrum Punnagai   Harris Jayaraj   Jiiva  Trisha",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395551/Vaan_Engum_Nee_Minna_8K_4K_Video_Song___Endrendrum_Punnagai___Harris_Jayaraj___Jiiva__Trisha_MP3_160K_qlcgvq.mp3"
  },
  {
    id: 182,
    title: "Vaaranam Aayiram",
    artist: "Adiyae Kolluthey Video   Harris Jayaraj   Suriya",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395534/Vaaranam_Aayiram_-_Adiyae_Kolluthey_Video___Harris_Jayaraj___Suriya_MP3_160K_z8r6o2.mp3"
  },
  {
    id: 183,
    title: "Thani Oruvan",
    artist: "Theemai Dhaan Vellum Lyric   Jayam Ravi  Nayanthara   Hiphop Tamizha",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395420/Thani_Oruvan_-_Theemai_Dhaan_Vellum_Lyric___Jayam_Ravi__Nayanthara___Hiphop_Tamizha_MP3_160K_f0qkdi.mp3"
  },
  {
    id: 184,
    title: "Urugudhe Maragudhe",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#7700dd",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395419/Urugudhe_Maragudhe_MP3_160K_cudgpx.mp3"
  },
  {
    id: 185,
    title: "Un Mela Aasadhaan Video   Karthi   G.V. Prakash Kumar   Dhanush   Andrea  Reema Sen",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395416/Un_Mela_Aasadhaan_Video___Karthi___G.V._Prakash_Kumar___Dhanush___Andrea__Reema_Sen_MP3_160K_fgpzpq.mp3"
  },
  {
    id: 186,
    title: "Ussumu Laresey",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395410/Ussumu_Laresey_MP3_160K_kq6lv9.mp3"
  },
  {
    id: 187,
    title: "Uyi Amma",
    artist: "Azaad   Aaman D  Rasha Thadani  Madhubanti Bagchi Amit Trivedi Amitabh  Bosco  Abhishek K",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#6600cc",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395405/Uyi_Amma_-_Azaad___Aaman_D__Rasha_Thadani__Madhubanti_Bagchi_Amit_Trivedi_Amitabh__Bosco__Abhishek_K_MP3_160K_xaf5sd.mp3"
  },
  {
    id: 188,
    title: "Unnale Unnale",
    artist: "4K Video Song   உன்னாலே உன்னாலே   Vinay   Sadha   Jeeva   Harris Jayaraj   Ayngaran",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395366/Unnale_Unnale_-_4K_Video_Song___%E0%AE%89%E0%AE%A9%E0%AF%8D%E0%AE%A9%E0%AE%BE%E0%AE%B2%E0%AF%87_%E0%AE%89%E0%AE%A9%E0%AF%8D%E0%AE%A9%E0%AE%BE%E0%AE%B2%E0%AF%87___Vinay___Sadha___Jeeva___Harris_Jayaraj___Ayngaran_MP3_160K_vjgyka.mp3"
  },
  {
    id: 189,
    title: "Thalli Pogathey",
    artist: "Video Song   Achcham Yenbadhu Madamaiyada   A R Rahman   STR   Gautham",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395343/Thalli_Pogathey_-_Video_Song___Achcham_Yenbadhu_Madamaiyada___A_R_Rahman___STR___Gautham_MP3_160K_uidivi.mp3"
  },
  {
    id: 190,
    title: "Unnai Kandanaal Mudhal",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff0055",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395329/Unnai_Kandanaal_Mudhal_MP3_160K_tshvnr.mp3"
  },
  {
    id: 191,
    title: "Thalaivaa",
    artist: "Vaanganna Vanakkanganna Video   Vijay   Santhanam",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395319/Thalaivaa_-_Vaanganna_Vanakkanganna_Video___Vijay___Santhanam_MP3_160K__1_xq0bgk.mp3"
  },
  {
    id: 192,
    title: "Udhayam NH4",
    artist: "Ora Kannala Video   Siddharth  Ashrita",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395288/Udhayam_NH4_-_Ora_Kannala_Video___Siddharth__Ashrita_MP3_160K_iw0ty3.mp3"
  },
  {
    id: 193,
    title: "Uchimandai",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395286/Uchimandai_MP3_160K_llgttw.mp3"
  },
  {
    id: 194,
    title: "Thumbakki Thumbai",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#7700dd",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395266/Thumbakki_Thumbai_MP3_160K_b5uqmi.mp3"
  },
  {
    id: 195,
    title: "Trisha Illana Nayanthara",
    artist: "Yennachu Yedhachu Video   G.V. Prakash Kumar  Anandhi",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395265/Trisha_Illana_Nayanthara_-_Yennachu_Yedhachu_Video___G.V._Prakash_Kumar__Anandhi_MP3_160K_ard7qp.mp3"
  },
  {
    id: 196,
    title: "Then Kudicha",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395248/Then_Kudicha_MP3_160K_b09zjd.mp3"
  },
  {
    id: 197,
    title: "Thayya Thayya HD Song   Uyire Movie   Shahrukh khan   A R Rahman   Mani Ratnam   Track Musics",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "hindi",
    image: "Playdio icon.png",
    color: "#6600cc",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395219/Thayya_Thayya_HD_Song___Uyire_Movie___Shahrukh_khan___A_R_Rahman___Mani_Ratnam___Track_Musics_MP3_160K_knlbtt.mp3"
  },
  {
    id: 198,
    title: "Thee Pidikka Song 4k Video Song Arya   Sameksha   Yuvan Shankar Raja   Mass Audios",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395211/Thee_Pidikka_Song_4k_Video_Song_Arya___Sameksha___Yuvan_Shankar_Raja___Mass_Audios_MP3_160K_apko0y.mp3"
  },
  {
    id: 199,
    title: "Thappelam Thappe Illai",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395190/Thappelam_Thappe_Illai_MP3_160K_v2xasd.mp3"
  },
  {
    id: 200,
    title: "Taxi Taxi",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff0055",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395178/Taxi_Taxi_MP3_160K_xcergj.mp3"
  },
  {
    id: 201,
    title: "Telephone Manipol Song   Indian Tamil Movie Songs   Kamal Haasan   Manisha Koirala   AR Rahman",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395155/Telephone_Manipol_Song___Indian_Tamil_Movie_Songs___Kamal_Haasan___Manisha_Koirala___AR_Rahman_MP3_160K_ojmoln.mp3"
  },
  {
    id: 202,
    title: "Sillunu Oru Kadhal",
    artist: "New York Nagaram Song",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395007/Sillunu_Oru_Kadhal_-_New_York_Nagaram_Song_MP3_160K_rt01mw.mp3"
  },
  {
    id: 203,
    title: "Suraa",
    artist: "Thanjavoor Jilla Kaari 8K 4K Video Song   Thalapathy Vijay  Tamannaah   Mani Sharma",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395003/Suraa_-_Thanjavoor_Jilla_Kaari_8K_4K_Video_Song___Thalapathy_Vijay__Tamannaah___Mani_Sharma_MP3_160K_shltao.mp3"
  },
  {
    id: 204,
    title: "Raavanan",
    artist: "Naan Varuvene Tamil Lyric   A.R. Rahman   Vikram  Aishwarya Rai",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#7700dd",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778395000/Raavanan_-_Naan_Varuvene_Tamil_Lyric___A.R._Rahman___Vikram__Aishwarya_Rai_MP3_160K_tdt5kz.mp3"
  },
  {
    id: 205,
    title: "Silambattam",
    artist: "Where Is The Party Video Song   Yuvanshankar Raja  STR   Sana Khan",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394996/Silambattam_-_Where_Is_The_Party_Video_Song___Yuvanshankar_Raja__STR___Sana_Khan_MP3_160K_epio5f.mp3"
  },
  {
    id: 206,
    title: "Siva Sambo Pasanga Polambal Version",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394995/Siva_Sambo_Pasanga_Polambal_Version_MP3_160K_ohjy5s.mp3"
  },
  {
    id: 207,
    title: "Sonna Puriyadhu",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#6600cc",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394990/Sonna_Puriyadhu_MP3_160K_fjpejt.mp3"
  },
  {
    id: 208,
    title: "Silambattam",
    artist: "Nallamdhana Video   Yuvanshankar Raja  STR",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394989/Silambattam_-_Nallamdhana_Video___Yuvanshankar_Raja__STR_MP3_160K_xwj0xl.mp3"
  },
  {
    id: 209,
    title: "Ratchagan Tamil Movie Songs   Chandiranai Thottathu Yaar Song   Nagarjuna   Sushmita Sen   AR Rahman",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394988/Ratchagan_Tamil_Movie_Songs___Chandiranai_Thottathu_Yaar_Song___Nagarjuna___Sushmita_Sen___AR_Rahman_MP3_160K_htk3ex.mp3"
  },
  {
    id: 210,
    title: "Sindhanai Sei",
    artist: "Uchimeedhu Video   SS Thaman",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff0055",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394977/Sindhanai_Sei_-_Uchimeedhu_Video___SS_Thaman_MP3_160K_jd2tg8.mp3"
  },
  {
    id: 211,
    title: "Rangola 4k Video Song    NEW VERSION    Suriya   Asin   Harris Jayaraj",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394969/Rangola_4k_Video_Song____NEW_VERSION____Suriya___Asin___Harris_Jayaraj_MP3_160K_ibp4lm.mp3"
  },
  {
    id: 212,
    title: "Showkali",
    artist: "Video Song   Achcham Yenbadhu Madamaiyada   STR   A R Rahman   Gautham Vasudev Menon",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394966/Showkali_-_Video_Song___Achcham_Yenbadhu_Madamaiyada___STR___A_R_Rahman___Gautham_Vasudev_Menon_MP3_160K_x55tcx.mp3"
  },
  {
    id: 213,
    title: "Shararat   Dhurandhar   Ranveer  Aditya Dhar  Shashwat  Jasmine  Madhubanti  Ayesha  Krystle",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "hindi",
    image: "Playdio icon.png",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394965/Shararat___Dhurandhar___Ranveer__Aditya_Dhar__Shashwat__Jasmine__Madhubanti__Ayesha__Krystle_MP3_160K_ldbhpt.mp3"
  },
  {
    id: 214,
    title: "Romeo Juliet",
    artist: "Adiyae Ivalaey Video   Jayam Ravi  Hansika   D. Imman",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#7700dd",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394963/Romeo_Juliet_-_Adiyae_Ivalaey_Video___Jayam_Ravi__Hansika___D._Imman_MP3_160K_zcqst0.mp3"
  },
  {
    id: 215,
    title: "Sexy Lady",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394963/Sexy_Lady_MP3_160K_coza8a.mp3"
  },
  {
    id: 216,
    title: "Sarakku Vachiruken",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394949/Sarakku_Vachiruken_MP3_160K_hbcik5.mp3"
  },
  {
    id: 217,
    title: "Ram-Leela   Shreya Ghoshal  Ranveer   Deepika   Osman Mir",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "hindi",
    image: "Playdio icon.png",
    color: "#6600cc",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394947/Ram-Leela___Shreya_Ghoshal__Ranveer___Deepika___Osman_Mir_MP3_160K_mmfrkw.mp3"
  },
  {
    id: 218,
    title: "Sara Sara Saara Kathu Official Video Song   Vaagai Sooda Vaa   Vimal   Iniya   Ghibran",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394947/Sara_Sara_Saara_Kathu_Official_Video_Song___Vaagai_Sooda_Vaa___Vimal___Iniya___Ghibran_MP3_160K_eyl5pz.mp3"
  },
  {
    id: 219,
    title: "Red Cardu   Video   Vantha Rajavathaan Varuven   STR   Hiphop Tamizha   Snigdha   Sundar C   LYCA",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394933/Red_Cardu___Video___Vantha_Rajavathaan_Varuven___STR___Hiphop_Tamizha___Snigdha___Sundar_C___LYCA_MP3_160K_roupwl.mp3"
  },
  {
    id: 220,
    title: "Rasaali",
    artist: "Video Song   Achcham Yenbadhu Madamaiyada   STR   A R Rahman   Gautham Vasudev Menon",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff0055",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394929/Rasaali_-_Video_Song___Achcham_Yenbadhu_Madamaiyada___STR___A_R_Rahman___Gautham_Vasudev_Menon_MP3_160K_gocwcs.mp3"
  },
  {
    id: 221,
    title: "Rathathin Rathamay",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394910/Rathathin_Rathamay_MP3_160K_airaga.mp3"
  },
  {
    id: 222,
    title: "Ratchagan Tamil Movie Songs   Lucky Lucky Video Song   Nagarjuna   Sushmita Sen   SPB   AR Rahman",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394909/Ratchagan_Tamil_Movie_Songs___Lucky_Lucky_Video_Song___Nagarjuna___Sushmita_Sen___SPB___AR_Rahman_MP3_160K_o9grvy.mp3"
  },
  {
    id: 223,
    title: "Rangu Rangamma Song   Bheema   Vikram   Trisha   Harris Jayaraj",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394877/Rangu_Rangamma_Song___Bheema___Vikram___Trisha___Harris_Jayaraj_MP3_160K_llilbd.mp3"
  },
  {
    id: 224,
    title: "Raavanan",
    artist: "Kedakkari Video   A.R. Rahman   Vikram  Aishwarya Rai",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#7700dd",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394877/Raavanan_-_Kedakkari_Video___A.R._Rahman___Vikram__Aishwarya_Rai_MP3_160K_wv6onm.mp3"
  },
  {
    id: 225,
    title: "Raavanan",
    artist: "Kaattu Sirukki Tamil Lyric   A.R. Rahman   Vikram  Aishwarya Rai",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394871/Raavanan_-_Kaattu_Sirukki_Tamil_Lyric___A.R._Rahman___Vikram__Aishwarya_Rai_MP3_160K_it5cbx.mp3"
  },
  {
    id: 226,
    title: "Raja Rani   Angnyaade Video Song   Aarya  Nayanthara  Jai  Nazriya   G.V. Prakash Kumar   Atlee",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394862/Raja_Rani___Angnyaade_Video_Song___Aarya__Nayanthara__Jai__Nazriya___G.V._Prakash_Kumar___Atlee_MP3_160K_xziip4.mp3"
  },
  {
    id: 227,
    title: "Rajapattai Movie Songs   Villathi Villangal   Vikram  Deeksha Seth  K. Viswanath",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#6600cc",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394860/Rajapattai_Movie_Songs___Villathi_Villangal___Vikram__Deeksha_Seth__K._Viswanath_MP3_160K_vk8jzc.mp3"
  },
  {
    id: 228,
    title: "Raanjhanaa",
    artist: "Title Track   Dhanush  Sonam Kapoor   A. R. Rahman   Jaswinder S   Shiraz Uppal",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394851/Raanjhanaa_-_Title_Track___Dhanush__Sonam_Kapoor___A._R._Rahman___Jaswinder_S___Shiraz_Uppal_MP3_160K_fwly53.mp3"
  },
  {
    id: 229,
    title: "Raavanan",
    artist: "Kodu Poatta Video   A.R. Rahman   Vikram  Aishwarya Rai",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394848/Raavanan_-_Kodu_Poatta_Video___A.R._Rahman___Vikram__Aishwarya_Rai_MP3_160K_mgfogm.mp3"
  },
  {
    id: 230,
    title: "RAID 2  NASHA Song   Tamannaah B  Ajay D  Riteish D   Jasmine Sandlas  Sachet T  Jaani   Bhushan K",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "hindi",
    image: "Playdio icon.png",
    color: "#ff0055",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394845/RAID_2__NASHA_Song___Tamannaah_B__Ajay_D__Riteish_D___Jasmine_Sandlas__Sachet_T__Jaani___Bhushan_K_MP3_160K_fg361q.mp3"
  },
  {
    id: 231,
    title: "Rahathulla Rahathulla Song 4k Video Song Ghajini   Suriya   Asin   Harris Jayaraj",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394839/Rahathulla_Rahathulla_Song_4k_Video_Song_Ghajini___Suriya___Asin___Harris_Jayaraj_MP3_160K_ecc8c8.mp3"
  },
  {
    id: 232,
    title: "Raavanan",
    artist: "Veera Tamil Lyric   A.R. Rahman   Vikram  Aishwarya Rai",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394830/Raavanan_-_Veera_Tamil_Lyric___A.R._Rahman___Vikram__Aishwarya_Rai_MP3_160K_kfhuga.mp3"
  },
  {
    id: 233,
    title: "Raavanan",
    artist: "Usure Pogudhey Video   A.R. Rahman   Vikram  Aishwarya Rai",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394825/Raavanan_-_Usure_Pogudhey_Video___A.R._Rahman___Vikram__Aishwarya_Rai_MP3_160K_pizbye.mp3"
  },
  {
    id: 234,
    title: "Raathu Raasan Lyric Video   Karuppu   Suriya   RJ Balaji    SaiAbhyankkar  VM Mahalingam Paal Daaba",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#7700dd",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394795/Raathu_Raasan_Lyric_Video___Karuppu___Suriya___RJ_Balaji____SaiAbhyankkar__VM_Mahalingam_Paal_Daaba_MP3_160K_hmun7d.mp3"
  },
  {
    id: 235,
    title: "Pudichirukku 60fps ReEdit HD Video Song Saamy Vikram Trisha Harris Jayaraj Hari Ayngaran",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394583/Pudichirukku_60fps_ReEdit_HD_Video_Song_Saamy_Vikram_Trisha_Harris_Jayaraj_Hari_Ayngaran_MP3_160K_rnycvq.mp3"
  },
  {
    id: 236,
    title: "Oru Oorula Raja",
    artist: "Lyric Video   Vaazhai   Mari Selvaraj   Santhosh Narayanan",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394580/Oru_Oorula_Raja_-_Lyric_Video___Vaazhai___Mari_Selvaraj___Santhosh_Narayanan_MP3_160K_wmhxab.mp3"
  },
  {
    id: 237,
    title: "Pullinangal",
    artist: "Official Video Song   2.0 Tamil   Rajinikanth   Akshay Kumar   A R Rahman   Shankar",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#6600cc",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394577/Pullinangal_-_Official_Video_Song___2.0_Tamil___Rajinikanth___Akshay_Kumar___A_R_Rahman___Shankar_MP3_160K_qrieia.mp3"
  },
  {
    id: 238,
    title: "Puli Urumudhu",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394573/Puli_Urumudhu_MP3_160K_bs1wwt.mp3"
  },
  {
    id: 239,
    title: "Puli",
    artist: "Sottavaala Lyric   Vijay  Shruti Haasan  Hansika Motwani   DSP   Chimbu Deven",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394569/Puli_-_Sottavaala_Lyric___Vijay__Shruti_Haasan__Hansika_Motwani___DSP___Chimbu_Deven_MP3_160K_oloxyl.mp3"
  },
  {
    id: 240,
    title: "Pon Manickavel",
    artist: "Jittaan Jittaan Jinukku Lyric   Prabhu Deva   D. Imman",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff0055",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394561/Pon_Manickavel_-_Jittaan_Jittaan_Jinukku_Lyric___Prabhu_Deva___D._Imman_MP3_160K_cae1zt.mp3"
  },
  {
    id: 241,
    title: "Puli",
    artist: "Mannavanae Mannavanae Video   Vijay   DSP",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394559/Puli_-_Mannavanae_Mannavanae_Video___Vijay___DSP_MP3_160K_gbbcmh.mp3"
  },
  {
    id: 242,
    title: "Poyivaa Nanba Full Video Song   Kuberaa   Dhanush  Nagarjuna  Rashmika   Sekhar Kammula   DSP",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394548/Poyivaa_Nanba_Full_Video_Song___Kuberaa___Dhanush__Nagarjuna__Rashmika___Sekhar_Kammula___DSP_MP3_160K_ooxxye.mp3"
  },
  {
    id: 243,
    title: "Pookkal Pookkum",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394541/Pookkal_Pookkum_MP3_160K_nohl0i.mp3"
  },
  {
    id: 244,
    title: "Poo Avizhum Video Song   Enakkul Oruvan   Siddharth   Deepa Sannidhi   Santhosh Narayanan",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#7700dd",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394511/Poo_Avizhum_Video_Song___Enakkul_Oruvan___Siddharth___Deepa_Sannidhi___Santhosh_Narayanan_MP3_160K_plmdzg.mp3"
  },
  {
    id: 245,
    title: "Pirai Thedum",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394509/Pirai_Thedum_MP3_160K_yt5ox9.mp3"
  },
  {
    id: 246,
    title: "Pariyerum Perumal   Potta Kaatil Poovasam Video Song   Kathir  Anandhi   Santhosh Narayanan",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394505/Pariyerum_Perumal___Potta_Kaatil_Poovasam_Video_Song___Kathir__Anandhi___Santhosh_Narayanan_MP3_160K_i8xsnb.mp3"
  },
  {
    id: 247,
    title: "Pandi Naatu Kodi Official Full Video Song",
    artist: "Jigarthanda",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#6600cc",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394500/Pandi_Naatu_Kodi_Official_Full_Video_Song_-_Jigarthanda_MP3_160K_ce3djd.mp3"
  },
  {
    id: 248,
    title: "Pala Palakkura",
    artist: "4K Video Song   Ayan   பள பளக்குற   Suriya   Tamannah   KV Anand   Harris Jayaraj",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394500/Pala_Palakkura_-_4K_Video_Song___Ayan___%E0%AE%AA%E0%AE%B3_%E0%AE%AA%E0%AE%B3%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AF%81%E0%AE%B1___Suriya___Tamannah___KV_Anand___Harris_Jayaraj_MP3_160K_kmzjj1.mp3"
  },
  {
    id: 249,
    title: "Oyaayiye Yaayiye",
    artist: "4K Video Song   ஓ.. ஆயியே   Ayan   Suriya   Tamannah    harrisjayaraj",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394492/Oyaayiye_Yaayiye_-_4K_Video_Song___%E0%AE%93.._%E0%AE%86%E0%AE%AF%E0%AE%BF%E0%AE%AF%E0%AF%87___Ayan___Suriya___Tamannah____harrisjayaraj_MP3_160K_lmhxb7.mp3"
  },
  {
    id: 250,
    title: "Oru Kal Oru Kannadi",
    artist: "Azhage Azhage 8K 4K Video Song   Harris Jayaraj   Udhayanidhi Stalin",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff0055",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394490/Oru_Kal_Oru_Kannadi_-_Azhage_Azhage_8K_4K_Video_Song___Harris_Jayaraj___Udhayanidhi_Stalin_MP3_160K_my5p6i.mp3"
  },
  {
    id: 251,
    title: "Paiya",
    artist: "Yedho Ondru Ennai Video   Karthi  Tamannah   Yuvan Shankar Raja",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394478/Paiya_-_Yedho_Ondru_Ennai_Video___Karthi__Tamannah___Yuvan_Shankar_Raja_MP3_160K_qbor0k.mp3"
  },
  {
    id: 252,
    title: "Olarava Olarava Song with Lyrics   Darling 2   Kalaiyarasan   Radhan   Sathish Chandrasekaran",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394464/Olarava_Olarava_Song_with_Lyrics___Darling_2___Kalaiyarasan___Radhan___Sathish_Chandrasekaran_MP3_160K_isikn4.mp3"
  },
  {
    id: 253,
    title: "Osthe",
    artist: "Neduvaali Tamil Video   STR  Thaman",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394464/Osthe_-_Neduvaali_Tamil_Video___STR__Thaman_MP3_160K_nl5nlc.mp3"
  },
  {
    id: 254,
    title: "Official  Kakidha Kappal Full Video Song   Madras   Karthi  Catherine Tresa   Santhosh Narayanan",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#7700dd",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394463/Official__Kakidha_Kappal_Full_Video_Song___Madras___Karthi__Catherine_Tresa___Santhosh_Narayanan_MP3_160K_bsxa0s.mp3"
  },
  {
    id: 255,
    title: "Official   Othakadai Othakadai Machan Video Song   Pandiyanaadu   Vishal   Lakshmi Menon",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394463/Official___Othakadai_Othakadai_Machan_Video_Song___Pandiyanaadu___Vishal___Lakshmi_Menon_MP3_160K_lm7o4r.mp3"
  },
  {
    id: 256,
    title: "Official  Endi Ippadi Video Song   Enakkul Oruvan   Siddharth   Deepa Sannidhi   Santhosh Narayanan",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778394453/Official__Endi_Ippadi_Video_Song___Enakkul_Oruvan___Siddharth___Deepa_Sannidhi___Santhosh_Narayanan_MP3_160K_aqwhxo.mp3"
  },
  {
    id: 257,
    title: "Onunaa Rendu",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#6600cc",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778393852/Onunaa_Rendu_MP3_160K_kfen9s.mp3"
  },
  {
    id: 258,
    title: "Oh Rasikkum Seemane",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778393843/Oh_Rasikkum_Seemane_MP3_160K_fxgxbj.mp3"
  },
  {
    id: 259,
    title: "OK Kanmani",
    artist: "Mental Manadhil Video   A.R. Rahman  Mani Ratnam",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778393816/OK_Kanmani_-_Mental_Manadhil_Video___A.R._Rahman__Mani_Ratnam_MP3_160K_pukm0p.mp3"
  },
  {
    id: 260,
    title: "Nenje Nenje",
    artist: "4K Video Song   நெஞ்சே நெஞ்சே   அயன்   Ayan   Suriya   Tamannah   Harris Jayaraj",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff0055",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778393447/Nenje_Nenje_-_4K_Video_Song___%E0%AE%A8%E0%AF%86%E0%AE%9E%E0%AF%8D%E0%AE%9A%E0%AF%87_%E0%AE%A8%E0%AF%86%E0%AE%9E%E0%AF%8D%E0%AE%9A%E0%AF%87___%E0%AE%85%E0%AE%AF%E0%AE%A9%E0%AF%8D___Ayan___Suriya___Tamannah___Harris_Jayaraj_MP3_160K_uvbqea.mp3"
  },
  {
    id: 261,
    title: "OK Kanmani",
    artist: "Mental Manadhil Video   A.R. Rahman  Mani Ratnam",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778393402/OK_Kanmani_-_Mental_Manadhil_Video___A.R._Rahman__Mani_Ratnam_MP3_160K_begyos.mp3"
  },
  {
    id: 262,
    title: "Nan Adicha",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778393386/Nan_Adicha_MP3_160K_z17v5q.mp3"
  },
  {
    id: 263,
    title: "Mona Gasolina- Video Song   Lingaa   Rajinikanth   Anushka Shetty   A. R. Rahman   K. S. Ravikumar",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778393384/Mona_Gasolina-_Video_Song___Lingaa___Rajinikanth___Anushka_Shetty___A._R._Rahman___K._S._Ravikumar_MP3_160K_dumejg.mp3"
  },
  {
    id: 264,
    title: "Official  Kakidha Kappal Full Video Song   Madras   Karthi  Catherine Tresa   Santhosh Narayanan",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#7700dd",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778393353/Official__Kakidha_Kappal_Full_Video_Song___Madras___Karthi__Catherine_Tresa___Santhosh_Narayanan_MP3_160K_a9hxaf.mp3"
  },
  {
    id: 265,
    title: "Official  Endi Ippadi Video Song   Enakkul Oruvan   Siddharth   Deepa Sannidhi   Santhosh Narayanan",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778393353/Official__Endi_Ippadi_Video_Song___Enakkul_Oruvan___Siddharth___Deepa_Sannidhi___Santhosh_Narayanan_MP3_160K_arwln1.mp3"
  },
  {
    id: 266,
    title: "Natpadhigaram",
    artist: "79   Sollu Sollu Chellamma Video Song   Latest Tamil Song",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778393318/Natpadhigaram_-_79___Sollu_Sollu_Chellamma_Video_Song___Latest_Tamil_Song_MP3_160K_gckxb4.mp3"
  },
  {
    id: 267,
    title: "Official   Othakadai Othakadai Machan Video Song   Pandiyanaadu   Vishal   Lakshmi Menon",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#6600cc",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778393315/Official___Othakadai_Othakadai_Machan_Video_Song___Pandiyanaadu___Vishal___Lakshmi_Menon_MP3_160K_zffx2w.mp3"
  },
  {
    id: 268,
    title: "Naan Sigappu Manithan",
    artist: "Idhayam Unnai Thedudhe Video   G.V. Prakash Kumar",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778393282/Naan_Sigappu_Manithan_-_Idhayam_Unnai_Thedudhe_Video___G.V._Prakash_Kumar_MP3_160K_elahth.mp3"
  },
  {
    id: 269,
    title: "Nee Dhana Nee Dhana",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778393282/Nee_Dhana_Nee_Dhana_MP3_160K_hqeh7g.mp3"
  },
  {
    id: 270,
    title: "Naan Nee Video Song   Madras   Karthi  Catherine Tresa   Santhosh Narayanan",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff0055",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778393244/Naan_Nee_Video_Song___Madras___Karthi__Catherine_Tresa___Santhosh_Narayanan_MP3_160K_levow5.mp3"
  },
  {
    id: 271,
    title: "Naan Un",
    artist: "Video Song   24 Tamil Movie   Suriya   Samantha   Nithya Menen   A.R. Rahman   Vikram K",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778393240/Naan_Un_-_Video_Song___24_Tamil_Movie___Suriya___Samantha___Nithya_Menen___A.R._Rahman___Vikram_K_MP3_160K_v3wlco.mp3"
  },
  {
    id: 272,
    title: "Naakka Mukka",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778393232/Naakka_Mukka_MP3_160K_sfn82l.mp3"
  },
  {
    id: 273,
    title: "Mustafa Mustafa Song   Kadhal Desam Movie Songs   AR Rahman   Vineeth   Abbas   Tamil Hit Songs 2017",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778393217/Mustafa_Mustafa_Song___Kadhal_Desam_Movie_Songs___AR_Rahman___Vineeth___Abbas___Tamil_Hit_Songs_2017_MP3_160K_rvwfc1.mp3"
  },
  {
    id: 274,
    title: "Minsara Kanavu Movie Songs   Thanga Thamarai Song   Arvind Swamy   Prabhu Deva   Kajol   AR Rahman",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#7700dd",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778393203/Minsara_Kanavu_Movie_Songs___Thanga_Thamarai_Song___Arvind_Swamy___Prabhu_Deva___Kajol___AR_Rahman_MP3_160K_vsvamo.mp3"
  },
  {
    id: 275,
    title: "Minsara Kanavu Tamil Movie Songs   Anbendra Mazhayile Song   Kajol   Prabhu Deva   AR Rahman",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778393185/Minsara_Kanavu_Tamil_Movie_Songs___Anbendra_Mazhayile_Song___Kajol___Prabhu_Deva___AR_Rahman_MP3_160K_lnpoop.mp3"
  },
  {
    id: 276,
    title: "Mudhal Kanave 4K Video",
    artist: "Majunu   Prashanth   Bombay Jayashri   Harish   Vairamuthu   Harris Jayaraj",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778393192/Mudhal_Kanave_4K_Video_-_Majunu___Prashanth___Bombay_Jayashri___Harish___Vairamuthu___Harris_Jayaraj_MP3_160K_vzolrm.mp3"
  },
  {
    id: 277,
    title: "Naa Poondamallitha Video Song   Full HD   Thadaiyara Thakka Movie   L.R.Eswari   Thaman S   Vaali",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#6600cc",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778393172/Naa_Poondamallitha_Video_Song___Full_HD___Thadaiyara_Thakka_Movie___L.R.Eswari___Thaman_S___Vaali_MP3_160K_q3colg.mp3"
  },
  {
    id: 278,
    title: "Mayam Seidhayo",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778393127/Mayam_Seidhayo_MP3_160K_tfk6af.mp3"
  },
  {
    id: 279,
    title: "Meyaadha Maan   Area Gaana",
    artist: "Enga Veetu Kuthuvilakkey Video Song   Vaibhav   Santhosh Narayanan",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778393125/Meyaadha_Maan___Area_Gaana_-_Enga_Veetu_Kuthuvilakkey_Video_Song___Vaibhav___Santhosh_Narayanan_MP3_160K_b4ucam.mp3"
  },
  {
    id: 280,
    title: "Minnale",
    artist: "Venmathi Venmathiye Official Lyrical Video   Harris Jayaraj   Madhavan   Gautham V. Menon",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff0055",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778393123/Minnale_-_Venmathi_Venmathiye_Official_Lyrical_Video___Harris_Jayaraj___Madhavan___Gautham_V._Menon_MP3_160K_tpus4o.mp3"
  },
  {
    id: 281,
    title: "Madura Jilla",
    artist: "Audio Song   Thiruvilaiyaadal Aarambam   Dhanush   Shriya   D Imman",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778393094/Madura_Jilla_-_Audio_Song___Thiruvilaiyaadal_Aarambam___Dhanush___Shriya___D_Imman_MP3_160K_nngocp.mp3"
  },
  {
    id: 282,
    title: "Mei Nigara",
    artist: "Video Song   24 Tamil Movie   Suriya   Samantha   Sid Sriram Jonita Gandhi  A.R. Rahman",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778393094/Mei_Nigara_-_Video_Song___24_Tamil_Movie___Suriya___Samantha___Sid_Sriram_Jonita_Gandhi__A.R._Rahman_MP3_160K_xfgpei.mp3"
  },
  {
    id: 283,
    title: "Maryan",
    artist: "Sonapareeya Video   Dhanush  Parvathy Menon   Rahman",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778393094/Maryan_-_Sonapareeya_Video___Dhanush__Parvathy_Menon___Rahman_MP3_160K_k5dtwm.mp3"
  },
  {
    id: 284,
    title: "Maryan",
    artist: "Naetru Aval Irundhal Video   Dhanush  Parvathy",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#7700dd",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778393067/Maryan_-_Naetru_Aval_Irundhal_Video___Dhanush__Parvathy_MP3_160K_yrd091.mp3"
  },
  {
    id: 285,
    title: "Mascara",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778393059/Mascara_MP3_160K_mmov4h.mp3"
  },
  {
    id: 286,
    title: "Maattrraan",
    artist: "Naani Koni Video Song   Suriya  Kajal Agarwal   Harris Jayaraj",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778393044/Maattrraan_-_Naani_Koni_Video_Song___Suriya__Kajal_Agarwal___Harris_Jayaraj_MP3_160K_bcpjpk.mp3"
  },
  {
    id: 287,
    title: "Maryan",
    artist: "Kadal Raasa Naan Full Video",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#6600cc",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778393036/Maryan_-_Kadal_Raasa_Naan_Full_Video_MP3_160K_pdha7g.mp3"
  },
  {
    id: 288,
    title: "Maryan",
    artist: "Innum Konjam Naeram Video   A. R. Rahman   Dhanush   Super Hit Song",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778393035/Maryan_-_Innum_Konjam_Naeram_Video___A._R._Rahman___Dhanush___Super_Hit_Song_MP3_160K_qdvxlj.mp3"
  },
  {
    id: 289,
    title: "Majunu",
    artist: "Mercury Melae Official Video   Full HD   Harris Jayaraj   Prashanth   Vairamuthu",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778393027/Majunu_-_Mercury_Melae_Official_Video___Full_HD___Harris_Jayaraj___Prashanth___Vairamuthu_MP3_160K_wbhpcs.mp3"
  },
  {
    id: 290,
    title: "Makkayala",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff0055",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778393013/Makkayala_MP3_160K_yf8ptp.mp3"
  },
  {
    id: 291,
    title: "Manogari",
    artist: "4k Video Song   Baahubali",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778393008/Manogari_-_4k_Video_Song___Baahubali_-_The_Beginning_Tamil___Prabhas__Rana__Anushka__Tamannaah_MP3_160K_yzyuch.mp3"
  },
  {
    id: 292,
    title: "Manithan",
    artist: "Aval Video   Udhayanidhi   Santhosh Narayanan",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778393000/Manithan_-_Aval_Video___Udhayanidhi___Santhosh_Narayanan_MP3_160K_lrfpcg.mp3"
  },
  {
    id: 293,
    title: "Manithan",
    artist: "Poi Vazhva Video   Udhayanidhi   Santhosh Narayanan",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392984/Manithan_-_Poi_Vazhva_Video___Udhayanidhi___Santhosh_Narayanan_MP3_160K_zsgxts.mp3"
  },
  {
    id: 294,
    title: "Macha Kannai",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#7700dd",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392970/Macha_Kannai_MP3_160K_w55o9h.mp3"
  },
  {
    id: 295,
    title: "Maattrraan",
    artist: "Naani Koni 8K 4K Video Song   Suriya  Kajal Agarwal   Harris Jayaraj",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392966/Maattrraan_-_Naani_Koni_8K_4K_Video_Song___Suriya__Kajal_Agarwal___Harris_Jayaraj_MP3_160K_vemeyl.mp3"
  },
  {
    id: 296,
    title: "Maara   Yaar Azhaippadhu Video Song   Ghibran   Thamarai   Sid Sriram   Dhilip Kumar",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392966/Maara___Yaar_Azhaippadhu_Video_Song___Ghibran___Thamarai___Sid_Sriram___Dhilip_Kumar_MP3_160K_jqfoia.mp3"
  },
  {
    id: 297,
    title: "Maara   Oh Azhage Video Song   Ghibran   Thamarai   Dhilip Kumar",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#6600cc",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392954/Maara___Oh_Azhage_Video_Song___Ghibran___Thamarai___Dhilip_Kumar_MP3_160K_ccproo.mp3"
  },
  {
    id: 298,
    title: "Kodi",
    artist: "Ei Suzhali Tamil Video   Dhanush  Trisha   Santhosh Narayanan",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392811/Kodi_-_Ei_Suzhali_Tamil_Video___Dhanush__Trisha___Santhosh_Narayanan_MP3_160K_yqgt0k.mp3"
  },
  {
    id: 299,
    title: "Lesa Lesa   Mudhal Mudhalai Video Song   Madhavan  Trisha   Harris Jayaraj   Priyadarshan",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392808/Lesa_Lesa___Mudhal_Mudhalai_Video_Song___Madhavan__Trisha___Harris_Jayaraj___Priyadarshan_MP3_160K_mjl4i4.mp3"
  },
  {
    id: 300,
    title: "Lyrical  Chammak Challo   Ra One   ShahRukh Khan   Kareena Kapoor",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "hindi",
    image: "Playdio icon.png",
    color: "#ff0055",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392807/Lyrical__Chammak_Challo___Ra_One___ShahRukh_Khan___Kareena_Kapoor_MP3_160K_a6hdx4.mp3"
  },
  {
    id: 301,
    title: "Koditta Idangalai Nirappuga   Damukaatlaan Dumukaatalaa Video Song   Shanthanu   Sathya",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392798/Koditta_Idangalai_Nirappuga___Damukaatlaan_Dumukaatalaa_Video_Song___Shanthanu___Sathya_MP3_160K_kzkl8w.mp3"
  },
  {
    id: 302,
    title: "Lutt Le Gaya   Dhurandhar   Ranveer Singh  Akshaye Khanna  Shashwat Sachdev  Simran Choudhary",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "hindi",
    image: "Playdio icon.png",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392797/Lutt_Le_Gaya___Dhurandhar___Ranveer_Singh__Akshaye_Khanna__Shashwat_Sachdev__Simran_Choudhary_MP3_160K_nlfnzz.mp3"
  },
  {
    id: 303,
    title: "Kuru Kuru",
    artist: "Video song   Vathikuchi   Anjali  Dhileban   A.R.Murugadoss   Ghibran   Fox Star Studios",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392786/Kuru_Kuru_-_Video_song___Vathikuchi___Anjali__Dhileban___A.R.Murugadoss___Ghibran___Fox_Star_Studios_MP3_160K_po6plo.mp3"
  },
  {
    id: 304,
    title: "Latoo Full Song   Ghajini   Jiah Khan",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "hindi",
    image: "Playdio icon.png",
    color: "#7700dd",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392783/Latoo_Full_Song___Ghajini___Jiah_Khan_MP3_160K_hftsas.mp3"
  },
  {
    id: 305,
    title: "Kuthu Vilakku    8D    Surrounding effect song    USE HEADPHONES    Thamizh Padam",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392780/Kuthu_Vilakku____8D____Surrounding_effect_song____USE_HEADPHONES____Thamizh_Padam____MP3_160K_e3y2pa.mp3"
  },
  {
    id: 306,
    title: "Kola Kuthu",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392774/Kola_Kuthu_MP3_160K_xoyiko.mp3"
  },
  {
    id: 307,
    title: "Kochadaiiyaan",
    artist: "Idhayam Video   A.R. Rahman   Rajinikanth  Deepika",
    album: "New Additions",
    genre: "hindi",
    image: "Playdio icon.png",
    color: "#6600cc",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392762/Kochadaiiyaan_-_Idhayam_Video___A.R._Rahman___Rajinikanth__Deepika_MP3_160K_zhajw1.mp3"
  },
  {
    id: 308,
    title: "Kochadaiiyaan",
    artist: "Manamaganin Sathiyam Video   A.R. Rahman   Rajinikanth  Deepika",
    album: "New Additions",
    genre: "hindi",
    image: "Playdio icon.png",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392762/Kochadaiiyaan_-_Manamaganin_Sathiyam_Video___A.R._Rahman___Rajinikanth__Deepika_MP3_160K_xdyvbk.mp3"
  },
  {
    id: 309,
    title: "Ko",
    artist: "Amali Thumali Video   Jiiva  Karthika   Harris",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392759/Ko_-_Amali_Thumali_Video___Jiiva__Karthika___Harris_MP3_160K_h328xh.mp3"
  },
  {
    id: 310,
    title: "Karuppa Kooda Va",
    artist: "Lyric Video   Karuppu   Suriya   RJ Balaji    SaiAbhyankkar   VM Mahalingam",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff0055",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392758/Karuppa_Kooda_Va_-_Lyric_Video___Karuppu___Suriya___RJ_Balaji____SaiAbhyankkar___VM_Mahalingam_MP3_160K_juih4x.mp3"
  },
  {
    id: 311,
    title: "Kasu Panam Official Full Video Song   Soodhu Kavvum   Santhosh Narayanan",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392745/Kasu_Panam_Official_Full_Video_Song___Soodhu_Kavvum___Santhosh_Narayanan_MP3_160K_knypdh.mp3"
  },
  {
    id: 312,
    title: "Kannae Kanmaniye 8K   Tere Ishk Mein   Dhanush Kriti   AR Rahman   Aanand L Rai   Bhushan K",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392744/Kannae_Kanmaniye_8K___Tere_Ishk_Mein___Dhanush_Kriti___AR_Rahman___Aanand_L_Rai___Bhushan_K_MP3_160K_yq9yaz.mp3"
  },
  {
    id: 313,
    title: "Kappal",
    artist: "Kaali Pasanga Video   Vaibhav  Sonam Bajwa",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392740/Kappal_-_Kaali_Pasanga_Video___Vaibhav__Sonam_Bajwa_MP3_160K_yliscz.mp3"
  },
  {
    id: 314,
    title: "Karigalan",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#7700dd",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392736/Karigalan_MP3_160K_j8w3vy.mp3"
  },
  {
    id: 315,
    title: "Kadhal Anukkal Official Video Song   Enthiran   Rajinikanth   Aishwarya Rai   A.R.Rahman",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392724/Kadhal_Anukkal_Official_Video_Song___Enthiran___Rajinikanth___Aishwarya_Rai___A.R.Rahman_MP3_160K_yonwf6.mp3"
  },
  {
    id: 316,
    title: "Kadhalum Kadanthu Pogum",
    artist: "Ka Ka Ka Po VIdeo   Vijay Sethupathi   Santhosh Narayanan",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392714/Kadhalum_Kadanthu_Pogum_-_Ka_Ka_Ka_Po_VIdeo___Vijay_Sethupathi___Santhosh_Narayanan_MP3_160K_gnh8xd.mp3"
  },
  {
    id: 317,
    title: "Kakha Kakha",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#6600cc",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392708/Kakha_Kakha_MP3_160K_fu9s0j.mp3"
  },
  {
    id: 318,
    title: "Kanave Kanave Song Video HD",
    artist: "David Movie Tamil 2013   Vikram  Jiiva   Tabu",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392714/Kanave_Kanave_Song_Video_HD_-_David_Movie_Tamil_2013___Vikram__Jiiva___Tabu_MP3_160K_mnaskp.mp3"
  },
  {
    id: 319,
    title: "Kadhalum Kadanthu Pogum",
    artist: "Akkam Pakkam Paar Lyric   Vijay Sethupathi   Santhosh Narayanan",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392700/Kadhalum_Kadanthu_Pogum_-_Akkam_Pakkam_Paar_Lyric___Vijay_Sethupathi___Santhosh_Narayanan_MP3_160K_fw9l7l.mp3"
  },
  {
    id: 320,
    title: "Kaaviyathalaivan",
    artist: "Yaarumilla Video Song   A.R.Rahman   Siddharth   Vedhika",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff0055",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392697/Kaaviyathalaivan_-_Yaarumilla_Video_Song___A.R.Rahman___Siddharth___Vedhika_MP3_160K_hz49ps.mp3"
  },
  {
    id: 321,
    title: "Kadal",
    artist: "Adiye Video   A.R. Rahman",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392680/Kadal_-_Adiye_Video___A.R._Rahman_MP3_160K_fwcjjg.mp3"
  },
  {
    id: 322,
    title: "Kadhalikkum Aasai Video Song 4K   Chellame Songs   Vishal   Reema Sen   AP International",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392678/Kadhalikkum_Aasai_Video_Song_4K___Chellame_Songs___Vishal___Reema_Sen___AP_International_MP3_160K_u7rcrw.mp3"
  },
  {
    id: 323,
    title: "Kadhalikka",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392677/Kadhalikka_MP3_160K_kxwid2.mp3"
  },
  {
    id: 324,
    title: "Kadhal Fail",
    artist: "Lyric Video   Dhanush   Pavish   Anikha   GV Prakash  NEEK",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#7700dd",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392669/Kadhal_Fail_-_Lyric_Video___Dhanush___Pavish___Anikha___GV_Prakash__NEEK_MP3_160K_piwhdl.mp3"
  },
  {
    id: 325,
    title: "Kadal",
    artist: "Moongil Thottam Video   A.R. Rahman",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392657/Kadal_-_Moongil_Thottam_Video___A.R._Rahman_MP3_160K_rhzrpd.mp3"
  },
  {
    id: 326,
    title: "Kadal",
    artist: "Nenjukkule Video Song   A.R. Rahman   Gautham Karthik   Mani Ratnam",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392649/Kadal_-_Nenjukkule_Video_Song___A.R._Rahman___Gautham_Karthik___Mani_Ratnam_MP3_160K_xn8sf8.mp3"
  },
  {
    id: 327,
    title: "Kadavul Ennai Ulagam Nee",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#6600cc",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392648/Kadavul_Ennai_Ulagam_Nee_MP3_160K_mtrrhx.mp3"
  },
  {
    id: 328,
    title: "K For Kabaradakkam",
    artist: "Video Lyrical   Guruvayoorambala Nadayil   Prithviraj   Basil   Asal Kolaar",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392646/K_For_Kabaradakkam_-_Video_Lyrical___Guruvayoorambala_Nadayil___Prithviraj___Basil___Asal_Kolaar_MP3_160K_lffwuf.mp3"
  },
  {
    id: 329,
    title: "Kadal",
    artist: "Magudi Magudi Video   A.R. Rahman",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392617/Kadal_-_Magudi_Magudi_Video___A.R._Rahman_MP3_160K_xhqyhv.mp3"
  },
  {
    id: 330,
    title: "Kaalam Yen Kadhali",
    artist: "Video Song   24 Tamil Movie   Suriya   Samantha   A.R. Rahman   Vikram K Kumar",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff0055",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392616/Kaalam_Yen_Kadhali_-_Video_Song___24_Tamil_Movie___Suriya___Samantha___A.R._Rahman___Vikram_K_Kumar_MP3_160K_en9qoh.mp3"
  },
  {
    id: 331,
    title: "Iru Mugan",
    artist: "Kannai Vittu Tamil Video   Vikram  Nayanthara   Harris",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392496/Iru_Mugan_-_Kannai_Vittu_Tamil_Video___Vikram__Nayanthara___Harris_MP3_160K_rn0rrc.mp3"
  },
  {
    id: 332,
    title: "Imaikkaa Nodigal   Kadhalikathey Video Song   Hiphop Tamizha   Atharvaa  RaashiKhanna",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392492/Imaikkaa_Nodigal___Kadhalikathey_Video_Song___Hiphop_Tamizha___Atharvaa__RaashiKhanna_MP3_160K_gnuqny.mp3"
  },
  {
    id: 333,
    title: "Imaye Imaye",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392491/Imaye_Imaye_MP3_160K_utcp6f.mp3"
  },
  {
    id: 334,
    title: "Inji Iduppazhagaa 1080p",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#7700dd",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392491/Inji_Iduppazhagaa_1080p_MP3_160K_b6unb0.mp3"
  },
  {
    id: 335,
    title: "Jalsa Pannungada   Audio Song   Chennai 600028   Yuvanshankarraja",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392485/Jalsa_Pannungada___Audio_Song___Chennai_600028___Yuvanshankarraja_MP3_160K_dwxiza.mp3"
  },
  {
    id: 336,
    title: "JAIYE SAJANA Video   Dhurandhar The Revenge   Shashwat Sachdev   Satinder Sartaaj   Jasmine Sandlas",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "hindi",
    image: "Playdio icon.png",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392483/JAIYE_SAJANA_Video___Dhurandhar_The_Revenge___Shashwat_Sachdev___Satinder_Sartaaj___Jasmine_Sandlas_MP3_160K_ot6b7y.mp3"
  },
  {
    id: 337,
    title: "Ivan Yaaro 4k Video Song",
    artist: "Minnale   Harris Jayaraj   Madhavan   Reema Sen   Unni Krishnan   Harini",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#6600cc",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392469/Ivan_Yaaro_4k_Video_Song_-_Minnale___Harris_Jayaraj___Madhavan___Reema_Sen___Unni_Krishnan___Harini_MP3_160K_yrcmqh.mp3"
  },
  {
    id: 338,
    title: "Itemkaaran Video Song",
    artist: "Semma Botha Aagathey   Yuvan Shankar Raja   Atharvaa   Badri Venkatesh",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392468/Itemkaaran_Video_Song_-_Semma_Botha_Aagathey___Yuvan_Shankar_Raja___Atharvaa___Badri_Venkatesh_MP3_160K_yi9eyx.mp3"
  },
  {
    id: 339,
    title: "Irumbile Oru Idhaiyam Video Song   Enthiran   Rajinikanth   Aishwarya Rai   A.R.Rahman   Lady Kash",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392451/Irumbile_Oru_Idhaiyam_Video_Song___Enthiran___Rajinikanth___Aishwarya_Rai___A.R.Rahman___Lady_Kash_MP3_160K_tnkuin.mp3"
  },
  {
    id: 340,
    title: "Ishq Jalakar",
    artist: "Karvaan   Dhurandhar   Ranveer Singh  Shashwat Sachdev  Aditya Dhar",
    album: "New Additions",
    genre: "hindi",
    image: "Playdio icon.png",
    color: "#ff0055",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392446/Ishq_Jalakar_-_Karvaan___Dhurandhar___Ranveer_Singh__Shashwat_Sachdev__Aditya_Dhar_MP3_160K_y9gurr.mp3"
  },
  {
    id: 341,
    title: "Irandam Ulagam",
    artist: "Penne Naa Enna Solla Full Video Song",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392396/Irandam_Ulagam_-_Penne_Naa_Enna_Solla_Full_Video_Song_MP3_160K_t8f7sh.mp3"
  },
  {
    id: 342,
    title: "I",
    artist: "Ennodu Nee Irundhaal Video   A. R. Rahman   Vikram  Amy Jackson   Shankar",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392394/I_-_Ennodu_Nee_Irundhaal_Video___A._R._Rahman___Vikram__Amy_Jackson___Shankar_MP3_160K_yb4pw7.mp3"
  },
  {
    id: 343,
    title: "Hey Azhagiya Theeye 4k Video Song   Minnale   Harris Jayaraj   Madhavan   Gautham V Menon",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392392/Hey_Azhagiya_Theeye_4k_Video_Song___Minnale___Harris_Jayaraj___Madhavan___Gautham_V_Menon_MP3_160K_fzagey.mp3"
  },
  {
    id: 344,
    title: "I",
    artist: "Pookkalae Sattru Oyivedungal Video Song   A. R. Rahman   Vikram   Amy Jackson",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#7700dd",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392368/I_-_Pookkalae_Sattru_Oyivedungal_Video_Song___A._R._Rahman___Vikram___Amy_Jackson_MP3_160K_aex7lz.mp3"
  },
  {
    id: 345,
    title: "Engeyum Kaadhal",
    artist: "Engeyum Kaadhal Video   Jayam Ravi  Hansika   Harris",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392365/Engeyum_Kaadhal_-_Engeyum_Kaadhal_Video___Jayam_Ravi__Hansika___Harris_MP3_160K_xivnqa.mp3"
  },
  {
    id: 346,
    title: "Ichu Ichu",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392349/Ichu_Ichu_MP3_160K_fcsm0w.mp3"
  },
  {
    id: 347,
    title: "Full Video  Ek Do Teen Film Version   Baaghi 2   Jacqueline F  Tiger S   Disha P  Ahmed K   Sajid N",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "hindi",
    image: "Playdio icon.png",
    color: "#6600cc",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392337/Full_Video__Ek_Do_Teen_Film_Version___Baaghi_2___Jacqueline_F__Tiger_S___Disha_P__Ahmed_K___Sajid_N_MP3_160K_rcryf4.mp3"
  },
  {
    id: 348,
    title: "Halena 8K 4K Video Song   Iru Mugan   Vikram  Nayanthara   Harris Jayaraj",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392284/Halena_8K_4K_Video_Song___Iru_Mugan___Vikram__Nayanthara___Harris_Jayaraj_MP3_160K_onj19e.mp3"
  },
  {
    id: 349,
    title: "Hamma Hamma Video Song   Bombay Songs   Arvind Swamy   Manisha Koirala   Mani Ratnam   AR Rahman",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392283/Hamma_Hamma_Video_Song___Bombay_Songs___Arvind_Swamy___Manisha_Koirala___Mani_Ratnam___AR_Rahman_MP3_160K_qcudnr.mp3"
  },
  {
    id: 350,
    title: "Gulmohar Malare 4k Video Song   Majunu   Harris Jayaraj   Hariharan   Prashanth   Vairamuthu",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff0055",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392250/Gulmohar_Malare_4k_Video_Song___Majunu___Harris_Jayaraj___Hariharan___Prashanth___Vairamuthu_MP3_160K_up78jc.mp3"
  },
  {
    id: 351,
    title: "Gulmohar Malare 4k Video   Majunu   Hariharan   Prashanth   Vairamuthu   Harris Jayaraj",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392209/Gulmohar_Malare_4k_Video___Majunu___Hariharan___Prashanth___Vairamuthu___Harris_Jayaraj_MP3_160K_jktcgd.mp3"
  },
  {
    id: 352,
    title: "Fevicol Se Full Video Song Dabangg 2 Official Kareena Kapoor Salman Khan",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "hindi",
    image: "Playdio icon.png",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392204/Fevicol_Se_Full_Video_Song_Dabangg_2_Official_Kareena_Kapoor_Salman_Khan_MP3_160K_a8y8dz.mp3"
  },
  {
    id: 353,
    title: "Fear Song   Devara Part",
    artist: "1   NTR   Koratala Siva   Anirudh Ravichander   27 Sep 2024",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392196/Fear_Song___Devara_Part_-_1___NTR___Koratala_Siva___Anirudh_Ravichander___27_Sep_2024_MP3_160K_zltnl8.mp3"
  },
  {
    id: 354,
    title: "Ennai Thedi Kaathal Endra Song   Kadhalikka Neramillai Serial   Vertical Lyric Video   Vijay Antony",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#7700dd",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392175/Ennai_Thedi_Kaathal_Endra_Song___Kadhalikka_Neramillai_Serial___Vertical_Lyric_Video___Vijay_Antony_MP3_160K_ezo7mt.mp3"
  },
  {
    id: 355,
    title: "Ennamo Yeadho 8K 4K Video Song   KO   Jiiva  Karthika   Harris Jayaraj",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392168/Ennamo_Yeadho_8K_4K_Video_Song___KO___Jiiva__Karthika___Harris_Jayaraj_MP3_160K_m6umwv.mp3"
  },
  {
    id: 356,
    title: "Enthaaraa Enthaaraa Official Full Video Song",
    artist: "Thirumanam Enum Nikkah",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392167/Enthaaraa_Enthaaraa_Official_Full_Video_Song_-_Thirumanam_Enum_Nikkah_MP3_160K_gyaswl.mp3"
  },
  {
    id: 357,
    title: "Enna Vilai Azhage Song   Kadhalar Dhinam Tamil Movie Songs   Kunal   Sonali Bendre   AR Rahman",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#6600cc",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392159/Enna_Vilai_Azhage_Song___Kadhalar_Dhinam_Tamil_Movie_Songs___Kunal___Sonali_Bendre___AR_Rahman_MP3_160K_aagw2i.mp3"
  },
  {
    id: 358,
    title: "Engeyum Kaadhal",
    artist: "Thee Illai Video   Jayam Ravi  Hansika   Harris Jayaraj",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392149/Engeyum_Kaadhal_-_Thee_Illai_Video___Jayam_Ravi__Hansika___Harris_Jayaraj_MP3_160K_ax3wry.mp3"
  },
  {
    id: 359,
    title: "Engeyum Kaadhal",
    artist: "Nenjil Nenjil Video   Jayam Ravi  Hansika   Harris",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778392137/Engeyum_Kaadhal_-_Nenjil_Nenjil_Video___Jayam_Ravi__Hansika___Harris_MP3_160K_kinoa3.mp3"
  },
  {
    id: 360,
    title: "DILBAR Lyrical   Satyameva Jayate  John Abraham  Nora Fatehi Tanishk B  Neha Kakkar Dhvani  Ikka",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "hindi",
    image: "Playdio icon.png",
    color: "#ff0055",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778391975/DILBAR_Lyrical___Satyameva_Jayate__John_Abraham__Nora_Fatehi_Tanishk_B__Neha_Kakkar_Dhvani__Ikka_MP3_160K_kxnfwx.mp3"
  },
  {
    id: 361,
    title: "Endrendrum Punnagai",
    artist: "Ennai Saaithaalae Video   Harris Jayaraj   Jiiva  Trisha",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778391971/Endrendrum_Punnagai_-_Ennai_Saaithaalae_Video___Harris_Jayaraj___Jiiva__Trisha_MP3_160K_qiesic.mp3"
  },
  {
    id: 362,
    title: "Endrendrum Punnagai",
    artist: "Ennai Saaithaalae 8K 4K Video Song   Jiiva  Trisha   Harris Jayaraj",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778391971/Endrendrum_Punnagai_-_Ennai_Saaithaalae_8K_4K_Video_Song___Jiiva__Trisha___Harris_Jayaraj_MP3_160K_howfax.mp3"
  },
  {
    id: 363,
    title: "Edhirthu Nill From  Biriyani",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778391927/Edhirthu_Nill_From__Biriyani__MP3_160K_qixuxe.mp3"
  },
  {
    id: 364,
    title: "En Rant Ah Konjam Kelu   Acoustic Version   Vaisagh   Vignesh Srikanth   Judah   Pinto",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#7700dd",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778391915/En_Rant_Ah_Konjam_Kelu___Acoustic_Version___Vaisagh___Vignesh_Srikanth___Judah___Pinto_MP3_160K_vqyydu.mp3"
  },
  {
    id: 365,
    title: "Endhira Logathu Sundariye Video Song",
    artist: "2.0 Tamil   Rajinikanth   Shankar   A.R. Rahman",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778391902/Endhira_Logathu_Sundariye_Video_Song_-_2.0_Tamil___Rajinikanth___Shankar___A.R._Rahman_MP3_160K_v1xlgj.mp3"
  },
  {
    id: 366,
    title: "Doley",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778391901/Doley_MP3_160K_bfdcf0.mp3"
  },
  {
    id: 367,
    title: "Dhimu Dhimu",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#6600cc",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778391897/Dhimu_Dhimu_MP3_160K_sztlcp.mp3"
  },
  {
    id: 368,
    title: "Dhurandhar The Revenge",
    artist: "AARI AARI Video   Ranveer Singh   Shashwat Sachdev Bombay Rockers Aditya D",
    album: "New Additions",
    genre: "hindi",
    image: "Playdio icon.png",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778391876/Dhurandhar_The_Revenge_-_AARI_AARI_Video___Ranveer_Singh___Shashwat_Sachdev_Bombay_Rockers_Aditya_D_MP3_160K_xbs0wd.mp3"
  },
  {
    id: 369,
    title: "Chillax",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778391875/Chillax_MP3_160K__1_uziu3z.mp3"
  },
  {
    id: 370,
    title: "AR Rahman Hit Songs   En Veetu Thotathil Video Song   Gentleman Tamil Movie   Arjun   Madhoo",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff0055",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778391870/AR_Rahman_Hit_Songs___En_Veetu_Thotathil_Video_Song___Gentleman_Tamil_Movie___Arjun___Madhoo_MP3_160K_stbrb0.mp3"
  },
  {
    id: 371,
    title: "Dhurandhar",
    artist: "Title Track   Ranveer Singh  Shashwat Sachdev  Hanumankind  Jasmine Sandlas Aditya Dhar",
    album: "New Additions",
    genre: "hindi",
    image: "Playdio icon.png",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778391865/Dhurandhar_-_Title_Track___Ranveer_Singh__Shashwat_Sachdev__Hanumankind__Jasmine_Sandlas_Aditya_Dhar_MP3_160K_c7ibti.mp3"
  },
  {
    id: 372,
    title: "Chillax",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778391860/Chillax_MP3_160K_vfzliv.mp3"
  },
  {
    id: 373,
    title: "Chikni Chameli",
    artist: "8K 4k Music Video   Katrina Kaif  Hrithik   Agneepath   Shreya Ghoshal   Ajay-Atul",
    album: "New Additions",
    genre: "hindi",
    image: "Playdio icon.png",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778391859/Chikni_Chameli_-_8K_4k_Music_Video___Katrina_Kaif__Hrithik___Agneepath___Shreya_Ghoshal___Ajay-Atul_MP3_160K_wilyog.mp3"
  },
  {
    id: 374,
    title: "AR Rahman Hits   Ottagathai Kattiko Video Song   Gentleman Tamil Movie   Arjun   Madhoo   AR Rahman",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#7700dd",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778391847/AR_Rahman_Hits___Ottagathai_Kattiko_Video_Song___Gentleman_Tamil_Movie___Arjun___Madhoo___AR_Rahman_MP3_160K_qsye8y.mp3"
  },
  {
    id: 375,
    title: "Bombay Ponnu",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778391844/Bombay_Ponnu_MP3_160K_wkqmfr.mp3"
  },
  {
    id: 376,
    title: "AR Rahman Hit Songs   Chikku Bukku Video Song   Gentleman Tamil Movie   Arjun   Prabhu Deva   Madhoo",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778391839/AR_Rahman_Hit_Songs___Chikku_Bukku_Video_Song___Gentleman_Tamil_Movie___Arjun___Prabhu_Deva___Madhoo_MP3_160K_ry9adn.mp3"
  },
  {
    id: 377,
    title: "Arima Arima Official Video Song   Enthiran   Rajinikanth   Aishwarya Rai   A.R.Rahman",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#6600cc",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778391833/Arima_Arima_Official_Video_Song___Enthiran___Rajinikanth___Aishwarya_Rai___A.R.Rahman_MP3_160K_pjhwme.mp3"
  },
  {
    id: 378,
    title: "AR Rahman Hits   Kadhalenum Thervezhudhi Video Song   Kadhalar Dhinam Songs   Kunal   Sonali Bendre",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778391833/AR_Rahman_Hits___Kadhalenum_Thervezhudhi_Video_Song___Kadhalar_Dhinam_Songs___Kunal___Sonali_Bendre_MP3_160K_istsa8.mp3"
  },
  {
    id: 379,
    title: "AR Rahman Hit Songs   Soniya Soniya Video Song   Ratchagan Tamil Movie   Nagarjuna   Sushmita Sen",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778391813/AR_Rahman_Hit_Songs___Soniya_Soniya_Video_Song___Ratchagan_Tamil_Movie___Nagarjuna___Sushmita_Sen_MP3_160K_bwmtfp.mp3"
  },
  {
    id: 380,
    title: "AR Rahman Hits   Dandiya Aatamum Aada Song   Kadhalar Dhinam Video Songs   Kunal   Sonali Bendre",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff0055",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778391811/AR_Rahman_Hits___Dandiya_Aatamum_Aada_Song___Kadhalar_Dhinam_Video_Songs___Kunal___Sonali_Bendre_MP3_160K_zoo5rm.mp3"
  },
  {
    id: 381,
    title: "Anbe En Anbe",
    artist: "4K Video Song   அன்பே என் அன்பே   Dhaam Dhoom   Jayam Ravi   Kangana   Harris Jayaraj",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778391805/Anbe_En_Anbe_-_4K_Video_Song___%E0%AE%85%E0%AE%A9%E0%AF%8D%E0%AE%AA%E0%AF%87_%E0%AE%8E%E0%AE%A9%E0%AF%8D_%E0%AE%85%E0%AE%A9%E0%AF%8D%E0%AE%AA%E0%AF%87___Dhaam_Dhoom___Jayam_Ravi___Kangana___Harris_Jayaraj_MP3_160K_wjny2y.mp3"
  },
  {
    id: 382,
    title: "Anegan",
    artist: "Roja Kadale Lyric   Dhanush   Harris Jayaraj",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778391804/Anegan_-_Roja_Kadale_Lyric___Dhanush___Harris_Jayaraj_MP3_160K_lakrpj.mp3"
  },
  {
    id: 383,
    title: "AR Rahman Hit Songs   Usalampatti Penkutti Song   Gentleman Tamil Movie   Arjun   Madhoo   AR Rahman",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778391782/AR_Rahman_Hit_Songs___Usalampatti_Penkutti_Song___Gentleman_Tamil_Movie___Arjun___Madhoo___AR_Rahman_MP3_160K_afqrqj.mp3"
  },
  {
    id: 384,
    title: "AR Rahman Hit Songs   Ennai Kaanavillaye Song   Kadhal Desam Tamil Movie   Vineeth   Tabu   Abbas",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#7700dd",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778391765/AR_Rahman_Hit_Songs___Ennai_Kaanavillaye_Song___Kadhal_Desam_Tamil_Movie___Vineeth___Tabu___Abbas_MP3_160K_tr94ky.mp3"
  },
  {
    id: 385,
    title: "Allah",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778391764/Allah_MP3_160K_sappmb.mp3"
  },
  {
    id: 386,
    title: "Aasal Tamil Movie   Yea Dushyantha Song   Ajith Kumar   Sameera Reddy   Bhavana   Bharathwaj",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778390682/Aasal_Tamil_Movie___Yea_Dushyantha_Song___Ajith_Kumar___Sameera_Reddy___Bhavana___Bharathwaj_MP3_160K_sswxvy.mp3"
  },
  {
    id: 387,
    title: "Aanandha Thaandavam",
    artist: "Kanaa Kaangiren Video   G.V. Prakash Kumar   Rukmini Vijayakumar",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#6600cc",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778390682/Aanandha_Thaandavam_-_Kanaa_Kaangiren_Video___G.V._Prakash_Kumar___Rukmini_Vijayakumar_MP3_160K_zjo1or.mp3"
  },
  {
    id: 388,
    title: "Aayitha Ezhuthu",
    artist: "Yaakkai Thiri Tamil Lyric Video   A.R. Rahman",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778390675/Aayitha_Ezhuthu_-_Yaakkai_Thiri_Tamil_Lyric_Video___A.R._Rahman_MP3_160K_xhtvia.mp3"
  },
  {
    id: 389,
    title: "Agasatha Official Full Song with Lyrics   Cuckoo   Dinesh  Malavika",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778390659/Agasatha_Official_Full_Song_with_Lyrics___Cuckoo___Dinesh__Malavika_MP3_160K_ke8wbg.mp3"
  },
  {
    id: 390,
    title: "Agayam Theepiditha Official Full Video Song   Madras   Karthi  Catherine Tresa   Santhosh Narayanan",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff0055",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778390654/Agayam_Theepiditha_Official_Full_Video_Song___Madras___Karthi__Catherine_Tresa___Santhosh_Narayanan_MP3_160K_syejd4.mp3"
  },
  {
    id: 391,
    title: "Afghan Jalebi Ya Baba FULL VIDEO Song   Phantom   Saif Ali Khan Katrina Kaif Pritam Asrar T-Series",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "hindi",
    image: "Playdio icon.png",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778390639/Afghan_Jalebi_Ya_Baba_FULL_VIDEO_Song___Phantom___Saif_Ali_Khan_Katrina_Kaif_Pritam_Asrar_T-Series_MP3_160K_i6lfuo.mp3"
  },
  {
    id: 392,
    title: "Aadhavan",
    artist: "Damakku Damakku Video   Suriya",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778390638/Aadhavan_-_Damakku_Damakku_Video___Suriya_MP3_160K_odswjb.mp3"
  },
  {
    id: 393,
    title: "Achacho",
    artist: "Video Song   Aranmanai 4   Sundar.C   Tamannaah   Raashii Khanna   Hiphop Tamizha",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#ff9900",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778390629/Achacho_-_Video_Song___Aranmanai_4___Sundar.C___Tamannaah___Raashii_Khanna___Hiphop_Tamizha_MP3_160K_u2h6he.mp3"
  },
  {
    id: 394,
    title: "Aadi Pona Aavani",
    artist: "Video Song   Attakathi   Dinesh   Nandita   Santhosh Narayanan   Pa. Ranjith",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#7700dd",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778390619/Aadi_Pona_Aavani_-_Video_Song___Attakathi___Dinesh___Nandita___Santhosh_Narayanan___Pa._Ranjith_MP3_160K_npsfz1.mp3"
  },
  {
    id: 395,
    title: "7 Aum Arivu",
    artist: "Innum Enna Thozha Tamil Lyric   Suriya   Harris",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#4a00a0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778390538/7_Aum_Arivu_-_Innum_Enna_Thozha_Tamil_Lyric___Suriya___Harris_MP3_160K_e5wsri.mp3"
  },
  {
    id: 396,
    title: "7G Rainbow Colony Movie Songs   Kanpesum Vaarthaigal Video Song   Ravi Krishna   Sonia Agarwal",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#1db954",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778390529/7G_Rainbow_Colony_Movie_Songs___Kanpesum_Vaarthaigal_Video_Song___Ravi_Krishna___Sonia_Agarwal_MP3_160K_i8xqev.mp3"
  },
  {
    id: 397,
    title: "7 Aum Arivu",
    artist: "Yellae Lama Video   Suriya  Shruti   Harris Jayaraj",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#6600cc",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778390525/7_Aum_Arivu_-_Yellae_Lama_Video___Suriya__Shruti___Harris_Jayaraj_MP3_160K_oofd4u.mp3"
  },
  {
    id: 398,
    title: "Aa Re Pritam Pyaare",
    artist: "Lyrical Video   Rowdy Rathore   Akshay Kumar   Mamta Sharma   Sajid Wajid",
    album: "New Additions",
    genre: "hindi",
    image: "Playdio icon.png",
    color: "#8800ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778390499/Aa_Re_Pritam_Pyaare_-_Lyrical_Video___Rowdy_Rathore___Akshay_Kumar___Mamta_Sharma___Sajid_Wajid_MP3_160K_xpjywm.mp3"
  },
  {
    id: 399,
    title: "Dil Mera Muft Ka  Full Song   Agent Vinod   Saif Ali Khan  Kareena Kapoor   Pritam",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "hindi",
    image: "Playdio icon.png",
    color: "#cc0066",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778390498/_Dil_Mera_Muft_Ka__Full_Song___Agent_Vinod___Saif_Ali_Khan__Kareena_Kapoor___Pritam_MP3_160K_sibnon.mp3"
  },
  {
    id: 400,
    title: "Sun Raha Hai Na Tu Female Version  By Shreya Ghoshal Aashiqui 2 Full Video Song",
    artist: "Unknown Artist",
    album: "New Additions",
    genre: "hindi",
    image: "Playdio icon.png",
    color: "#ff0055",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778390484/_Sun_Raha_Hai_Na_Tu_Female_Version__By_Shreya_Ghoshal_Aashiqui_2_Full_Video_Song___MP3_160K_vhardb.mp3"
  },
  {
    id: 401,
    title: "Tum Hi Ho Aashiqui 2  Full Video Song HD   Aditya Roy Kapur  Shraddha Kapoor   Music",
    artist: "Mithoon",
    album: "New Additions",
    genre: "hindi",
    image: "Playdio icon.png",
    color: "#5500b0",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778390478/_Tum_Hi_Ho_Aashiqui_2__Full_Video_Song_HD___Aditya_Roy_Kapur__Shraddha_Kapoor___Music_-_Mithoon_MP3_160K_lriuqa.mp3"
  },
  {
    id: 402,
    title: "SaiAbhyankkar",
    artist: "Pavazha Malli Music Video   Kayadu   Shruti Haasan   Vivek   Thejo   Think Indie",
    album: "New Additions",
    genre: "tamil",
    image: "Playdio icon.png",
    color: "#00b3ff",
    url: "https://res.cloudinary.com/dm3ukfn9c/video/upload/v1778390472/_SaiAbhyankkar_-_Pavazha_Malli_Music_Video___Kayadu___Shruti_Haasan___Vivek___Thejo___Think_Indie_MP3_160K_xzj5ji.mp3"
  }
];

const PLAYLISTS = {
  tamil:     SONGS.filter(s => s.genre === 'tamil').map(s => s.id),
  bollywood: SONGS.filter(s => s.genre === 'hindi').map(s => s.id),
  all:       SONGS.map(s => s.id)
};

// ── STATE ──────────────────────────────────────────────────────────────────
let currentIndex = -1;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0=off 1=all 2=one
let likedSongs = new Set();
let queueOpen = false;
let activeFilter = 'all';
let history = [...SONGS.map(s => s.id)];
let historyPos = -1;

const audio = document.getElementById('audio-engine');

// ── INIT ───────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildQuickGrid();
  buildFeaturedGrid();
  buildLibrary();
  buildQueue();
  updateVolume(80);
  setupDrag();

  // Restore State
  const savedSection = localStorage.getItem('activeSection');
  if (savedSection) {
    const navEl = document.getElementById('nav-' + savedSection);
    if (navEl) showSection(savedSection, navEl);
  }

  const savedSongId = localStorage.getItem('currentSongId');
  const savedTime = localStorage.getItem('currentTime');
  if (savedSongId !== null) {
    playTrack(parseInt(savedSongId, 10), parseFloat(savedTime) || 0);
  }

  // Register PWA Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
});

// ── SECTION NAV ────────────────────────────────────────────────────────────
function showSection(name, el) {
  document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
  document.getElementById('section-' + name).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  if (el) el.classList.add('active');
  localStorage.setItem('activeSection', name);
}

// ── BUILD UI ───────────────────────────────────────────────────────────────
function buildQuickGrid() {
  const grid = document.getElementById('quick-grid');
  const items = [
    { label: 'Tamil Songs', emoji: '🎵', playlist: 'tamil' },
    { label: 'Bollywood', emoji: '🔥', playlist: 'bollywood' },
    { label: 'All Songs', emoji: '🎧', playlist: 'all' },
    { label: 'Tamil Love', emoji: '💜', playlist: 'tamil' },
    { label: 'Top Picks', emoji: '⭐', playlist: 'all' },
    { label: 'Mood Mix', emoji: '🌙', playlist: 'tamil' }
  ];
  grid.innerHTML = items.map(it => `
    <div class="quick-card" onclick="loadPlaylist('${it.playlist}')">
      <div class="quick-card-art" style="background:linear-gradient(135deg,#4a00a0,#bf00ff)">
        <span>${it.emoji}</span>
      </div>
      <span class="quick-card-title">${it.label}</span>
    </div>
  `).join('');
}

function buildFeaturedGrid() {
  const grid = document.getElementById('featured-grid');
  grid.innerHTML = SONGS.slice(0, 12).map(song => trackCard(song, true)).join('');
}



function trackCard(song, showBtn) {
  return `
    <div class="track-card" onclick="playTrack(${song.id})" id="card-${song.id}">
      <div class="track-card-art" style="background:linear-gradient(135deg,${song.color},#bf00ff)">
        <img src="${song.image || 'Playdio icon.png'}" alt="art" style="width:100%;height:100%;object-fit:cover;border-radius:6px;" />
        <button class="track-play-btn" onclick="event.stopPropagation();playTrack(${song.id})">
          <i class="fas fa-play"></i>
        </button>
      </div>
      <div class="track-card-title">${song.title}</div>
      <div class="track-card-artist">${song.artist}</div>
    </div>`;
}

function buildLibrary(filter) {
  filter = filter || 'all';
  const list = document.getElementById('library-list');
  const visible = SONGS.filter(s => filter === 'all' || s.genre === filter);
  list.innerHTML = visible.map((song, i) => `
    <div class="track-row${currentIndex === song.id ? ' playing' : ''}" onclick="playTrack(${song.id})" id="row-${song.id}">
      <div class="track-num">${currentIndex === song.id ? '<i class="fas fa-volume-up" style="color:var(--purple-400);font-size:.7rem"></i>' : i + 1}</div>
      <div class="track-row-info">
        <div class="track-row-img" style="background:linear-gradient(135deg,${song.color},#bf00ff)">
          <img src="${song.image || 'Playdio icon.png'}" alt="art" style="width:100%;height:100%;object-fit:cover;border-radius:4px;" />
        </div>
        <div>
          <div class="track-row-name">${song.title}</div>
          <div class="track-row-artist">${song.artist}</div>
        </div>
      </div>
      <div class="track-row-album">${song.album}</div>
      <div class="track-row-dur" id="dur-${song.id}">--:--</div>
    </div>`).join('');

  // Removed preloadDuration to fix severe performance drop due to 146 concurrent HTTP requests
}

function preloadDuration(song) {
  // Disabled
}

function buildQueue() {
  const list = document.getElementById('queue-list');
  list.innerHTML = SONGS.map((song, i) => `
    <div class="queue-item${currentIndex === song.id ? ' active' : ''}" onclick="playTrack(${song.id})" id="q-${song.id}">
      <div class="queue-item-num">${i + 1}</div>
      <div class="queue-item-info">
        <div class="queue-item-title">${song.title}</div>
        <div class="queue-item-artist">${song.artist}</div>
      </div>
    </div>`).join('');
}

// ── PLAYBACK ───────────────────────────────────────────────────────────────
function playTrack(id, restoreTime = 0) {
  const song = SONGS.find(s => s.id === id);
  if (!song) return;

  currentIndex = id;
  localStorage.setItem('currentSongId', id);
  audio.src = song.url;
  if (restoreTime > 0) {
    audio.currentTime = restoreTime;
  }
  audio.play().catch(() => showToast('Playback blocked – tap again'));
  isPlaying = true;

  updatePlayerUI(song);
  buildLibrary(activeFilter);
  buildQueue();
  spinVinyl(true);

  // highlight active card
  document.querySelectorAll('.track-card').forEach(c => c.style.outline = '');
  const card = document.getElementById('card-' + id);
  if (card) { card.style.outline = '2px solid var(--purple-400)'; card.style.outlineOffset = '2px'; }
}

function togglePlay() {
  if (currentIndex === -1) { playTrack(0); return; }
  if (isPlaying) { audio.pause(); isPlaying = false; spinVinyl(false); }
  else { audio.play(); isPlaying = true; spinVinyl(true); }
  updatePlayIcon();
}

function prevTrack() {
  if (audio.currentTime > 3) { audio.currentTime = 0; return; }
  const ids = SONGS.filter(s => activeFilter === 'all' || s.genre === activeFilter).map(s => s.id);
  const cur = ids.indexOf(currentIndex);
  if (cur === -1) { playTrack(ids[0] || 0); return; }
  const prev = (cur - 1 + ids.length) % ids.length;
  playTrack(ids[prev]);
}

function nextTrack() {
  if (currentIndex === -1) { 
    const startIds = SONGS.filter(s => activeFilter === 'all' || s.genre === activeFilter).map(s => s.id);
    playTrack(startIds[0] || 0); 
    return; 
  }
  const ids = SONGS.filter(s => activeFilter === 'all' || s.genre === activeFilter).map(s => s.id);
  let nextId;
  const cur = ids.indexOf(currentIndex);
  
  if (isShuffle) {
    const others = ids.filter(id => id !== currentIndex);
    nextId = others.length ? others[Math.floor(Math.random() * others.length)] : currentIndex;
  } else {
    if (cur === -1) { nextId = ids[0] || 0; }
    else {
      nextId = ids[(cur + 1) % ids.length];
    }
  }
  playTrack(nextId);
}

function toggleShuffle() {
  isShuffle = !isShuffle;
  document.getElementById('btn-shuffle').classList.toggle('active', isShuffle);
  showToast(isShuffle ? 'Shuffle on 🔀' : 'Shuffle off');
}

function toggleRepeat() {
  repeatMode = (repeatMode + 1) % 3;
  const btn = document.getElementById('btn-repeat');
  btn.classList.toggle('active', repeatMode > 0);
  const icons = ['fa-redo', 'fa-redo', 'fa-redo'];
  const labels = ['Repeat off', 'Repeat all 🔁', 'Repeat one 🔂'];
  showToast(labels[repeatMode]);
}

function toggleLike() {
  if (currentIndex === -1) return;
  const btn = document.getElementById('heart-btn');
  if (likedSongs.has(currentIndex)) {
    likedSongs.delete(currentIndex);
    btn.classList.remove('liked');
    btn.innerHTML = '<i class="far fa-heart"></i>';
    showToast('Removed from Liked Songs');
  } else {
    likedSongs.add(currentIndex);
    btn.classList.add('liked');
    btn.innerHTML = '<i class="fas fa-heart"></i>';
    showToast('Added to Liked Songs 💜');
  }
}

function toggleMute() {
  audio.muted = !audio.muted;
  const btn = document.getElementById('btn-mute');
  btn.querySelector('i').className = audio.muted ? 'fas fa-volume-mute' : 'fas fa-volume-up';
}

function setVolume(val) {
  audio.volume = val / 100;
  updateVolume(val);
}

function updateVolume(val) {
  audio.volume = val / 100;
  const btn = document.getElementById('btn-mute');
  if (btn) {
    const icon = btn.querySelector('i');
    if (val == 0) icon.className = 'fas fa-volume-mute';
    else if (val < 50) icon.className = 'fas fa-volume-down';
    else icon.className = 'fas fa-volume-up';
  }
  // style the range track
  const slider = document.getElementById('volume-slider');
  if (slider) {
    slider.style.background = `linear-gradient(90deg, var(--purple-500) ${val}%, rgba(255,255,255,.15) ${val}%)`;
  }
}

// audio events
audio.addEventListener('timeupdate', () => {
  if (!audio.duration) return;
  localStorage.setItem('currentTime', audio.currentTime);
  const pct = (audio.currentTime / audio.duration) * 100;
  
  // Update desktop bar
  const df = document.getElementById('progress-fill');
  const dt = document.getElementById('progress-thumb');
  if (df) df.style.width = pct + '%';
  if (dt) dt.style.left = pct + '%';
  document.getElementById('current-time').textContent = formatTime(audio.currentTime);

  // Sync FS player
  const ff = document.getElementById('fs-progress-fill');
  const ft = document.getElementById('fs-progress-thumb');
  if (ff) ff.style.width = pct + '%';
  if (ft) ft.style.left = pct + '%';
  const fct = document.getElementById('fs-current-time');
  if (fct) fct.textContent = formatTime(audio.currentTime);

  // sync mini progress
  const mf = document.getElementById('mini-progress-fill');
  if (mf) mf.style.width = pct + '%';
});

audio.addEventListener('loadedmetadata', () => {
  document.getElementById('total-time').textContent = formatTime(audio.duration);
  const ft = document.getElementById('fs-total-time');
  if (ft) ft.textContent = formatTime(audio.duration);
});

audio.addEventListener('ended', () => {
  if (repeatMode === 2) { audio.currentTime = 0; audio.play(); }
  else nextTrack();
});

audio.addEventListener('play', () => { isPlaying = true; updatePlayIcon(); spinVinyl(true); });
audio.addEventListener('pause', () => { isPlaying = false; updatePlayIcon(); spinVinyl(false); });

function seekTrack(e) {
  if (!audio.duration) return;
  const bar = e.currentTarget || document.getElementById('progress-bar');
  const rect = bar.getBoundingClientRect();
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
  audio.currentTime = pct * audio.duration;
}

// drag seek
function setupDrag() {
  const bars = [document.getElementById('progress-bar'), document.getElementById('fs-progress-bar')];
  let dragging = false;

  bars.forEach(bar => {
    if (!bar) return;
    
    // Mouse
    bar.addEventListener('mousedown', e => { dragging = true; seekTrack(e); });
    
    // Touch
    bar.addEventListener('touchstart', e => { dragging = true; seekTrack(e); }, { passive: false });
  });

  document.addEventListener('mousemove', e => { if (dragging) seekTrack(e); });
  document.addEventListener('touchmove', e => { 
    if (dragging) {
      e.preventDefault(); // prevent scroll while seeking
      seekTrack(e);
    }
  }, { passive: false });

  document.addEventListener('mouseup', () => { dragging = false; });
  document.addEventListener('touchend', () => { dragging = false; });
}

// ── PLAYLIST LOADER ────────────────────────────────────────────────────────
function loadPlaylist(name) {
  document.querySelectorAll('.playlist-item').forEach(el => el.classList.remove('active-playlist'));
  if (event && event.currentTarget) event.currentTarget.classList.add('active-playlist');
  
  const ids = PLAYLISTS[name] || PLAYLISTS.all;
  
  // Sync library filter
  const filterMap = { 'tamil': 'tamil', 'bollywood': 'hindi', 'all': 'all' };
  const filterBtnIdx = { 'all': 0, 'tamil': 1, 'bollywood': 2 };
  const filterVal = filterMap[name] || 'all';
  const btns = document.querySelectorAll('.filter-btn');
  if (btns.length > 0) {
    filterLib(filterVal, btns[filterBtnIdx[name] || 0]);
  }
  
  showSection('library', document.getElementById('nav-library'));
  
  if (ids.length) {
    // Just show the library, don't auto-play
    // playTrack(ids[0]); 
  }
}

// ── SEARCH ─────────────────────────────────────────────────────────────────
function liveSearch(query) {
  const results = document.getElementById('search-results');
  if (!query.trim()) { results.innerHTML = '<p class="search-hint">Type above to search…</p>'; return; }
  const q = query.toLowerCase();
  const matches = SONGS.filter(s =>
    s.title.toLowerCase().includes(q) ||
    s.artist.toLowerCase().includes(q) ||
    s.album.toLowerCase().includes(q)
  );
  if (!matches.length) { results.innerHTML = '<p class="search-hint">No results found.</p>'; return; }
  results.innerHTML = `<div class="search-grid">${matches.map(s => trackCard(s, true)).join('')}</div>`;
  showSection('search', document.getElementById('nav-search'));
}

// hook the topbar search to also switch section
document.getElementById('global-search').addEventListener('focus', () => {
  showSection('search', document.getElementById('nav-search'));
});

// ── FILTER LIBRARY ─────────────────────────────────────────────────────────
function filterLib(filter, btn) {
  activeFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  buildLibrary(filter);
}

// ── QUEUE PANEL ────────────────────────────────────────────────────────────
function toggleQueue() {
  queueOpen = !queueOpen;
  document.getElementById('queue-panel').classList.toggle('open', queueOpen);
  document.getElementById('btn-queue').classList.toggle('active', queueOpen);
}

// ── CREATE PLAYLIST (demo) ─────────────────────────────────────────────────
function createPlaylist() {
  const name = prompt('Playlist name:');
  if (!name) return;
  const li = document.createElement('li');
  li.className = 'playlist-item';
  li.textContent = '🎵 ' + name;
  li.onclick = () => loadPlaylist('all');
  document.getElementById('playlist-list').appendChild(li);
  showToast(`"${name}" created!`);
}

// ── UPDATE PLAYER UI ───────────────────────────────────────────────────────
// ── BOTTOM NAV HELPER ──────────────────────────────────────────────────────
function setBNav(el) {
  document.querySelectorAll('.bottom-nav-item').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

function updatePlayerUI(song) {
  document.getElementById('player-title').textContent = song.title;
  document.getElementById('player-artist').textContent = song.artist;
  document.getElementById('play-icon').className = 'fas fa-pause';
  document.title = `${song.title} – Playdio`;

  // ── sync full screen player ──
  const fsPlayer = document.getElementById('fs-player');
  if (fsPlayer) {
    const fsTitle = document.getElementById('fs-title');
    const fsArtist = document.getElementById('fs-artist');
    const fsArt = document.getElementById('fs-art');
    const fsHeart = document.querySelector('.fs-heart');
    if (fsTitle) fsTitle.textContent = song.title;
    if (fsArtist) fsArtist.textContent = song.artist;
    if (fsArt) fsArt.src = song.image || 'Playdio icon.png';
    if (fsHeart) {
      if (likedSongs.has(song.id)) fsHeart.classList.add('liked');
      else fsHeart.classList.remove('liked');
    }
  }

  // ── sync mini player ──
  const mini = document.getElementById('mini-player');
  if (mini) {
    mini.classList.add('show');
    mini.onclick = (e) => {
      // Don't open if a button inside was clicked
      if (e.target.closest('.mini-ctrl')) return;
      toggleFSPlayer();
    };
    const miniTitle = document.getElementById('mini-title');
    const miniArtist = document.getElementById('mini-artist');
    const miniArt = document.getElementById('mini-art');
    if (miniTitle) miniTitle.textContent = song.title;
    if (miniArtist) miniArtist.textContent = song.artist;
    if (miniArt) miniArt.innerHTML = `<img src="${song.image || 'Playdio icon.png'}" alt="art" style="width:100%;height:100%;object-fit:cover;border-radius:8px;" />`;
    miniArt.style.background = `linear-gradient(135deg,${song.color},#bf00ff)`;
  }

  // art background tint
  const art = document.getElementById('player-art');
  art.style.background = `linear-gradient(135deg,${song.color},#bf00ff)`;
  document.getElementById('player-art-img').src = song.image || 'Playdio icon.png';

  // like state
  const heartBtn = document.getElementById('heart-btn');
  if (likedSongs.has(song.id)) {
    heartBtn.classList.add('liked');
    heartBtn.innerHTML = '<i class="fas fa-heart"></i>';
  } else {
    heartBtn.classList.remove('liked');
    heartBtn.innerHTML = '<i class="far fa-heart"></i>';
  }

  // vinyl color
  document.getElementById('vinyl-hero').style.background = `linear-gradient(135deg,${song.color},#0a0010)`;
}

function updatePlayIcon() {
  const icon = isPlaying ? 'fas fa-pause' : 'fas fa-play';
  document.getElementById('play-icon').className = icon;
  const miniIcon = document.getElementById('mini-play-icon');
  if (miniIcon) miniIcon.className = icon;
  const fsIcon = document.getElementById('fs-play-icon');
  if (fsIcon) fsIcon.className = icon;
}

function spinVinyl(on) {
  const v = document.getElementById('vinyl-hero');
  if (on) v.classList.add('spinning');
  else v.classList.remove('spinning');
}

// ── FULLSCREEN ─────────────────────────────────────────────────────────────
let fsPlayerOpen = false;
function toggleFSPlayer() {
  fsPlayerOpen = !fsPlayerOpen;
  document.getElementById('fs-player').classList.toggle('active', fsPlayerOpen);
}

function toggleFullscreen() {
  if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(() => { });
  else document.exitFullscreen();
}

// ── TOAST ──────────────────────────────────────────────────────────────────
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2500);
}

// ── UTILS ──────────────────────────────────────────────────────────────────
function formatTime(s) {
  if (!s || isNaN(s)) return '0:00';
  const m = Math.floor(s / 60);
  const sec = String(Math.floor(s % 60)).padStart(2, '0');
  return `${m}:${sec}`;
}

// ── KEYBOARD SHORTCUTS ─────────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  const tag = document.activeElement.tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA') return;
  if (e.code === 'Space') { e.preventDefault(); togglePlay(); }
  if (e.code === 'ArrowRight') { audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + 10); }
  if (e.code === 'ArrowLeft') { audio.currentTime = Math.max(0, audio.currentTime - 10); }
  if (e.code === 'ArrowUp') { const s = document.getElementById('volume-slider'); s.value = Math.min(100, +s.value + 5); setVolume(s.value); }
  if (e.code === 'ArrowDown') { const s = document.getElementById('volume-slider'); s.value = Math.max(0, +s.value - 5); setVolume(s.value); }
  if (e.code === 'KeyN') nextTrack();
  if (e.code === 'KeyP') prevTrack();
  if (e.code === 'KeyL') toggleLike();
  if (e.code === 'KeyQ') toggleQueue();
});
