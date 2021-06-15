<?php
 
namespace App\Http\Controllers;
 
use Illuminate\Http\Request;
 
class ArticleController extends Controller
{
    public function index()
    {
        $articles = \App\Models\Article::all();
 
        return $articles->toJson();
    }
 
    public function store(Request $request)
    {
        $validatedData = $request->validate([
          'nama' => 'required',
          'kelas' => 'required',
          'alamat' => 'required',
          'mapel' => 'required',
          'alasan' => 'required',
        ]);
 
        $project = \App\Models\Article::create([
          'nama' => $validatedData['nama'],
          'kelas' => $validatedData['kelas'],
          'alamat' => $validatedData['alamat'],
          'mapel' => $validatedData['mapel'],
          'alasan' => $validatedData['alasan'],
        ]);
 
        $msg = [
            'success' => true,
            'message' => 'Article created successfully!'
        ];
 
        return response()->json($msg);
    }
 
    public function getArticle($id) // for edit and show
    {
        $article = \App\Models\Article::find($id);
 
        return $article->toJson();
    }
 
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'nama' => 'required',
            'kelas' => 'required',
            'alamat' => 'required',
            'mapel' => 'required',
            'alasan' => 'required',
        ]);
 
        $article = \App\Models\Article::find($id);
        $article->nama = $validatedData['nama'];
        $article->kelas = $validatedData['kelas'];
        $article->alamat = $validatedData['alamat'];
        $article->mapel = $validatedData['mapel'];
        $article->alasan = $validatedData['alasan'];
        $article->save();
 
        $msg = [
            'success' => true,
            'message' => 'Article updated successfully'
        ];
 
        return response()->json($msg);
    }
 
    public function delete($id)
    {
        $article = \App\Models\Article::find($id);
        if(!empty($article)){
            $article->delete();
            $msg = [
                'success' => true,
                'message' => 'Article deleted successfully!'
            ];
            return response()->json($msg);
        } else {
            $msg = [
                'success' => false,
                'message' => 'Article deleted failed!'
            ];
            return response()->json($msg);
        }
    }
}