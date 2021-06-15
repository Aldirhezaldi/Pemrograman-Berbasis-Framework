@extends('layouts.app')
<div id="headeradmin">
<script src="{{ asset('js/app.js') }}" defer></script>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        @guest
                            @if (Route::has('login'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                                </li>
                            @endif

                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                </li>
                            @endif
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }}
                                </a>

                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>
    </div>

    <!-- React JS -->
    
    <div class="card">
            <img src="https://solutech.id/wp-content/uploads/2019/07/Untitled-1.jpg" class="img-fluid"></img>
            <div class="card-body">
                <center>
                    <h2 class="card-title">Selamat Datang Di Bimbel IT</h2>
                    <br />
                    <br />
                    <h5 class="card-text">Tempat bimbingan belajar untuk siswa yang ingin mempelajari dunia IT</h5>
                </center>
            </div>
            <br />
            <br />
            <br />
            <h5 class="card-header bg-primary">Kenapa Harus Memilih Bimbel IT ?</h5>
            <div class="card-body">
                <p class="card-text">Di Bimbel IT ini terdapat beberapa mata pelajaran,</p>
                <p class="card-text">yang terlibat dengan dunia IT atau Information Technology</p>
                <p class="card-text">Berikut beberapa mata pelajaran yang disajikan Bimbel IT :</p>
                <p class="card-text">1. Web Development</p>
                <p class="card-text">2. Android Development</p>
                <p class="card-text">3. Data Scientist</p>
                <p class="card-text">4. Basic Programming</p>
                <p class="card-text">5. UI/UX Designer</p>
                <p class="card-text">6. Database</p>
            </div>
            <br />
            <br />
            <br />
            <h5 class="card-header bg-primary">Mata Pelajaran Yang disajikan</h5>
            <br />
            <br />
            <div class="row">
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                            <img src="https://1.bp.blogspot.com/-EzK5P5vztN4/XROTwzPuB8I/AAAAAAAABtA/IJi3wNhR8IMUyj3Xzd5yUm1G0GIglptYgCLcBGAs/s1600/web%2Bdevelopment.png" class="img-thumbnail" width="300px"></img>
                            <h5 class="card-title">Web Development</h5>
                            <p class="card-text">Pada mata pelajaran Web Development siswa yang mendaftar mata pelajaran ini akan disajikan
                            beberapa materi seputar website developer dari dasar seperti HTML, CSS, dan PHP. Dan tidak lupa materi Frontend
                            dan Backend juga akan di pelajari di mata pelajaran ini</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                            <img src="https://www.webhozz.com/blog/wp-content/uploads/2019/11/Android-app-development.jpg" class="img-thumbnail" width="300px"></img>
                            <h5 class="card-title">Android Development</h5>
                            <p class="card-text">Android Developer merupakan salah satu pekerjaan di bidang IT terkait dengan pengembangan aplikasi berbasis mobile.
                            Saat ini, penggunaan perangkat seluler (mobile) semakin meningkat dan dapat menjadi pengganti dari perangkat desktop.
                            Perangkat mobile sangat mudah untuk dibawa kemana saja,
                            dan memiliki berbagai fitur pendukung seperti kamera, aplikasi, dan fitur hiburan yang lainnya.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                            <img src="https://www.course-net.com/wp-content/uploads/2020/05/what-is-data-science.jpg" class="img-thumbnail" width="300px"></img>
                            <h5 class="card-title">Data Scientist</h5>
                            <p class="card-text">data science adalah ilmu pengetahuan interdisiplin tentang metode komputasi
                            untuk mendapatkan wawasan berharga yang dapat ditindaklanjuti dari kumpulan data yang mencakup tiga fase yaitu
                            desain data, mengumpulkan data, dan analisis data.</p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div class="row">
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                            <img src="https://markey.id/wp-content/uploads/2019/12/631.-belajar-bahasa-pemrograman.jpg" class="img-thumbnail" width="300px"></img>
                            <h5 class="card-title">Basic Programming</h5>
                            <p class="card-text">Pemrograman Dasar adalah pemrograman yang memberikan dasar-dasar logika
                            dimana sintak-sintak yang diberikan bersifat universal dan lebih mengedepankan pembentukan pola pikir
                            seseorang tentang bagaimana membuat sebuah program yang efektif dan efisien.
                            Pada dasarnya, pemrograman pada tingkat yang lebih lanjut memiliki logika dan cara yang berbeda, bergantung pada programmernya.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                            <img src="https://rencanamu.id/assets/file_uploaded/blog/1544666963-uiux-01.png" class="img-thumbnail" width="300px"></img>
                            <h5 class="card-title">UI/UX Designer</h5>
                            <p class="card-text">UI Design selalu berusaha menciptakan sebuah tampilan yang memiliki estetika tinggi.
                            UI Design mengatur penyusunan tata letak (layout), pemilihan warna, pemilihan element visual, ilustrasi, bentuk tombol hingga pemilihan tipografi.</p>
                            <p class="card-text">UX Design meliputi hal kompleks yang dimulai dari research, target pengguna, target perangkat, penyesuaian aksesibilitas,
                            analisis interaksi, skenario hingga tahap tes untuk mendapatkan pengalaman pengguna yang optimal.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                            <img src="https://bootup.ai/blog/wp-content/uploads/2019/10/pengertian-database-adalah-fungsi-dan-manfaat-750x410.jpg" class="img-thumbnail" width="300px"></img>
                            <h5 class="card-title">Database</h5>
                            <p class="card-text">Database atau basis data adalah kumpulan data yang
                            dikelola sedemikian rupa berdasarkan ketentuan tertentu yang saling berhubungan sehingga mudah dalam pengelolaannya. Melalui pengelolaan tersebut
                            pengguna dapat memperoleh kemudahan dalam mencari informasi, menyimpan informasi dan membuang informasi.</p>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                    <p>Dont Comment Bad Code-Rewrite It.</p>
                    <footer class="blockquote-footer"><cite title="Source Title">Brian Kernighan</cite></footer>
                </blockquote>
            </div>
        </div>
@section('content')

    <!-- <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
    
                    <div class="card-body">
                        <h2>Welcome <h2>, {{ Auth::user()->name }}
                    </div>
                </div>
            </div>
        </div>
    </div> -->
    <!-- React root DOM -->
    
    
@endsection