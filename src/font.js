const fontMap = {
    BookkMyungjo: { normal: 'https://cdn.jsdelivr.net/gh/fonts-archive/BookkMyungjo/BookkMyungjo-Light.woff2', bold: 'https://cdn.jsdelivr.net/gh/fonts-archive/BookkMyungjo/BookkMyungjo-Bold.woff2' },
    Cafe24OhsquareAir: { normal: 'https://cdn.jsdelivr.net/gh/fonts-archive/Cafe24OhsquareAir/Cafe24OhsquareAir.woff2' },
    Cafe24Simplehae: { normal: 'https://cdn.jsdelivr.net/gh/fonts-archive/Cafe24Simplehae/Cafe24Simplehae.woff2' },
    Cafe24SsurroundAir: { normal: 'https://cdn.jsdelivr.net/gh/fonts-archive/Cafe24SsurroundAir/Cafe24SsurroundAir.woff2' },
    Dokrip: { normal: 'https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Dokrip.woff' },
    DungGeunMo: { normal: 'https://cdn.jsdelivr.net/gh/fonts-archive/DungGeunMo/DungGeunMo.woff2' },
    GangwonEduHyeonok: { normal: 'https://cdn.jsdelivr.net/gh/fonts-archive/GangwonEduHyeonok/GangwonEduHyeonok.woff2' },
    GangwonEduModu: { normal: 'https://cdn.jsdelivr.net/gh/fonts-archive/GangwonEduModu/GangwonEduModu-Light.woff2', bold: 'https://cdn.jsdelivr.net/gh/fonts-archive/GangwonEduModu/GangwonEduModu-Bold.woff2' },
    GangwonEduSaeeum: { normal: 'https://cdn.jsdelivr.net/gh/fonts-archive/GangwonEduSaeeum/GangwonEduSaeeum.woff2' },
    GapyeongHanseokbong: { normal: 'https://cdn.jsdelivr.net/gh/fonts-archive/GapyeongHanseokbong/GapyeongHanseokbong-Regular.woff2' },
    GowunBatang: { normal: 'https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunBatang-Regular.woff', bold: 'https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunBatang-Bold.woff' },
    GowunDodum: { normal: 'https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunDodum-Regular.woff' },
    GyeonggiBatang: { normal: 'https://cdn.jsdelivr.net/gh/fonts-archive/GyeonggiBatang/GyeonggiBatang-Regular.woff2' },
    Hakgyoansim_ChaekgalpiR: { normal: 'https://cdn.jsdelivr.net/gh/fonts-archive/HakgyoansimChaekgalpiR/Hakgyoansim_ChaekgalpiR.woff2' },
    Hakgyoansim_MindeulleholssiR: { normal: 'https://cdn.jsdelivr.net/gh/fonts-archive/HakgyoansimMindeulleholssiR/Hakgyoansim_MindeulleholssiR.woff2' },
    Hakgyoansim_NalgaeR: { normal: 'https://cdn.jsdelivr.net/gh/fonts-archive/HakgyoansimNalgaeR/Hakgyoansim_NalgaeR.woff2' },
    HakgyoansimBadasseugi: { normal: 'https://cdn.jsdelivr.net/gh/fonts-archive/HakgyoansimBadasseugi/HakgyoansimBadasseugi-L.woff2' },
    HakgyoansimBareonbatang: { normal: 'https://cdn.jsdelivr.net/gh/fonts-archive/HakgyoansimBareonbatang/HakgyoansimBareonbatang-Regular.woff2' },
    HakgyoansimBunpil: { normal: 'https://cdn.jsdelivr.net/gh/fonts-archive/HakgyoansimBunpil/HakgyoansimBunpil.woff2' },
    HakgyoansimChilpanjiugae: { normal: 'https://cdn.jsdelivr.net/gh/fonts-archive/HakgyoansimChilpanjiugae/HakgyoansimChilpanjiugae-L.woff2' },
    HakgyoansimDotbogi: { normal: 'https://cdn.jsdelivr.net/gh/fonts-archive/HakgyoansimDotbogi/HakgyoansimDotbogi.woff2' },
    HakgyoansimGaeulsopung: { normal: 'https://cdn.jsdelivr.net/gh/fonts-archive/HakgyoansimGaeulsopung/HakgyoansimGaeulsopung-Light.woff2' },
    HakgyoansimMonggeulmonggeul: { normal: 'https://cdn.jsdelivr.net/gh/fonts-archive/HakgyoansimMonggeulmonggeul/HakgyoansimMonggeulmonggeul.woff2' },
    HakgyoansimNadeuri: { normal: 'https://cdn.jsdelivr.net/gh/fonts-archive/HakgyoansimNadeuri/HakgyoansimNadeuri-L.woff2' },
    Hanbit: { normal: 'https://cdn.jsdelivr.net/gh/fonts-archive/KCC-Hanbit/KCC-Hanbit.woff2' },
    IM_Hyemin: { normal: 'https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2106@1.1/IM_Hyemin-Regular.woff2' },
    InkLipquid: { normal: 'https://cdn.jsdelivr.net/gh/fonts-archive/InkLipquid/InkLipquid.woff2' },
    JNE: { normal: 'https://fastly.jsdelivr.net/gh/projectnoonnu/2408-1@1.0/JNE-Yuna-TTF-Regular.woff2' },
    KCCMurukmuruk: { normal: 'https://cdn.jsdelivr.net/gh/fonts-archive/KCCMurukmuruk/KCCMurukmuruk.woff2' },
    KNPSKkomi: { normal: 'https://cdn.jsdelivr.net/gh/fonts-archive/KNPSKkomi/KNPSKkomi.woff2' },
    KOTRAHOPE: { normal: 'https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/KOTRAHOPE.woff2' },
    KyoboHand: { normal: 'https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/KyoboHand.woff' },
    Manse: { normal: 'https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Manse.woff' },
    MapoFlowerIsland: { normal: 'https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/MapoFlowerIslandA.woff' },
    MaruBuri: { normal: 'https://hangeul.pstatic.net/hangeul_static/webfont/MaruBuri/MaruBuri-Regular.woff2' },
    NanumBaeEunHyeCe: { normal: 'https://cdn.jsdelivr.net/gh/fonts-archive/NanumBaeEunHyeCe/NanumBaeEunHyeCe.woff2' },
    NanumBarunpen: { normal: 'https://cdn.jsdelivr.net/gh/fonts-archive/NanumBarunpen/NanumBarunpen.woff2' },
    NanumGoDigANiGoGoDing: { normal: 'https://cdn.jsdelivr.net/gh/fonts-archive/NanumGoDigANiGoGoDing/NanumGoDigANiGoGoDing.woff2' },
    NanumSonPyeonJiCe: { normal: 'https://cdn.jsdelivr.net/gh/fonts-archive/NanumSonPyeonJiCe/NanumSonPyeonJiCe.woff2' },
    NanumSquareNeo: { normal: 'https://cdn.jsdelivr.net/gh/fonts-archive/NanumSquareNeo/NanumSquareNeo.woff2', bold: 'https://cdn.jsdelivr.net/gh/fonts-archive/NanumSquareNeo/NanumSquareNeoB.woff2' },
    omyu_pretty: { normal: 'https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/omyu_pretty.woff2' },
    Ownglyph_corncorn: { normal: 'https://fastly.jsdelivr.net/gh/projectnoonnu/2412-1@1.0/Ownglyph_corncorn-Rg.woff2' },
    Ownglyph_Dailyokja: { normal: 'https://fastly.jsdelivr.net/gh/projectnoonnu/2403@1.0/Ownglyph_Dailyokja-Rg.woff2' },
    Ownglyph_kimkonghae: { normal: 'https://fastly.jsdelivr.net/gh/projectnoonnu/2408@1.0/Ownglyph_kimkonghae.woff2' },
    Ownglyph_Memo_Okja: { normal: 'https://fastly.jsdelivr.net/gh/projectnoonnu/2403@1.0/Ownglyph_Memo_Okja-Rg.woff2' },
    Ownglyph_ParkDaHyun: { normal: 'https://fastly.jsdelivr.net/gh/projectnoonnu/2411-3@1.0/Ownglyph_ParkDaHyun.woff2' },
    Ownglyph_UNZ: { normal: 'https://fastly.jsdelivr.net/gh/projectnoonnu/2406-1@1.0/Ownglyph_UNZ-Rg.woff2' },
    Ownglyph_wiseelist: { normal: 'https://fastly.jsdelivr.net/gh/projectnoonnu/2501-1@1.1/Ownglyph_wiseelist-Rg.woff2' },
    Pretendard: { normal: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard/dist/web/static/woff2/Pretendard-Regular.woff2', bold: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard/dist/web/static/woff2/Pretendard-Medium.woff2' },
    RIDIBatang: { normal: 'https://cdn.jsdelivr.net/gh/fonts-archive/RIDIBatang/RIDIBatang.woff2' },
    SCDreamRegular: { normal: 'https://cdn.jsdelivr.net/gh/fonts-archive/S-CoreDream/SCDreamRegular.woff2' },
    Shilla_CultureM: { normal: 'https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/Shilla_CultureM-Medium.woff2' },
    SunBatang: { normal: 'https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_eight@1.0/SunBatang-Medium.woff' },
    YeongdeokSea: { normal: 'https://cdn.jsdelivr.net/gh/fonts-archive/YeongdeokSea/YeongdeokSea.woff2' },
};

const buildFontFace = (name, { normal, bold }) => [
    normal && `
@font-face {
font-family: '${name}';
src: url('${normal}');
font-weight: normal;
font-style: normal;
font-display: swap;
}`,
    bold && `
@font-face {
font-family: '${name}';
src: url('${bold}');
font-weight: bold;
font-style: normal;
font-display: swap;
}`
].filter(Boolean).join('');
