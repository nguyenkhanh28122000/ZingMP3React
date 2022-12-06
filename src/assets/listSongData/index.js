import { songImgs, songs } from '~/assets/index';

const listSongs = [
    {
        song_id: 0,
        song_name: 'Ai Chung Tình Được Mãi',
        singer: 'Đinh Tùng Huy',
        song_img: songImgs.AiChungTinhDuocMai,
        path: songs.AiTrungTinhDuocMaiMP3,
    },
    {
        song_id: 1,
        song_name: 'Anh Đã Lạc vào',
        singer: 'Green, Prod Truzg',
        song_img: songImgs.AnhDaLacVao,
        path: songs.AnhDaLacVaoMP3,
    },
    {
        song_id: 2,
        song_name: 'Chàng Trai Sơ mi Hồng',
        singer: 'Hoàng Duyên',
        song_img: songImgs.ChangTraiSoMiHong,
        path: songs.ChangTraiSoMiHongMP3,
    },
    {
        song_id: 3,
        song_name: 'Chạy Về Khóc Với Anh',
        singer: 'ERIK',
        song_img: songImgs.ChayVeKhocVoiAnh,
        path: songs.ChayVeKhocVoiAnh2MP3,
    },
    {
        song_id: 4,
        song_name: 'Dịu Dàng Em Đến',
        singer: 'ERIK',
        song_img: songImgs.DiuDangEmDen,
        path: songs.DiuDangEmDenMP3,
    },
    {
        song_id: 5,
        song_name: 'Độ Tộc 2',
        singer: 'Masew, Phúc Du, Pháo, Độ Mixi',
        song_img: songImgs.DoToc2,
        path: songs.DoToc2MP3,
    },
    {
        song_id: 6,
        song_name: 'Em Lãng Quên Tình Tôi',
        singer: 'Tvk và Nal',
        song_img: songImgs.EmLangQuenTinhToi,
        path: songs.EmLangQuenTinhToiMP3,
    },

    {
        song_id: 7,
        song_name: 'Gieo Quẻ',
        singer: 'Hoàng Thuỳ Linh',
        song_img: songImgs.GiaoQue,
        path: songs.GieoQueMP3,
    },

    {
        song_id: 8,
        song_name: 'Hạ Còn Vương Nắng',
        singer: 'Datkaa, Kido, Prod',
        song_img: songImgs.HaConVuongNang,
        path: songs.HaConVuongNangMP3,
    },

    {
        song_id: 9,
        song_name: 'Hoa Chưa Tàn Tình Đã Tàn',
        singer: 'Hoài Bảo',
        song_img: songImgs.HoaChuaTanTinhDaTan,
        path: songs.HoaChuaTanTinhDaTanMP3,
    },
    {
        song_id: 10,
        song_name: 'Hai Phút Hơn',
        singer: 'Pháo, CM1X',
        song_img: songImgs.HaiPhutHon,
        path: songs.haiPhutHonMP3,
    },
    {
        song_id: 11,
        song_name: 'Kẻ Cắp gặp Bà Già',
        singer: 'Hoảng Thuỳ Linh',
        song_img: songImgs.KeCapGapBaGia,
        path: songs.KeCapGapBaGiaMP3,
    },
    {
        song_id: 12,
        song_name: 'Không Bằng',
        singer: 'Na',
        song_img: songImgs.KhongBang,
        path: songs.KhongBangMP3,
    },
    {
        song_id: 13,
        song_name: 'Là Ai Từ Bỏ, Là Ai Vô Tình',
        singer: 'Hương Lý FT Jombie',
        song_img: songImgs.LaAiTuBoLaAiVoTinh,
        path: songs.LaAiTuBoLaAiVoTinhMP3,
    },
    {
        song_id: 14,
        song_name: 'Lưu Số Em Đi',
        singer: 'Hoàng Thuỳ Linh',
        song_img: songImgs.LuuSoEmDi,
        path: songs.LuaSoEmDiMP3,
    },
    {
        song_id: 15,
        song_name: 'Mùa Hè Ấy Em Đã Khóc',
        singer: 'Ngô Lan Hương',
        song_img: songImgs.MuaHeAyEmDaKhoc,
        path: songs.MuaHeAyEmKhocMP3,
    },
    {
        song_id: 16,
        song_name: 'Muộn Rồi Mà Sao Còn',
        singer: 'Sơn Tùng M-TP',
        song_img: songImgs.MuonRoiMaSaoCon,
        path: songs.MuonRoiMaSaoConMP3,
    },

    {
        song_id: 17,
        song_name: 'Nơi Này Có Anh',
        singer: 'Sơn Tùng M-TP',
        song_img: songImgs.NoiNayCoAnh,
        path: songs.NoiNayCoAnhMP3,
    },
    {
        song_id: 18,
        song_name: 'Ôm Nhiều Mộng Mơ',
        singer: 'Phát Huy T4, TLONG',
        song_img: songImgs.OmNhieuMongMo,
        path: songs.OmNhieuMongMoMP3,
    },
    {
        song_id: 19,
        song_name: 'Phải Chăng Em Đã Yêu',
        singer: 'Juky San ft. REDT',
        song_img: songImgs.PhaiChangEmDaYeu,
        path: songs.PhaiChangEmDaYeuMP3,
    },
    {
        song_id: 20,
        song_name: 'Sài Gòn Hôm Nay Mưa',
        singer: 'JSOL, Hoàng Duyên',
        song_img: songImgs.SaiGonHomNayMua,
        path: songs.SaiGonHomNayMuaMP3,
    },
    {
        song_id: 21,
        song_name: 'Sắp 30',
        singer: 'Trịnh Đình Quang',
        song_img: songImgs.Sap30,
        path: songs.Sap30MP3,
    },
    {
        song_id: 22,
        song_name: 'Thấn Nữ Huỷ Diệt',
        singer: 'Jun Jin',
        song_img: songImgs.ThanNuHuydiet,
        path: songs.ThanHuyDietMP3,
    },
    {
        song_id: 23,
        song_name: 'Vãy Cưới Remix',
        singer: 'Huy Lee',
        song_img: songImgs.VayCuoiRemix,
        path: songs.VayCuoiRemixMP3,
    },
    {
        song_id: 24,
        song_name: 'Vui Lắm Nha',
        singer: 'Hương Ly ft Jombie',
        song_img: songImgs.VuiLamNha,
        path: songs.VuiLamNhaMP3,
    },
    {
        song_id: 25,
        song_name: 'Yêu Đừng Sợ Đau',
        singer: 'Ngô Lan Hương',
        song_img: songImgs.YeuDungSoDau,
        path: songs.YeuDungSoDauMP3,
    },
];

export default listSongs;
