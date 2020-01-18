import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

const Samakan = styled.section`
    background: #000;
    display: inline-block;
    height: 4em;
    width: 100%;
    position: fixed;
    z-index: 10;
`
const Nav = styled.section`
    background: #fff;
    height: 3em;
    width: 600px;
    border-radius: 25px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`
const Kotak = styled.section`
    width: 330px;
    display: table-cell;
    justify-content: center;
    align-items: center;
`
const Daftar = styled.button`
    font-size: 1.3em;
    display: inline-block;
    background-color: #f1f1f1;
    border-radius: 20px;
    box-shadow: 0 5px 15px -5px #00000070;
    margin: 0.3em;
    padding: 0.15em;

`
const Tulis = styled.text`
    color: #000;
    text-align: center;
    
`
const Wrapper = styled.section`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #000;
    font-family: sans-serif;
`
const Pisahan = styled.section`
    margin: 0;
    padding: 0;
    text-align: center;
`

const Span = styled.text`
{   display: table-cell;
    margin: 0;
    text-align: center;
    padding: 0;
    animation: animate 2.6s linear infinite;
}
    @keyframes animate {
        0%,100% {
            color:#fff;
            filter: blur(2px);
            text-shadow:0 0 10px #00b3ff,
                        0 0 20px #00b3ff,
                        0 0 40px #00b3ff,
                        0 0 80px #00b3ff,
                        0 0 120px #00b3ff,
                        0 0 200px #00b3ff,
                        0 0 300px #00b3ff,
                        0 0 400px #00b3ff;
        }
        5%,95% {
            color: #111;
            filter: blur(0px);
            text-shadow: none;
        }
    }
`

const Texty = styled.text`
    color: #000;
    margin: 0 auto;
    text-align: center;
    padding: 0;
    font-size: 13em;
    ${Span}:nth-child(1) {
        animation-delay: 0.2s;
    }
    ${Span}:nth-child(2) {
        animation-delay: 0.4s;
    }
    ${Span}:nth-child(3) {
        animation-delay: 0.6s;
    }
    ${Span}:nth-child(4) {
        animation-delay: 0.8s;
    }
    ${Span}:nth-child(5) {
        animation-delay: 1s;
    }
    ${Span}:nth-child(6) {
        animation-delay: 1.2s;
    }
    ${Span}:nth-child(7) {
        animation-delay: 1.4s;
    }
    ${Span}:nth-child(8) {
        animation-delay: 1.6s;
    }
    ${Span}:nth-child(9) {
        animation-delay: 1.8s;
    }
    ${Span}:nth-child(10) {
        animation-delay: 2s;
    }
    ${Span}:nth-child(11) {
        animation-delay: 2.2s;
    }
    ${Span}:nth-child(12) {
        animation-delay: 2.4s;
    }`
const Bungkus = styled.section`
    width: 600px;   
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`
const Tulisan = styled.text`
    color: #00b3ff;
    text-align: justify;

`
const Datar = styled.section`
    background: #000;
    width: 100%;
`
const Parta = styled.section`
    display: table-cell;
    width: 300px;
    padding: 0.5em;
`
const Judul = styled.section`
    font-size: 100px;
    text-align: center;
`
const Garis = styled.hr`
    width : 600px;
`

const Luaran = styled.section`
    background-color: #000;
    height: 317px;
    width: 100%;
    font-color: #00b3ff;
    padding-top: 50px;
    text-align: center;
`
const Footer = styled.section`
    background-color: #00b3ff;
    width: 100%;
    height: 250px;
`
const Square = styled.section`
    width: 600px;   
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`   
const Rectangle = styled.section`
    width: 300px;
    display: table-cell;
`
const Pensil = styled.text`
    color: #00b3ff;
    font-size: 8em;
`
const Pulpen = styled.text`
    color: #000;
    font-size: 1.5em;
    font-weight: bold;
`
function App() {
  return (<div>
    <Samakan>
            <Nav>
                <Tulis>
                <Kotak>
                <Daftar>
                    <Link 
                        activeClass='active'
                        to='beranda'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={2000}>
                    Beranda</Link>
                </Daftar>
                </Kotak>
                <Kotak>
                <Daftar><Link 
                        activeClass='active'
                        to='tentang'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={2000}>
                    Tentang</Link>
                </Daftar>
                </Kotak>
                <Kotak>
                <Daftar><Link 
                        activeClass='active'
                        to='biodata'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={2000}>
                    Biodata</Link>
                </Daftar>
                </Kotak>
                <Kotak>
                <Daftar><Link 
                        activeClass='active'
                        to='kontak'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={2000}>
                    Kontak</Link>
                </Daftar>
                </Kotak>
                </Tulis>
            </Nav>
    </Samakan>
    <div id='beranda'>
            <Wrapper>
                <Pisahan>
                <Texty>
                    
                    <Span>R</Span>
                    <Span>I</Span>
                    <Span>Z</Span>
                    <Span>K</Span>
                    <Span>I</Span>
                    <div></div>
                    <Span>N</Span>
                    <Span>U</Span>
                    <Span>G</Span>
                    <Span>R</Span>
                    <Span>A</Span>
                    <Span>H</Span>
                    <Span>A</Span>
                </Texty>
                </Pisahan>
            </Wrapper>
    </div>
    <div id='tentang'>
            <Datar>
                <Tulisan>
                <Bungkus>
                <Judul>Tentang</Judul>
                </Bungkus>
                <Garis></Garis>
                <Bungkus>
                    <Parta>
Rizki Nugraha adalah seorang maha siswa baru pada 
tahun ajaran 2019/2020 di fakultas teknik 
elektro dan informatika di sebuah perguruan 
tinggi di Kota Bandung.ilmu untuk meraih harapan 
serta cita-citanya agar tergapainya masa depan yang 
cerah dan gemilang. Giat Adalah anak ketiga dari 
lima bersaudara yang sekarang telah menginjak 
umur 18 tahun. Menyandang predikat sebagai 
seorang pelajar yang mendedikasikan sebagian 
waktunya untuk menuntut  serta rajin demi
 mendapatkan berbagai pengetahuan baru 
yang sekiranya dapat memberikan manfaat pada masyarakat 
di masa depan nanti. Memiliki semangat serta 
ambisi di bidang sains dan teknologi dan bertekad 
untuk memilih jurusan teknik telekomunikasi di tingkat S-1 ini walaupun sadar 
akan kemampuannya yang masih sangat jauh dari kata cukup.   
                    </Parta>
                    <Parta>
Diterima kuliah dengan menggunakan jalur 'Undangan' 
atau dikenal dengan jalur SNMPTN bukanlah hal yang 
mudah. Membuang waktu bersama teman-teman, permainan, dan 
keluarga menjadi sebuah keharusan untuk mendapatkan 
waktu belajar lebih demi mendapatkan nilai yang 
tidak buruk. Ditambah beban belajar untuk meraih 
prestasi sebagai peringkat 5 
Olimpiade Sains Nasional bidang Matematika 
tingkat Kota Bogor pada tahun 2018 dan peringkat 8 pada tahun 2017 
sudah membuat 
tubuh jauh dari kata nyaman. Dengan memiliki pengalaman belajar lebih dari 12 
tahun dan cukup lama menjalani pendidikan formal ini, 
 menjadikannya mempunyai rencana dan strategi belajar yang sistematis dan terarah yang 
mampu menghadapi berbagai permasalahan yang ada di hadapan nya sesuai dengan jati diri nya.
                    </Parta>
                </Bungkus>
                </Tulisan>  
            </Datar>
    </div>
    <div id='biodata'>
            <Datar>
                <Tulisan>
                <Bungkus>
                <Judul>Biodata</Judul>
                </Bungkus>
                <Garis></Garis>
                <Bungkus>
                    <Parta>
Nama Lengkap<br/>
Jenis Kelamin<br/>
Tempat & Tanggal Lahir<br/>
Alamat Lengkap<br/><br/>
Agama<br/>
Status Perkawinan<br/> 
Kewarganegaraan<br/>
Suku<br/>
Hobi<br/>
Nama Ayah<br/>
Nama Ibu<br/>
Pekerjaan Ayah<br/>
Pekerjaan Ibu<br/>
Asal SMA<br/>
Fakultas<br/>
Perguruan Tinggi<br/>
                    </Parta>
                    <Parta>
: Rizki Nugraha<br/>
: Laki-Laki<br/>
: Purwakarta, 5 September 2001<br/>
: Jl. Melati no. 27 Sekeloa Coblong Bandung<br/>
: Islam<br/>
: Belum Menikah<br/>
: Indonesia<br/>
: Sunda<br/>
: Bermain Game Online<br/>
: Tari Eryanto<br/>
: Lina Hendriani<br/>
: Karyawan Swasta<br/>
: Ibu Rumah Tangga<br/>
: SMAN 1 Bogor<br/>
: STEI<br/>
: ITB<br/>
                    </Parta>
                </Bungkus>
                </Tulisan>  
            </Datar>
    </div>
    <div id='kontak'>
            <Luaran><Pensil>
                Mari Berteman!</Pensil>
            </Luaran>
            <Footer>
                <Pulpen>
                    <Square>
                        <Rectangle><ul>
                        <li><a href='https://github.com/nugriz'>Github</a></li>
                        <li><a href='https://www.instagram.com/nugraha.riz/'>Instagram</a></li>
                        <li><a href='https://www.linkedin.com/in/rizki-nugraha-442426197'>linkedin</a></li>
                        <li>WhatsApp : +6285603336160</li></ul>
                        </Rectangle>
                        <Rectangle><ul><li>
                Id line : r15k1n094h4</li><li>
                Nomor Handphone : +6285603336160</li><li>
                E-mail : rizkinug02@gmail.com</li></ul>
                        </Rectangle>
                    </Square>
                </Pulpen>
            </Footer>
    </div></div>
   );
}

export default App;
