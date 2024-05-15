interface Ranking {
    id: number | null;
    n_file:  string | null;
    num: number | null;
    kuota: number | null;
    created_at: string | null;
    date: string | null;
    c_final: number | null;
    ket: string | null;
}

const defRanking: Ranking = {
    id: null,
    n_file:  null,
    num: null,
    kuota: null,
    created_at: null,
    date: null,
    c_final: null,
    ket: null,
}

interface Surat{
    id: number | null;
    title: string | null;
    deskripsi: string | null;
    file: string | null;
    link: string | null;
}

const defSurat: Surat = {
    id: null,
    title: null,
    deskripsi: null,
    file: null,
    link: null
}

interface Peserta {
    id: number | null;
    nik: string | null;
    nisn: string | null;
    n_siswa: string | null;
    sekolah_asal: string | null;
    t_lahir: string | null;
    d_lahir: string | null;
    alamat_detail: string | null;
    lat: string | null;
    long: string | null;
    alamat_map: string | null;
    tahap: number | null;
    ordering: number | null;
    c_lulus: number | null;
    c_ganti: number | null;
    nilai_jarak: number | null;
    nilai_rapor: number | null;
    nilai_prestasi: string | null;
    total_agama: number | null;
    total_ppkn: number | null;
    total_indo: string | null;
    total_mtk: string | null;
    total_ipa: string | null;
    total_ips: string | null;
    total_opsi: string | null;
    total_penjas: string | null;
    total_nilai_rapor: string | null;
    peringkat: string | null;
    valid: number | null;
    user_valid_id: string | null;
    d_valid: string | null;
    txt_valid: string | null;
    created_at: string | null;
}

const defPeserta : Peserta[] = []
const defDetailPeserta: Peserta = {
    id: null,
    nik: null,
    nisn: null,
    n_siswa: null,
    sekolah_asal: null,
    t_lahir: null,
    d_lahir: null,
    alamat_detail: null,
    lat: null,
    long: null,
    alamat_map: null,
    tahap: null,
    ordering: null,
    c_lulus: null,
    c_ganti: null,
    nilai_jarak: null,
    nilai_rapor: null,
    nilai_prestasi: null,
    total_agama: null,
    total_ppkn: null,
    total_indo: null,
    total_mtk: null,
    total_ipa: null,
    total_ips: null,
    total_opsi: null,
    total_penjas: null,
    total_nilai_rapor: null,
    peringkat: null,
    valid: null,
    user_valid_id: null,
    d_valid: null,
    txt_valid: null,
    created_at: null,
}

interface HasilSeleksi {
    ranking: Ranking;
    surat: Surat;
    peserta: Peserta[]
}

const defHasilSeleksi: HasilSeleksi = {
    ranking: defRanking,
    surat: defSurat,
    peserta: defPeserta
}

export {
    Ranking,
    defRanking,
    Surat,
    defSurat,
    Peserta,
    defPeserta,
    defDetailPeserta,
    HasilSeleksi,
    defHasilSeleksi
}