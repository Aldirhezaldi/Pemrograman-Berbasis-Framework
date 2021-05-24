<?php
 
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
 
class CreateArticlesTable extends Migration
{
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nama');
            $table->string('kelas');
            $table->string('alamat');
            $table->string('mapel');
            $table->string('alasan');
            $table->timestamps();
        });
    }
     
    public function down()
    {
        Schema::dropIfExists('articles');
    }
}